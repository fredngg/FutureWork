import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Eye,
  Zap,
  Target,
  TrendingUp,
  Bot,
  Network,
  Sparkles,
  Globe,
  Lock,
  Search,
  FileText,
  Camera,
  Phone,
  CreditCard,
  Briefcase,
  UserX,
  Clock,
  Calendar,
  Mail,
  Bell,
  Database,
  Brain,
  Layers,
  Settings,
  Monitor,
  Activity
} from 'lucide-react';

const MisinformationCombatPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const threatTypes = [
    {
      icon: UserX,
      title: "Identity Impersonation",
      description: "AI-generated deepfakes and voice clones used to impersonate executives, celebrities, and trusted figures",
      examples: ["CEO fraud schemes", "Celebrity endorsement scams", "Political figure manipulation", "Family emergency scams"],
      impact: "Billions in financial losses annually",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Briefcase,
      title: "Recruitment & Job Fraud",
      description: "Sophisticated fake job postings and recruitment scams using AI to appear legitimate and professional",
      examples: ["Fake remote job offers", "Advance fee employment scams", "Identity theft via applications", "Cryptocurrency job scams"],
      impact: "Millions of job seekers affected",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: CreditCard,
      title: "Financial Scams",
      description: "AI-powered investment fraud, cryptocurrency scams, and sophisticated phishing operations",
      examples: ["AI trading bot scams", "Fake investment platforms", "Romance scams with AI personas", "Loan advance fee fraud"],
      impact: "$10+ billion in annual losses",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      icon: Phone,
      title: "Voice & Communication Fraud",
      description: "Real-time voice cloning and AI-generated communications for social engineering attacks",
      examples: ["Grandparent scams", "Emergency fund requests", "Business email compromise", "Fake customer service"],
      impact: "Exponentially growing threat",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const detectionTools = [
    {
      icon: Eye,
      title: "Deepfake Detection",
      description: "Advanced AI models that analyze facial movements, lighting inconsistencies, and temporal artifacts",
      features: ["Real-time video analysis", "Audio-visual synchronization checks", "Biometric inconsistency detection", "Temporal artifact analysis"],
      accuracy: "95%+"
    },
    {
      icon: Search,
      title: "Content Verification",
      description: "Multi-source verification systems that cross-reference claims and detect fabricated information",
      features: ["Source credibility scoring", "Fact-checking automation", "Cross-platform verification", "Historical data comparison"],
      accuracy: "92%+"
    },
    {
      icon: Network,
      title: "Pattern Recognition",
      description: "Machine learning systems that identify coordinated inauthentic behavior and bot networks",
      features: ["Behavioral pattern analysis", "Network topology mapping", "Coordinated activity detection", "Bot identification"],
      accuracy: "88%+"
    },
    {
      icon: Brain,
      title: "Semantic Analysis",
      description: "Natural language processing to detect manipulative language patterns and emotional manipulation",
      features: ["Sentiment manipulation detection", "Persuasion technique analysis", "Emotional trigger identification", "Linguistic pattern matching"],
      accuracy: "90%+"
    }
  ];

  const timeline = [
    {
      phase: "Research & Development",
      period: "Q1-Q2 2025",
      status: "In Progress",
      description: "Building core detection algorithms and training datasets",
      deliverables: ["Deepfake detection models", "Pattern recognition systems", "Initial testing framework"],
      progress: 65
    },
    {
      phase: "Beta Testing",
      period: "Q3 2025",
      status: "Planned",
      description: "Limited beta release with select partners and organizations",
      deliverables: ["Beta platform launch", "Partner feedback integration", "Performance optimization"],
      progress: 0
    },
    {
      phase: "Public Launch",
      period: "Q4 2025",
      status: "Planned",
      description: "Full public release with comprehensive detection capabilities",
      deliverables: ["Public platform launch", "API access", "Enterprise solutions"],
      progress: 0
    },
    {
      phase: "Advanced Features",
      period: "Q1-Q2 2026",
      status: "Roadmap",
      description: "Enhanced AI capabilities and real-time monitoring systems",
      deliverables: ["Real-time monitoring", "Advanced analytics", "Predictive threat detection"],
      progress: 0
    },
    {
      phase: "Global Expansion",
      period: "Q3-Q4 2026",
      status: "Roadmap",
      description: "International deployment and multi-language support",
      deliverables: ["Multi-language detection", "Regional partnerships", "Global threat intelligence"],
      progress: 0
    }
  ];

  const stats = [
    { number: "$78B", label: "Annual global losses to AI-enabled fraud", source: "Cybersecurity Ventures" },
    { number: "73%", label: "Increase in deepfake incidents in 2024", source: "Deeptrace Research" },
    { number: "96%", label: "Of deepfakes are used maliciously", source: "Sensity AI Report" },
    { number: "3.2B", label: "Fake accounts detected across platforms", source: "Social Media Analytics" }
  ];

  const targetAudiences = [
    {
      title: "Media Organizations",
      icon: FileText,
      description: "News outlets and journalists need tools to verify content authenticity and combat misinformation",
      needs: ["Content verification", "Source authentication", "Real-time fact-checking", "Editorial workflow integration"]
    },
    {
      title: "Government Agencies",
      icon: Shield,
      description: "Public sector organizations combating election interference and public safety threats",
      needs: ["Threat monitoring", "Public communication verification", "Crisis response tools", "Inter-agency coordination"]
    },
    {
      title: "Educational Institutions",
      icon: Users,
      description: "Schools and universities protecting students and promoting media literacy",
      needs: ["Student protection", "Educational resources", "Research tools", "Campus safety measures"]
    },
    {
      title: "Financial Institutions",
      icon: CreditCard,
      description: "Banks and financial services protecting customers from AI-powered fraud",
      needs: ["Customer verification", "Fraud detection", "Risk assessment", "Compliance monitoring"]
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 mb-6">
              <Shield className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Combating AI Misinformation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Fighting Back
              </span>
              <br />
              <span className="text-gray-800">Against AI Deception</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              AI is being weaponized for impersonation, recruitment fraud, and sophisticated scams. 
              We're developing cutting-edge detection tools and strategies to protect individuals and organizations 
              in this escalating cat-and-mouse game.
            </p>
            
            {/* Development Status Banner */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-600 mr-3" />
                <span className="text-lg font-semibold text-amber-800">Currently in Development</span>
              </div>
              <p className="text-amber-700 text-lg">
                Our misinformation combat platform is under active development. Join our waiting list to be 
                among the first to access these critical protection tools when they launch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="group bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Join Waiting List
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300"
              >
                View Development Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Growing Threat Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered deception is evolving rapidly, creating unprecedented challenges for individuals and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {threatTypes.map((threat, index) => {
              const IconComponent = threat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${threat.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{threat.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{threat.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Common Examples:</h4>
                    <ul className="space-y-2">
                      {threat.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-600">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-sm font-medium text-red-600 mb-1">Impact Scale</div>
                    <div className="text-lg font-bold text-gray-800">{threat.impact}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center border border-red-100">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Tools */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced Detection Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered approach combines cutting-edge AI with human expertise to identify and combat misinformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detectionTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{tool.title}</h3>
                      <p className="text-gray-600 text-lg">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="text-sm font-medium text-green-600 mb-1">Detection Accuracy</div>
                    <div className="text-2xl font-bold text-green-700">{tool.accuracy}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap to delivering comprehensive misinformation combat tools through 2026
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white rounded-2xl p-8 border-2 ${phase.status === 'In Progress' ? 'border-orange-200 bg-orange-50/50' : 'border-gray-200'} ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                          phase.status === 'Planned' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {phase.status}
                        </div>
                        <div className="text-sm font-medium text-gray-500">{phase.period}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{phase.phase}</h3>
                      <p className="text-gray-600 text-lg mb-6">{phase.description}</p>
                      
                      {phase.status === 'In Progress' && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Progress</span>
                            <span className="text-sm font-medium text-orange-600">{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Deliverables</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase indicator */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full items-center justify-center mx-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 lg:pl-8">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who We're Building For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations and institutions on the front lines of the misinformation battle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{audience.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{audience.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Needs</h4>
                    <ul className="space-y-2">
                      {audience.needs.map((need, needIndex) => (
                        <li key={needIndex} className="flex items-center text-gray-600">
                          <Target className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waiting List */}
      <section id="waitlist" className="py-20 bg-gradient-to-br from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Bell className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Fight Against AI Misinformation
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Be among the first to access our misinformation combat tools when they launch. 
              Get early access, beta testing opportunities, and exclusive updates on our progress.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-red-100">We'll notify you as soon as our tools are ready for testing.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Waiting List</h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <p className="text-red-100 text-sm mt-4">
                No spam, just important updates about our misinformation combat tools.
              </p>
            </form>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">Q4 2025</div>
              <div className="text-red-100">Expected launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Beta Access</div>
              <div className="text-red-100">Early testing opportunities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Priority Support</div>
              <div className="text-red-100">Dedicated assistance</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MisinformationCombatPage;