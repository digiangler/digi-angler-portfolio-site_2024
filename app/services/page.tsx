'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'ウェブサイト制作',
    description:
      'ポートフォリオサイトの開発や、Webアプリケーションの開発を行います。',
    href: '/',
  },
  {
    number: '02',
    title: 'UI/UX デザイン',
    description:
      'Figma や Miro という UI/UX デザインツールを使用してデザインを行います。',
    href: '/',
  },
  {
    number: '03',
    title: 'ロゴデザイン',
    description:
      'Affinity シリーズや Canva というデザインツールを使用してデザインを行います。',
    href: '/',
  },
  {
    number: '04',
    title: 'SEO 対策',
    description:
      'ポートフォリオサイトの開発や、Webアプリケーションの開発を行います。',
    href: '/',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, sase: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.number}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
/* TODO: 01:32:53 */
export default Services;
