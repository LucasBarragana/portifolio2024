'use client'

import { useRef } from "react";
import Image from "next/image";
import Code from "./icons/code";
import Responsible from "./icons/responsible";
import Cart from "./icons/cart";
import Check2 from "./icons/check2";
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

export default function Services() {
  const t = useTranslations('Services');

  // Ref for the section
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="Services" className="max-w-6xl mx-auto px-10 xl:px-0 py-10 relative">
      <div className="relative">
        <motion.h1
          className="text-4xl font-semibold font-inter my-auto relative top-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {t('title')}
        </motion.h1>
        <motion.h1
          className="text-8xl absolute top-0 left-0 opacity-30"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('title2')}
        </motion.h1>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 font-inter mt-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4">
            <Code />
          </div>
          <h3 className="text-green-500 font-semibold text-2xl">{t('titleService1')}</h3>
          <p className="text-sm">{t('descriptionService1')}</p>
          <div className="mt-4">
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle1Service1')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle1Service1')}</li>
              <li>{t('item2subtitle1Service1')}</li>
              <li>{t('item3subtitle1Service1')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle2Service1')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle2Service1')}</li>
              <li>{t('item2subtitle2Service1')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 /> {t('subtitle3Service1')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle3Service1')}</li>
              <li>{t('item3subtitle3Service1')}</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4">
            <Responsible />
          </div>
          <h3 className="text-green-500 font-semibold text-2xl">{t('titleService2')}</h3>
          <p className="text-sm">{t('descriptionService2')}</p>
          <div className="mt-4">
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle1Service2')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle1Service2')}</li>
              <li>{t('item2subtitle1Service2')}</li>
              <li>{t('item3subtitle1Service2')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle2Service2')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item2subtitle2Service2')}</li>
              <li>{t('item3subtitle2Service2')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 /> {t('subtitle3Service2')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle3Service2')}</li>
              <li>{t('item2subtitle3Service2')}</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4">
            <Cart />
          </div>
          <h3 className="text-green-500 font-semibold text-2xl">{t('titleService3')}</h3>
          <p className="text-sm">{t('descriptionService3')}</p>
          <div className="mt-4">
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle1Service3')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle1Service3')}</li>
              <li>{t('item3subtitle1Service3')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 />{t('subtitle2Service3')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item2subtitle2Service3')}</li>
              <li>{t('item3subtitle2Service3')}</li>
            </ul>
            <li className="flex font-semibold text-blue-500">
              <Check2 /> {t('subtitle3Service3')}
            </li>
            <ul className="text-xs list-disc list-inside ml-8">
              <li>{t('item1subtitle3Service3')}</li>
              <li>{t('item2subtitle3Service3')}</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
