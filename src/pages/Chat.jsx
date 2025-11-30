import React, { useState, useEffect, useRef } from 'react'
import Icon from '../assets/image/iconchat.png'
import botIcon from '../assets/image/cart.png'
import userIcon from '../assets/image/user_icon.png'
import Send from '../assets/image/send.png'
import api, { API_BASE_URL } from '../services/auth'
import { useChatHistory } from '../hooks/chatApi'
import useThreadID from '../hooks/useThreadID.jsx'

const Chat = ({ onClose }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [started, setStarted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const [error, setError] = useState(null)

  const { threadID, isReady } = useThreadID()

  useEffect(() => {
    if (isReady) {
      // console.log("Thread ID:", threadID)
    }
  }, [isReady, threadID])

  const treadId = threadID
  const { chatHistory, isLoading, isError, error: chatError, refetch } = useChatHistory({ treadId })

  // Function to render message with links and line breaks
  const renderMessage = (text) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g
    
    // Split text into lines first
    const lines = text?.split('\n') || []
    
    return (
      <div className="whitespace-pre-wrap text-gray-700">
        {lines.map((line, lineIndex) => {
          // Split each line by URLs
          const parts = line.split(urlRegex)
          
          return (
            <React.Fragment key={lineIndex}>
              {parts.map((part, partIndex) => {
                if (part?.match(urlRegex)) {
                  return (
                    <a 
                      key={partIndex}
                      href={part} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {part?.length > 50 ? part?.substring(0, 50) + '...' : part}
                    </a>
                  )
                }
                return part
              })}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  // Function to check if message contains payment link and format it nicely
  const formatPaymentMessage = (msg) => {
    const paymentText = "Order confirmed! Thank you for shopping with us. Now please proceed to payment using the following link:"
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const urlMatch = msg?.match(urlRegex)
    
    if (msg?.includes(paymentText) && urlMatch) {
      const url = urlMatch[0]
      return (
        <div>
          <p className="mb-2">{paymentText}</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium break-all"
            onClick={(e) => e.stopPropagation()}
          >
            💳 Proceed to Payment
          </a>
          <p className="mt-2 text-xs text-gray-600">
            You'll be redirected to Stripe to complete your payment securely.
          </p>
        </div>
      )
    }
    
    return renderMessage(msg)
  }

  // Sync chat history with local messages state
  useEffect(() => {
    if (chatHistory?.Full_conversation && chatHistory.Full_conversation.length > 0) {
      setMessages(chatHistory.Full_conversation)
      setStarted(true)
    }
  }, [chatHistory])

  // Show error from chat history hook
  useEffect(() => {
    if (isError && chatError) {
      setError(chatError.message || 'Failed to load chat history')
    }
  }, [isError, chatError])

useEffect(() => {
  if (started && inputRef.current && !isTyping) {
    requestAnimationFrame(() => {
      inputRef.current.focus()
    })
  }
}, [messages, isTyping, started])


  // Prevent body scroll on mobile when chat is open
  useEffect(() => {
    document.body.classList.add('chat-open')
    return () => {
      document.body.classList.remove('chat-open')
    }
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleStartChat = () => {
    setStarted(true)
    setMessages([
      {
        id: 1,
        message:
          "👋 Hi there! Welcome to KASA by Pluto — your friendly online convenience store. What would you like to order today?",
        sender: 'bot',
      },
    ])
    setError(null)
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      message: message,
      sender: 'user',
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage('')
    setError(null)
    setIsTyping(true)

    try {
      const res = await api.post('/api/chat/', {
        message: message,
        thread_id: threadID,
      })

      const botMessage = {
        id: Date.now() + 1,
        message: res.data.reply,
        sender: 'bot',
      }

      setMessages((prev) => [...prev, botMessage])

      // Refetch to get updated chat history
      await refetch()
    } catch (error) {
      setError('Failed to send message. Please try again.')

      const errorMessage = {
        id: Date.now() + 1,
        message: error.response?.data?.error || 'Sorry, something went wrong. Please try again later.',
        sender: 'bot',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
      inputRef.current?.focus() // Keep focus after sending
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:block" onClick={onClose}></div>

      {/* Chat Modal */}
      <div className="fixed bottom-0 right-0 sm:bottom-10 sm:right-10 chat-modal h-full sm:h-[700px] w-full sm:w-96 max-w-full bg-white shadow-2xl z-50 flex flex-col rounded-none sm:rounded-xl safe-area-inset-bottom">
        {/* Header */}
        <div className="bg-[#2F64EF] text-white p-3 sm:p-4 flex items-center justify-between rounded-none sm:rounded-t-xl">
          <div className="flex items-center">
            <img src={Icon} alt="Chat Icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Order with Pluto</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#04FF00] rounded-full"></div>
                <p className="text-xs sm:text-sm">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-3xl sm:text-4xl ml-2 sm:ml-4"
          >
            ×
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm max-w-xs">
                {error}
              </div>
            </div>
          )}

          {!started && !isLoading && (
            <div className="flex justify-center">
              <div className="p-2 text-center max-w-xs sm:max-w-none">
                <h2 className="font-bold text-xl sm:text-2xl mb-2">Welcome to Kasa Belle Isle</h2>
                <p className="px-4 sm:px-10 py-2 sm:py-3 text-sm sm:text-base">
                  Local essentials and snacks, ready for pickup or delivery!
                </p>

                <button
                  onClick={handleStartChat}
                  disabled={started || isLoading}
                  className={`px-4 py-2 my-4 sm:my-6 rounded-lg text-sm sm:text-base transition-colors ${
                    started || isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#2F64EF] text-white hover:bg-blue-600'
                  }`}
                >
                  {isLoading ? 'Loading...' : started ? 'Chat Started' : 'Chat to Order'}
                </button>
              </div>
            </div>
          )}

          {isLoading && !started && (
            <div className="flex justify-center items-center h-20">
              <div className="text-gray-500">Loading chat...</div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'bot' && (
                <img src={botIcon} alt="Bot" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 mt-1 flex-shrink-0" />
              )}

              <div
                className={`max-w-[280px] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                  msg.sender === 'user' 
                    ? 'bg-[#2F64EF] text-white' 
                    : 'bg-gray-200 text-gray-800'
                } ${msg.sender === 'bot' ? 'break-words' : ''}`}
              >
                {msg.sender === 'bot' ? formatPaymentMessage(msg.message) : msg.message}
              </div>

              {msg.sender === 'user' && (
                <img src={userIcon} alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full ml-1 mt-1 flex-shrink-0" />
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <img src={botIcon} alt="Bot" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 mt-1 flex-shrink-0" />
              <div className="bg-gray-200 text-gray-800 max-w-[280px] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 border-t border-gray-100 bg-white">
          <div className="relative w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={started ? 'Type a message' : 'Start chat to begin messaging'}
              disabled={!started || isTyping}
              className="w-full shadow-md rounded-lg px-3 py-3 pr-12 focus:outline-none text-sm sm:text-base min-h-[44px] disabled:bg-gray-200 disabled:cursor-not-allowed"
              style={{ fontSize: '16px' }}
              ref={inputRef}
              autoFocus
            />

            <button
              onClick={handleSendMessage}
              disabled={!started || !message.trim() || isTyping}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <img src={Send} alt="Send" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat