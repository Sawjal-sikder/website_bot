import React, { useState, useEffect } from 'react'
import Icon from '../assets/image/iconchat.png'
import botIcon from '../assets/image/cart.png'
import Send from '../assets/image/send.png'

const Chat = ({ onClose }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hi there! Welcome to KASA by Pluto — your friendly online convenience store. What would you like to order today?", sender: 'bot' },
    { id: 2, text: "Yes, I'd like to order 4 bananas.", sender: 'user' },
    { id: 3, text: "Sorry, sir. Unfortunately, bananas are not available right now. Would you like to order something else?", sender: 'bot' },
    { id: 4, text: "Milk?", sender: 'user' },
    { id: 5, text: "Yes, sir. We have milk in stock. May I know the quantity you'd like to order?", sender: 'bot' },
    { id: 6, text: "2 liters, please.", sender: 'user' },
    { id: 7, text: "Is there anything else you'd like to order?", sender: 'bot' },
    { id: 8, text: "Yes, one loaf of bread, please.", sender: 'user' },
    { id: 9, text: "Got it — 2 liters of milk and 1 loaf of bread. Would you like to add anything else to your order?", sender: 'bot' },
    { id: 10, text: "No", sender: 'user' },
    { id: 11, text: "Alright, sir. May I know your name and email address, please?", sender: 'bot' },
    { id: 12, text: "John Abraham. My email is john@gmail.com", sender: 'user' },
    { id: 13, text: "May I also know the delivery address where the products should be delivered?", sender: 'bot' },
    { id: 14, text: "34/A South Florida.", sender: 'user' },
    { id: 15, text: "When would you like to receive the delivery?", sender: 'bot' },
    { id: 16, text: "Can it be delivered by the 30th of this month? Between 10 AM and 2 PM would be perfect.", sender: 'user' },
    { id: 17, text: "Confirming your order, sir: Name: John Abraham Email: john@gmail.com Address: 34/A South Florida Item 1: Milk (1 Liter) - $10 Item 2: Bread (1 Piece) - $5 Delivery Charge: $2 Total Bill: $17 Delivery Date: 30 Here is the Stripe link for payment: www.stripelink.demo", sender: 'bot' },
    { id: 18, text: "Payment is done.", sender: 'user' },
    { id: 19, text: "Thank you, sir, for your payment. Your order has been confirmed and will be delivered soon!", sender: 'bot' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user'
      }
      setMessages([...messages, newMessage])
      setMessage('')
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! I'm here to help you with your shopping needs.",
          sender: 'bot'
        }
        setMessages(prev => [...prev, botResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  // Prevent body scroll on mobile when chat is open
  useEffect(() => {
    document.body.classList.add('chat-open')
    return () => {
      document.body.classList.remove('chat-open')
    }
  }, [])

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:block"
        onClick={onClose}
      ></div>
      
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
          {/* default message */} 
          <div className="flex justify-center">
            <div className="p-2 text-center max-w-xs sm:max-w-none">
              <h2 className="font-bold text-xl sm:text-2xl mb-2">Welcome to Kasa Belle Isle</h2>
              <p className="px-4 sm:px-10 py-2 sm:py-3 text-sm sm:text-base">Local essentials and snacks, ready for pickup or delivery!</p>
              <button className="bg-[#2F64EF] text-white px-4 py-2 my-4 sm:my-6 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">Chat to Order</button>
            </div>
          </div>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <img 
                  src={botIcon} 
                  alt="Bot" 
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 mt-1 flex-shrink-0" 
                />
              )}
              <div
                className={`max-w-[280px] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                  msg.sender === 'user'
                    ? 'bg-[#2F64EF] text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 border-t border-gray-100 bg-white">
          <div className="relative w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="w-full shadow-md rounded-lg px-3 py-3 pr-12 focus:outline-none focus:ring-none focus:border-none text-sm sm:text-base min-h-[44px]"
              style={{ fontSize: '16px' }} // Prevent zoom on iOS
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
