import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion';

const HeroSection = ({ textEnter, textLeave }) => {
  const controlsLeft = useAnimationControls();
  const controlsRight = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        await controlsLeft.start({
          transform: 'translateY(-50%)',
          transition: { duration: 20, ease: 'linear' },
        });
        await controlsLeft.set({
          transform: 'translateY(0%)',
        });
      }
    };

    const animateScrollRight = async () => {
      while (true) {
        await controlsRight.start({
          transform: 'translateY(-50%)',
          transition: { duration: 25, ease: 'linear' },
        });
        await controlsRight.set({
          transform: 'translateY(0%)',
        });
      }
    };

    animateScroll();
    animateScrollRight();
  }, [controlsLeft, controlsRight]);

  const images = [
    'https://i.pinimg.com/236x/ab/e1/38/abe13885449b56a818403f649c05ed55.jpg',
    'https://i.pinimg.com/236x/49/ca/25/49ca253336c587f5722ad33c3dec2e31.jpg',
    'https://i.pinimg.com/736x/8c/9d/4c/8c9d4ca091230d41a85e1445b9a4da51.jpg',
    'https://i.pinimg.com/236x/b1/91/ec/b191ec1fb8e29566b721c0e2682d9741.jpg',
    'https://i.pinimg.com/474x/f1/c7/1e/f1c71ed1586390fe809406f5b31038d7.jpg',
    'https://i.pinimg.com/236x/2a/07/2b/2a072b6594a0ae771cd6b318b5dd2564.jpg',
  ];

  const logos = [
    'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <section className="w-full py-24" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={textVariants}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-9xl lg:text-6xl"
                variants={textVariants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                style={{ y, opacity, scale }}
              >
                {'Elevate Your Brand with Digital Marketing'.split(' ').map(
                  (word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={textVariants}
                    >
                      {word}{' '}
                    </motion.span>
                  )
                )}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-400 max-w-[600px]"
                variants={textVariants}
                style={{ y, opacity }}
              >
                Expert copywriting and digital marketing services to take your
                business to the next level.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={textVariants}
              >
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#c5f82a] text-[#0a1f1c] hover:bg-[#d4ff3a] text-lg px-8 py-6 rounded-full transition-colors md:mt-2 mt-10"
                  >
                    Book a Strategy Call
                    <span className="ml-2">→</span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
            <div className="relative h-[600px] hidden lg:flex gap-10">
              <motion.div
                className="flex-1 relative overflow-hidden rotate-12 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div className="space-y-4" animate={controlsLeft}>
                  {[...images, ...images].map((src, i) => (
                    <motion.div
                      key={i}
                      className="relative h-[200px] rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05, zIndex: 1 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
                    >
                      <img
                        src={src}
                        alt={`Gallery image ${i + 1}`}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                className="flex-1 relative overflow-hidden rotate-12 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div className="space-y-4" animate={controlsRight}>
                  {[...logos, ...logos].map((src, i) => (
                    <motion.div
                      key={i}
                      className="relative h-[200px] rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05, zIndex: 1 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
                    >
                      <img
                        src={src}
                        alt={`Logo ${i + 1}`}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

