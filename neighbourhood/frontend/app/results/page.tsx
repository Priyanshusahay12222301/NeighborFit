"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, Shield, Footprints, Coffee, Heart, Map, List, AlertCircle, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { api, Neighborhood, SearchPreferences } from "@/lib/api"

export default function ResultsPage() {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([])
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searching, setSearching] = useState(false)
  const [searchPreferences, setSearchPreferences] = useState<SearchPreferences>({})

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const data = await api.getNeighborhoods()
        setNeighborhoods(data)
      } catch (err) {
        console.error('Error fetching neighborhoods:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch neighborhoods')
      } finally {
        setLoading(false)
      }
    }

    fetchNeighborhoods()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  const handleSearch = async (preferences: SearchPreferences) => {
    try {
      setSearching(true)
      setError(null)
      
      const data = await api.searchNeighborhoods(preferences)
      setNeighborhoods(data)
      setSearchPreferences(preferences)
    } catch (err) {
      console.error('Error searching neighborhoods:', err)
      setError(err instanceof Error ? err.message : 'Failed to search neighborhoods')
    } finally {
      setSearching(false)
    }
  }

  const handleReset = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const data = await api.getNeighborhoods()
      setNeighborhoods(data)
      setSearchPreferences({})
    } catch (err) {
      console.error('Error fetching neighborhoods:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch neighborhoods')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-white mb-2">Finding Your Perfect Matches</h2>
          <p className="text-gray-400">Analyzing neighborhoods based on your preferences...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-500 text-white">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">NeighborMatch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button className="bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10" asChild>
              <Link href="/preferences">Adjust Preferences</Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                className={`bg-white/5 border ${viewMode === "list" ? "border-blue-500 text-blue-400" : "border-white/10 text-gray-400"} hover:bg-white/10`}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button 
                className={`bg-white/5 border ${viewMode === "map" ? "border-blue-500 text-blue-400" : "border-white/10 text-gray-400"} hover:bg-white/10`} 
                size="sm" 
                onClick={() => setViewMode("map")}
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 p-6 mb-8 animate-fade-in-up">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-blue-400" />
            Filter Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Min Walkability Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, minWalkability: value }))
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Min Safety Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, minSafety: value }))
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Max Cost Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, maxCost: value }))
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button 
              onClick={() => handleSearch(searchPreferences)}
              disabled={searching}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
            >
              {searching ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <Search className="h-4 w-4" />
              )}
              Search
            </Button>
            <Button 
              onClick={handleReset}
              disabled={loading}
              className="flex-1 md:flex-none px-8 py-6 bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 rounded-xl transition-all"
            >
              Reset
            </Button>
          </div>
        </div>

        <div className="text-center mb-12 animate-fade-in-up animation-delay-100">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Your Neighborhood Matches</h1>
          <p className="text-lg text-gray-400 font-light">
            Found {neighborhoods.length} neighborhoods that match your preferences
          </p>
        </div>

        {viewMode === "list" ? (
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={neighborhood.id} className="overflow-hidden hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-all duration-500 bg-white/5 backdrop-blur-md border-white/10 group">
                <div className="md:flex">
                  <div className="md:w-1/3 overflow-hidden">
                    <Image
                      src={neighborhood.image || "/placeholder.svg"}
                      alt={neighborhood.name}
                      width={300}
                      height={200}
                      className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <Badge className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                              #{index + 1} Match
                            </Badge>
                            <div
                              className={`px-3 py-1 rounded-full text-sm font-medium border ${neighborhood.matchScore >= 80 ? 'bg-green-500/10 border-green-500/20 text-green-400' : neighborhood.matchScore >= 60 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}
                            >
                              {neighborhood.matchScore}% Match
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-1">{neighborhood.name}</h2>
                          <p className="text-gray-400 font-medium flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {neighborhood.city}, {neighborhood.state}
                          </p>
                        </div>
                        <Button variant="outline" className="bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:text-white transition-all">
                          <Heart className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{neighborhood.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {neighborhood.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline" className="bg-white/5 border-white/10 text-gray-300 font-normal">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <Tabs defaultValue="scores" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10 p-1 rounded-xl">
                          <TabsTrigger value="scores" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-lg">Scores</TabsTrigger>
                          <TabsTrigger value="demographics" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-lg">Demographics</TabsTrigger>
                          <TabsTrigger value="amenities" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-lg">Amenities</TabsTrigger>
                          <TabsTrigger value="pros-cons" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-lg">Pros & Cons</TabsTrigger>
                        </TabsList>

                        <TabsContent value="scores" className="mt-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                              <Footprints className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                              <div className="text-sm text-gray-400">Walkability</div>
                              <div className={`font-semibold text-lg ${neighborhood.walkabilityScore >= 80 ? 'text-green-400' : neighborhood.walkabilityScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {neighborhood.walkabilityScore}
                              </div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                              <Shield className="h-6 w-6 mx-auto mb-2 text-green-400" />
                              <div className="text-sm text-gray-400">Safety</div>
                              <div className={`font-semibold text-lg ${neighborhood.safetyScore >= 80 ? 'text-green-400' : neighborhood.safetyScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {neighborhood.safetyScore}
                              </div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                              <Coffee className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                              <div className="text-sm text-gray-400">Nightlife</div>
                              <div className={`font-semibold text-lg ${neighborhood.nightlifeScore >= 80 ? 'text-green-400' : neighborhood.nightlifeScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {neighborhood.nightlifeScore}
                              </div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                              <Users className="h-6 w-6 mx-auto mb-2 text-orange-400" />
                              <div className="text-sm text-gray-400">Family</div>
                              <div className={`font-semibold text-lg ${neighborhood.familyScore >= 80 ? 'text-green-400' : neighborhood.familyScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {neighborhood.familyScore}
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="demographics" className="mt-6">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                              <div className="text-sm text-gray-400">Median Age</div>
                              <div className="font-semibold text-white text-lg">{neighborhood.demographics.medianAge}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                              <div className="text-sm text-gray-400">Median Income</div>
                              <div className="font-semibold text-white text-lg">{neighborhood.demographics.medianIncome}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                              <div className="text-sm text-gray-400">Population</div>
                              <div className="font-semibold text-white text-lg">{neighborhood.demographics.population}</div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="amenities" className="mt-6">
                          <div className="flex flex-wrap gap-2">
                            {neighborhood.amenities.map((amenity) => (
                              <Badge key={amenity} variant="secondary" className="bg-white/5 text-gray-300 border-white/10 px-3 py-1">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="pros-cons" className="mt-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                              <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                                <Shield className="h-4 w-4" /> Pros
                              </h4>
                              <ul className="space-y-2">
                                {neighborhood.pros.map((pro) => (
                                  <li key={pro} className="text-sm text-gray-300 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                              <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" /> Cons
                              </h4>
                              <ul className="space-y-2">
                                {neighborhood.cons.map((con) => (
                                  <li key={con} className="text-sm text-gray-300 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">View Details</Button>
                      <Button className="flex-1 bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10">
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="h-[600px] bg-white/5 border-white/10 backdrop-blur-md overflow-hidden animate-fade-in-up">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('/placeholder-map.jpg')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10 text-center bg-black/60 p-12 rounded-2xl backdrop-blur-md border border-white/10">
                <Map className="h-20 w-20 text-blue-400 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-semibold text-white mb-3">Interactive Map View</h3>
                <p className="text-gray-300 mb-4 max-w-md mx-auto">
                  Map integration would show neighborhood locations with markers and detailed overlays here.
                </p>
                <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <p className="text-sm text-gray-400">
                    Integration ready for Google Maps or Mapbox.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Results State */}
        {neighborhoods.length === 0 && !loading && (
          <Card className="text-center py-20 bg-white/5 border-white/10 backdrop-blur-md animate-fade-in-up">
            <CardContent>
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-3">No Matches Found</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                We couldn't find any neighborhoods that match your current preferences. Try adjusting your criteria to
                see more results.
              </p>
              <Button asChild className="px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <Link href="/preferences">Adjust Preferences</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
