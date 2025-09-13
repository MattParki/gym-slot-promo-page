'use client'

import { Code, Heart, Users, Zap, ExternalLink, Mail } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: Code },
    { number: 'Growing', label: 'Community', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '24/7', label: 'Support', icon: Heart }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gym-dark to-gym-secondary"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gym-accent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <div className="w-2 h-2 bg-gym-accent rounded-full animate-pulse"></div>
            <span>About Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built by Fitness Enthusiasts
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Created by developers who understand the challenges of running a fitness business, 
            backed by the expertise of Breakfree Digital Agency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            {/* Company info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Breakfree Digital Agency</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We&apos;re a specialized digital agency with over 5 years of experience building 
                  custom software solutions for businesses. Gym Slot represents our passion 
                  project - combining our technical expertise with deep understanding of the 
                  fitness industry&apos;s unique challenges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to democratize technology for small fitness businesses, 
                  making enterprise-level tools accessible and affordable for independent 
                  instructors and small studios.
                </p>
              </div>

              {/* Founder info */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gym-accent to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">Matt - Founder & Lead Developer</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Full-time software developer with a passion for fitness and helping small 
                      businesses thrive. Matt combines technical expertise with real-world 
                      understanding of fitness industry challenges.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <a 
                        href="mailto:breakfreedigital@outlook.com" 
                        className="flex items-center gap-2 text-gym-accent hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Matt
                      </a>
                      <a 
                        href="https://www.breakfreedigitalagency.com/" 
                        className="flex items-center gap-2 text-gym-accent hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Agency
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Our Values</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gym-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-white">Simplicity First:</span>
                    <span className="text-gray-300 ml-2">Complex problems, simple solutions</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gym-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-white">Community Driven:</span>
                    <span className="text-gray-300 ml-2">Built with and for fitness professionals</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gym-accent rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-white">Transparent Growth:</span>
                    <span className="text-gray-300 ml-2">Open roadmap, honest communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Stats and highlights */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gym-accent to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Why we built this */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-4">Why We Built Gym Slot</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <p>
                  After working with numerous fitness businesses, we noticed a common problem: 
                  existing solutions were either too expensive, too complex, or didn&apos;t integrate 
                  well with mobile experiences.
                </p>
                <p>
                  Small fitness instructors needed something that just worked - a system that 
                  could grow with their business without breaking the bank or requiring a 
                  computer science degree to operate.
                </p>
                <p className="text-gym-accent font-medium">
                  That&apos;s why Gym Slot exists: to level the playing field for independent 
                  fitness professionals.
                </p>
              </div>
            </div>

            {/* Technology stack */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-4">Built with Modern Tech</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mx-auto flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-300">React Native</span>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg mx-auto flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-300">Node.js</span>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-300">Firebase</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Enterprise-grade infrastructure, startup-friendly pricing
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-block glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-gray-300 mb-6">
              Have questions, feedback, or want to discuss custom solutions for your fitness business? 
              We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:breakfreedigital@outlook.com"
                className="group bg-gym-accent hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a 
                href="https://breakfreedigital.com"
                className="glass hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Our Agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
