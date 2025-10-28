import React, { useState } from 'react'
import Icon from '../assets/image/iconchat.png'
import botIcon from '../assets/image/cart.png'
import Send from '../assets/image/send.png'

const Chat = ({ onClose }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hi there! Welcome to CASA by Pluto — your friendly online convenience store. What would you like to order today?", sender: 'bot' },
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

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      
      {/* Chat Modal */}
      <div className="fixed bottom-10 right-10 h-[700px] w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col rounded-xl">
        {/* Header */}
        <div className="bg-[#2F64EF] text-white p-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center">
            <img src={Icon} alt="Chat Icon" className="w-10 h-10 mr-2" />
            <div>
              <h3 className="text-lg font-semibold">Chat with Pluto</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#04FF00] rounded-full"></div>
                <p className="text-sm">Online</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 text-4xl  ml-4"
          >
            ×
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* default message */} 
          <div className="flex justify-center">
            <div className=" p-2 text-center">
              <h2 className="font-bold text-2xl">Welcome to Kasa Belle Isle</h2>
              <p className="px-10 py-3">Local essentials and snacks, ready for pickup or delivery!</p>
              <button className="bg-[#2F64EF] text-white px-4 py-2 my-6 rounded-lg hover:bg-blue-600 transition-colors">Chat to Order</button>
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
                  className="w-8 h-8 rounded-full mr-2 mt-1 flex-shrink-0" 
                />
              )}
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
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
        <div className="p-4">
          <div className="relative w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="w-full shadow-md rounded-lg px-3 py-3 pr-12 focus:outline-none focus:ring-none focus:border-none"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2  p-2 rounded-lg"
            >
              <img src={Send} alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
