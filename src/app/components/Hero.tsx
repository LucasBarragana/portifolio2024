'use client'

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Download from './icons/download';

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <section id="hero" className="max-w-6xl mx-auto h-[80vh] flex items-center font-inter">
            <div className="container mx-auto h-full flex justify-between items-center">
                <div className="flex w-3/5">
                    <div className="grid drig-cols-1 gap-2 mr-10 ">
                        <Link href=""><Image src="/github.png" alt='' width={46} height={46}></Image></Link>
                        <Link href=""><Image src="/icons8-linkedin-48.png" alt='' width={52} height={52}></Image></Link>
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
                            <button className="flex mr-2 bg-blue-700 text-white px-4 py-2 rounded"><Download />{t('btn1')}</button>
                            <button className="flex bg-green-700 text-white px-4 py-2 rounded">{t('btn2')}</button>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center">
                        <Image src="/bear-dev.png" alt='foguete' width={456} height={456} className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}
