import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GraduationCap, Plane, Globe, School, MessageCircle, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { PageHero } from '../PageHero';

export function Programs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const programs = [
    {
      icon: <Users className="text-[#14D5C7]" size={40} />,
      title: 'School Counselor',
      description: 'B2B college counselor dispatch to schools',
      link: '/programs/schoolcounselor',
      comingSoon: false
    },
    {
      icon: <Plane className="text-[#14D5C7]" size={40} />,
      title: 'Study Tours',
      description: 'Short-term international study programs',
      link: '/programs/study-tours',
      comingSoon: false
    },
    {
      icon: <GraduationCap className="text-[#14D5C7]" size={40} />,
      title: 'University Admission',
      description: 'Taiwan & English-speaking university support',
      link: '/programs/university',
      comingSoon: false
    },
    {
      icon: <School className="text-[#14D5C7]" size={40} />,
      title: 'High School Abroad',
      description: 'Canada & New Zealand high school opportunities',
      link: '/programs/high-school',
      comingSoon: false
    },
    {
      icon: <Globe className="text-[#14D5C7]" size={40} />,
      title: 'Mandarin Chinese',
      description: 'Online Mandarin learning with Taiwanese teachers',
      link: '/programs/mandarin',
      comingSoon: false
    },
    {
      icon: <MessageCircle className="text-[#14D5C7]" size={40} />,
      title: 'Counselling',
      description: 'Career counselling online or in-person',
      link: '/programs/counselling',
      comingSoon: false
    },
    {
      icon: <BookOpen className="text-[#14D5C7]" size={40} />,
      title: 'Workshop',
      description: 'Self-discovery workshops twice/year',
      link: '/programs/workshop',
      comingSoon: false
    },
    {
      icon: <Award className="text-[#14D5C7]" size={40} />,
      title: 'Mentoring',
      description: 'Long-term mentoring support',
      link: '/programs/mentoring',
      comingSoon: true
    },
  ];

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        title={<>Our <span className="text-[#14D5C7]">Programs</span></>}
        description="From study tours to university admissions, we offer comprehensive support for your international education journey."
        image="https://images.unsplash.com/photo-1776621809111-72bb9726cb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                {program.comingSoon ? (
                  <div className="relative bg-gradient-to-br from-white/50 to-[#F8FAFB]/50 rounded-3xl p-8 border-2 border-[#14D5C7]/10 h-full overflow-hidden">
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#14D5C7]/30 to-[#14D5C7]/20 text-[#0B1020] px-4 py-2 rounded-full text-xs font-semibold border border-[#14D5C7]/30">
                      Coming Soon
                    </div>
                    <div className="mb-6 opacity-50">{program.icon}</div>
                    <h3 className="text-2xl text-[#0B1020]/50 mb-3 font-semibold">{program.title}</h3>
                    <p className="text-[#161616]/40">{program.description}</p>
                  </div>
                ) : (
                  <Link
                    to={program.link}
                    className="group relative block bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-8 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 h-full hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-6 w-16 h-16 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {program.icon}
                      </div>
                      <h3 className="text-2xl text-[#0B1020] mb-3 group-hover:text-[#14D5C7] transition-colors font-semibold">
                        {program.title}
                      </h3>
                      <p className="text-[#161616]/70 leading-relaxed">{program.description}</p>
                      <div className="mt-4 flex items-center space-x-2 text-[#14D5C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
