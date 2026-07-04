"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { MapPin, ArrowRight, ArrowLeft, Sparkles, Target, Home, Heart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Preferences {
  walkability: number[]
  safety: number[]
  nightlife: number[]
  familyFriendly: number[]
  costOfLiving: number[]
  publicTransit: number[]
  greenSpaces: number[]
  diversity: number[]
  petFriendly: boolean
  bikeAccessible: boolean
  quietArea: boolean
  newDevelopment: boolean
  historicCharm: boolean
  foodScene: boolean
}

export default function PreferencesPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalSteps = 3

  const [preferences, setPreferences] = useState<Preferences>({
    walkability: [70],
    safety: [80],
    nightlife: [50],
    familyFriendly: [60],
    costOfLiving: [50],
    publicTransit: [60],
    greenSpaces: [70],
    diversity: [60],
    petFriendly: false,
    bikeAccessible: false,
    quietArea: false,
    newDevelopment: false,
    historicCharm: false,
    foodScene: false,
  })

  const handleSliderChange = (key: keyof Preferences, value: number[]) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  const handleSwitchChange = (key: keyof Preferences, checked: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: checked }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setIsAnimating(false)
      }, 300)
    } else {
      localStorage.setItem("neighborhoodPreferences", JSON.stringify(preferences))
      router.push("/results")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep - 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const getStepIcon = () => {
    switch (currentStep) {
      case 1:
        return Target
      case 2:
        return Home
      case 3:
        return Heart
      default:
        return Target
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Lifestyle Priorities"
      case 2:
        return "Community Features"
      case 3:
        return "Special Preferences"
      default:
        return "Preferences"
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Rate how important these factors are to you (0 = Not Important, 100 = Very Important)"
      case 2:
        return "Tell us about the community atmosphere you prefer"
      case 3:
        return "Any additional features that matter to you?"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              NeighborMatch
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-white/70 text-sm font-medium">
                Step {currentStep} of {totalSteps}
              </span>
              <Progress value={(currentStep / totalSteps) * 100} className="w-32 h-2 bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white/70 text-sm">AI Matching</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        {/* Step Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#030712] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.2)] rounded-full mb-6">
            {(() => {
              const Icon = getStepIcon()
              return <Icon className="h-8 w-8 text-blue-400" />
            })()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{getStepTitle()}</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">{getStepDescription()}</p>
        </div>

        {/* Form Content */}
        <Card
          className={`mb-12 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          <CardContent className="p-12">
            {currentStep === 1 && (
              <div className="space-y-12 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-12">
                  {[
                    {
                      key: "walkability",
                      label: "Walkability Score",
                      description: "How important is it to walk to daily amenities?",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      key: "safety",
                      label: "Safety Rating",
                      description: "How important is neighborhood safety?",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      key: "nightlife",
                      label: "Nightlife & Entertainment",
                      description: "Access to bars, restaurants, and entertainment",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      key: "familyFriendly",
                      label: "Family-Friendly",
                      description: "Schools, playgrounds, and family activities",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((item, index) => (
                    <div key={item.key} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex items-center justify-between mb-8">
                        <Label className="text-lg font-medium text-gray-200 group-hover:text-blue-300 transition-colors duration-300">
                          {item.label}
                        </Label>
                        <div
                          className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-lg shadow-sm"
                        >
                          {preferences[item.key as keyof Preferences][0] || 0}
                        </div>
                      </div>
                      <Slider
                        value={preferences[item.key as keyof Preferences]}
                        onValueChange={(value) => handleSliderChange(item.key as keyof Preferences, value)}
                        max={100}
                        step={5}
                        className="mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-gray-400 text-sm font-light mt-4">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-12 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-12">
                  {[
                    {
                      key: "costOfLiving",
                      label: "Cost of Living",
                      description: "Lower values = more affordable areas",
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      key: "publicTransit",
                      label: "Public Transit",
                      description: "Access to buses, trains, and transit options",
                      color: "from-indigo-500 to-purple-500",
                    },
                    {
                      key: "greenSpaces",
                      label: "Green Spaces",
                      description: "Parks, trails, and natural areas",
                      color: "from-green-500 to-teal-500",
                    },
                    {
                      key: "diversity",
                      label: "Diversity",
                      description: "Cultural and demographic diversity",
                      color: "from-pink-500 to-rose-500",
                    },
                  ].map((item, index) => (
                    <div key={item.key} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex items-center justify-between mb-8">
                        <Label className="text-lg font-medium text-gray-200 group-hover:text-blue-300 transition-colors duration-300">
                          {item.label}
                        </Label>
                        <div
                          className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-lg shadow-sm"
                        >
                          {preferences[item.key as keyof Preferences][0] || 0}
                        </div>
                      </div>
                      <Slider
                        value={preferences[item.key as keyof Preferences]}
                        onValueChange={(value) => handleSliderChange(item.key as keyof Preferences, value)}
                        max={100}
                        step={5}
                        className="mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-gray-400 text-sm font-light mt-4">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      key: "petFriendly",
                      label: "Pet-Friendly",
                      description: "Dog parks, pet stores, veterinarians",
                      icon: "🐕",
                    },
                    {
                      key: "bikeAccessible",
                      label: "Bike Accessible",
                      description: "Bike lanes, bike sharing, cycling culture",
                      icon: "🚴",
                    },
                    {
                      key: "quietArea",
                      label: "Quiet Area",
                      description: "Low noise levels, residential feel",
                      icon: "🤫",
                    },
                    {
                      key: "newDevelopment",
                      label: "New Development",
                      description: "Modern buildings and infrastructure",
                      icon: "🏗️",
                    },
                    {
                      key: "historicCharm",
                      label: "Historic Charm",
                      description: "Historic buildings and character",
                      icon: "🏛️",
                    },
                    {
                      key: "foodScene",
                      label: "Food Scene",
                      description: "Restaurants, cafes, food markets",
                      icon: "🍽️",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.key}
                      className="group p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <Label className="text-lg font-medium text-gray-200 group-hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                              {item.label}
                            </Label>
                            <p className="text-gray-400 text-sm mt-1 font-light">{item.description}</p>
                          </div>
                        </div>
                        <Switch
                          checked={preferences[item.key as keyof Preferences]}
                          onCheckedChange={(checked) => handleSwitchChange(item.key as keyof Preferences, checked)}
                          className="scale-125"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center px-2">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-3 px-8 py-6 rounded-full bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Previous
          </Button>

          <div className="flex gap-3">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  index + 1 === currentStep
                    ? "bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)] scale-125"
                    : index + 1 < currentStep
                      ? "bg-blue-900/50"
                      : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="group flex items-center gap-3 px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300 border border-blue-400/50"
          >
            {currentStep === totalSteps ? "Find Matches" : "Next"}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}
