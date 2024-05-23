import React, { useState, useEffect, useRef } from "react";
import chatbot from "../assets/images/chatbot.png";

const ChatBot = () => {
  return (
    <div>
        <div className="fixed bottom-5 right-5">
          <img
            src={chatbot}
            alt="chat"
            className="h-auto w-[80px] cursor-pointer"
          />
        </div>
    </div>
  );
};

export default ChatBot;
