'use client'

import Image from "next/image";
import Code from "./icons/code";
import Responsible from "./icons/responsible";
import Cart from "./icons/cart";
import Check2 from "./icons/check2";

import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  return (
    <section id="Services" className="max-w-6xl mx-auto px-10 xl:px-0 py-10 relative">
      <div className="relative">
        <h1 className="text-4xl font-semibold font-inter my-auto relative top-10">{t('title')}</h1>
        <h1 className="text-8xl absolute top-0 left-0 opacity-30">
          {t('title2')}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 font-inter mt-20">
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl">
            <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4"><Code /></div>
            <h3 className="text-green-700 font-semibold text-2xl">{t('titleService1')}</h3>
            <p className="text-sm">{t('descriptionService1')}</p>
            <div className="mt-4">
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle1Service1')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle1Service1')}</li>
                    <li>{t('item2subtitle1Service1')}</li>
                    <li>{t('item3subtitle1Service1')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle2Service1')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle2Service1')}</li>
                    <li>{t('item2subtitle2Service1')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 /> {t('subtitle3Service1')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle3Service1')}</li>
                    <li>{t('item3subtitle3Service1')}</li>
                  </ul>
            </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl">
            <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4"><Responsible /></div>
            <h3 className="text-green-700 font-semibold text-2xl">{t('titleService2')}</h3>
            <p className="text-sm">{t('descriptionService2')}</p>
            <div className="mt-4">
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle1Service1')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle1Service2')}</li>
                    <li>{t('item2subtitle1Service2')}</li>
                    <li>{t('item3subtitle1Service2')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle2Service2')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item2subtitle2Service2')}</li>
                    <li>{t('item3subtitle2Service2')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 /> {t('subtitle3Service2')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle3Service2')}</li>
                    <li>{t('item2subtitle3Service2')}</li>
                  </ul>
            </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl">
            <div className="flex items-center justify-center align-center mb-4 w-20 rounded-xl bg-blue-200 dark:bg-white p-4"><Cart /></div>
            <h3 className="text-green-700 font-semibold text-2xl">{t('titleService3')}</h3>
            <p className="text-sm">{t('descriptionService3')}</p>
            <div className="mt-4">
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle1Service3')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle1Service3')}</li>
                    <li>{t('item3subtitle1Service3')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 />{t('subtitle2Service3')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item2subtitle2Service3')}</li>
                    <li>{t('item3subtitle2Service3')}</li>
                  </ul>
                <li className="flex font-semibold text-blue-700"> <Check2 /> {t('subtitle3Service3')}</li>
                  <ul className="text-xs list-disc list-inside ml-8">
                    <li>{t('item1subtitle3Service3')}</li>
                    <li>{t('item2subtitle3Service3')}</li>
                  </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
