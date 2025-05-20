import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardDocumentListIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'List Your License',
    description: 'Create a listing with details about your software license, including version and expiration date.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Get the Best Price',
    description: 'Our platform helps you get the best market value for your license through competitive pricing.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Transfer',
    description: 'We handle the secure transfer of your license and ensure you receive payment safely.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Selling your software license is simple and secure
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated blinking pipeline line */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="w-full h-full bg-primary-500"
              animate={{
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 5px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Animated connecting lines for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="absolute top-1/2 -right-4 w-8 h-1 hidden md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.div
                        className="w-full h-full bg-primary-500"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          boxShadow: [
                            '0 0 5px rgba(59, 130, 246, 0.5)',
                            '0 0 20px rgba(59, 130, 246, 0.8)',
                            '0 0 5px rgba(59, 130, 246, 0.5)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-full flex items-center justify-center mb-6 shadow-inner"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 