"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useWebSocket } from '@/contexts/WebSocketContext';

export default function ChatInterface({ selectedChat }) {
  const { messageClient, readyState } = useWebSocket();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString();
      setMessages([...messages, { text: input, sender: 'self', time: currentTime }]);
      setInput('');
    }
  };

  useEffect(() => {
    if (messageClient) {
      const myDetails = messageClient.clientDetails();

      const newMessage = {
        text: selectedChat.message,
        sender: selectedChat.rxId === myDetails.id ? 'self' : 'other',
        time: new Date(selectedChat.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prevMessages) => {
        const messageExists = prevMessages.some(
          (msg) => msg.text === newMessage.text && msg.time === newMessage.time
        );

        if (!messageExists) {
          return [...prevMessages, newMessage];
        }
        return prevMessages;
      });
    }
  }, [selectedChat, messageClient]);

  return (
    <div className="w-3/4 p-4 bg-white h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 bg-white shadow-sm relative">
        <div className="flex items-center space-x-2">
          {selectedChat && (
            <>
              <Image src={selectedChat.avatar} alt="Avatar" className="w-8 h-8 rounded-full" width={32} height={32} />
              <h2 className="text-purple-700 font-bold">{selectedChat.name}</h2>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg w-max ${message.sender === 'self' ? 'bg-purple-400 text-white self-end' : 'bg-purple-100'}`}
            >
              {message.text}
              <p className="text-xs text-gray-500 mt-1 text-right">{message.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-100 flex items-center rounded-lg shadow-md">
        <input
          className="flex-1 p-3 rounded-full bg-white border border-gray-300 placeholder-gray-500"
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="ml-2 p-2 bg-purple-600 text-white rounded-full" onClick={handleSendMessage}>
          <Image src="/images/send.png" alt="Send" className="w-6 h-6" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
