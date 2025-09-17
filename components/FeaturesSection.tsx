'use client'

import { 
  Calendar, 
  Smartphone, 
  CreditCard, 
  Palette, 
  Zap, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function FeaturesSection() {
  const currentFeatures = [
    {
      icon: Calendar,
      title: 'Integrated CRM Dashboard',
      description: 'Powerful class scheduling and management system with intuitive calendar interface.',
      benefits: ['Drag & drop scheduling', 'Class capacity management', 'Client tracking'],
      available: true
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Mobile App',
      description: 'Native apps for iOS, Android, and Apple Watch with seamless synchronization.',
      benefits: ['Real-time updates', 'Push notifications', 'Offline access'],
      available: true
    },
    {
      icon: Zap,
      title: 'Lightning Fast Sync',
      description: 'Instant synchronization between CRM and mobile apps across all devices.',
      benefits: ['Real-time updates', 'No delays', 'Reliable connection'],
      available: true
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee for your business.',
      benefits: ['Data encryption', 'Regular backups', 'GDPR compliant'],
      available: true
    }
  ]

  const upcomingFeatures = [
    {
      icon: CreditCard,
      title: 'Stripe Payment Integration',
      description: 'Accept payments directly through the platform with secure Stripe integration.',
      benefits: ['Multiple payment methods', 'Automatic invoicing', 'Revenue tracking'],
      available: false,
      comingSoon: 'Q4 2025'
    },
    {
      icon: Palette,
      title: 'Custom Branded Apps',
      description: 'White-label mobile apps with your own branding, colors, and logo.',
      benefits: ['Custom logos', 'Brand colors', 'Personalized experience'],
      available: false,
      comingSoon: 'Q4 2025'
    },
    {
      icon: Users,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your business performance and client engagement.',
      benefits: ['Revenue reports', 'Attendance tracking', 'Growth metrics'],
      available: false,
      comingSoon: 'Q1 2026'
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description: 'Smart automation for reminders, follow-ups, and customer communications.',
      benefits: ['Auto reminders', 'Email campaigns', 'Smart notifications'],
      available: false,
      comingSoon: 'Q1 2026'
    }
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
            <span>Platform Features</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start with powerful core features available today, with exciting enhancements 
            coming soon to grow your fitness business.
          </p>
        </div>

        {/* Current Features */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-bold text-white">Available Now</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Clock className="w-6 h-6 text-gym-accent" />
            <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gym-accent/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-slide-up relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Coming soon badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gym-accent/20 text-gym-accent text-xs px-2 py-1 rounded-full">
                    {feature.comingSoon}
                  </div>
                </div>

                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gym-accent/30 to-blue-500/30 rounded-xl p-3 flex items-center justify-center border border-gym-accent/30">
                    <feature.icon className="w-6 h-6 text-gym-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gym-accent/60 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early adopter CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block glass rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Shape the Future of Gym Slot
                </h3>
                <p className="text-gray-300">
                  As an early adopter, you&apos;ll have direct input on upcoming features and 
                  get priority access to new capabilities as they&apos;re released.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.gym-slot.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gym-accent hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Join Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#roadmap"
                  className="glass hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  View Roadmap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
