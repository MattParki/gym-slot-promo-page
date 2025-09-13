'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Monitor, Smartphone, Watch, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ScreenshotsGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'crm' | 'mobile' | 'watch'>('crm')

  const screenshots = {
    crm: [
      {
        src: '/images/gym-slot-crm-calendar-view-2.png?v=2',
        title: 'Calendar Dashboard',
        description: 'Overview of all your scheduled classes'
      },
      {
        src: '/images/gym-slot-crm-dashboard-manage-classes.png',
        title: 'Class Management',
        description: 'Create and edit class details'
      },
      {
        src: '/images/gym-slot-crm-bookings-view.png',
        title: 'Bookings Overview',
        description: 'Track all client bookings and attendance'
      },
      {
        src: '/images/gym-slot-crm-dashboard-calendar-day-view.png',
        title: 'Daily Schedule',
        description: 'Detailed view of your daily classes'
      },
      {
        src: '/images/gym-slot-crm-account-settings-customer-view.png',
        title: 'Customer Management',
        description: 'Manage client profiles and information'
      }
    ],
    mobile: [
      {
        src: '/images/iphone-mobile-find-classes.png',
        title: 'Discover Classes',
        description: 'Clients can browse and find classes'
      },
      {
        src: '/images/iphone-mobile-dashboard-main-view.png',
        title: 'Mobile Dashboard',
        description: 'Clean, intuitive mobile interface'
      },
      {
        src: '/images/iphone-mobile-class-details.png',
        title: 'Class Details',
        description: 'Detailed class information and booking'
      },
      {
        src: '/images/iphone-mobile-upcoming-bookings.png.png',
        title: 'My Bookings',
        description: 'Clients can manage their bookings'
      },
      {
        src: '/images/iphone-mobile-profile.png',
        title: 'User Profile',
        description: 'Personal profile and preferences'
      }
    ],
    watch: [
      {
        src: '/images/watch-dashboard.png',
        title: 'Watch Dashboard',
        description: 'Quick access to your fitness schedule'
      },
      {
        src: '/images/watch-find-classes-screen.png',
        title: 'Find Classes',
        description: 'Browse classes on your wrist'
      },
      {
        src: '/images/watch-class-details.png',
        title: 'Class Info',
        description: 'View class details on Apple Watch'
      },
      {
        src: '/images/watch-bookings.png',
        title: 'My Bookings',
        description: 'Manage bookings from your watch'
      },
      {
        src: '/images/watch-profile.png',
        title: 'Profile',
        description: 'Access profile settings on watch'
      }
    ]
  }

  // Get current screenshots array
  const currentScreenshots = screenshots[activeTab]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        navigateImage('next')
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setSelectedImageIndex(null)
      }
    }

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImageIndex])

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return
    
    const maxIndex = currentScreenshots.length - 1
    if (direction === 'next') {
      setSelectedImageIndex(selectedImageIndex >= maxIndex ? 0 : selectedImageIndex + 1)
    } else {
      setSelectedImageIndex(selectedImageIndex <= 0 ? maxIndex : selectedImageIndex - 1)
    }
  }

  const tabs = [
    { id: 'crm' as const, label: 'CRM Dashboard', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
    { id: 'mobile' as const, label: 'Mobile App', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { id: 'watch' as const, label: 'Watch App', icon: Watch, color: 'from-green-500 to-teal-500' }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gym-secondary to-gym-dark"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <div className="w-2 h-2 bg-gym-accent rounded-full animate-pulse"></div>
            <span>Screenshots Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the CRM dashboard, mobile app, and watch interface that make 
            fitness class management seamless across all devices.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-blue-500/25`
                  : 'glass hover:bg-white/20 text-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots[activeTab].map((screenshot, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="relative glass rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                {/* Image container */}
                <div className={`relative rounded-lg overflow-hidden ${
                  activeTab === 'mobile' || activeTab === 'watch' 
                    ? 'aspect-[9/16]' 
                    : 'aspect-[4/3]'
                }`}>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-gym-accent transition-colors">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Carousel for enlarged view */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center" onClick={() => setSelectedImageIndex(null)}>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Previous button */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Next button */}
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Main image */}
              <div className="relative flex items-center justify-center w-full h-full px-20">
                <div className="relative transition-all duration-500 ease-out">
                  <Image
                    src={currentScreenshots[selectedImageIndex].src}
                    alt={currentScreenshots[selectedImageIndex].title}
                    width={1200}
                    height={1600}
                    className="object-contain drop-shadow-2xl"
                    style={{ 
                      maxWidth: '90vw', 
                      maxHeight: '90vh', 
                      width: 'auto', 
                      height: 'auto' 
                    }}
                  />
                </div>
              </div>

              {/* Image info */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="glass rounded-2xl px-6 py-4 text-center max-w-md">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {currentScreenshots[selectedImageIndex].title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {currentScreenshots[selectedImageIndex].description}
                  </p>
                  
                  {/* Image counter */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-400">
                      {selectedImageIndex + 1} of {currentScreenshots.length}
                    </span>
                    <div className="flex gap-1 ml-2">
                      {currentScreenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === selectedImageIndex 
                              ? 'bg-gym-accent w-6' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyboard hints */}
              <div className="absolute top-6 left-6 z-20">
                <div className="glass rounded-xl px-4 py-2 text-xs text-gray-300">
                  <span>Use ← → keys or click arrows to navigate</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-gym-accent mb-2">3</div>
            <div className="text-sm text-gray-300">Platforms Supported</div>
          </div>
          <div className="text-center glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-gym-accent mb-2">100%</div>
            <div className="text-sm text-gray-300">Sync Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
