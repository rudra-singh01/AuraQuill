
const Footer = () => {
  return (
    <div>
        <footer className="w-full py-6 bg-[#0a1f1c] border-t border-[#c5f82a]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2024 AuraQuil. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-4">
              <a
                className="text-sm text-gray-400 hover:text-[#c5f82a] transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-sm text-gray-400 hover:text-[#c5f82a] transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer