"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MouseParallaxContainer } from "react-parallax-mouse"
import Link from "next/link"

const SecretTechOrg = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <div className="bg-black text-gray-300 min-h-screen font-mono relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute left-1/4 top-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-[blob_7s_infinite]"></div>
          <div className="absolute right-1/4 bottom-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-[blob_7s_infinite_2s]"></div>
          <div className="absolute left-1/3 bottom-1/3 w-48 md:w-64 h-48 md:h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-[blob_7s_infinite_4s]"></div>
        </div>

        <nav className={`
          fixed top-0 left-0 right-0 z-50 
          bg-black bg-opacity-80 backdrop-blur-sm 
          border-b border-gray-800 
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'shadow-lg' : ''}
        `}>
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-100">PDF</a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-100 transition-colors text-xs uppercase tracking-widest">Home</a>
              <a href="#" className="hover:text-gray-100 transition-colors text-xs uppercase tracking-widest">Projects</a>
              <a href="#" className="hover:text-gray-100 transition-colors text-xs uppercase tracking-widest">Research</a>
              <a href="#" className="hover:text-gray-100 transition-colors text-xs uppercase tracking-widest">Contact</a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        <div className="h-[57px]"></div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-[57px] left-0 right-0 md:hidden bg-black bg-opacity-90 p-4 border-b border-gray-800 z-40">
            <a href="#" className="block py-2 hover:text-gray-100 transition-colors text-sm">Home</a>
            <a href="#" className="block py-2 hover:text-gray-100 transition-colors text-sm">Projects</a>
            <a href="#" className="block py-2 hover:text-gray-100 transition-colors text-sm">Research</a>
            <a href="#" className="block py-2 hover:text-gray-100 transition-colors text-sm">Contact</a>
          </div>
        )}

        {/* Main Content */}
        <main className="relative z-10">
          <section className="py-20 px-4 relative">
            <div className="container mx-auto text-center relative z-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-100">Welcome to PDF</h1>
              <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">Pirates of Digital Freedom; Organisasi Coding Rahasia Polines</p>
              <p className="text-l mb-8 text-gray-600 max-w-2xl mx-auto">we are better than jalan sayung;</p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://youtu.be/-QugVsFGijQ?si=BgE-h6wQLHuOUPvp', '_blank')}
                className="group border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
              >
                Akses Data Rahasia
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>

          <section className="py-16 px-4 bg-gray-900 bg-opacity-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Projek Rahasia</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Solinep Menfess'].map((project) => (
                  <div key={project} className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors">
                    <h3 className="text-xl font-bold mb-4 text-gray-200">{project}</h3>
                    <p className="text-gray-400 mb-4">Classified research pushing the boundaries of known science.</p>
                    <Button 
                      asChild 
                      variant="link" 
                      className="text-gray-400 hover:text-gray-100 p-0 h-auto text-sm"
                    >
                       <Link href="https://polines-menfes.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Access Files <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-100">Join the Revolution</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                PDF is always searching for brilliant minds to push the boundaries of what&apos;s possible. 
                If you&apos;re ready to shape the future, we want to hear from you.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('https://forms.gle/U2d9mLEN8qC8ZRS26', '_blank')}
                className="group border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
              >
                Apply for Kadet PDF
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-black py-8 px-4 border-t border-gray-800 relative z-20">
          <div className="container mx-auto text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PDF. All rights reserved.</p>
            <p className="mt-2">Authorized access only. Violations will be prosecuted.</p>
          </div>
        </footer>
      </div>
    </MouseParallaxContainer>
  )
}

export default SecretTechOrg

