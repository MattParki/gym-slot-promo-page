'use client'

import { Check, Star, Crown, Zap, ArrowRight, Calendar } from 'lucide-react'

export default function FuturePlansSection() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever*',
      description: 'Perfect for individual instructors just getting started',
      features: [
        'Up to 50 classes per month',
        'Basic CRM dashboard',
        'Mobile app access',
        'Email support',
        'Standard sync speed',
        'Basic analytics'
      ],
      limitations: [
        'No payment processing',
        'Gym Slot branding',
        'Limited customization'
      ],
      color: 'from-gray-600 to-gray-700',
      popular: false,
      current: true
    },
    {
      name: 'Professional',
      price: '£25',
      period: '/month',
      description: 'Ideal for growing fitness businesses with regular classes',
      features: [
        'Unlimited classes',
        'Advanced CRM features',
        'Priority mobile app',
        'Stripe payment integration',
        'Custom email templates',
        'Advanced analytics',
        'Priority support',
        'Faster sync speeds'
      ],
      limitations: [
        'Gym Slot branding',
        'Standard customization'
      ],
      color: 'from-gym-accent to-blue-600',
      popular: false,
      current: false
    },
    {
      name: 'Enterprise',
      price: '£85',
      period: '/month',
      description: 'Complete solution for established fitness businesses',
      features: [
        'Everything in Professional',
        'Custom branded mobile apps',
        'White-label solution',
        'Advanced automation',
        'Custom integrations',
        'Dedicated account manager',
        'Phone support',
        'Custom analytics'
      ],
      limitations: [],
      color: 'from-purple-600 to-pink-600',
      popular: false,
      current: false
    }
  ]

  const roadmapItems = [
    {
      quarter: 'Q2 2024',
      title: 'Payment Processing',
      description: 'Stripe integration for seamless payment collection',
      status: 'in-development',
      features: ['Multiple payment methods', 'Automatic invoicing', 'Revenue tracking']
    },
    {
      quarter: 'Q3 2024',
      title: 'Custom Branding',
      description: 'White-label mobile apps with your branding',
      status: 'planned',
      features: ['Custom logos', 'Brand colors', 'Personalized experience']
    },
    {
      quarter: 'Q4 2024',
      title: 'Advanced Analytics',
      description: 'Comprehensive business insights and reporting',
      status: 'planned',
      features: ['Revenue reports', 'Attendance tracking', 'Growth metrics']
    },
    {
      quarter: 'Q1 2025',
      title: 'Automation Suite',
      description: 'Smart workflows and automated communications',
      status: 'planned',
      features: ['Auto reminders', 'Email campaigns', 'Smart notifications']
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gym-secondary to-gym-dark"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <div className="w-2 h-2 bg-gym-accent rounded-full animate-pulse"></div>
            <span>Future Plans & Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Grow With Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free today and upgrade as your business grows. Early adopters get 
            grandfathered pricing and exclusive benefits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 animate-slide-up ${
                tier.popular ? 'ring-2 ring-gym-accent' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gym-accent to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Current badge */}
              {tier.current && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Available Now
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tier.color} p-4 flex items-center justify-center`}>
                  {tier.name === 'Starter' && <Zap className="w-8 h-8 text-white" />}
                  {tier.name === 'Professional' && <Crown className="w-8 h-8 text-white" />}
                  {tier.name === 'Enterprise' && <Star className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                {tier.name === 'Starter' && (
                  <p className="text-xs text-gray-400 mt-1">*Free during beta period</p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {tier.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-700">
                    <div className="space-y-2">
                      {tier.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                tier.current 
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : tier.popular
                    ? 'bg-gradient-to-r from-gym-accent to-blue-600 hover:from-blue-600 hover:to-gym-accent text-white'
                    : 'glass hover:bg-white/20 text-gray-300'
              }`}>
                {tier.current ? 'Get Started Free' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>

        {/* Development Roadmap */}
        <div id="roadmap" className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Development Roadmap</h3>
            <p className="text-gray-300">See what's coming next and when to expect new features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Quarter */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-gym-accent" />
                  <span className="text-gym-accent font-semibold text-sm">{item.quarter}</span>
                  <div className={`ml-auto px-2 py-1 rounded-full text-xs ${
                    item.status === 'in-development' 
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-gym-accent/20 text-gym-accent'
                  }`}>
                    {item.status === 'in-development' ? 'In Dev' : 'Planned'}
                  </div>
                </div>

                {/* Title and description */}
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gym-accent rounded-full"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early Adopter Benefits */}
        <div className="text-center">
          <div className="inline-block glass rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Early Adopter Benefits
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Grandfathered pricing forever</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Direct input on feature development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Priority access to new features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Exclusive early adopter community</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.gym-slot.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gym-accent hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  Claim Your Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-gray-400 text-sm mt-3">
                  Limited spots available for early access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
