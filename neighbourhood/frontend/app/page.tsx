import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Shield, Footprints, Coffee, ArrowRight, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans relative overflow-hidden">
      
      {/* Navigation */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              NeighborMatch
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-400 hover:text-white transition-all duration-300 font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition-all duration-300 font-medium"
            >
              How It Works
            </Link>
            <Button className="bg-white/10 hover:bg-white/20 text-white rounded-full px-6 shadow-sm border border-white/20 backdrop-blur-md transition-all">
              <Link href="/preferences" className="flex items-center gap-2 font-medium">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-4 min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Modern Vibrant Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darker overlay for seamless transition */}
          <img 
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop" 
            alt="Stunning modern neighborhood view" 
            className="w-full h-full object-cover object-center scale-105 animate-float-slow"
          />
          {/* Decorative colored blurred circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob z-0"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000 z-0"></div>
          
          {/* Seamless dark gradient fade into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="container mx-auto text-center max-w-6xl relative z-20 mt-[-5vh]">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/20 shadow-xl text-white">
              <Sparkles className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-semibold tracking-wide">AI-Powered Neighborhood Matching</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
              Find Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 drop-shadow-none">
                Perfect Home
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Discover neighborhoods that match your lifestyle with our intelligent AI system. From walkability to
              nightlife, we find communities that feel like home.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-7 rounded-full shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 border border-blue-500/50 font-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Link href="/preferences" className="flex items-center gap-3 relative z-10">
                  Start Matching
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-7 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-white/30 shadow-lg transition-all duration-300 font-medium"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 shadow-2xl">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
                  50K+
                </div>
                <div className="text-blue-200 font-medium text-sm md:text-base uppercase tracking-widest">Happy Users</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
                  1M+
                </div>
                <div className="text-blue-200 font-medium text-sm md:text-base uppercase tracking-widest">Neighborhoods</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
                  98%
                </div>
                <div className="text-blue-200 font-medium text-sm md:text-base uppercase tracking-widest">Match Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-4 bg-[#030712]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> NeighborMatch</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
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
                bg: "bg-blue-500/10",
                color: "text-blue-400",
                border: "group-hover:border-blue-500/50"
              },
              {
                icon: Shield,
                title: "Safety Ratings",
                description: "Comprehensive safety data including crime rates, lighting, and community watch programs.",
                bg: "bg-emerald-500/10",
                color: "text-emerald-400",
                border: "group-hover:border-emerald-500/50"
              },
              {
                icon: Users,
                title: "Community Vibe",
                description: "Discover the social atmosphere, from quiet residential to bustling urban communities.",
                bg: "bg-purple-500/10",
                color: "text-purple-400",
                border: "group-hover:border-purple-500/50"
              },
              {
                icon: Coffee,
                title: "Local Amenities",
                description: "Access to cafes, gyms, parks, schools, and other lifestyle essentials you care about.",
                bg: "bg-amber-500/10",
                color: "text-amber-400",
                border: "group-hover:border-amber-500/50"
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-[2rem] overflow-hidden ${feature.border}`}
              >
                <CardHeader className="text-center pb-4 pt-10 relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-white text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10 relative z-10">
                  <CardDescription className="text-gray-400 leading-relaxed text-base text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                {/* Hover gradient effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-32 px-4 bg-[#050b1a] border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Three simple steps to find your ideal neighborhood match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0 rounded-full"></div>
            {[
              {
                step: "1",
                title: "Set Preferences",
                description:
                  "Tell us what matters most to you: walkability, safety, nightlife, family-friendliness, and more.",
              },
              {
                step: "2",
                title: "AI Analysis",
                description:
                  "Our algorithm analyzes thousands of data points to find neighborhoods that match your lifestyle.",
              },
              {
                step: "3",
                title: "Discover Matches",
                description:
                  "Explore personalized recommendations with detailed insights, photos, and interactive maps.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group relative z-10 px-4">
                <div className="relative mb-10 flex justify-center">
                  <div className="w-24 h-24 bg-[#030712] border border-blue-500/30 text-blue-400 rounded-full flex items-center justify-center text-3xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-500">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-32 px-4 bg-[#030712] border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">What Our Users Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer",
                content:
                  "NeighborMatch helped me find the perfect walkable neighborhood in Portland. The AI recommendations were spot-on!",
                rating: 5,
                initial: "S",
                color: "bg-purple-500/20 text-purple-300 border border-purple-500/30"
              },
              {
                name: "Mike Chen",
                role: "Marketing Director",
                content:
                  "As a new parent, finding a family-friendly area was crucial. This platform made it so easy to compare safety and school ratings.",
                rating: 5,
                initial: "M",
                color: "bg-blue-500/20 text-blue-300 border border-blue-500/30"
              },
              {
                name: "Emily Rodriguez",
                role: "Graphic Designer",
                content:
                  "I love the nightlife scene, and NeighborMatch found me the perfect spot with amazing restaurants and bars nearby.",
                rating: 5,
                initial: "E",
                color: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 rounded-[2rem] overflow-hidden"
              >
                <CardContent className="p-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 bg-[#030712]">
        <div className="container mx-auto text-center max-w-7xl">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-[3rem] p-16 md:p-24 border border-white/10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to Find Your <br/>Perfect Neighborhood?</h2>
              <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Join thousands of users who have found their ideal community with NeighborMatch.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-12 py-7 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300 border border-blue-400/50 font-medium group"
              >
                <Link href="/preferences" className="flex items-center gap-3">
                  Start Your Search
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            {/* Subtle decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl mix-blend-screen"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl mix-blend-screen"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#02040a] border-t border-white/5 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-5 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-7 w-7 text-blue-500" />
                <span className="text-2xl font-bold text-white tracking-tight">
                  NeighborMatch
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Helping you find the perfect neighborhood that matches your lifestyle with AI-powered recommendations.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-8">
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
                  <h3 className="font-semibold text-white mb-6 text-lg">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium text-sm">
            <p>&copy; 2024 NeighborMatch. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
