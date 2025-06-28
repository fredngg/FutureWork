import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Code,
  Briefcase,
  Brain,
  Lock,
  Zap,
  Target,
  BookOpen,
  Award,
  TrendingUp,
  AlertTriangle,
  Database,
  Network,
  Lightbulb,
  UserCheck,
  Settings,
  Globe,
  Layers,
  FileText,
  Monitor,
  Clock
} from 'lucide-react';

const AIEducationPage = () => {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page and scroll to contact section
    window.location.href = '/#contact';
  };

  const trainingTracks = [
    {
      title: "Technical Professionals",
      subtitle: "Developers, Engineers & IT Teams",
      icon: Code,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50",
      description: "Advanced training for technical teams on secure AI implementation, MCP protocols, and enterprise-grade AI development.",
      modules: [
        "Secure AI Development Practices",
        "Model Context Protocol (MCP) Implementation",
        "AI Agent Architecture & Design",
        "Enterprise AI Security & Compliance",
        "API Integration & Data Protection",
        "AI Testing & Quality Assurance"
      ],
      outcomes: [
        "Build secure AI applications",
        "Implement MCP protocols safely",
        "Maintain data privacy standards",
        "Deploy enterprise AI solutions"
      ],
      duration: "6-8 weeks",
      format: "Hands-on workshops + certification"
    },
    {
      title: "Business Professionals",
      subtitle: "Marketing, Sales, Operations & Leadership",
      icon: Briefcase,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100/50",
      description: "Practical AI literacy training focused on productivity tools, data protection, and strategic AI adoption for business teams.",
      modules: [
        "AI Productivity Tools Mastery",
        "Data Privacy & Security Awareness",
        "Prompt Engineering for Business",
        "AI Ethics & Bias Recognition",
        "Strategic AI Implementation",
        "ROI Measurement & Optimization"
      ],
      outcomes: [
        "Leverage AI tools effectively",
        "Protect sensitive company data",
        "Make informed AI decisions",
        "Drive business value with AI"
      ],
      duration: "4-6 weeks",
      format: "Interactive sessions + practical exercises"
    },
    {
      title: "Leadership & Strategy",
      subtitle: "C-Suite, Directors & Decision Makers",
      icon: Target,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50",
      description: "Executive-level training on AI strategy, governance, risk management, and organizational transformation.",
      modules: [
        "AI Strategy & Roadmap Development",
        "AI Governance & Risk Management",
        "Change Management for AI Adoption",
        "AI Investment & ROI Analysis",
        "Regulatory Compliance & Ethics",
        "Future-Proofing Your Organization"
      ],
      outcomes: [
        "Develop AI strategy",
        "Manage AI risks effectively",
        "Lead organizational change",
        "Maximize AI investments"
      ],
      duration: "3-4 weeks",
      format: "Executive workshops + strategic planning"
    }
  ];

  const keyTopics = [
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Learn to protect sensitive information while leveraging AI tools",
      points: ["Data classification", "Secure AI workflows", "Privacy compliance", "Risk assessment"]
    },
    {
      icon: Brain,
      title: "AI Tool Mastery",
      description: "Comprehensive training on the latest AI tools and platforms",
      points: ["ChatGPT & Claude", "Midjourney & DALL-E", "Copilot & CodeWhisperer", "Custom AI solutions"]
    },
    {
      icon: AlertTriangle,
      title: "Ethics & Bias Awareness",
      description: "Understanding AI limitations, biases, and ethical considerations",
      points: ["Bias detection", "Ethical AI use", "Transparency", "Accountability"]
    },
    {
      icon: TrendingUp,
      title: "Productivity Optimization",
      description: "Maximize efficiency while maintaining quality and security",
      points: ["Workflow automation", "Task prioritization", "Quality control", "Performance metrics"]
    }
  ];

  const certificationLevels = [
    {
      level: "Foundation",
      title: "AI Literacy Certified",
      description: "Basic understanding of AI tools and safe usage practices",
      duration: "2 weeks",
      badge: "🥉"
    },
    {
      level: "Professional",
      title: "AI Practitioner Certified",
      description: "Advanced skills in AI tool usage and business application",
      duration: "4-6 weeks",
      badge: "🥈"
    },
    {
      level: "Expert",
      title: "AI Strategist Certified",
      description: "Leadership-level expertise in AI strategy and implementation",
      duration: "8-10 weeks",
      badge: "🥇"
    }
  ];

  const businessUseCases = [
    {
      department: "Marketing",
      icon: Target,
      challenges: ["Content creation bottlenecks", "Campaign personalization", "Data analysis complexity"],
      solutions: ["AI-powered content generation", "Automated A/B testing", "Predictive analytics"],
      tools: ["ChatGPT for copywriting", "Midjourney for visuals", "Claude for strategy"],
      safety: ["Brand voice consistency", "Copyright compliance", "Data anonymization"]
    },
    {
      department: "Sales",
      icon: TrendingUp,
      challenges: ["Lead qualification", "Proposal creation", "Customer insights"],
      solutions: ["Intelligent lead scoring", "Automated proposal generation", "Conversation analysis"],
      tools: ["Salesforce Einstein", "HubSpot AI", "Gong.io"],
      safety: ["Customer data protection", "Compliance tracking", "Secure communications"]
    },
    {
      department: "Operations",
      icon: Settings,
      challenges: ["Process optimization", "Resource allocation", "Quality control"],
      solutions: ["Workflow automation", "Predictive maintenance", "Quality assurance"],
      tools: ["Process mining AI", "Predictive analytics", "Automation platforms"],
      safety: ["Operational security", "Data integrity", "System reliability"]
    },
    {
      department: "Human Resources",
      icon: Users,
      challenges: ["Recruitment efficiency", "Employee engagement", "Performance analysis"],
      solutions: ["Resume screening", "Sentiment analysis", "Performance insights"],
      tools: ["LinkedIn Talent Insights", "Culture Amp", "Workday AI"],
      safety: ["Bias prevention", "Privacy protection", "Fair hiring practices"]
    }
  ];

  const stats = [
    { number: "73%", label: "of executives say AI skills are critical for their workforce", source: "IBM Global AI Adoption Index" },
    { number: "2.6B", label: "people will need reskilling by 2030", source: "World Economic Forum" },
    { number: "85%", label: "of jobs will be transformed by AI", source: "Future of Jobs Report" },
    { number: "40%", label: "productivity increase with proper AI training", source: "McKinsey Global Institute" }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">AI-Proofing Education & Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-gray-800">Workforce Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive training programs that equip your team with AI literacy, critical thinking, 
              and secure collaboration skills for the AI-driven future. From technical MCP implementation 
              to business AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToSection}
                className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Start Training Program
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Urgency of AI Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI revolution is happening now. Organizations that invest in AI education today will lead tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tracks */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tailored Training Tracks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed for different roles and skill levels within your organization
            </p>
          </div>

          <div className="space-y-16">
            {trainingTracks.map((track, index) => {
              const IconComponent = track.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${track.bgGradient} rounded-3xl p-8 lg:p-12`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${track.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{track.title}</h3>
                      <p className="text-lg text-gray-600 mb-4 font-medium">{track.subtitle}</p>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">{track.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {track.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="text-gray-600">{track.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="text-gray-600">{track.format}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={scrollToSection}
                        className={`group bg-gradient-to-r ${track.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <h4 className="text-xl font-semibold text-gray-800 mb-6">Learning Outcomes</h4>
                      <div className="space-y-4">
                        {track.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Core Training Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential knowledge areas that every AI-ready professional needs to master
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg">{topic.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {topic.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Department-Specific Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical AI applications tailored to each department's unique needs and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessUseCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{useCase.department}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                        Current Challenges
                      </h4>
                      <ul className="space-y-2">
                        {useCase.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
                        AI Solutions
                      </h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center text-gray-600">
                            <Zap className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Monitor className="w-5 h-5 text-teal-500 mr-2" />
                        Tools & Platforms
                      </h4>
                      <ul className="space-y-2">
                        {useCase.tools.map((tool, toolIndex) => (
                          <li key={toolIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Shield className="w-5 h-5 text-purple-500 mr-2" />
                        Safety & Compliance
                      </h4>
                      <ul className="space-y-2">
                        {useCase.safety.map((safety, safetyIndex) => (
                          <li key={safetyIndex} className="flex items-center text-gray-600">
                            <Lock className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                            {safety}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Professional Certification Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning paths with industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationLevels.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 text-center relative">
                <div className="text-6xl mb-4">{cert.badge}</div>
                <div className="text-sm font-medium text-blue-600 mb-2">{cert.level}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{cert.title}</h3>
                <p className="text-gray-700 mb-6">{cert.description}</p>
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">{cert.duration}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <GraduationCap className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Future-Proof Your Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let the AI revolution leave your organization behind. Invest in comprehensive AI education 
              that prepares your team for success in the AI-driven future.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToSection}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Start Training Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Download Training Guide
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Professionals trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Completion rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Learning support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIEducationPage;