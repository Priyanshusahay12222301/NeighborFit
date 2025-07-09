const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export interface Neighborhood {
  id: string
  name: string
  city: string
  state: string
  matchScore: number
  walkabilityScore: number
  safetyScore: number
  nightlifeScore: number
  familyScore: number
  costScore: number
  transitScore: number
  greenScore: number
  diversityScore: number
  image: string
  description: string
  highlights: string[]
  demographics: {
    medianAge: number
    medianIncome: string
    population: string
  }
  amenities: string[]
  pros: string[]
  cons: string[]
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  count?: number
  message?: string
}

export interface SearchPreferences {
  minWalkability?: number
  minSafety?: number
  maxCost?: number
  minNightlife?: number
  minFamily?: number
  minTransit?: number
  minGreen?: number
  minDiversity?: number
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

export const api = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)
    
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'API request failed')
    }
    
    return result
  },

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'API request failed')
    }
    
    return result
  },

  // Neighborhood-specific API calls
  async getNeighborhoods(): Promise<Neighborhood[]> {
    const response = await this.get<Neighborhood[]>('/api/neighborhoods')
    return response.data
  },

  async getNeighborhood(id: string): Promise<Neighborhood> {
    const response = await this.get<Neighborhood>(`/api/neighborhoods/${id}`)
    return response.data
  },

  async searchNeighborhoods(preferences: SearchPreferences): Promise<Neighborhood[]> {
    const response = await this.post<Neighborhood[]>('/api/neighborhoods/search', {
      preferences
    })
    return response.data
  },

  async healthCheck(): Promise<{ message: string; timestamp: string }> {
    const response = await this.get<{ message: string; timestamp: string }>('/api/health')
    return response.data
  }
} 