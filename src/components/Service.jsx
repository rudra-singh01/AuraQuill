import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const services = [
  { title: "Copywriting", description: "Engage your audience with compelling content", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
  { title: "SEO Optimization", description: "Improve your search engine rankings and visibility", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { title: "Pay Per Click Advertising", description: "Maximize your ROI with targeted ads", icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { title: "Social Media Marketing", description: "Boost your brand presence on social platforms", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Online Reputation Management", description: "Protect and enhance your online image", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Influencer Marketing", description: "Leverage influencers to expand your reach", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Strategy and Consulting", description: "Tailored strategies for business growth", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Brand Development", description: "Build a strong and recognizable brand", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
];

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
    scale: 0.5,
    rotateX: -60
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Service = ({ textEnter, textLeave }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <div>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#0c2421]" ref={ref}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-center mb-8 text-white sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate={controls}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 0px 8px rgb(197, 248, 42)",
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className="bg-[#0a1f1c] border border-[#c5f82a]/20 hover:border-[#c5f82a] transition-colors h-full rounded-lg overflow-hidden">
                    <div className="p-6">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-[#c5f82a]/10 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c5f82a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    </div>
  )
}

export default Service

