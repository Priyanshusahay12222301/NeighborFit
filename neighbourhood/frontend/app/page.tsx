import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Shield, Footprints, Coffee, ArrowRight, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <MapPin className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-300/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NeighborMatch
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
            >
              How It Works
            </Link>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link href="/preferences" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white/90 text-sm">AI-Powered Neighborhood Matching</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Perfect Home
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover neighborhoods that match your lifestyle with our intelligent AI system. From walkability to
              nightlife, we find communities that feel like home.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0"
              >
                <Link href="/preferences" className="flex items-center gap-3">
                  Start Matching
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-6 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-white/60">Happy Users</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  1M+
                </div>
                <div className="text-white/60">Neighborhoods</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-white/60">Match Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                NeighborMatch
              </span>
              ?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our intelligent matching system considers multiple factors to find neighborhoods that truly fit your
              lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Footprints,
                title: "Walkability Score",
                description:
                  "Find neighborhoods where you can walk to daily amenities, restaurants, and entertainment.",
                color: "from-blue-500 to-cyan-500",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Safety Ratings",
                description: "Comprehensive safety data including crime rates, lighting, and community watch programs.",
                color: "from-green-500 to-emerald-500",
                delay: "200ms",
              },
              {
                icon: Users,
                title: "Community Vibe",
                description: "Discover the social atmosphere, from quiet residential to bustling urban communities.",
                color: "from-purple-500 to-pink-500",
                delay: "400ms",
              },
              {
                icon: Coffee,
                title: "Local Amenities",
                description: "Access to cafes, gyms, parks, schools, and other lifestyle essentials you care about.",
                color: "from-orange-500 to-red-500",
                delay: "600ms",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Three simple steps to find your ideal neighborhood match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Set Preferences",
                description:
                  "Tell us what matters most to you: walkability, safety, nightlife, family-friendliness, and more.",
                delay: "0ms",
              },
              {
                step: "2",
                title: "AI Analysis",
                description:
                  "Our algorithm analyzes thousands of data points to find neighborhoods that match your lifestyle.",
                delay: "300ms",
              },
              {
                step: "3",
                title: "Discover Matches",
                description:
                  "Explore personalized recommendations with detailed insights, photos, and interactive maps.",
                delay: "600ms",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: item.delay }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">What Our Users Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer",
                content:
                  "NeighborMatch helped me find the perfect walkable neighborhood in Portland. The AI recommendations were spot-on!",
                rating: 5,
                delay: "0ms",
              },
              {
                name: "Mike Chen",
                role: "Marketing Director",
                content:
                  "As a new parent, finding a family-friendly area was crucial. This platform made it so easy to compare safety and school ratings.",
                rating: 5,
                delay: "200ms",
              },
              {
                name: "Emily Rodriguez",
                role: "Graphic Designer",
                content:
                  "I love the nightlife scene, and NeighborMatch found me the perfect spot with amazing restaurants and bars nearby.",
                rating: 5,
                delay: "400ms",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: testimonial.delay }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-16 border border-white/10 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Find Your Perfect Neighborhood?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Join thousands of users who have found their ideal community with NeighborMatch.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border-0"
            >
              <Link href="/preferences" className="flex items-center gap-3">
                Start Your Search
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeighborMatch
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">
                Helping you find the perfect neighborhood that matches your lifestyle with AI-powered recommendations.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "How It Works", "Pricing", "API"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 NeighborMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
