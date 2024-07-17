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
      'ポートフォリオサイトの開発や、Webアプリケーションの開発を行います。',
    href: '/',
  },
  {
    number: '03',
    title: 'ロゴデザイン',
    description:
      'ポートフォリオサイトの開発や、Webアプリケーションの開発を行います。',
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
    <section>
      <div className="container mx-auto">services page</div>
    </section>
  );
};
/* TODO: 01:22:35からYouTune再生 */
export default Services;
