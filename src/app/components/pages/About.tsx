import { motion } from 'motion/react';
import { Target, Heart, Lightbulb } from 'lucide-react';
import { PageHero } from '../PageHero';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        title={<>About <span className="text-[#14D5C7]">HANAMICHI</span></>}
        description="Nurturing globally confident individuals who can carve their own path on the world stage and create meaningful futures without limitations."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="relative bg-gradient-to-br from-white via-[#F8FAFB] to-white rounded-3xl p-12 border-2 border-[#14D5C7]/30 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl text-[#0B1020] mb-8 font-bold">HANAMICHI LLC</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#161616]">
                <div className="p-4 rounded-2xl bg-white/50 border border-[#14D5C7]/10">
                  <h3 className="text-[#14D5C7] mb-2 font-semibold">Address</h3>
                  <p className="text-[#161616]/80">2-1-3 Nigawa Takamaru, Takarazuka, Hyogo, Japan</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/50 border border-[#14D5C7]/10">
                  <h3 className="text-[#14D5C7] mb-2 font-semibold">Phone</h3>
                  <p className="text-[#161616]/80">0798-98-2860</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/50 border border-[#14D5C7]/10">
                  <h3 className="text-[#14D5C7] mb-2 font-semibold">Email</h3>
                  <p className="text-[#161616]/80">infohanamichillc@gmail.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/50 border border-[#14D5C7]/10">
                  <h3 className="text-[#14D5C7] mb-2 font-semibold">Representative</h3>
                  <p className="text-[#161616]/80">Suzuki Tomomi (Tomo Suzuki)</p>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#14D5C7]/10 to-[#14D5C7]/5 border border-[#14D5C7]/20">
                <h3 className="text-[#14D5C7] mb-3 font-semibold text-lg">Business</h3>
                <p className="text-[#161616]/80 leading-relaxed">International career support, study abroad counselling, university admission guidance, workshop planning, and educational mentoring.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-3xl text-[#0B1020] mb-6 font-bold">Vision</h2>
                <p className="text-[#161616]/70 leading-relaxed">
                  Nurturing globally confident individuals who can carve their own path on the world stage
                  and create meaningful futures without limitations.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Heart className="text-white" size={32} />
                </div>
                <h2 className="text-3xl text-[#0B1020] mb-6 font-bold">Mission</h2>
                <p className="text-[#161616]/70 leading-relaxed">
                  Providing continuous career support that connects education, study abroad,
                  and long-term career growth into one meaningful journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h2 className="text-3xl text-[#0B1020] mb-6 font-bold">Our Philosophy</h2>
                <p className="text-[#161616]/70 leading-relaxed">
                  Education should not only focus on exams and admissions. It should help students discover
                  confidence, strengths, purpose, and future possibilities. HANAMICHI supports students
                  step-by-step throughout their educational journey with personalized international guidance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
