'use client'
import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
import Image from 'next/image';

import {useTranslations} from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

    const form = useRef<HTMLFormElement>(null); 
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return; 

        emailjs
            .sendForm('service_98t0arv', 'template_497qyiy', form.current, 'F90y2jauO5TdVD3iN')
            .then(
                (result: EmailJSResponseStatus) => {
                    console.log('Success', result.text);
                    setIsSent(true);
                    setTimeout(() => {
                        setIsSent(false);
                    }, 3000);
                    form.current!.reset(); 
                },
                (error: EmailJSResponseStatus) => {
                    console.log('Error', error.text);
                }
            );
    };

    return (
        <section id="Contact" className="max-w-6xl mx-auto px-10 xl:px-0 py-10 relative">
            <div className="relative">
                <h1 className="text-4xl font-semibold font-inter my-auto relative top-10">{t('title')}</h1>
                <h1 className="text-8xl absolute top-0 left-0 opacity-30">
                    {t('title2')}
                </h1>
            </div>
            <div className='font-inter bg-gray-200 dark:bg-gray-800 mt-20 rounded-xl'>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col justify-center items-center p-10 rounded-lg mx-10 lg:mx-40">
                            <div>
                                <h2 className="text-3xl mb-3 font-semibold mb-10">{t('subTitle1')}</h2>
                            </div>
                            <div className="flex w-full mb-3">
                                <div className="flex flex-col mr-5 w-2/5">
                                    <label htmlFor="from_name" className="block mb-1">
                                        {t('name')}:
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        required
                                        className="border border-gray-500 text-gray-900 bg-white rounded px-3 py-2 white mb-2 "
                                    />
                                </div>

                                <div className="flex flex-col w-3/5">
                                    <label htmlFor="user_email" className="block mb-1">
                                        {t('email')}:
                                    </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        required
                                        className="border border-gray-700 text-gray-900 bg-white rounded px-3 py-2 mb-2 "
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-3 w-full" >
                                <label htmlFor="message" className="block mb-1">
                                    {t('message')}:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="border border-gray-700 text-gray-900 bg-white rounded px-3 py-2 mb-2 w-full"                                    
                                ></textarea>
                            </div>

                            <button  id="btnSend cl"
                                type="submit"
                                className="flex items-center justify-center px-4 py-2 rounded border boder-black">
                                {t('send')}
                                <Image width={22} height={22}  src="/send.png" alt="send" />
                            </button>
                            {isSent && (
                                <p className="bg-green-900 text-white p-5 rounded-lg mt-2 font-semibold mt-5">
                                    {t('sucess')}!
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    );
}
