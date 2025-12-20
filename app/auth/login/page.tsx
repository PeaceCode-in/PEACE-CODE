"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Heart, 
  Brain, 
  Sparkles, 
  User, 
  Lock, 
  Mail, 
  ArrowRight,
  Eye,
  EyeOff,
  Github
} from "lucide-react"

// Custom Google and Facebook icons
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 })
  const router = useRouter()

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // 3D card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setCardRotation({
      x: (y - 0.5) * -10,
      y: (x - 0.5) * 10
    })
  }

  const handleCardMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    // Simulate API call
    setTimeout(() => {
      router.push("/")
    }, 1500)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Left Side - Animated Illustration */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: '10%',
              top: '20%',
            }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              right: '10%',
              bottom: '20%',
            }}
          />
        </div>

        {/* Main Illustration */}
        <motion.div 
          className="relative z-10"
          style={{
            transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
          }}
        >
          {/* Animated Character/Logo */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Mental Health Themed Illustration */}
            <div className="relative">
              <motion.div 
                className="flex flex-col items-center space-y-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {/* Brain with Heart */}
                <motion.div className="relative">
                  <Brain className="w-32 h-32 text-purple-300" strokeWidth={1.5} />
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-16 h-16 text-pink-400 fill-pink-400" />
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div className="absolute -top-10 -left-10">
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </motion.div>
                <motion.div 
                  className="absolute -top-10 -right-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-blue-300" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-10 -left-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-10 h-10 text-green-300" />
                </motion.div>

                {/* Text */}
                <motion.h2 
                  className="text-4xl font-bold text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Peace Code
                </motion.h2>
                <motion.p 
                  className="text-xl text-purple-200 text-center max-w-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Your mental wellness journey starts here
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 1000, 
              y: 800 
            }}
            animate={{
              y: -100,
              x: Math.random() * 1000
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div 
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-full max-w-md preserve-3d"
          style={{
            transform: `perspective(1000px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`
          }}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Logo for mobile */}
          <motion.div 
            className="lg:hidden mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-purple-500" />
            </div>
            <h1 className="text-2xl font-bold text-white">Peace Code</h1>
          </motion.div>

          {/* Tab Switcher */}
          <motion.div 
            className="flex mb-8 bg-gray-800/50 rounded-full p-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                isLogin ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsLogin(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log in
            </motion.button>
            <motion.button
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                !isLogin ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsLogin(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </motion.div>

          {/* Social Login */}
          <motion.div 
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm text-center mb-4">
              Express login via Google and Facebook
            </p>
            <motion.button
              className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </motion.button>
            <motion.button
              className="w-full bg-[#1877F2] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-3 hover:bg-[#1865D3] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FacebookIcon />
              <span>Continue with Facebook</span>
            </motion.button>
          </motion.div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">or</span>
            </div>
          </div>

          {/* Login/Signup Form */}
          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? 'login' : 'signup'}
              onSubmit={handleSubmit} 
              className="space-y-4"
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {!isLogin && (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">
                    Full Name
                  </Label>
                  <motion.div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <motion.input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required={!isLogin}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800/50 text-white placeholder-gray-500 rounded-lg pl-12 pr-4 py-3 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      variants={inputVariants}
                      whileFocus="focus"
                    />
                  </motion.div>
                </motion.div>
              )}

              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isLogin ? 0.1 : 0.2 }}
              >
                <Label htmlFor="email" className="text-gray-300 mb-2 block">
                  Email or username
                </Label>
                <motion.div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <motion.input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800/50 text-white placeholder-gray-500 rounded-lg pl-12 pr-4 py-3 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isLogin ? 0.2 : 0.3 }}
              >
                <Label htmlFor="password" className="text-gray-300 mb-2 block">
                  Password
                </Label>
                <motion.div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <motion.input
                  id="password"
                    type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-800/50 text-white placeholder-gray-500 rounded-lg pl-12 pr-12 py-3 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </motion.button>
                </motion.div>
              </motion.div>

              {isLogin && (
                <motion.div 
                  className="flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/auth/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                    Forgot password?
                  </Link>
                </motion.div>
              )}

              {error && (
                <motion.div 
                  className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isLoading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <span>{isLogin ? "Log in" : "Sign up"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <motion.div 
                className="text-center text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {isLogin ? (
                  <>
              Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="font-medium text-purple-400 hover:text-purple-300"
                    >
                Sign up here
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="font-medium text-purple-400 hover:text-purple-300"
                    >
                      Log in here
                    </button>
                  </>
                )}
              </motion.div>
            </motion.form>
          </AnimatePresence>

          {/* Looking for old Rive? */}
          <motion.div 
            className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-yellow-400 text-sm flex items-center">
              <span className="text-lg mr-2">⚠️</span>
              Looking for the old Peace Code? Visit our{" "}
              <Link href="/legacy" className="underline ml-1">
                legacy portal
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}