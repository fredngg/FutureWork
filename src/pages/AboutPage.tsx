import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  TrendingUp, 
  Users, 
  Brain, 
  Zap, 
  Globe, 
  Award,
  Building,
  Code,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page and scroll to contact section
    window.location.href = '/#contact';
  };

  const stats = [
    { number: "85%", label: "of jobs will be transformed by AI by 2030", source: "World Economic Forum" },
    { number: "40%", label: "productivity increase with AI-human collaboration", source: "McKinsey Global Institute" },
    { number: "97M", label: "new AI-related jobs expected by 2025", source: "Future of Jobs Report" },
    { number: "2.6B", label: "people will need reskilling by 2030", source: "World Economic Forum" }
  ];

  const timeline = [
    { year: "2020-2022", title: "AI Awakening", description: "ChatGPT and generative AI enter mainstream consciousness" },
    { year: "2023-2025", title: "Integration Phase", description: "Businesses rapidly adopt AI tools and workflows" },
    { year: "2025-2027", title: "Transformation Era", description: "Fundamental restructuring of work processes" },
    { year: "2027-2030", title: "New Equilibrium", description: "Human-AI collaboration becomes the standard" }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-6">
              <span className="text-sm font-medium text-gray-700">FutureWork by TechWeave</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                The AI Revolution
              </span>
              <br />
              <span className="text-gray-800">Is Already Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Artificial Intelligence isn't coming to transform work—it's happening now. 
              The question isn't whether AI will change everything, but whether you'll be ready.
            </p>
          </div>
        </div>
      </section>

      {/* The Unstoppable Momentum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              An Unstoppable Force of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're witnessing the most significant workplace transformation since the Industrial Revolution. 
              This momentum cannot and will not be stopped.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why This Time Is Different</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Exponential Capability Growth</h4>
                    <p className="text-gray-600">AI capabilities are doubling every 6 months, not years. What seemed impossible yesterday is routine today.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Universal Accessibility</h4>
                    <p className="text-gray-600">Unlike previous technologies, AI tools are immediately accessible to everyone, democratizing advanced capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Cognitive Automation</h4>
                    <p className="text-gray-600">For the first time, machines can perform cognitive tasks—thinking, reasoning, and creating—not just physical labor.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">The Numbers Don't Lie</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">The Transformation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                    <div className="text-sm font-semibold text-blue-600 mb-2">{phase.year}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{phase.title}</h4>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the charge in responsible AI adoption with deep enterprise experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl font-bold text-white">FN</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Fred Ng</h3>
                  <p className="text-lg text-gray-600">Founder</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "Having spent nearly a decade architecting enterprise solutions at scale, I've witnessed firsthand 
                how technology can transform organizations. But AI is different—it's not just changing what we do, 
                it's changing how we think about work itself."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Data and AI Strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Solution Architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Digital Transformation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Startup Leadership</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Salesforce</h4>
                    <p className="text-gray-600">Solution Architect • 7 Years</p>
                  </div>
                </div>
                <p className="text-gray-700">Led enterprise implementations for companies across Asia, ranging from banks to telcos and FMCG companies.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Amazon Web Services & Accenture</h4>
                    <p className="text-gray-600">Internships • 1+ Year</p>
                  </div>
                </div>
                <p className="text-gray-700">Two internships spanning over a year learning about running global marketing programs, change management and software development.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Digital Marketing Agency (JF Times LLP)</h4>
                    <p className="text-gray-600">Founder • Successful Exit</p>
                  </div>
                </div>
                <p className="text-gray-700">Specialized in marketing automation, direct-response advertising, and conversion optimization, building a data-driven approach to customer acquisition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't let the AI revolution happen to you—be part of shaping it. 
            Join organizations worldwide who are proactively preparing for the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToSection}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Download Our AI Readiness Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;