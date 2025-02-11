"use client";
import "client-only";

import { marked } from "marked";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { clearMessages, sendMessage } from "../actions";

type ChatProps = {
  messages: ChatCompletionMessageParam[];
};

export default function Chat({ messages }: ChatProps) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [message, setMessage] = useState(
    // TODO: this is here for easier testing... remove it
    "Scan this guy for me https://juice-shop.herokuapp.com/"
  );

  useEffect(() => {
    setShowSpinner(false);
  }, [messages]);

  const handleSubmit = () => {
    setShowSpinner(true);
    sendMessage(message).catch(() => toast.error("Error sending message"));
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto px-4 space-y-4">
          {messages
            ?.flatMap(({ role, content }) =>
              ["user", "assistant"].includes(role) &&
              typeof content === "string"
                ? [{ role, content }]
                : []
            )
            .map(({ role, content }) => (
              <div
                key={content}
                className={`rounded-lg p-4 max-w-[80%]`}
                style={
                  role === "assistant"
                    ? {
                        backgroundColor: "rgba(255 0 0 / 0.5)",
                        marginRight: "auto",
                        borderTopLeftRadius: 0,
                      }
                    : {
                        backgroundColor: "rgba(0 0 255 / 0.5)",
                        marginLeft: "auto",
                        borderTopRightRadius: 0,
                      }
                }
              >
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Message composer */}
      <div className="border-t p-4 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <textarea
                className="flex-1 resize-none rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showSpinner ? "Sending..." : "Send"}
              </button>
            </div>
            <div className="flex flex-row justify-between text-[10px] text-gray-500">
              <p>
                Press{" "}
                <kbd className="px-1 py-0.5 bg-gray-100 border rounded">
                  Shift
                </kbd>{" "}
                +{" "}
                <kbd className="px-1 py-0.5 bg-gray-100 border rounded">
                  Enter
                </kbd>{" "}
                to send
              </p>
              <a
                href="#"
                onClick={() =>
                  clearMessages().catch(() =>
                    toast.error("Error clearing messages")
                  )
                }
              >
                Clear
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
