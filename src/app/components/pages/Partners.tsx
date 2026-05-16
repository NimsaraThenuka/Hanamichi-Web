import { motion } from 'motion/react';
import { PageHero } from '../PageHero';

export function Partners() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const overseasPartners = [
    { name: 'Universidad de Carlos III de Madrid', country: 'Spain' },
    { name: 'Shih Chien University', country: 'Taiwan' },
    { name: 'Lane Community College', country: 'USA' },
    { name: 'Metropolia Univ. of Applied Science', country: 'Finland' },
    { name: 'Griffith College', country: 'Ireland' },
    { name: 'Emerald Cultural Institute', country: 'Ireland' },
  ];

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        title={<>Our <span className="text-[#14D5C7]">Partners</span></>}
        description="Building bridges to educational excellence through our global network of partner institutions."
        image="https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Overseas Partners */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl text-[#0B1020] mb-4">Overseas Educational Institutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {overseasPartners.map((partner, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-8 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-[#0B1020] mb-2 font-semibold group-hover:text-[#14D5C7] transition-colors">{partner.name}</h3>
                  <p className="text-[#14D5C7] font-medium">{partner.country}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Domestic Partner */}
          <motion.div {...fadeInUp} className="group relative bg-gradient-to-br from-white via-[#F8FAFB] to-white rounded-3xl p-12 border-2 border-[#14D5C7]/30 shadow-xl hover:shadow-2xl hover:shadow-[#14D5C7]/20 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14D5C7]/20 to-[#14D5C7]/10 rounded-full mb-6 border border-[#14D5C7]/30">
                <span className="text-[#0B1020] text-sm font-semibold tracking-wide uppercase">Domestic Partner</span>
              </div>
              <h3 className="text-2xl text-[#14D5C7] mb-4 font-bold">Hotoku Gakuen Junior & Senior High School</h3>
              <div className="flex items-center space-x-2 mb-3">
                <svg className="w-5 h-5 text-[#14D5C7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-[#161616]/80 font-medium">Nishinomiya, Hyogo, Japan</p>
              </div>
              <p className="text-[#161616]/70 leading-relaxed">International career guidance partnership.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl text-[#0B1020] mb-6">University Destinations</h2>
            <p className="text-[#161616]/70 text-lg mb-12">
              106 acceptances across 18 countries (as of April 2026)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { code: 'us', name: 'USA' },
                { code: 'ca', name: 'Canada' },
                { code: 'gb', name: 'UK' },
                { code: 'nl', name: 'Netherlands' },
                { code: 'fr', name: 'France' },
                { code: 'it', name: 'Italy' },
                { code: 'cz', name: 'Czech Rep.' },
                { code: 'au', name: 'Australia' },
                { code: 'nz', name: 'New Zealand' },
                { code: 'hu', name: 'Hungary' },
                { code: 'kr', name: 'South Korea' },
                { code: 'cn', name: 'China' },
                { code: 'pl', name: 'Poland' },
                { code: 'tw', name: 'Taiwan' },
                { code: 'my', name: 'Malaysia' },
                { code: 'jp', name: 'Japan' },
                { code: 'ie', name: 'Ireland' },
                { code: 'sg', name: 'Singapore' },
              ].map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-6 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14D5C7]/0 to-[#14D5C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 mb-3">
                      <img
                        src={`https://flagcdn.com/w160/${country.code}.png`}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm text-[#0B1020]/70 font-medium">{country.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
