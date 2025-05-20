import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Manager',
    company: 'TechCorp',
    content: 'SoftSell helped me sell our unused Adobe licenses quickly and at a great price. The process was smooth and secure.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    company: 'DevWorks',
    content: 'I was skeptical at first, but SoftSell made selling my Microsoft licenses incredibly easy. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Business Owner',
    company: 'Creative Solutions',
    content: 'The platform is intuitive and the support team is fantastic. Got a better price than I expected for my licenses.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trusted by thousands of software license sellers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 