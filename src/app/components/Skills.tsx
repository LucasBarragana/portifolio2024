'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Skills() {
    const t = useTranslations('Skills');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="Skills"
            ref={sectionRef}
            className={`max-w-6xl mx-auto px-10 xl:px-0 py-10 relative transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="relative">
                <h1 className="text-2xl md:text-4xl font-semibold font-inter my-auto relative top-6 md:top-10">{t('title')}</h1>
                <h1 className="text-6xl md:text-8xl absolute top-0 left-0 opacity-30">
                    {t('title2')}
                </h1>
            </div>
            <div className="mt-20 font-inter">
                <div className="block md:flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="w-40">
                        <h2 className="font-semibold text-2xl text-green-500">{t('subTitle1')}</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mr-4">
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-500">{t('item1')}</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/html.png" alt="html" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">HTML</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/css.png" alt="css" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">CSS</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/js.png" alt="js" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">JavaScript</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/ts.png" alt="ts" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">TypeScript</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-500">{t('item2')}</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/react2.png" alt="react" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">React</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/next.png" alt="next" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Next.js</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/angular.png" alt="angular" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Angular</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col align-center justify center items-center">
                            <h3 className="font-semibold mb-2 text-blue-500">{t('item3')}</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/tailwind.png" alt="tailwind" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Tailwind</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/Sass.png" alt="sass" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Sass</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/materialui.png" alt="materialui" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Material UI</p>
                                </span>
                                <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                                    <Image src="/framer.png" alt="FramerMotion" width={48} height={48} className="icon-image"/>
                                    <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Framer Motion</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 mt-8">
                    <div className="w-40">
                        <h2 className="font-semibold text-2xl text-green-500">{t('subTitle2')}</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/nodejs.png" alt="nodejs" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Node.js</p>
                        </span>
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/supabase.png" alt="supabase" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Supabase</p>
                        </span>
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/prisma.png" alt="prisma" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">Prisma</p>
                        </span>
                    </div>
                </div>
                <div className="block md:flex justify-start align-center items-center gap-x-10 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 mt-8">
                    <div>
                        <h2 className="font-semibold text-2xl text-green-500">{t('subTitle3')}</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/mongo.png" alt="mongo" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">MongoDB</p>
                        </span>
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/postgre.png" alt="postgre" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">PostgreSQL</p>
                        </span>
                        <span className="icon-container p-[0.5rem] md:p-[1.5rem] w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]">
                            <Image src="/aws.png" alt="postgre" width={48} height={48} className="icon-image"/>
                            <p className="icon-text text-[0.5rem] md:text-[0.8rem]">AWS S3</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
