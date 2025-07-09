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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Finding Your Perfect Matches</h2>
          <p className="text-gray-600">Analyzing neighborhoods based on your preferences...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NeighborMatch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/preferences">Adjust Preferences</Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "map" ? "default" : "outline"} size="sm" onClick={() => setViewMode("map")}>
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Filter Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Walkability Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, minWalkability: value }))
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Safety Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, minSafety: value }))
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Cost Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0-100"
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : undefined
                  setSearchPreferences(prev => ({ ...prev, maxCost: value }))
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button 
              onClick={() => handleSearch(searchPreferences)}
              disabled={searching}
              className="flex items-center gap-2"
            >
              {searching ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <Search className="h-4 w-4" />
              )}
              Search
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={loading}
            >
              Reset
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Neighborhood Matches</h1>
          <p className="text-lg text-gray-600">
            Found {neighborhoods.length} neighborhoods that match your preferences
          </p>
        </div>

        {viewMode === "list" ? (
          <div className="space-y-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={neighborhood.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={neighborhood.image || "/placeholder.svg"}
                      alt={neighborhood.name}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-lg font-semibold">
                            #{index + 1} Match
                          </Badge>
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBg(neighborhood.matchScore)}`}
                          >
                            <span className={getScoreColor(neighborhood.matchScore)}>
                              {neighborhood.matchScore}% Match
                            </span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{neighborhood.name}</h2>
                        <p className="text-gray-600">
                          {neighborhood.city}, {neighborhood.state}
                        </p>
                      </div>
                      <Button variant="outline">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>

                    <p className="text-gray-700 mb-4">{neighborhood.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {neighborhood.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <Tabs defaultValue="scores" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="scores">Scores</TabsTrigger>
                        <TabsTrigger value="demographics">Demographics</TabsTrigger>
                        <TabsTrigger value="amenities">Amenities</TabsTrigger>
                        <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
                      </TabsList>

                      <TabsContent value="scores" className="mt-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <Footprints className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                            <div className="text-sm text-gray-600">Walkability</div>
                            <div className={`font-semibold ${getScoreColor(neighborhood.walkabilityScore)}`}>
                              {neighborhood.walkabilityScore}
                            </div>
                          </div>
                          <div className="text-center">
                            <Shield className="h-6 w-6 mx-auto mb-2 text-green-600" />
                            <div className="text-sm text-gray-600">Safety</div>
                            <div className={`font-semibold ${getScoreColor(neighborhood.safetyScore)}`}>
                              {neighborhood.safetyScore}
                            </div>
                          </div>
                          <div className="text-center">
                            <Coffee className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                            <div className="text-sm text-gray-600">Nightlife</div>
                            <div className={`font-semibold ${getScoreColor(neighborhood.nightlifeScore)}`}>
                              {neighborhood.nightlifeScore}
                            </div>
                          </div>
                          <div className="text-center">
                            <Users className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                            <div className="text-sm text-gray-600">Family</div>
                            <div className={`font-semibold ${getScoreColor(neighborhood.familyScore)}`}>
                              {neighborhood.familyScore}
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="demographics" className="mt-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-sm text-gray-600">Median Age</div>
                            <div className="font-semibold">{neighborhood.demographics.medianAge}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Median Income</div>
                            <div className="font-semibold">{neighborhood.demographics.medianIncome}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Population</div>
                            <div className="font-semibold">{neighborhood.demographics.population}</div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="amenities" className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {neighborhood.amenities.map((amenity) => (
                            <Badge key={amenity} variant="secondary">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="pros-cons" className="mt-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                            <ul className="space-y-1">
                              {neighborhood.pros.map((pro) => (
                                <li key={pro} className="text-sm text-gray-700 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                            <ul className="space-y-1">
                              {neighborhood.cons.map((con) => (
                                <li key={con} className="text-sm text-gray-700 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex gap-4 mt-6">
                      <Button className="flex-1">View Details</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="h-96">
            <CardContent className="p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map View</h3>
                <p className="text-gray-600 mb-4">
                  Map integration would show neighborhood locations with markers and detailed overlays.
                </p>
                <p className="text-sm text-gray-500">
                  In a production app, this would integrate with Google Maps, Mapbox, or similar mapping service.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Results State */}
        {neighborhoods.length === 0 && !loading && (
          <Card className="text-center py-12">
            <CardContent>
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Matches Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any neighborhoods that match your current preferences. Try adjusting your criteria to
                see more results.
              </p>
              <Button asChild>
                <Link href="/preferences">Adjust Preferences</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
