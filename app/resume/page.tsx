'use client';

import { title } from 'process';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa6';

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiGit,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About me',
  description:
    'こんにちは、私は美しく機能的な Web サイトを作成することに情熱を注ぐフルスタックエンジニアです。私は、HTML、Tailwind CSS、TypeScript、React、Python、Node.js など、さまざまなテクノロジーの経験があります。私は問題解決能力も高く、既成概念にとらわれずに考える必要があるプロジェクトに取り組むことを楽しんでいます。',
  info: [
    {
      fieldName: '名前',
      fieldValue: 'Digi-Angler',
    },
    {
      fieldName: '電話',
      fieldValue: '000-000-0000',
    },
    {
      fieldName: '経験年数',
      fieldValue: '10年',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'xxxxxx',
    },
    {
      fieldName: '国籍',
      fieldValue: '日本',
    },
    {
      fieldName: 'メール',
      fieldValue: 'xxxxx@example.com',
    },
    {
      fieldName: 'フリーランス',
      fieldValue: '利用可能',
    },
    {
      fieldName: '言語',
      fieldValue: '日本語、英語',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: '職務経歴',
  description: '私の実績をまとめたものは以下になります。',
  items: [
    {
      title: 'フロントエンドエンジニア',
      company: '株式会社〇〇〇〇',
      position: 'フロントエンドエンジニア',
      duration: '2020年4月 - 現在',
      description:
        'React、Next.js、TypeScript、Tailwind CSS、Figma などを使用して、Web サイトのフロントエンドを開発しました。',
    },
    {
      title: 'バックエンドエンジニア',
      company: '株式会社〇〇〇〇',
      position: 'バックエンドエンジニア',
      duration: '2018年4月 - 2020年3月',
      description:
        'Node.js、Express、TypeScript、Prisma、PostgreSQL、MongoDB などを使用して、Web サイトのバックエンドを開発しました。',
    },
    {
      title: 'フルスタックエンジニア',
      company: '株式会社〇〇〇〇',
      position: 'フルスタックエンジニア',
      duration: '2016年4月 - 2018年3月',
      description:
        'React、Next.js、Node.js、Express、TypeScript、Prisma、PostgreSQL、MongoDB などを使用して、Web サイトのフロントエンドとバックエンドを開発しました。',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: '学歴',
  description: '私の学歴をまとめたものは以下になります。',
  items: [
    {
      institution: '大学',
      degree: '東京大学',
      duration: '2012年4月 - 2016年3月',
      description: '理学部の学位を取得しました。',
    },
    {
      title: '大学',
      company: '東京大学',
      position: '工学部',
      duration: '2016年4月 - 2018年3月',
      description: '工学部の学位を取得しました。',
    },
  ],
};

// skills data
const skills = {
  title: 'スキル',
  description: '私のスキルをまとめたものは以下になります。',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiExpress />,
      name: 'Express',
    },
    {
      icon: <SiNodedotjs />,
      name: 'Node.js',
    },
    {
      icon: <SiPrisma />,
      name: 'Prisma',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <SiGit />,
      name: 'Git',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      resume page
    </motion.div>
  );
};
/* TODO: 01:47:22 */
export default Resume;
