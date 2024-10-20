'use server'
import jwt from "jsonwebtoken";
const serviceServerUrl = process.env.SERVICE_SERVER_URL;
const jwtSecret = process.env.JWT_SECRET;

async function jwtProvider() {
	//return jwt.sign({}, jwtSecret);
}

async function serverFetches(url, headers, body, method = "GET") {
	try {
		const response = await fetch(url, {
			method: method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			body: JSON.stringify(body),
		})

		return response;

	} catch (error) {
		console.log(error);
		return {
			status: 500,
			statusText: "Server is not responding. Try again later.",
		};
	}
}

export async function serverAuthorization() {
	const token = await jwtProvider();
	const response = await serverFetches(`${serviceServerUrl}/authorize`, { "Authorization": "Bearer " + token });

	const serverResponse = {
		code: response.status,
		accepted: response.statusText === "Accepted",
		aliveToken: response.headers?.get("keep-alive-token") || null,
	};

	return serverResponse;
}

export async function serverLogin(credentials, aliveToken) {
	const response = await serverFetches(`${serviceServerUrl}/auth/login`, { "keep-alive-token": aliveToken }, credentials, "POST");

	let responseBody;
	try {
		if (response.headers.get("Content-Length") !== "0") {
			responseBody = await response.json();
		} else {
			responseBody = null;
		}
	} catch (error) {
		responseBody = null;
	}

	return {
		ok: response.ok,
		status: response.status,
		message: response.statusText,
		body: responseBody
	};
}

export async function serverSignup(credentials, aliveToken) {
	const response = await serverFetches(`${serviceServerUrl}/auth/signup`, { "keep-alive-token": aliveToken }, credentials, "POST");

	let responseBody;
	try {
		if (response.headers.get("Content-Length") !== "0") {
			responseBody = await response.json();
		} else {
			responseBody = null;
		}
	} catch (error) {
		responseBody = null;
	}

	return {
		ok: response.ok,
		status: response.status,
		message: response.statusText,
		body: responseBody
	};
}