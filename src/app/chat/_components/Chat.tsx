"use client";

import { marked } from "marked";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useState } from "react";
import { clearMessages, sendMessage } from "../actions";

export default function Chat({
  messages,
}: {
  messages: ChatCompletionMessageParam[];
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages
          .flatMap(({ role, content }) =>
            ["user", "assistant"].includes(role) && typeof content === "string"
              ? [{ role, content }]
              : []
          )
          .map(({ role, content }, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 max-w-[80%] ${
                role === "assistant" ? "bg-gray-100" : "bg-blue-100 ml-auto"
              }`}
            >
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              />
            </div>
          ))}
      </div>

      {/* Message composer */}
      <div className="border-t p-4 bg-white">
        <div className="flex gap-2">
          <textarea
            className="flex-1 resize-none rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
          <button
            onClick={() => clearMessages()}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
