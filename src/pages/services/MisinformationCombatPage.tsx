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
  Activity,
  Heart,
  Lightbulb,
  Code
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

  const responsibilityPillars = [
    {
      icon: Eye,
      title: "Transparency First",
      description: "Open development processes, clear AI capabilities documentation, and honest communication about limitations",
      principles: ["Open source contributions", "Clear AI model documentation", "Transparent decision-making", "Public research sharing"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Ethical Tools",
      description: "Building AI systems with built-in safeguards, bias detection, and ethical guidelines at their core",
      principles: ["Bias detection systems", "Ethical AI frameworks", "Safety-first design", "Human oversight protocols"],
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "Human-Centric Impact",
      description: "Ensuring AI development serves humanity's best interests and contributes to societal progress",
      principles: ["Human welfare priority", "Inclusive development", "Social impact assessment", "Community engagement"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Responsibility",
      description: "Taking accountability for AI's global impact and working to prevent misuse across all applications",
      principles: ["International cooperation", "Cross-cultural considerations", "Global standards advocacy", "Responsible deployment"],
      gradient: "from-amber-500 to-amber-600"
    }
  ];

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
      title: "AI Transparency Tools",
      description: "Systems that make AI decision-making processes visible and understandable to users",
      features: ["Decision pathway visualization", "Confidence scoring", "Source attribution", "Bias detection alerts"],
      accuracy: "Transparency"
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
      title: "Ethical AI Frameworks",
      description: "Comprehensive frameworks for developing and deploying AI systems responsibly",
      features: ["Ethics assessment tools", "Bias monitoring systems", "Impact evaluation metrics", "Stakeholder feedback loops"],
      accuracy: "Framework"
    },
    {
      icon: Brain,
      title: "Misinformation Detection",
      description: "Advanced AI systems specifically designed to identify and flag potentially harmful misinformation",
      features: ["Deepfake detection", "Manipulated content analysis", "Coordinated behavior detection", "Emotional manipulation alerts"],
      accuracy: "90%+"
    }
  ];

  const timeline = [
    {
      phase: "Foundation & Research",
      period: "Q1-Q2 2025",
      status: "In Progress",
      description: "Building core transparency frameworks and conducting fundamental research on ethical AI development",
      deliverables: ["AI transparency dashboard", "Ethical development guidelines", "Research publications", "Open source tool releases"],
      progress: 65
    },
    {
      phase: "Detection Tools Development",
      period: "Q3 2025",
      status: "Planned",
      description: "Developing advanced misinformation detection algorithms and transparency reporting systems",
      deliverables: ["Deepfake detection models", "Content verification systems", "Transparency reporting tools", "Beta testing framework"],
      progress: 0
    },
    {
      phase: "Beta Platform Launch",
      period: "Q4 2025",
      status: "Planned",
      description: "Limited beta release with select partners to test detection capabilities and transparency features",
      deliverables: ["Beta platform launch", "Partner onboarding", "Feedback collection system", "Performance optimization"],
      progress: 0
    },
    {
      phase: "Public Platform Release",
      period: "Q1 2026",
      status: "Roadmap",
      description: "Full public release with comprehensive transparency and detection capabilities for all users",
      deliverables: ["Public platform launch", "API access with transparency", "Educational resources", "User documentation"],
      progress: 0
    },
    {
      phase: "Advanced AI Ethics Tools",
      period: "Q2 2026",
      status: "Roadmap",
      description: "Enhanced AI ethics monitoring and real-time transparency systems with predictive capabilities",
      deliverables: ["Real-time ethics monitoring", "Advanced transparency analytics", "Predictive bias detection", "Automated compliance tools"],
      progress: 0
    },
    {
      phase: "Enterprise Integration",
      period: "Q3 2026",
      status: "Roadmap",
      description: "Enterprise-grade solutions with custom integrations and advanced security features",
      deliverables: ["Enterprise API suite", "Custom integration tools", "Advanced security features", "White-label solutions"],
      progress: 0
    },
    {
      phase: "Global Standards Initiative",
      period: "Q4 2026",
      status: "Roadmap",
      description: "International collaboration on AI transparency standards and cross-platform misinformation combat",
      deliverables: ["Global standards framework", "International partnerships", "Cross-platform transparency", "Regulatory compliance tools"],
      progress: 0
    }
  ];

  const stats = [
    { number: "$78B", label: "Annual global losses to AI-enabled fraud", source: "Cybersecurity Ventures" },
    { number: "73%", label: "Increase in deepfake incidents in 2024", source: "Deeptrace Research" },
    { number: "89%", label: "Of people want AI transparency", source: "AI Ethics Survey 2024" },
    { number: "3.2B", label: "Fake accounts detected across platforms", source: "Social Media Analytics" }
  ];

  const targetAudiences = [
    {
      title: "Technology Companies",
      icon: Code,
      description: "AI companies and tech organizations committed to responsible development and transparency",
      needs: ["Ethical development frameworks", "Transparency tools", "Bias detection systems", "Responsible AI governance"]
    },
    {
      title: "Government Agencies",
      icon: Shield,
      description: "Public sector organizations working to regulate and promote responsible AI development",
      needs: ["Policy development tools", "Compliance monitoring", "Public safety measures", "Regulatory frameworks"]
    },
    {
      title: "Educational Institutions",
      icon: Users,
      description: "Universities and research institutions advancing ethical AI research and education",
      needs: ["Research collaboration", "Educational resources", "Ethics curriculum", "Student protection tools"]
    },
    {
      title: "Research Organizations",
      icon: Lightbulb,
      description: "Think tanks and research bodies studying AI's societal impact and developing best practices",
      needs: ["Research tools", "Data transparency", "Impact assessment", "Collaborative platforms"]
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
              <Shield className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Responsible AI Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Transparency & Tools
              </span>
              <br />
              <span className="text-gray-800">for Ethical AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              As an AI company, we believe in our responsibility to advance mankind through transparent, 
              ethical AI development. We're building tools and frameworks that combat misinformation 
              while promoting responsible AI practices across the industry.
            </p>
            
            {/* Development Status Banner */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-600 mr-3" />
                <span className="text-lg font-semibold text-amber-800">Currently in Development</span>
              </div>
              <p className="text-amber-700 text-lg">
                Our responsible AI platform and misinformation combat tools are under active development. 
                Join our community to be among the first to access these critical transparency and detection tools.
              </p>
            </div>

            {/* Mission Statement Banner */}
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-blue-800">Our Commitment to Humanity</span>
              </div>
              <p className="text-blue-700 text-lg">
                We recognize that with great AI capabilities comes great responsibility. Our mission is to ensure 
                AI development serves humanity's best interests through transparency, ethical tools, and proactive 
                measures against misuse.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('responsibility')}
                className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Explore Our Approach
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                View Development Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Pillars */}
      <section id="responsibility" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Pillars of Responsible AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental principles that guide our AI development and ensure positive impact for humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responsibilityPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{pillar.description}</p>
                  
                  <div className="space-y-3">
                    {pillar.principles.map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Need for Responsible AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The rapid advancement of AI technology brings both opportunities and challenges that require immediate attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/50">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AI Misuse We're Combating
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the threats helps us build better defenses and educate the public about AI risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Detection Tools */}
      <section id="tools" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Transparency & Detection Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools that promote transparency in AI development while detecting and preventing misuse
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detectionTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
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
                    <div className="text-sm font-medium text-green-600 mb-1">
                      {tool.accuracy.includes('%') ? 'Detection Accuracy' : 'Focus Area'}
                    </div>
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
              Development Roadmap: 2025-2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive two-year commitment to responsible AI development through transparent milestones and deliverables
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white rounded-2xl p-8 border-2 ${phase.status === 'In Progress' ? 'border-blue-200 bg-blue-50/50' : 'border-gray-200'} ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          phase.status === 'Planned' ? 'bg-teal-100 text-teal-700' :
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
                            <span className="text-sm font-medium text-blue-600">{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
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
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full items-center justify-center mx-8 flex-shrink-0 z-10">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Partners in Responsible AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations and institutions committed to ethical AI development and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{audience.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{audience.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Collaboration Areas</h4>
                    <ul className="space-y-2">
                      {audience.needs.map((need, needIndex) => (
                        <li key={needIndex} className="flex items-center text-gray-600">
                          <Target className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Responsible AI Movement
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Together, we can ensure AI development serves humanity's best interests. Partner with us 
              to build transparent, ethical AI systems that advance mankind while preventing misuse.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Download Framework
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">Open Source</div>
              <div className="text-blue-100">Transparent development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Global Impact</div>
              <div className="text-blue-100">Worldwide collaboration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Human-First</div>
              <div className="text-blue-100">Humanity-centered AI</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MisinformationCombatPage;