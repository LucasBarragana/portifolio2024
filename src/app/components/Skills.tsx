'use client'

import Image from "next/image"

import {useTranslations} from 'next-intl';

export default function Skills() {
    const t = useTranslations('Skills');

    return (
        <section id="Skills" className="max-w-6xl mx-auto py-10 relative">
            <div className="relative">
                <h1 className="text-4xl font-semibold font-inter my-auto relative top-10">{t('title')}</h1>
                <h1 className="text-8xl absolute top-0 left-0 opacity-30">
                    {t('title2')}
                </h1>
            </div>
            <div className="mt-20 font-inter"> 
                <div className="flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="w-40">
                        <h2 className="font-semibold text-2xl text-green-700">{t('subTitle1')}</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-16">
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-700">{t('item1')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <span className="icon-container">
                                    <Image src="/html.png" alt="html" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">HTML</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/css.png" alt="css" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">CSS</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/js.png" alt="js" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">JavaScript</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/ts.png" alt="ts" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">TypeScript</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-700">{t('item2')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <span className="icon-container">
                                    <Image src="/react2.png" alt="react" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">React</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/next.png" alt="next" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">Next.js</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/angular.png" alt="angular" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">Angular</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-700">{t('item3')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <span className="icon-container">
                                    <Image src="/tailwind.png" alt="tailwind" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">Tailwind</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/Sass.png" alt="sass" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">Sass</p>
                                </span>
                                <span className="icon-container">
                                    <Image src="/materialui.png" alt="materialui" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text">Material UI</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 mt-8">
                    <div className="w-40">
                        <h2 className="font-semibold text-2xl text-green-700">{t('subTitle2')}</h2>
                    </div>
                    <div className="grid grid-cols-6 gap-10">
                        <span className="icon-container">
                            <Image src="/nodejs.png" alt="nodejs" width={48} height={48} className="icon-image"/>
                            <p className="icon-text">Node.js</p>
                        </span>
                        <span className="icon-container">
                            <Image src="/supabase.png" alt="supabase" width={48} height={48} className="icon-image"/>
                            <p className="icon-text">Supabase</p>
                        </span>
                        <span className="icon-container">
                            <Image src="/prisma.png" alt="prisma" width={48} height={48} className="icon-image"/>
                            <p className="icon-text">Prisma</p>
                        </span>
                    </div>
                </div>
                <div className="flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 mt-8">
                    <div>
                        <h2 className="font-semibold text-2xl text-green-700">{t('subTitle3')}</h2>
                    </div>
                    <div className="grid grid-cols-6 gap-10">
                        <span className="icon-container">
                            <Image src="/mongo.png" alt="mongo" width={48} height={48} className="icon-image"/>
                            <p className="icon-text">MongoDB</p>
                        </span>
                        <span className="icon-container">
                            <Image src="/postgre.png" alt="postgre" width={48} height={48} className="icon-image"/>
                            <p className="icon-text">PostgreSQL</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
