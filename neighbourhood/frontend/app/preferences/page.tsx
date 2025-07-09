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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <MapPin className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-300/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            {(() => {
              const Icon = getStepIcon()
              return <Icon className="h-10 w-10 text-white" />
            })()}
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{getStepTitle()}</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">{getStepDescription()}</p>
        </div>

        {/* Form Content */}
        <Card
          className={`mb-12 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
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
                    <div key={item.key} className="group">
                      <div className="flex items-center justify-between mb-6">
                        <Label className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {item.label}
                        </Label>
                        <div
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg`}
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
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
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
                    <div key={item.key} className="group">
                      <div className="flex items-center justify-between mb-6">
                        <Label className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {item.label}
                        </Label>
                        <div
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg`}
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
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
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
                      className="group p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <Label className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                              {item.label}
                            </Label>
                            <p className="text-white/60 text-sm mt-1">{item.description}</p>
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
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-3 px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
            Previous
          </Button>

          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === currentStep
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                    : index + 1 < currentStep
                      ? "bg-blue-400"
                      : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
          >
            {currentStep === totalSteps ? "Find Matches" : "Next"}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
