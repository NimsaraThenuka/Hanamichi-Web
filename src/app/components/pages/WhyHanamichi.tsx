import { motion } from 'motion/react';
import { PageHero } from '../PageHero';
import { useLanguage } from '../../../context/LanguageContext';

export function WhyHanamichi() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    {
      number: '01',
      title: t('whyUs.feature1.title'),
      description: t('whyUs.feature1.desc')
    },
    {
      number: '02',
      title: t('whyUs.feature2.title'),
      description: t('whyUs.feature2.desc')
    },
    {
      number: '03',
      title: t('whyUs.feature3.title'),
      description: t('whyUs.feature3.desc')
    },
    {
      number: '04',
      title: t('whyUs.feature4.title'),
      description: t('whyUs.feature4.desc')
    },
    {
      number: '05',
      title: t('whyUs.feature5.title'),
      description: t('whyUs.feature5.desc')
    },
  ];

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        title={t('whyUs.hero.title')}
        description={t('whyUs.hero.desc')}
        image="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl p-10 border-2 border-[#14D5C7]/20 hover:border-[#14D5C7] hover:shadow-2xl hover:shadow-[#14D5C7]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14D5C7]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start space-x-8">
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl text-[#0B1020] mb-4 font-bold group-hover:text-[#14D5C7] transition-colors">{feature.title}</h3>
                    <p className="text-[#161616]/70 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


