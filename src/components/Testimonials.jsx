import React from 'react'
import { motion } from "framer-motion"

const testimonials = [
  {
    "content": "AuraQuill transformed our online presence. Their SEO strategies significantly improved our search rankings, and their copywriting captured our brand voice perfectly.",
    "author": "Anjali S., CEO of TechNova"
  },
  {
    "content": "AuraQuill's copywriting gave our campaigns a fresh perspective. Their engaging content resonated with our audience and played a key role in boosting our organic traffic by 200%. The team is responsive, creative, and truly cares about our success.",
    "author": "Rohit M., Marketing Director at FastGrow Solutions"
  },
  {
    "content": "I'm impressed by AuraQuill's data-driven approach. Their analytics and reporting have given us invaluable insights into our digital performance.",
    "author": "Priya R., E-commerce Manager at SmartCart India"
  }
]

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }
}

const Testimonials = ({ textEnter, textLeave }) => {
  return (
    <div>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1f1c] mb-[10vw]">
          <div className="container mx-auto px-4 md:px-6 mt-10">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-center mb-8 text-white sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className="bg-[#0c2421] border border-[#c5f82a]/20 hover:border-[#c5f82a] transition-colors h-full flex flex-col rounded-lg overflow-hidden">
                    <div className="p-6">
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c5f82a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </motion.div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-[#c5f82a] text-[#c5f82a]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6 flex-grow">
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                      >
                        <p className="text-gray-300 mb-4">&quot;{testimonial.content}&quot;</p>
                        <p className="font-semibold text-[#c5f82a]">- {testimonial.author}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Testimonials

