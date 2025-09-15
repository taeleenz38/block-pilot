'use client';

import React from 'react';
import { useChat } from '../hooks/useChat';

const ChatWindow = () => {
  const { messages, input, isLoading, setInput, sendMessage, handleKeyPress } = useChat();

  return (
    <div className='w-160 border-2 border-primary-border rounded-lg p-10 flex flex-col h-120'>
      {/* Messages Container */}
      <div className='flex-1 overflow-y-auto mb-4 space-y-3'>
        {messages.length === 0 ? (
          <div className='text-center text-gray-500 mt-8'>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className='text-sm'>{message.text}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className='flex justify-start'>
            <div className='bg-gray-200 text-gray-800 px-4 py-2 rounded-lg'>
              <div className='flex space-x-1'>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Container */}
      <div className='flex gap-2'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Ask anything web3...'
          className='flex-1 px-3 py-2 border border-primary-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;