'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    number: '01',
    category: 'frontend',
    title: 'Project 1',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi commodi accusamus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '/',
    github: '/',
  },
];

const Work = () => {
  return <div>work page</div>;
};
/* TODO: 02:16:28 */
export default Work;
