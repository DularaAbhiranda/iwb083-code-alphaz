"use client"; 

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import ChatList from '../../../components/ChatList';
import ChatInterface from '../../../components/ChatInterface';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null); 

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatList onSelectChat={(chat) => setSelectedChat(chat)} />  {/* Pass selected chat to ChatInterface */}
      {selectedChat ? (
        <ChatInterface selectedChat={selectedChat} />
      ) : (
        <div className="w-3/4 p-4 flex justify-center items-center">
          <p className="text-gray-500">Please select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
