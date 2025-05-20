import React from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, LockClosedIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChartBarIcon,
    title: 'Best Market Value',
    description: 'Our platform ensures you get the highest possible value for your software licenses.'
  },
  {
    icon: LockClosedIcon,
    title: 'Secure Transactions',
    description: 'Advanced security measures protect both buyers and sellers throughout the process.'
  },
  {
    icon: UserGroupIcon,
    title: 'Trusted Community',
    description: 'Join a network of verified software license buyers and sellers.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Fast Payments',
    description: 'Receive your payment quickly and securely after successful license transfer.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The most trusted platform for software license resale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm"
            >
              <feature.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 