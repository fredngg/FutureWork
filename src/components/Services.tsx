import React from 'react';
import { Workflow, GraduationCap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Workflow,
      title: "Agentic Workflow Development",
      subtitle: "Transform Departmental Efficiency",
      description: "Design and deploy intelligent AI agents that automate complex processes, make decisions, and enhance productivity across your organization.",
      features: [
        "Custom AI agent development",
        "Enterprise system integration",
        "Automated decision-making",
        "Human-AI collaboration training",
        "Ongoing optimization & monitoring"
      ],
      departments: ["Customer Service", "HR", "Marketing & Sales", "Finance", "Operations", "IT/DevOps"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50",
      link: "/services/agentic-workflows"
    },
    {
      icon: GraduationCap,
      title: "AI-Proofing Education & Training",
      subtitle: "Future-Ready Workforce Development",
      description: "Comprehensive training programs that equip individuals with AI literacy, critical thinking, and collaboration skills for the AI era.",
      features: [
        "AI literacy & prompt engineering",
        "Human-AI collaboration strategies",
        "Ethics & bias awareness",
        "Practical productivity tools",
        "Certification programs"
      ],
      departments: ["Corporate Training", "Educational Institutions", "Individual Professionals", "Leadership Development"],
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100/50",
      link: "/services/ai-education"
    },
    {
      icon: Shield,
      title: "Responsible AI Development",
      subtitle: "Transparency & Tools for Ethical AI",
      description: "As an AI company, we're committed to responsible AI development through transparency, ethical tools, and combating misinformation to advance mankind's progress.",
      features: [
        "AI transparency frameworks",
        "Ethical AI development tools",
        "Misinformation detection systems",
        "Responsible AI governance",
        "Public education initiatives"
      ],
      departments: ["Technology Companies", "Government Agencies", "Educational Institutions", "Research Organizations"],
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100/50",
      link: "/services/misinformation-combat"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three comprehensive pillars that address the technology, people, and ethics of AI adoption
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 lg:p-12`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-4 font-medium">{service.subtitle}</p>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className={`group bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center inline-flex`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-6">Target Applications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.departments.map((dept, deptIndex) => (
                        <div key={deptIndex} className="bg-gray-50 rounded-lg p-3 text-center">
                          <span className="text-gray-700 font-medium">{dept}</span>
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
  );
};

export default Services;