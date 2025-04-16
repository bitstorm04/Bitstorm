/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCr3t8mMUWSrVGYCqQZCZxV41t5-Rm8WYw",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: input }] }]
                    }),
                }
            );

            const data = await response.json();
            console.log("Full API Response:", data);

            let botReply = "Sorry, I didn't understand that.";

            if (data?.candidates?.length > 0 && data.candidates[0]?.content?.parts?.length > 0) {
                botReply = data.candidates[0].content.parts[0].text;
            }

            setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages((prev) => [...prev, { text: "Error fetching response.", sender: "bot" }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div>
            {open && (
                <div className="fixed bottom-5 right-5 w-80 bg-black/90 border-2 border-yellow-500 rounded-xl shadow-lg shadow-yellow-500/40 backdrop-blur-md p-3 flex flex-col z-50">
                   
                    <h2 className="text-yellow-500 font-bold text-center text-lg mb-2 relative">
                        <svg className="w-6 h-6 inline-block mr-2" fill="#FFB302" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFB302">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"></path>
                            </g>
                        </svg>
                        Ask AI
                        <button 
                            className="absolute top-0 right-0 text-green-500 hover:text-white" 
                            onClick={() => setOpen(false)}
                        >
                            ❌
                        </button>
                    </h2>


                    <div className="h-64 overflow-y-auto p-2 border-b border-gray-700 flex-grow space-y-2">
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`max-w-4/5 p-2 rounded-lg text-sm ${
                                    msg.sender === "user" 
                                        ? "bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-medium ml-auto" 
                                        : "bg-gray-800 text-white"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="bg-gray-800 text-white p-2 rounded-lg text-sm">Typing...</div>}
                    </div>

                   


                    <div className="flex mt-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask anything..."
                            disabled={loading}
                            onKeyDown={handleKeyPress}
                            className="flex-grow p-2 bg-gray-800/70 text-white border border-yellow-500 rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />
                        <button 
                            onClick={handleSend} 
                            disabled={loading}
                            className="bg-yellow-500 text-black p-2 rounded-r-lg hover:bg-yellow-400 transition-colors"
                        >
                            ➡
                        </button>
                    </div>
                </div>
            )}
            
            


            <button 
                onClick={() => setOpen(!open)} 
                className={`fixed bottom-5 right-5 bg-gray-900 border-2 border-yellow-500 text-yellow-500 p-3 rounded-full shadow-md shadow-yellow-500/30 z-40 transition-all duration-300 hover:scale-110 ${open ? "opacity-0 pointer-events-none" : ""}`}
            >
                <svg className="w-8 h-8" fill="#FFB302" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FFB302">
                    <g id="SVGRepo_iconCarrier">
                        <path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"></path>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default Chatbot;

