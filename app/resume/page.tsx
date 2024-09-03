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
import { Item } from '@radix-ui/react-select';
// TODO: 自己紹介項目の修正および追加
// NOTE: about data
const about = {
  title: '自己紹介',
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
// TODO: 職務経歴の修正および追加
// NOTE: experience data
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
    {
      title: 'ウェブデザイナー',
      company: '株式会社〇〇〇〇',
      position: 'ウェブデザイナー',
      duration: '2015年4月 - 2016年3月',
      description:
        'PhotoShop などのツールで画像を作成・加工したり、HTML、CSS などを使用して、Web サイトのデザインを担当しました。',
    },
    {
      title: 'セールスライター',
      company: '株式会社〇〇〇〇',
      position: 'マーケッター',
      duration: '2014年4月 - 2015年3月',
      description:
        'メールマガジンやブログ・SNS（記事作成）、リサーチ、物販の仕入れ・販売、AB テストをしたり、広告代理業など LP（セールスレター）を作成しました。',
    },
  ],
};
// TODO: 学歴などの修正および追加
// NOTE: education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: '学歴/資格/教育',
  description: '私の学歴をまとめたものは以下になります。',
  items: [
    {
      institution: '資格',
      degree: '普通自動車免許',
      duration: '1998年2月 - 1998年3月',
      description: '普通自動車免許を取得しました。',
    },
    {
      institution: '専門学校',
      degree: '○○○専門学校（仮）',
      duration: '1998年4月 - 2000年3月',
      description: '○○○学科を卒業しました。',
    },
    {
      institution: '高校',
      degree: '○○○高校',
      duration: '2015年4月 - 2018年3月',
      description: '普通科を卒業しました。',
    },
  ],
};
// TODO: スキル項目の修正および追加
// NOTE: skills data
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* NOTE: content */}
          <div className="min-h-[70vh] w-full">
            {/* NOTE: experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* NOTE: dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* NOTE: education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* NOTE: dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* NOTE: skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[520px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* NOTE: about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
