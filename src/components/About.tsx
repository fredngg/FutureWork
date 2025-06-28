import React from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Vision & Mission
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower organizations and individuals to thrive in the age of artificial intelligence by providing comprehensive AI solutions, fostering human-AI synergy, and championing responsible AI adoption.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We build intelligent agentic workflows to revolutionize departmental efficiency, equip employees and students with future-proof AI literacy, and actively combat the spread of AI misinformation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Human-Centric AI</h4>
              <p className="text-gray-600">We believe AI should augment human capabilities, not replace them, creating symbiotic relationships that benefit everyone.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Ethical Innovation</h4>
              <p className="text-gray-600">Every solution we create is built with ethical considerations, transparency, and responsible AI practices at its core.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Societal Impact</h4>
              <p className="text-gray-600">We're committed to creating positive change by combating misinformation and promoting informed AI discourse.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose FutureWork?</h3>
            <p className="text-xl text-gray-600">Our unique "full-stack AI" approach sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Integrated Solutions</h4>
              <p className="text-gray-600 text-sm">Technology, people, and ethics under one roof</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Proactive Approach</h4>
              <p className="text-gray-600 text-sm">Preparing for AI's impact, not just implementing it</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Custom Solutions</h4>
              <p className="text-gray-600 text-sm">Tailored workflows and training for your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Thought Leadership</h4>
              <p className="text-gray-600 text-sm">Leading responsible AI adoption and education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;