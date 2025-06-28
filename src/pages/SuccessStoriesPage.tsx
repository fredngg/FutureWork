import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Sparkles, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  Building,
  Lightbulb,
  Rocket,
  Star,
  Heart,
  Globe,
  Zap,
  Award,
  CheckCircle,
  Clock,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  Handshake,
  Trophy,
  Crown,
  Diamond,
  Flame,
  Factory,
  Briefcase,
  Settings,
  Database
} from 'lucide-react';

const SuccessStoriesPage = () => {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page and scroll to contact section
    window.location.href = '/#contact';
  };

  const futureVision = [
    {
      icon: Factory,
      title: "Legacy System Transformation",
      description: "Helping established SMEs modernize their operations with intelligent AI workflows while preserving their core business strengths",
      timeline: "2025-2027",
      impact: "10x operational efficiency",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "SME Workforce Revolution",
      description: "Training teams at promising mid-market companies to become AI-native while maintaining their competitive edge",
      timeline: "2025-2028",
      impact: "1M+ professionals empowered",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Trust-First AI Ecosystem",
      description: "Creating a transparent AI environment where growing companies can innovate confidently without misinformation risks",
      timeline: "2025-2030",
      impact: "Safer business AI adoption",
      gradient: "from-blue-600 to-teal-500"
    },
    {
      icon: Rocket,
      title: "SME Innovation Leadership",
      description: "Positioning well-funded small and medium firms as the pioneers of responsible AI transformation",
      timeline: "2026-2029",
      impact: "New industry standards",
      gradient: "from-teal-600 to-blue-600"
    }
  ];

  const opportunityAreas = [
    {
      icon: Target,
      title: "Legacy Modernization Pioneer",
      description: "Be the first in your industry to successfully bridge traditional operations with cutting-edge AI workflows",
      benefits: ["Industry leadership", "Competitive moat", "Operational excellence", "Innovation recognition"],
      cta: "Lead Your Industry"
    },
    {
      icon: Crown,
      title: "SME Thought Leadership",
      description: "Partner with us to demonstrate how mid-market companies can outpace larger competitors through smart AI adoption",
      benefits: ["Market positioning", "Media attention", "Industry speaking", "Competitive advantage"],
      cta: "Become the Example"
    },
    {
      icon: Diamond,
      title: "Exclusive Growth Partnership",
      description: "Join our select group of well-funded SMEs who are co-creating the future of intelligent business operations",
      benefits: ["Custom solutions", "Priority access", "Strategic influence", "Growth acceleration"],
      cta: "Accelerate Growth"
    },
    {
      icon: Flame,
      title: "Innovation Catalyst",
      description: "Help us prove that the most innovative AI implementations come from agile, forward-thinking mid-market companies",
      benefits: ["Innovation leadership", "Technology preview", "Co-development", "Market disruption"],
      cta: "Disrupt Your Market"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Foundation Year",
      description: "FutureWork was founded with a vision to empower SMEs through human-AI synergy",
      status: "In Progress",
      achievements: ["Company established", "SME-focused strategy", "Core team assembled", "Initial partnerships"]
    },
    {
      year: "2026",
      title: "SME Success Stories",
      description: "Proving that mid-market companies can lead AI transformation with the right partner",
      status: "Planned",
      achievements: ["Legacy system upgrades", "Workforce transformations", "Industry case studies", "Competitive advantages"]
    },
    {
      year: "2027",
      title: "Market Leadership",
      description: "Establishing our SME partners as the gold standard for intelligent business operations",
      status: "Vision",
      achievements: ["Industry recognition", "Thought leadership", "Market expansion", "Innovation awards"]
    },
    {
      year: "2028+",
      title: "Legacy Building",
      description: "Creating lasting success stories that inspire the next generation of business transformation",
      status: "Vision",
      achievements: ["Market dominance", "Global influence", "Industry standards", "Generational impact"]
    }
  ];

  const partnershipLevels = [
    {
      level: "Pioneer",
      icon: Star,
      description: "Well-funded SMEs ready to test and validate our solutions in real business environments",
      commitment: "3-6 months",
      benefits: ["Beta access", "Custom development", "Case study prominence", "Preferred pricing"],
      investment: "Implementation & Feedback",
      idealFor: "Companies with $10M-100M revenue"
    },
    {
      level: "Catalyst",
      icon: Zap,
      description: "Established mid-market companies who want to co-develop industry-specific AI solutions",
      commitment: "6-18 months",
      benefits: ["Co-development", "Revenue sharing", "Joint go-to-market", "Strategic partnership"],
      investment: "Resources & Market Access",
      idealFor: "Companies with $50M-500M revenue"
    },
    {
      level: "Founder",
      icon: Crown,
      description: "Visionary SME leaders who want to shape the future of AI in their industry vertical",
      commitment: "18+ months",
      benefits: ["Strategic influence", "Equity opportunities", "Advisory roles", "Legacy partnership"],
      investment: "Strategic Alliance",
      idealFor: "Market leaders with growth capital"
    }
  ];

  const targetProfile = [
    {
      icon: Building,
      title: "Established SMEs",
      description: "Companies with 50-2000 employees who have proven business models but need AI transformation",
      characteristics: ["$10M-500M revenue", "Stable operations", "Growth ambitions", "Technology investment budget"]
    },
    {
      icon: Database,
      title: "Legacy System Owners",
      description: "Organizations with established systems that need intelligent modernization, not replacement",
      characteristics: ["Existing infrastructure", "Process expertise", "Modernization needs", "Integration challenges"]
    },
    {
      icon: TrendingUp,
      title: "Well-Funded Growth Companies",
      description: "SMEs with recent funding or strong cash flow ready to invest in competitive advantages",
      characteristics: ["Recent funding rounds", "Growth capital", "Expansion plans", "Innovation budget"]
    },
    {
      icon: Briefcase,
      title: "Industry Specialists",
      description: "Companies with deep domain expertise in manufacturing, professional services, or specialized industries",
      characteristics: ["Industry expertise", "Specialized knowledge", "Market position", "Operational complexity"]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                The Next Chapter
              </span>
              <br />
              <span className="text-gray-800">Starts With You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Founded in 2025, FutureWork is a new company with big ambitions. We're not here to share past victories—
              we're here to build the future's greatest success stories with promising, well-funded SMEs. The question is: 
              <strong className="text-blue-600"> Will you be the one to write them with us?</strong>
            </p>
            
            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-2xl font-bold text-blue-800">Our Bold Vision</span>
              </div>
              <p className="text-blue-700 text-xl leading-relaxed">
                We believe the most innovative AI transformations will come from agile, well-funded small and medium enterprises—
                not massive corporations. We're building the company that empowers SMEs with legacy systems to become 
                the AI leaders of tomorrow. <strong>Today, that future is SME AI transformation. Tomorrow, it will be history.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToSection}
                className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Write History With Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('opportunities')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with promising, well-funded small and medium enterprises who are ready to lead their industries through AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetProfile.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{profile.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{profile.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {profile.characteristics.map((characteristic, charIndex) => (
                      <div key={charIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{characteristic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Where We Stand Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2025, we're at the beginning of something extraordinary. Here's our journey from startup to SME transformation leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`rounded-3xl p-8 text-center border-2 ${
                milestone.status === 'In Progress' ? 'bg-blue-50 border-blue-200' :
                milestone.status === 'Planned' ? 'bg-teal-50 border-teal-200' :
                'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  milestone.status === 'In Progress' ? 'text-blue-600' :
                  milestone.status === 'Planned' ? 'text-teal-600' :
                  'text-gray-600'
                }`}>
                  {milestone.year}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                  milestone.status === 'Planned' ? 'bg-teal-100 text-teal-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {milestone.status}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                <p className="text-gray-600 mb-6">{milestone.description}</p>
                <div className="space-y-2">
                  {milestone.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 ${
                        milestone.status === 'In Progress' ? 'text-blue-500' :
                        milestone.status === 'Planned' ? 'text-teal-500' :
                        'text-gray-400'
                      }`} />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Success Stories We're Building
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just dreams—they're our roadmap. Each represents a massive opportunity 
              for the right SME partners to be part of something transformational.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futureVision.map((vision, index) => {
              const IconComponent = vision.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${vision.gradient} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{vision.title}</h3>
                      <p className="text-gray-600 text-lg">{vision.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4">
                      <div className="text-sm font-medium text-blue-600 mb-1">Timeline</div>
                      <div className="text-lg font-bold text-gray-800">{vision.timeline}</div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4">
                      <div className="text-sm font-medium text-teal-600 mb-1">Potential Impact</div>
                      <div className="text-lg font-bold text-gray-800">{vision.impact}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 text-amber-600 mr-2" />
                      <span className="text-amber-800 font-semibold">SME Partnership Opportunity Available</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section id="opportunities" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How Your SME Can Lead the AI Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for visionary SME leaders who want to be more than customers—
              they want to be co-creators of intelligent business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunityAreas.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{opportunity.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What Your SME Gains:</h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={scrollToSection}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {opportunity.cta}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Partnership Levels */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">SME Partnership Levels</h3>
              <p className="text-xl text-gray-600">Choose your level of involvement based on your company's size and ambitions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{level.level}</h4>
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 mb-6">
                      <div className="text-sm font-medium text-blue-600 mb-1">Ideal For</div>
                      <div className="text-lg font-semibold text-gray-800">{level.idealFor}</div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Commitment</div>
                        <div className="text-lg font-semibold text-gray-800">{level.commitment}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Investment</div>
                        <div className="text-lg font-semibold text-gray-800">{level.investment}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h5>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={scrollToSection}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Join as {level.level}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Handshake className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every transformational company started with bold partners who believed in the vision 
              before it became reality. The most innovative AI transformations won't come from massive corporations—
              they'll come from agile, well-funded SMEs with the courage to lead.
            </p>
            <p className="text-2xl font-bold text-white mb-8">
              FutureWork is looking for its founding SME partners.
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Question Is Simple:</h3>
            <p className="text-xl text-blue-100 mb-6">
              Do you want to watch larger competitors eventually adopt AI, 
              or do you want to be the SME that shows them how it's done?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToSection}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Start Our Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule Strategy Call
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">SME Focus</div>
              <div className="text-blue-100">Built for your scale</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Legacy Integration</div>
              <div className="text-blue-100">Preserve what works</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Market Leadership</div>
              <div className="text-blue-100">Lead your industry</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessStoriesPage;