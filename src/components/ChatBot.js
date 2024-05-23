import React, { useState, useEffect, useRef } from "react";
import chatbot from "../assets/images/chatbot.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const generateSearchLink = (userMessage) => {
    const query = encodeURIComponent(userMessage);
    return `https://www.google.com/search?q=${query}`;
  };

  const mockApiResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.startsWith("hello")) {
      return {
        text: `Hello! I'm a bot here to assist you. You can ask me about programming languages, web development, and more. For example, try asking "What is JavaScript?"`,
        sender: "bot",
      };
    } else if (lowerCaseMessage.startsWith("what is javascript")) {
      return {
        text: `JavaScript is a programming language commonly used in web development. Learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
        sender: "bot",
      };
    } else if (lowerCaseMessage.startsWith("learn web development")) {
      return {
        text: `You can start learning web development with these resources: \n1. https://freecodecamp.org \n2. https://w3schools.com`,
        sender: "bot",
      };
    } else if (lowerCaseMessage.startsWith("what is python")) {
      return {
        text: `Python is a high-level, interpreted programming language. It's great for data analysis, web development, and more. Learn more at https://www.python.org`,
        sender: "bot",
      };
    } else if (lowerCaseMessage.startsWith("learn machine learning")) {
      return {
        text: `You can start learning Machine Learning with these resources: \n1. https://www.coursera.org/learn/machine-learning \n2. https://www.kaggle.com/learn/intro-to-machine-learning`,
        sender: "bot",
      };
    } else {
      return {
        text: generateSearchLink(userMessage),
        sender: "bot",
      };
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = mockApiResponse(input);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <div>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center rounded-lg bg-opacity-50">
          <div className="bg-[#fefae0] shadow-lg rounded-lg w-[50%]  h-3/4 pb-4 lg:w-[70%]">
            <div className="p-4 border-b bg-[#cdb4db] rounded-t-lg border-gray-200">
              <button
                onClick={toggleChat}
                className="float-right text-gray-500"
              >
                X
              </button>
              <h2 className="text-lg font-medium">ChatBot</h2>
            </div>
            <div className="p-4 h-5/6 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <div
                   className={`inline-block p-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-[#ffafcc]"
                      : "bg-[#a2d2ff] text-white"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => {
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    return (
                      <React.Fragment key={i}>
                        {line.split(" ").map((word, j) => {
                          if (urlRegex.test(word)) {
                            return (
                              <React.Fragment key={j}>
                                <a
                                  href={word}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 underline"
                                >
                                  {word}
                                </a>{" "}
                              </React.Fragment>
                            );
                          } else {
                            return (
                              <React.Fragment key={j}>{word} </React.Fragment>
                            );
                          }
                        })}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSend}
              className="p-2 border-t border-gray-200 flex"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-[#cdb4db] text-white rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-5 right-5">
          <img
            src={chatbot}
            alt="chat"
            onClick={toggleChat}
            className="h-auto w-[80px] cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
