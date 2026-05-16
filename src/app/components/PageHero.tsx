import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string | ReactNode;
  description?: string;
  label?: string;
  image: string;
}

export function PageHero({ title, description, label, image }: PageHeroProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0B1020] to-[#161616] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020]/90 via-[#0B1020]/85 to-[#0B1020]/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14D5C7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14D5C7]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {label && (
            <span className="text-[#14D5C7] tracking-[0.3em] uppercase text-sm mb-4 block">
              {label}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl text-[#F8FAFB] mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-[#F8FAFB]/70 text-lg leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

