"use client";  

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import ChatList from '../../../components/ChatList';
import SparkChatIntro from '../../../components/loadinginterface';
import ChatInterface from '../../../components/ChatInterface';

const Chatloading = () => {
  const [selectedChat, setSelectedChat] = useState(null);  


  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatList onSelectChat={setSelectedChat} />  {/* Pass setSelectedChat as onSelectChat */}
      {!selectedChat ? (
        <SparkChatIntro />  
      ) : (
        <ChatInterface selectedChat={selectedChat} />  
      )}
    </div>
  );
};

export default Chatloading;
