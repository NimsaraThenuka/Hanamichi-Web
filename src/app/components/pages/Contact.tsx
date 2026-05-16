import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useLanguage } from '../../../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  
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
        title={t('contact.hero.title')}
        description={t('contact.hero.desc')}
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/30 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl text-[#0B1020] mb-8 font-bold">{t('contact.form.title')}</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#0B1020] mb-2 font-semibold">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-white border-2 border-[#14D5C7]/20 rounded-2xl focus:outline-none focus:border-[#14D5C7] focus:shadow-lg focus:shadow-[#14D5C7]/20 transition-all duration-300"
                      placeholder={t('contact.form.placeholder.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#0B1020] mb-2 font-semibold">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-white border-2 border-[#14D5C7]/20 rounded-2xl focus:outline-none focus:border-[#14D5C7] focus:shadow-lg focus:shadow-[#14D5C7]/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#0B1020] mb-2 font-semibold">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-4 bg-white border-2 border-[#14D5C7]/20 rounded-2xl focus:outline-none focus:border-[#14D5C7] focus:shadow-lg focus:shadow-[#14D5C7]/20 transition-all duration-300"
                      placeholder={t('contact.form.placeholder.phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#0B1020] mb-2 font-semibold">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-5 py-4 bg-white border-2 border-[#14D5C7]/20 rounded-2xl focus:outline-none focus:border-[#14D5C7] focus:shadow-lg focus:shadow-[#14D5C7]/20 transition-all duration-300 resize-none"
                      placeholder={t('contact.form.placeholder.message')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full px-8 py-5 bg-gradient-to-r from-[#14D5C7] via-[#14D5C7] to-[#14D5C7]/90 text-white rounded-full hover:shadow-2xl hover:shadow-[#14D5C7]/60 transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2"
                  >
                    <span>{t('contact.form.submit')}</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/30 mb-8 shadow-xl">
                <h2 className="text-3xl text-[#0B1020] mb-8 font-bold">{t('contact.details.title')}</h2>
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#14D5C7]/5 transition-colors duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#0B1020] mb-1 font-semibold">{t('contact.details.phone')}</h3>
                      <a href="tel:0798-98-2860" className="text-[#161616]/70 hover:text-[#14D5C7] transition-colors text-lg">
                        0798-98-2860
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#14D5C7]/5 transition-colors duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#0B1020] mb-1 font-semibold">{t('contact.details.email')}</h3>
                      <a href="mailto:infohanamichillc@gmail.com" className="text-[#161616]/70 hover:text-[#14D5C7] transition-colors break-all">
                        infohanamichillc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#14D5C7]/5 transition-colors duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#0B1020] mb-1 font-semibold">{t('contact.details.address')}</h3>
                      <p className="text-[#161616]/70">
                        {t('contact.details.address.value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#0B1020] via-[#161616] to-[#0B1020] rounded-3xl p-10 text-center overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#14D5C7]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#14D5C7]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14D5C7]/20 to-[#14D5C7]/10 rounded-full mb-4 border border-[#14D5C7]/30">
                    <span className="text-[#14D5C7] text-xs font-semibold tracking-widest uppercase">{t('contact.offer.label')}</span>
                  </div>
                  <h3 className="text-2xl text-[#F8FAFB] mb-4 font-bold">{t('contact.offer.title')}</h3>
                  <p className="text-[#F8FAFB]/70 mb-6 leading-relaxed">
                    {t('contact.offer.desc')}
                  </p>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#14D5C7] to-white bg-clip-text text-transparent mb-2">¥5,500 / 30 min</div>
                  <div className="text-[#14D5C7] font-semibold">{t('contact.offer.free')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


