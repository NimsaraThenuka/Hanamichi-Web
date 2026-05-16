import { motion } from 'motion/react';
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useLanguage } from '../../../context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1.q'),
      answer: t('faq.q1.a')
    },
    {
      question: t('faq.q2.q'),
      answer: t('faq.q2.a')
    },
    {
      question: t('faq.q3.q'),
      answer: t('faq.q3.a')
    },
    {
      question: t('faq.q4.q'),
      answer: t('faq.q4.a')
    },
    {
      question: t('faq.q5.q'),
      answer: t('faq.q5.a')
    },
    {
      question: t('faq.q6.q'),
      answer: t('faq.q6.a')
    },
    {
      question: t('faq.q7.q'),
      answer: t('faq.q7.a')
    },
    {
      question: t('faq.q8.q'),
      answer: t('faq.q8.a')
    },
    {
      question: t('faq.q9.q'),
      answer: t('faq.q9.a')
    },
    {
      question: t('faq.q10.q'),
      answer: t('faq.q10.a')
    },
    {
      question: t('faq.q11.q'),
      answer: t('faq.q11.a')
    },
    {
      question: t('faq.q12.q'),
      answer: t('faq.q12.a')
    },
    {
      question: t('faq.q13.q'),
      answer: t('faq.q13.a')
    },
    {
      question: t('faq.q14.q'),
      answer: t('faq.q14.a')
    },
    {
      question: t('faq.q15.q'),
      answer: t('faq.q15.a')
    },
  ];

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        label="FAQ"
        title={t('faq.hero.title')}
        description={t('faq.hero.desc')}
        image="https://images.unsplash.com/photo-1633613287848-e6f43bbafb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      />

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion.Root type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="group bg-gradient-to-br from-white via-white to-[#F8FAFB] rounded-3xl border-2 border-[#14D5C7]/20 overflow-hidden hover:border-[#14D5C7] hover:shadow-xl hover:shadow-[#14D5C7]/20 transition-all duration-500 data-[state=open]:border-[#14D5C7] data-[state=open]:shadow-xl data-[state=open]:shadow-[#14D5C7]/30"
                >
                  <Accordion.Trigger className="w-full px-8 py-7 flex items-center justify-between text-left group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#14D5C7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-lg text-[#0B1020] pr-4 font-semibold relative z-10">{faq.question}</span>
                    <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-[#14D5C7] to-[#14D5C7]/70 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <ChevronDown
                        className="text-white transition-transform duration-300 group-data-[state=open]:rotate-180"
                        size={20}
                      />
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="px-8 pb-7 text-[#161616]/80 leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="pt-4 border-t border-[#14D5C7]/20">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-[#0B1020] mb-6">{t('faq.cta.title')}</h2>
            <p className="text-[#161616]/70 text-lg mb-10 leading-relaxed">
              {t('faq.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#14D5C7] via-[#14D5C7] to-[#14D5C7]/90 text-white rounded-full hover:shadow-2xl hover:shadow-[#14D5C7]/60 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <span>{t('faq.cta.consultation')}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#0B1020] to-[#161616] text-[#F8FAFB] rounded-full hover:shadow-2xl hover:shadow-[#0B1020]/50 transition-all duration-300 hover:scale-105 border-2 border-[#0B1020] font-semibold"
              >
                <span>{t('faq.cta.contact')}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


