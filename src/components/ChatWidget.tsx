import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

type Message = {
  id: number
  text: string
  isUser: boolean
}

const predefinedResponses: { [key: string]: string } = {
  'hello': 'Hi! How can I help you with your software license today?',
  'hi': 'Hello! I\'m here to help you with any questions about selling your software licenses.',
  'how': 'To sell your license, simply fill out our contact form with your license details, and our team will get back to you with a valuation within 24 hours.',
  'price': 'Our pricing is based on current market rates and the type of license. We offer competitive rates and will provide you with a detailed valuation.',
  'time': 'The entire process typically takes 3-5 business days from submission to payment.',
  'secure': 'We use bank-level security measures to protect all license transfers and payments. Your data is always safe with us.',
  'support': 'I can help you connect with our tech support person anytime when you require. Just say "hey support person" and I\'ll assist you further.',
  'hey support person': 'I\'ll connect you with our tech support team right away. They\'ll be happy to help you with any technical questions or issues.',
  'advantage': 'Yes, we have clients globally increasing daily. Our system is simple, honest, reliable, and supportive. We focus on providing the best service without any marketing gimmicks.',
  'trust': 'Yes, we are completely trustworthy. Our growing global client base is a testament to our reliability and honest service.',
  'reliable': 'Absolutely! We pride ourselves on being reliable and supportive. Our system is designed to be simple and honest, focusing on what matters most - serving our clients.',
  'global': 'Yes, we have a growing global presence with clients from all around the world. Our platform is trusted by users internationally.',
  'marketing': 'We believe in honest service rather than marketing. Our growing client base is purely based on our reliable and supportive system.',
  'simple': 'Yes, our system is intentionally designed to be simple and user-friendly. We focus on making the license selling process as straightforward as possible.',
  'honest': 'Honesty is at the core of our business. We provide transparent pricing and reliable service without any hidden fees or marketing gimmicks.',
  'default': 'I\'m here to help you with any questions about selling your software licenses. Feel free to ask about the process, pricing, timeline, or connect with our support team.'
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! How can I help you with your software license today?',
      isUser: false,
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    // Check for keywords in the input
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        return response
      }
    }
    
    return predefinedResponses.default
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isUser: false,
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 dark:text-white">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget 