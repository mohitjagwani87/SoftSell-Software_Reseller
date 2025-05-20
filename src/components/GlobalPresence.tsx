import React from 'react'
import { motion } from 'framer-motion'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

const locations = [
  { city: 'New York', country: 'USA', clients: 2500 },
  { city: 'London', country: 'UK', clients: 1800 },
  { city: 'Singapore', country: 'Singapore', clients: 1200 },
  { city: 'Dubai', country: 'UAE', clients: 900 },
  { city: 'Sydney', country: 'Australia', clients: 800 },
  { city: 'Tokyo', country: 'Japan', clients: 700 },
]

const GlobalPresence = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary-500 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-4 text-center">
                  <GlobeAltIcon className="w-8 h-8 text-primary-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {location.city}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {location.country}
                  </p>
                  <p className="text-sm font-medium text-primary-600 mt-2">
                    {location.clients.toLocaleString()}+ Clients
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl group-hover:bg-primary-500/30 transition-all duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              10,000+
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              Active Clients Worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalPresence 