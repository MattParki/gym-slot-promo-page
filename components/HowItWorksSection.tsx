'use client'

import { Calendar, Smartphone, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: "Create Your Account",
      description: "Sign up for your free Gym Slot CRM account and set up your fitness business profile.",
      image: "/images/gym-slot-crm-dashboard-manage-classes.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Schedule Your Classes",
      description: "Use our intuitive CRM dashboard to create and manage your fitness classes, set capacity limits, and organize your schedule.",
      image: "/images/gym-slot-crm-dashboard-calendar-day-view.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Auto-Sync to Mobile",
      description: "Your classes automatically appear in the mobile app. Clients can discover, book, and manage their fitness journey seamlessly.",
      image: "/images/iphone-mobile-find-classes.png",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gym-dark to-gym-secondary"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gym-accent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <div className="w-2 h-2 bg-gym-accent rounded-full animate-pulse"></div>
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get your fitness business online in minutes. Our integrated CRM and mobile app 
            solution makes class management effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Step number and icon */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-800">
                    0{index + 1}
                  </div>
                </div>

                {/* Title and description */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  {index === 0 && (
                    <>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>Quick 2-minute setup process</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>Free during beta period</span>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>Click-to-schedule calendar interface</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>Set capacity limits</span>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>Real-time synchronization</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ArrowRight className="w-4 h-4 text-gym-accent" />
                        <span>iOS, Android, and Watch support</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 blur-3xl rounded-3xl`}></div>
                  
                  {/* Image container */}
                  <div className="relative glass rounded-2xl p-6 overflow-hidden">
                    <div className={`relative rounded-lg overflow-hidden ${
                      index === 2 ? 'aspect-[9/16] max-w-xs mx-auto' : 'aspect-[4/3]'
                    }`}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={`${index === 2 ? 'object-cover object-top' : 'object-cover'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gym-accent/30 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 glass rounded-2xl p-6">
            <div className="text-left">
              <h3 className="font-semibold text-white">Ready to get started?</h3>
              <p className="text-sm text-gray-300">Join fitness instructors already using Gym Slot</p>
            </div>
            <a 
              href="https://www.gym-slot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gym-accent hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
