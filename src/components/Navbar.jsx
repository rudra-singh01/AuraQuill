import { useState } from 'react'
import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-[#0a1f1c]/80 backdrop-blur-sm z-50 border-b border-[#c5f82a]/20">
        <a className="flex items-center justify-center" href="/">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-8 h-8 bg-[#c5f82a] rounded-full flex items-center justify-center"
          >
            <img src="/src/assets/icon.webp" alt='logo' width={100} height={100} className='object-cover rounded-sm'/>
          </motion.div>
          <motion.span 
            className="ml-2 text-xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            AuraQuill
          </motion.span>
        </a>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <a className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors" href="#about">
            About-Us
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors" href="#services">
            Services
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <button
          className="ml-auto md:hidden p-2 text-white hover:text-[#c5f82a] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 bg-[#0a1f1c] border-b border-[#c5f82a]/20 p-4 z-40 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            <a
              className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About-Us
            </a>
            <a
              className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors"
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors"
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              className="text-sm font-medium text-gray-300 hover:text-[#c5f82a] transition-colors"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
