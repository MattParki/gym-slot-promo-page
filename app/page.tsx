import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ScreenshotsGallery from '@/components/ScreenshotsGallery'
import FeaturesSection from '@/components/FeaturesSection'
import FuturePlansSection from '@/components/FuturePlansSection'
import AboutSection from '@/components/AboutSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gym-dark">
      <HeroSection />
      <HowItWorksSection />
      <ScreenshotsGallery />
      <FeaturesSection />
      <FuturePlansSection />
      <AboutSection />
      <FinalCTASection />
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gym-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gym-accent to-blue-400 bg-clip-text text-transparent">
                Gym Slot
              </h3>
              <p className="text-gray-400 text-sm">
                The integrated CRM + mobile app solution for fitness instructors.
              </p>
              <div className="text-xs text-gray-500">
                © 2024 Breakfree Digital Agency
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="#features" className="hover:text-gym-accent transition-colors">Features</a></div>
                <div><a href="#roadmap" className="hover:text-gym-accent transition-colors">Roadmap</a></div>
                <div><a href="https://www.youtube.com/watch?v=TwvrHI2SAyk&t=68s" target="_blank" rel="noopener noreferrer" className="hover:text-gym-accent transition-colors">Watch Demo</a></div>
                <div><a href="https://www.gym-slot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gym-accent transition-colors">Get Started</a></div>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="mailto:breakfreedigital@outlook.com" className="hover:text-gym-accent transition-colors">Contact Support</a></div>
                <div><a href="#about" className="hover:text-gym-accent transition-colors">About Us</a></div>
                <div><a href="https://www.youtube.com/watch?v=TwvrHI2SAyk&t=68s" target="_blank" rel="noopener noreferrer" className="hover:text-gym-accent transition-colors">Help Videos</a></div>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div><a href="mailto:breakfreedigital@outlook.com" className="hover:text-gym-accent transition-colors">breakfreedigital@outlook.com</a></div>
                <div><a href="https://breakfreedigital.com" className="hover:text-gym-accent transition-colors">Breakfree Digital</a></div>
                <div className="pt-2">
                  <a 
                    href="https://www.gym-slot.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gym-accent/20 hover:bg-gym-accent/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span className="text-gym-accent">Get Early Access</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              Built with ❤️ by fitness enthusiasts for fitness professionals
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="mailto:breakfreedigital@outlook.com" className="hover:text-gym-accent transition-colors">Contact</a>
              <a href="https://breakfreedigital.com" target="_blank" rel="noopener noreferrer" className="hover:text-gym-accent transition-colors">Agency</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
