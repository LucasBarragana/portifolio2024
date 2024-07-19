'use client'

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Download from './icons/download';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <section id="hero" className="max-w-6xl mx-auto h-[80vh] px-10 flex items-center font-inter">
            <div className="container mx-auto h-full block md:flex justify-between items-center">
                <div className="flex items-center w-full md:w-3/5">
                    <div className="block mr-10 ">
                        <Link href="/https://github.com/LucasBarragana" className='w-10 h-auto'><Image src="/github.png" alt='' width={46} height={46} className='w-10 h-auto mb-10'></Image></Link>
                        <Link href="/https://www.linkedin.com/in/lucas-barragana-564b05187/" className='w-10 h-auto'><Image src="/icons8-linkedin-48.png" alt='' width={52} height={52} className='w-10 h-auto'></Image></Link>
                    </div>
                    <div>
                        <div className='flex justify-between align-start items-end'>
                            <div>
                                <h2 className="text-5xl">{t('h2')},</h2>
                                <h3 className="text-3xl">{t('h3')},</h3>
                            </div>
                            <div><Image src="/foguete1.png" alt='foguete' width={128} height={128} className=''/></div>
                        </div>
                        <h1 className="text-6xl font-bold my-6">Lucas Barragana</h1>
                        <p className="text-2xl mt-4">{t('p11')}<span className="font-semibold">{t('p12')}</span> <span className="font-light">{t('p13')}</span></p>
                        <p className="mt-2 text-lg">{t('p2')}</p>
                        <div className="flex mt-8">
                            <Link href="/Curriculo.doc" passHref className="flex mr-2 bg-blue-700 text-white px-4 py-2 rounded"><Download />{t('btn1')}</Link>
                            <button className="flex bg-green-700 text-white px-4 py-2 rounded">{t('btn2')}</button>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex justify-center items-center">
                    <div className="w-full h-full hidden md:flex justify-center items-center">
                        <Image src="/bear-dev.png" alt='foguete' width={456} height={456} className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}
