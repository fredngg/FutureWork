import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Workflow, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Users, 
  BarChart3,
  Clock,
  Shield,
  Cog,
  Building,
  TrendingUp,
  Bot,
  Network,
  Sparkles,
  Target,
  Layers,
  GitBranch,
  Brain
} from 'lucide-react';

const AgenticWorkflowsPage = () => {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page and scroll to contact section
    window.location.href = '/#contact';
  };

  const platforms = [
    {
      name: "Agentforce by Salesforce",
      description: "Enterprise-grade AI agents for customer service, sales, and operations",
      features: ["CRM Integration", "Customer Service Automation", "Sales Process Optimization", "Data-Driven Insights"],
      icon: Building,
      gradient: "from-blue-500 to-blue-600",
      category: "Enterprise"
    },
    {
      name: "A2A Protocol by Google",
      description: "Agent-to-agent communication protocol for seamless AI collaboration",
      features: ["Multi-Agent Coordination", "Cross-Platform Communication", "Scalable Architecture", "Real-time Synchronization"],
      icon: Network,
      gradient: "from-green-500 to-green-600",
      category: "Infrastructure"
    },
    {
      name: "MCP by Claude",
      description: "Model Context Protocol for enhanced AI agent capabilities and context sharing",
      features: ["Context Preservation", "Enhanced Reasoning", "Multi-Modal Processing", "Adaptive Learning"],
      icon: Brain,
      gradient: "from-purple-500 to-purple-600",
      category: "AI Enhancement"
    },
    {
      name: "n8n Workflows",
      description: "Visual workflow automation platform for intelligent process orchestration",
      features: ["Visual Workflow Builder", "API Integrations", "Custom Logic", "Monitoring & Analytics"],
      icon: GitBranch,
      gradient: "from-teal-500 to-teal-600",
      category: "Automation"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "40% Productivity Increase",
      description: "Average productivity gains from AI-human collaboration",
      metric: "40%"
    },
    {
      icon: Clock,
      title: "60% Time Savings",
      description: "Reduction in manual, repetitive tasks",
      metric: "60%"
    },
    {
      icon: BarChart3,
      title: "25% Cost Reduction",
      description: "Operational cost savings through automation",
      metric: "25%"
    },
    {
      icon: Users,
      title: "90% Employee Satisfaction",
      description: "Higher job satisfaction with AI assistance",
      metric: "90%"
    }
  ];

  const useCases = [
    {
      department: "Customer Service",
      icon: Users,
      challenges: ["High ticket volume", "Inconsistent responses", "Long resolution times"],
      solutions: ["AI-powered ticket routing", "Automated response generation", "Sentiment analysis"],
      outcomes: ["50% faster resolution", "24/7 availability", "Consistent quality"]
    },
    {
      department: "Human Resources",
      icon: Building,
      challenges: ["Manual screening", "Scheduling conflicts", "Repetitive inquiries"],
      solutions: ["Resume analysis automation", "Interview scheduling bots", "HR chatbots"],
      outcomes: ["70% faster hiring", "Reduced bias", "Better candidate experience"]
    },
    {
      department: "Marketing & Sales",
      icon: Target,
      challenges: ["Lead qualification", "Content creation", "Campaign optimization"],
      solutions: ["Intelligent lead scoring", "Automated content generation", "Performance optimization"],
      outcomes: ["3x qualified leads", "Personalized campaigns", "Higher conversion rates"]
    },
    {
      department: "Finance",
      icon: BarChart3,
      challenges: ["Invoice processing", "Expense management", "Compliance monitoring"],
      solutions: ["Automated invoice extraction", "Smart expense categorization", "Compliance alerts"],
      outcomes: ["95% accuracy", "Real-time insights", "Reduced errors"]
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Analyze current workflows and identify automation opportunities",
      duration: "2-3 weeks"
    },
    {
      step: "02",
      title: "Platform Selection",
      description: "Choose the right AI platforms and tools for your specific needs",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Pilot Development",
      description: "Build and test initial workflows with a small team",
      duration: "4-6 weeks"
    },
    {
      step: "04",
      title: "Training & Integration",
      description: "Train your team and integrate with existing systems",
      duration: "3-4 weeks"
    },
    {
      step: "05",
      title: "Scale & Optimize",
      description: "Roll out across the organization and continuously improve",
      duration: "Ongoing"
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
              <Workflow className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Agentic Workflow Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Transform Operations
              </span>
              <br />
              <span className="text-gray-800">with Intelligent Workflows</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Deploy AI agents that think, decide, and act autonomously to revolutionize your departmental efficiency. 
              From Salesforce Agentforce to cutting-edge protocols, we build the future of work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToSection}
                className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Measurable Impact on Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing agentic workflows see immediate and sustained improvements across all metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Cutting-Edge AI Platforms We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise solutions to emerging protocols, we leverage the most advanced AI platforms to build your intelligent workflows
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-2">
                        {platform.category}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{platform.name}</h3>
                      <p className="text-gray-600 text-lg">{platform.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Transforming Every Department
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how agentic workflows solve real challenges across different departments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{useCase.department}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Current Challenges</h4>
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
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">AI Solutions</h4>
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
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Expected Outcomes</h4>
                      <ul className="space-y-2">
                        {useCase.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {outcome}
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

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful deployment and adoption of agentic workflows
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            
            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-sm font-medium text-blue-600 mb-2">{step.duration}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full items-center justify-center mx-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold text-lg">{step.step}</span>
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join leading organizations who are already leveraging agentic workflows to achieve unprecedented efficiency and innovation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToSection}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">2-3 Weeks</div>
              <div className="text-blue-100">To see initial results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">40%+</div>
              <div className="text-blue-100">Average efficiency gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Ongoing support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AgenticWorkflowsPage;