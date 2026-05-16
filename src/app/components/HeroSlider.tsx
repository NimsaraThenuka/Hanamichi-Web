import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    id: 'hero',
  },
  {
    image: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    id: 'hero_2',
  },
  {
    image: 'https://images.unsplash.com/photo-1539207004020-449ced88dbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    id: 'hero_3',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  const currentSlideData = {
    label: t(`${slides[currentSlide].id}.label`),
    title: [
      t(`${slides[currentSlide].id}.title1`),
      t(`${slides[currentSlide].id}.title2`),
      t(`${slides[currentSlide].id}.title3`),
    ],
    description: t(`${slides[currentSlide].id}.description`),
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 60,
      rotateX: -20
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.5
      }
    }
  };

  const labelVariants = {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: { opacity: 0, x: 40 }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020]/90 via-[#0B1020]/80 to-[#0B1020]/70" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14D5C7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14D5C7]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-16 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide}>
            <motion.div
              variants={labelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-6"
            >
              <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm">
                {currentSlideData.label}
              </span>
            </motion.div>

            <div className="mb-4 md:mb-6">
              {currentSlideData.title.map((line, index) => (
                <motion.h1
                  key={`${currentSlide}-${index}`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl md:text-5xl lg:text-6xl text-[#F8FAFB] leading-tight"
                  style={{ perspective: '1000px' }}
                >
                  {line.includes('Come True.') || line.includes('Today.') || line.includes('and Experience.') || line.includes('見つけよう。') ? (
                    <span className="text-[#14D5C7]">{line}</span>
                  ) : (
                    line
                  )}
                  <br />
                </motion.h1>
              ))}
            </div>

            <motion.p
              variants={descriptionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-[#F8FAFB]/70 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {currentSlideData.description}
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="group px-6 py-3 bg-gradient-to-r from-[#14D5C7] via-[#14D5C7] to-[#14D5C7]/90 text-white rounded-full hover:shadow-2xl hover:shadow-[#14D5C7]/60 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 border-2 border-[#14D5C7]"
              >
                <span className="font-semibold text-sm md:text-base">{t('hero.cta1')}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
              <Link
                to="/programs"
                className="group px-6 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-[#F8FAFB] rounded-full hover:bg-white/20 hover:border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span className="font-semibold text-sm md:text-base">{t('hero.cta2')}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full flex items-center justify-center text-[#F8FAFB] hover:bg-gradient-to-r hover:from-[#14D5C7] hover:to-[#14D5C7]/80 hover:border-[#14D5C7] hover:shadow-xl hover:shadow-[#14D5C7]/50 transition-all duration-300 group hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={26} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full flex items-center justify-center text-[#F8FAFB] hover:bg-gradient-to-r hover:from-[#14D5C7] hover:to-[#14D5C7]/80 hover:border-[#14D5C7] hover:shadow-xl hover:shadow-[#14D5C7]/50 transition-all duration-300 group hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={26} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'w-12 h-2 bg-[#14D5C7]'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#14D5C7]/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#14D5C7] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

