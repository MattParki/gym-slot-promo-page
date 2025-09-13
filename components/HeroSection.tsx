'use client'

import { ArrowRight, Play, Star } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gym-dark via-gym-secondary to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gym-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Free during beta • Early adopter benefits</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Gym Slot
                </span>
                <br />
                <span className="bg-gradient-to-r from-gym-accent to-blue-400 bg-clip-text text-transparent">
                  CRM + Mobile App
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                The integrated solution for fitness, yoga, and small class instructors. 
                Schedule classes in your CRM, sync automatically to mobile app.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gym-accent rounded-full"></div>
                <span>Seamless CRM integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gym-accent rounded-full"></div>
                <span>iOS, Android & Watch support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gym-accent rounded-full"></div>
                <span>Future Stripe payments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gym-accent rounded-full"></div>
                <span>Custom branded apps</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.gym-slot.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gym-accent hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/watch?v=TwvrHI2SAyk&t=68s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group glass hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-gym-accent to-blue-400 rounded-full border-2 border-gym-dark"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gym-dark"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-gym-dark"></div>
                </div>
                <span>Join as one of the first adopters</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image/mockup */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gym-accent/20 to-blue-400/20 blur-3xl rounded-3xl"></div>
              
              {/* Main mockup container */}
              <div className="relative glass rounded-3xl p-8">
                {/* Main showcase - side by side like in the provided screenshot */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden">
                  <div className="grid grid-cols-2 gap-6 items-start">
                    {/* CRM Dashboard */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-gray-300">CRM Dashboard</h3>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src="/images/gym-slot-crm-calendar-view-2.png?v=2"
                          alt="Gym Slot CRM Dashboard"
                          fill
                          className="object-cover object-bottom"
                          style={{ objectPosition: '50% 75%' }}
                        />
                      </div>
                    </div>

                    {/* Mobile App */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-gray-300">Mobile App</h3>
                      <div className="relative aspect-[9/16] rounded-lg overflow-hidden mx-auto max-w-[200px]">
                        <Image
                          src="/images/iphone-mobile-find-classes.png"
                          alt="Gym Slot Mobile App"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Sync indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gym-accent to-blue-400 animate-pulse"></div>
                      <div className="absolute -left-2 w-2 h-2 bg-gym-accent rounded-full animate-ping"></div>
                      <div className="absolute -right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
