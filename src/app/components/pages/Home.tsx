import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Globe, Heart, Target, Users, Briefcase, Award, Plane } from 'lucide-react';
import { HeroSlider } from '../HeroSlider';

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#0B1020]">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Now Recruiting Section */}
      <section className="relative py-32 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm mb-4 block">
              NOW RECRUITING
            </span>
            <h2 className="text-4xl md:text-6xl text-[#0B1020] mb-4">
              Programs Now Accepting Applications
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Yokubari Taiwan Tour',
                duration: '1 week',
                price: 'JPY 170,000+',
                description: 'An immersive week of Taiwanese culture, food, language, and university exposure designed for globally curious students.',
                link: '/programs/study-tours/taiwan',
                gradient: 'from-purple-500/10 to-pink-500/10'
              },
              {
                title: 'UK English Program',
                duration: '2–3 weeks',
                price: 'JPY 600,000+',
                description: 'Intensive English communication experience at a UK language school with cultural activities and international networking.',
                link: '/programs/study-tours/uk',
                gradient: 'from-blue-500/10 to-cyan-500/10'
              },
              {
                title: 'Art Camp on Farm',
                duration: '4 weeks',
                price: 'JPY 2,085,000+',
                description: 'A creative overseas art experience combining culture, nature, and artistic expression in Ireland.',
                link: '/programs/study-tours/ireland',
                gradient: 'from-green-500/10 to-emerald-500/10'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] backdrop-blur-2xl rounded-3xl p-8 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] transition-all duration-500 hover:shadow-2xl hover:shadow-[#14D5C7]/30 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14D5C7]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl text-[#0B1020] font-semibold">{program.title}</h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Plane className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#14D5C7]/20 to-[#14D5C7]/10 rounded-full mb-4">
                    <span className="text-[#0B1020] text-sm font-medium">{program.duration}</span>
                    <span className="text-[#14D5C7]">•</span>
                    <span className="text-[#14D5C7] font-semibold text-sm">{program.price}</span>
                  </div>
                  <p className="text-[#161616]/70 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                    to={program.link}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#14D5C7] to-[#14D5C7]/80 text-white rounded-full hover:shadow-lg hover:shadow-[#14D5C7]/50 transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#0B1020] to-[#161616] text-[#F8FAFB] rounded-full hover:shadow-2xl hover:shadow-[#0B1020]/50 transition-all duration-300 hover:scale-105 border-2 border-[#0B1020] group"
            >
              <span className="font-semibold">View All Programs</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* See The Invisible Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#0B1020] to-[#161616] overflow-hidden">
        <div className="absolute inset-0">
          {/* Floating particles effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#14D5C7]/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm mb-6 block">
              SEE THE INVISIBLE
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#F8FAFB] mb-8 leading-tight">
              Some Opportunities<br />
              Cannot Be Seen<br />
              <span className="text-[#14D5C7]">Until Someone Shows You.</span>
            </h2>
            <p className="text-[#F8FAFB]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Many students never discover the global opportunities available to them.
              HANAMICHI helps students unlock hidden pathways, international experiences,
              and future possibilities through personalized educational guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="relative py-32 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm mb-4 block">
              TRACK RECORD
            </span>
            <h2 className="text-4xl md:text-6xl text-[#0B1020] mb-6">
              18 Countries / 106 University Acceptances
            </h2>
            <p className="text-[#161616]/70 text-lg max-w-3xl mx-auto">
              Students guided by HANAMICHI have successfully entered universities and educational institutions across the world.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { code: 'us', name: 'USA', count: 12 },
              { code: 'ca', name: 'Canada', count: 4 },
              { code: 'gb', name: 'UK', count: 5 },
              { code: 'nl', name: 'Netherlands', count: 3 },
              { code: 'fr', name: 'France', count: 1 },
              { code: 'it', name: 'Italy', count: 1 },
              { code: 'cz', name: 'Czech Republic', count: 6 },
              { code: 'au', name: 'Australia', count: 11 },
              { code: 'nz', name: 'New Zealand', count: 1 },
              { code: 'hu', name: 'Hungary', count: 2 },
              { code: 'kr', name: 'South Korea', count: 7 },
              { code: 'cn', name: 'China', count: 3 },
              { code: 'pl', name: 'Poland', count: 1 },
              { code: 'tw', name: 'Taiwan', count: 33 },
              { code: 'my', name: 'Malaysia', count: 6 },
              { code: 'jp', name: 'Japan', count: 8 },
              { code: 'ie', name: 'Ireland', count: 1 },
              { code: 'sg', name: 'Singapore', count: 1 },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] backdrop-blur-xl rounded-3xl p-6 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] transition-all duration-500 hover:shadow-2xl hover:shadow-[#14D5C7]/20 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#14D5C7]/0 to-[#14D5C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <img
                        src={`https://flagcdn.com/w160/${item.code}.png`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-[#0B1020]/60 mb-2 font-medium tracking-wide uppercase">{item.name}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#14D5C7] to-[#0B1020] bg-clip-text text-transparent">{item.count}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why HANAMICHI Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-[#0B1020]">
              Why Students Choose HANAMICHI
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Target className="text-white" size={32} />,
                title: 'Personalized Guidance',
                description: 'Every student receives a carefully designed educational pathway.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Briefcase className="text-white" size={32} />,
                title: 'Long-Term Career Perspective',
                description: 'We support students beyond admissions toward future careers and global growth.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Globe className="text-white" size={32} />,
                title: 'Accessible International Opportunities',
                description: 'Step-by-step overseas opportunities for students at every level.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Award className="text-white" size={32} />,
                title: 'Real Educational Expertise',
                description: 'Educational guidance backed by practical international experience.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: <Users className="text-white" size={32} />,
                title: 'Worldwide Educational Network',
                description: 'Partnerships with institutions in 20+ countries.',
                color: 'from-indigo-500 to-purple-500'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-8 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] transition-all duration-500 hover:shadow-2xl hover:shadow-[#14D5C7]/30 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl text-[#0B1020] mb-4 font-semibold">{feature.title}</h3>
                  <p className="text-[#161616]/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Journey Timeline */}
      <section className="relative py-32 bg-[#0B1020]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl text-[#F8FAFB] mb-4">
              Your Journey With HANAMICHI
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Free Consultation', description: 'Understanding student goals and interests.', color: 'from-blue-500 to-cyan-500' },
              { step: '2', title: 'Program Planning', description: 'Choosing countries and educational pathways.', color: 'from-purple-500 to-pink-500' },
              { step: '3', title: 'Application Support', description: 'Complete support for applications and documents.', color: 'from-green-500 to-emerald-500' },
              { step: '4', title: 'Preparation', description: 'Interview guidance and overseas preparation.', color: 'from-orange-500 to-red-500' },
              { step: '5', title: 'Overseas Experience', description: 'Students begin their international educational journey.', color: 'from-indigo-500 to-purple-500' },
              { step: '6', title: 'Future Growth', description: 'Long-term mentoring and career support.', color: 'from-pink-500 to-rose-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex items-start space-x-6"
              >
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.step}
                </div>
                <div className="flex-1 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/20 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-2xl text-[#F8FAFB] mb-3 font-semibold">{item.title}</h3>
                    <p className="text-[#F8FAFB]/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="relative py-32 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm mb-4 block">
              PARTNERS
            </span>
            <h2 className="text-4xl md:text-6xl text-[#0B1020]">
              Our Global Educational Partners
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-12">
            <h3 className="text-2xl text-[#0B1020] mb-8 text-center">Overseas Institutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Universidad de Carlos III de Madrid — Spain',
                'Shih Chien University — Taiwan',
                'Lane Community College — USA',
                'Metropolia Univ. of Applied Science — Finland',
                'Griffith College — Ireland',
                'Emerald Cultural Institute — Ireland',
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-6 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] transition-all duration-500 hover:shadow-xl hover:shadow-[#14D5C7]/20 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14D5C7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#14D5C7] to-[#0B1020] rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <p className="text-[#161616] font-medium">{partner}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="group relative bg-gradient-to-br from-white via-[#F8FAFB] to-white rounded-3xl p-10 border-2 border-[#14D5C7]/30 hover:border-[#14D5C7] shadow-lg hover:shadow-2xl hover:shadow-[#14D5C7]/20 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14D5C7]/20 to-[#14D5C7]/10 rounded-full mb-4">
                <span className="text-[#0B1020] text-sm font-semibold tracking-wide">DOMESTIC PARTNER</span>
              </div>
              <h3 className="text-2xl text-[#14D5C7] mb-3 font-bold">Hotoku Gakuen Jr. & Sr. High School</h3>
              <div className="flex items-center space-x-2 mb-3">
                <svg className="w-5 h-5 text-[#14D5C7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#161616]/80 font-medium">Nishinomiya, Hyogo</p>
              </div>
              <p className="text-[#161616]/70 leading-relaxed">International educational partnership and career guidance support.</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/partners"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#0B1020] to-[#161616] text-[#F8FAFB] rounded-full hover:shadow-2xl hover:shadow-[#0B1020]/50 transition-all duration-300 hover:scale-105 border-2 border-[#0B1020] group"
            >
              <span className="font-semibold">View All Partners</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-[#0B1020]">
              Student Success Stories
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: '"HANAMICHI helped me discover opportunities I never imagined possible."',
                gradient: 'from-pink-500/20 to-rose-500/20'
              },
              {
                text: '"The counselling sessions completely changed how I think about my future."',
                gradient: 'from-blue-500/20 to-cyan-500/20'
              },
              {
                text: '"My study tour experience inspired me to pursue international education."',
                gradient: 'from-purple-500/20 to-indigo-500/20'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-full flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="text-white" size={24} />
                  </div>
                  <p className="text-[#0B1020] text-lg italic leading-relaxed font-medium">{testimonial.text}</p>
                  <div className="mt-6 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#14D5C7]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#0B1020] via-[#161616] to-[#0B1020] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#14D5C7]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#14D5C7]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#14D5C7]/20 to-[#14D5C7]/10 rounded-full mb-8 border border-[#14D5C7]/30">
              <span className="text-[#14D5C7] text-sm font-semibold tracking-widest uppercase">Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-[#F8FAFB] mb-6 font-bold">
              Start With a <span className="text-[#14D5C7]">Free Consultation</span>
            </h2>
            <p className="text-[#F8FAFB]/80 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's explore your future possibilities together and discover the best international pathway for your goals.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-[#14D5C7] via-[#14D5C7] to-[#14D5C7]/90 text-white rounded-full hover:shadow-2xl hover:shadow-[#14D5C7]/60 transition-all duration-300 text-lg font-semibold hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
            <p className="text-[#F8FAFB]/50 text-sm mt-6">First 30 minutes completely free • No obligation</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
