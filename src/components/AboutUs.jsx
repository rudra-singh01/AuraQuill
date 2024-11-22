import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AnimatedText = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.2)']
  );

  const springConfig = { stiffness: 150, damping: 20 };
  const springOpacity = useSpring(opacity, springConfig);
  const springColor = useSpring(color, springConfig);

  return (
    <motion.span
      ref={ref}
      style={{
        opacity: springOpacity,
        color: springColor,
        display: 'inline-block',
      }}
    >
      {text}
    </motion.span>
  );
};

const AboutUs = ({ textEnter, textLeave }) => {
  const approachSteps = [
    {
      title: 'Research',
      description:
        'We dive deep into your industry, target audience, and competitors. Our thorough research forms the foundation for crafting compelling, targeted content that resonates with your ideal customers.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5f82a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
    },
    {
      title: 'Create',
      description:
        "Armed with insights, we craft engaging copy that speaks directly to your audience's needs and desires. Our creative process combines storytelling, persuasive techniques, and SEO best practices to maximize impact.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5f82a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
    },
    {
      title: 'Refine',
      description:
        'We believe in continuous improvement. Through A/B testing, performance analysis, and client feedback, we refine our approach to ensure your content consistently delivers results and stays ahead of the curve.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5f82a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>,
    },
  ];

  return (
    <div id="about" className="flex flex-col min-h-screen bg-[#0a1f1c] text-white overflow-hidden">
      <main className="flex-1 pt-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerChildren}
          className="py-12 md:py-24"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-center">
            <AnimatedText text="Welcome to Auraquill" />
          </h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            {[
              'For the past two years, we\'ve immersed ourselves in the art and science of copywriting—a marketing skill that combines psychology and creativity to spark interest, build trust, and turn readers or viewers into loyal customers.',
              'At Auraquill, our goal is simple: to transform your brand\'s message into powerful, engaging content that connects with your audience and drives results.',
              "Let's create words that work for you.",
            ].map((text, index) => (
              <p
                key={index}
                className={`text-xl mb-6 ${
                  index === 2 ? 'font-semibold text-[#c5f82a]' : ''
                }`}
              >
                {index !== 2 ? <AnimatedText text={text} /> : text}
              </p>
            ))}
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerChildren}
          className="py-12 md:py-24"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            <AnimatedText text="Our Approach" />
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(197, 248, 42, 0.3)',
                  transition: { duration: 0.3 },
                }}
                className="bg-[#0c2421] p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-[#c5f82a]">
                  {step.title}
                </h3>
                <p className="text-base">
                  <AnimatedText text={step.description} />
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.div variants={fadeInUp} className="text-center mt-12">
          <motion.a
            href="#contact"
            className="inline-flex items-center mb-10 px-6 py-3 text-lg font-semibold text-[#0a1f1c] bg-[#c5f82a] rounded-full hover:bg-[#d4ff3a] transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(197, 248, 42, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}

export default AboutUs;

