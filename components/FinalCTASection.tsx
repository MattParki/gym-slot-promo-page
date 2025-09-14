'use client'

import { ArrowRight, Star, Clock, Shield, Zap, PoundSterling, Users, Headphones } from 'lucide-react'
import Image from 'next/image'

export default function FinalCTASection() {
  const benefits = [
    {
      icon: PoundSterling,
      title: 'Free Forever*',
      description: 'No credit card required during beta'
    },
    {
      icon: Shield,
      title: 'Grandfathered Pricing',
      description: 'Lock in early adopter rates'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'Direct line to our development team'
    },
    {
      icon: Users,
      title: 'Shape the Future',
      description: 'Your feedback drives our roadmap'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gym-dark via-gym-secondary to-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gym-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Limited Early Access Spots</span>
              </div>

              {/* Main headline */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Transform
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gym-accent to-blue-400 bg-clip-text text-transparent">
                    Your Fitness Business?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join fitness instructors who are already using Gym Slot to 
                  streamline their operations and grow their businesses. Start free today 
                  and be part of shaping the future of fitness technology.
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gym-accent to-blue-600 rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.gym-slot.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-gym-accent hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    Start Your Free Trial
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="mailto:breakfreedigital@outlook.com?subject=Gym%20Slot%20Demo%20Request&body=Hi%20Matt%20and%20Mikel%2C%0D%0A%0D%0AI%27d%20like%20to%20schedule%20a%20demo%20of%20Gym%20Slot.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks%21"
                    className="group glass hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Demo
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                {/* Fine print */}
                <div className="text-sm text-gray-400 space-y-1">
                  <p>✓ No credit card required • ✓ 2-minute setup • ✓ Cancel anytime</p>
                  <p className="text-xs">*Free during beta period. Early adopters get grandfathered pricing.</p>
                </div>
              </div>

            </div>

            {/* Right content - Visual showcase */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                {/* Main glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gym-accent/30 to-blue-400/30 blur-3xl rounded-3xl"></div>
                
                {/* Main container */}
                <div className="relative glass rounded-3xl p-8 overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Complete Fitness Solution
                    </h3>
                    <p className="text-sm text-gray-300">
                      CRM + Mobile App + Watch Integration
                    </p>
                  </div>

                  {/* Device showcase - matching the provided screenshot layout */}
                  <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-4">
                    <div className="grid grid-cols-2 gap-8 items-center relative">
                      {/* CRM Dashboard - Left side */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-300 text-center">CRM Dashboard</h4>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white mx-auto max-w-[200px]">
                        <Image
                          src="/images/gym-slot-crm-calendar-view-2.png?v=2"
                          alt="CRM Dashboard"
                          fill
                          className="object-cover object-bottom"
                          style={{ objectPosition: '50% 75%' }}
                        />
                        </div>
                      </div>

                      {/* Sync connection line - positioned between columns */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-gym-accent to-blue-400 animate-pulse opacity-80"></div>
                        <div className="absolute -left-2 top-0 w-1.5 h-1.5 bg-gym-accent rounded-full animate-ping"></div>
                        <div className="absolute -right-2 top-0 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      </div>

                      {/* Mobile App - Right side */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-gray-300 text-center">Mobile App</h4>
                        <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-slate-800 mx-auto max-w-[160px]">
                          <Image
                            src="/images/iphone-mobile-find-classes.png"
                            alt="Mobile App"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 glass rounded-full px-3 py-1 text-xs text-gym-accent">
                  Real-time Sync
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-full px-3 py-1 text-xs text-green-400">
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom urgency bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Limited Time:</span>
            </div>
            <span className="text-sm text-gray-300">
              Early adopter pricing available for <span className="text-gym-accent font-semibold">limited time</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
