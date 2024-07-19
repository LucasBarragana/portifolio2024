'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Download from './icons/download';
import { motion } from 'framer-motion';
import Hand from './icons/hand';

export default function Hero() {
    const t = useTranslations('Hero');

    // URL do WhatsApp com a mensagem pré-preenchida
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5553991743979&text=${encodeURIComponent('Olá! Estou interessado em mais informações sobre seus serviços.')}`;

    return (
        <section id="hero" className="max-w-6xl my-10 md:my-0 mx-auto h-[80vh] px-10 flex items-center font-inter">
            <div className="container mx-auto h-full block md:flex justify-between items-center">
                <motion.div 
                    className="flex items-center w-full md:w-3/5"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="block mr-10 ">
                        <Link href="/https://github.com/LucasBarragana" className='w-10 h-auto'>
                            <Image src="/github.png" alt='' width={46} height={46} className='w-10 h-auto mb-10' />
                        </Link>
                        <Link href="/https://www.linkedin.com/in/lucas-barragana-564b05187/" className='w-10 h-auto'>
                            <Image src="/icons8-linkedin-48.png" alt='' width={52} height={52} className='w-10 h-auto' />
                        </Link>
                    </div>
                    <div>
                        <div className='flex justify-between align-start items-end'>
                            <div>
                                <h2 className="text-5xl">{t('h2')},</h2>
                                <h3 className="text-3xl">{t('h3')},</h3>
                            </div>
                            <div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image src="/foguete1.png" alt='foguete' width={128} height={128} />
                                </motion.div>
                            </div>
                        </div>
                        <h1 className="text-6xl font-bold my-6">Lucas Barragana</h1>
                        <p className="text-2xl mt-4">{t('p11')}<span className="font-semibold">{t('p12')}</span> <span className="font-light">{t('p13')}</span></p>
                        <p className="mt-2 text-lg">{t('p2')}</p>
                        <div className="flex mt-8">
                            <Link href="/Curriculo.doc" passHref className="flex items-center mr-4 bg-blue-700 text-white px-4 py-2 rounded">
                                <Download />
                                {t('btn1')}
                            </Link>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-700 text-white px-4 py-2 rounded">
                                <Hand />
                                {t('btn2')}
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className="w-2/5 flex justify-center items-center relative"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Imagem de fundo */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image 
                            src="/forma.png" 
                            alt='background' 
                            layout='fill' 
                            className='z-0 blur-sm'
                        />
                    </div>
                    
                    {/* Imagem principal */}
                    <div className="relative w-full h-full hidden md:flex justify-center items-center z-10">
                        <Image src="/bear-dev.png" alt='foguete' width={456} height={456} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
