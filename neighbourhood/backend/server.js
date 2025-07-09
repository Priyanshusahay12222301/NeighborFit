const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock neighborhood data
const neighborhoods = [
  {
    id: "1",
    name: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 95,
    walkabilityScore: 92,
    safetyScore: 80,
    nightlifeScore: 95,
    familyScore: 85,
    costScore: 50,
    transitScore: 90,
    greenScore: 70,
    diversityScore: 95,
    image: "/bandra.jpg",
    description: "Trendy suburb known for its seaside promenade, cafes, nightlife, and Bollywood celebrities.",
    highlights: ["Seaside promenade", "Cafes", "Nightlife", "Shopping"],
    demographics: {
      medianAge: 32,
      medianIncome: "₹22,00,000",
      population: "150,000",
    },
    amenities: ["Parks", "Restaurants", "Boutiques", "Schools"],
    pros: ["Lively", "Great food", "Celebrity spotting"],
    cons: ["Expensive", "Traffic", "Noisy"],
  },  
  {
    id: "2",
    name: "Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 88,
    walkabilityScore: 80,
    safetyScore: 75,
    nightlifeScore: 85,
    familyScore: 80,
    costScore: 60,
    transitScore: 85,
    greenScore: 65,
    diversityScore: 90,
    image: "/adnheri-east.jpg",
    description: "Bustling business and residential hub with malls, offices, and great connectivity.",
    highlights: ["Metro", "Malls", "Offices", "Restaurants"],
    demographics: {
      medianAge: 31,
      medianIncome: "₹18,00,000",
      population: "200,000",
    },
    amenities: ["Metro", "Shopping malls", "Offices", "Schools"],
    pros: ["Well-connected", "Business hub", "Good amenities"],
    cons: ["Crowded", "Pollution", "Traffic"],
  },
  {
    id: "3",
    name: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 90,
    walkabilityScore: 85,
    safetyScore: 82,
    nightlifeScore: 80,
    familyScore: 88,
    costScore: 55,
    transitScore: 80,
    greenScore: 80,
    diversityScore: 92,
    image: "/powai.jpg",
    description: "Modern township with lakes, tech parks, and a cosmopolitan vibe.",
    highlights: ["Powai Lake", "Tech parks", "Restaurants", "Schools"],
    demographics: {
      medianAge: 30,
      medianIncome: "₹20,00,000",
      population: "120,000",
    },
    amenities: ["Lakeside", "Tech parks", "Restaurants", "Gyms"],
    pros: ["Scenic", "Modern", "Family-friendly"],
    cons: ["Expensive", "Traffic", "Flooding risk"],
  },
  {
    id: "4",
    name: "Colaba",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 85,
    walkabilityScore: 88,
    safetyScore: 78,
    nightlifeScore: 90,
    familyScore: 75,
    costScore: 45,
    transitScore: 80,
    greenScore: 60,
    diversityScore: 88,
    image: "/Colaba.jpg",
    description: "Historic area with colonial architecture, the Gateway of India, and vibrant street life.",
    highlights: ["Gateway of India", "Cafes", "Shopping", "Museums"],
    demographics: {
      medianAge: 34,
      medianIncome: "₹19,00,000",
      population: "80,000",
    },
    amenities: ["Tourist spots", "Restaurants", "Shops", "Hotels"],
    pros: ["Historic", "Touristy", "Walkable"],
    cons: ["Expensive", "Crowded", "Noisy"],
  },
  {
    id: "5",
    name: "Juhu",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 87,
    walkabilityScore: 82,
    safetyScore: 80,
    nightlifeScore: 85,
    familyScore: 90,
    costScore: 48,
    transitScore: 75,
    greenScore: 75,
    diversityScore: 90,
    image: "/juhu.jpg",
    description: "Famous for its beach, luxury hotels, and celebrity homes.",
    highlights: ["Juhu Beach", "Hotels", "Restaurants", "Schools"],
    demographics: {
      medianAge: 33,
      medianIncome: "₹21,00,000",
      population: "100,000",
    },
    amenities: ["Beach", "Hotels", "Restaurants", "Schools"],
    pros: ["Beachside", "Upscale", "Family-friendly"],
    cons: ["Expensive", "Touristy", "Traffic"],
  },
  {
    id: "6",
    name: "Lower Parel",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 83,
    walkabilityScore: 80,
    safetyScore: 76,
    nightlifeScore: 88,
    familyScore: 70,
    costScore: 52,
    transitScore: 78,
    greenScore: 68,
    diversityScore: 85,
    image: "/lower-parel.jpg",
    description: "Trendy area with high-rises, malls, and a vibrant nightlife scene.",
    highlights: ["High-rises", "Nightlife", "Malls", "Restaurants"],
    demographics: {
      medianAge: 29,
      medianIncome: "₹23,00,000",
      population: "90,000",
    },
    amenities: ["Malls", "Restaurants", "Offices", "Gyms"],
    pros: ["Trendy", "Modern", "Great nightlife"],
    cons: ["Expensive", "Crowded", "Noisy"],
  },
  {
    id: "7",
    name: "Malad West",
    city: "Mumbai",
    state: "Maharashtra",
    matchScore: 80,
    walkabilityScore: 78,
    safetyScore: 74,
    nightlifeScore: 75,
    familyScore: 85,
    costScore: 65,
    transitScore: 70,
    greenScore: 72,
    diversityScore: 80,
    image: "/malad-west.jpg",
    description: "Popular suburb with malls, residential complexes, and good connectivity.",
    highlights: ["Malls", "Residential", "Schools", "Restaurants"],
    demographics: {
      medianAge: 35,
      medianIncome: "₹16,00,000",
      population: "250,000",
    },
    amenities: ["Malls", "Schools", "Restaurants", "Parks"],
    pros: ["Affordable", "Family-friendly", "Good amenities"],
    cons: ["Traffic", "Pollution", "Crowded"],
  }
];

// Routes
app.get('/api/neighborhoods', (req, res) => {
  try {
    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        data: neighborhoods,
        count: neighborhoods.length
      });
    }, 1000);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching neighborhoods',
      error: error.message
    });
  }
});

app.get('/api/neighborhoods/:id', (req, res) => {
  try {
    const neighborhood = neighborhoods.find(n => n.id === req.params.id);
    if (!neighborhood) {
      return res.status(404).json({
        success: false,
        message: 'Neighborhood not found'
      });
    }
    res.json({
      success: true,
      data: neighborhood
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching neighborhood',
      error: error.message
    });
  }
});

app.post('/api/neighborhoods/search', (req, res) => {
  try {
    const { preferences } = req.body;
    
    // Simple filtering based on preferences
    let filteredNeighborhoods = [...neighborhoods];
    
    if (preferences) {
      if (preferences.minWalkability) {
        filteredNeighborhoods = filteredNeighborhoods.filter(
          n => n.walkabilityScore >= preferences.minWalkability
        );
      }
      if (preferences.minSafety) {
        filteredNeighborhoods = filteredNeighborhoods.filter(
          n => n.safetyScore >= preferences.minSafety
        );
      }
      if (preferences.maxCost) {
        filteredNeighborhoods = filteredNeighborhoods.filter(
          n => n.costScore <= preferences.maxCost
        );
      }
    }
    
    // Sort by match score
    filteredNeighborhoods.sort((a, b) => b.matchScore - a.matchScore);
    
    setTimeout(() => {
      res.json({
        success: true,
        data: filteredNeighborhoods,
        count: filteredNeighborhoods.length
      });
    }, 800);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching neighborhoods',
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Neighborhood API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Neighborhoods API: http://localhost:${PORT}/api/neighborhoods`);
}); 