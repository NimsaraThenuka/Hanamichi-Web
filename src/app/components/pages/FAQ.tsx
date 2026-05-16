import { motion } from 'motion/react';
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PageHero } from '../PageHero';

export function FAQ() {
  const faqs = [
    {
      question: 'What level of English do I need?',
      answer: 'It depends on the country and program you choose. Some pathways require English proficiency, while others provide step-by-step support starting from beginner level.'
    },
    {
      question: 'From what grade can I consult?',
      answer: 'Students can begin consultations from junior high school. Early planning allows families to explore more opportunities.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Program fees vary depending on destination and duration. Examples: Taiwan universities: approximately JPY 600,000/year, Ireland short-term programs: approximately JPY 400,000+'
    },
    {
      question: 'Is counselling online or in-person?',
      answer: 'Both options are available through Zoom or at the Takarazuka office.'
    },
    {
      question: 'Can parents join the consultation?',
      answer: 'Yes. Parent participation is highly encouraged.'
    },
    {
      question: 'What are the advantages of studying in Taiwan?',
      answer: 'Safe environment, affordable tuition, scholarship opportunities, multilingual learning, and close proximity to Japan.'
    },
    {
      question: 'How is HANAMICHI different from other agencies?',
      answer: 'We focus on long-term personalized educational guidance beyond university admissions.'
    },
    {
      question: 'Are there short-term study tours?',
      answer: 'Yes. Seasonal international study tours are available from 1 week.'
    },
    {
      question: 'What payment methods are available?',
      answer: 'Bank transfer.'
    },
    {
      question: 'How is personal information managed?',
      answer: 'All personal information is managed securely according to our Privacy Policy.'
    },
    {
      question: 'Can students with low English ability still study abroad?',
      answer: 'Yes. Many pathways allow gradual language development.'
    },
    {
      question: 'Do you help with scholarships?',
      answer: 'Yes. We provide scholarship guidance and affordable pathway support.'
    },
    {
      question: 'Which countries are available for study tours?',
      answer: 'Taiwan, UK, Ireland, Canada, Malaysia, Finland, Czech Republic, Cambodia, Spain, and Australia.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'It depends on the country and institution. Early consultation is recommended.'
    },
    {
      question: 'How can I start my journey with HANAMICHI?',
      answer: 'Book a free consultation session to discuss goals, programs, and future opportunities.'
    },
  ];

  return (
    <div className="bg-[#F8FAFB] pt-24">
      {/* Hero */}
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        description="We understand that studying abroad and planning an international future can feel overwhelming. Here are answers to some of the most common questions students and parents ask HANAMICHI."
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
            <h2 className="text-4xl md:text-5xl text-[#0B1020] mb-6">Still Have Questions?</h2>
            <p className="text-[#161616]/70 text-lg mb-10 leading-relaxed">
              Our team is happy to support students and families through every step of the international education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#14D5C7] via-[#14D5C7] to-[#14D5C7]/90 text-white rounded-full hover:shadow-2xl hover:shadow-[#14D5C7]/60 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#0B1020] to-[#161616] text-[#F8FAFB] rounded-full hover:shadow-2xl hover:shadow-[#0B1020]/50 transition-all duration-300 hover:scale-105 border-2 border-[#0B1020] font-semibold"
              >
                <span>Contact HANAMICHI</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
