'use client'

import { useState } from 'react';
import projects from './projectsData';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('Projects');

    const [mainImages, setMainImages] = useState(() =>
        projects.map((project) => project.mainImage)
    );

    const handleImageClick = (projectId: number, image: string) => {
        setMainImages((prevImages) => 
            prevImages.map((img, index) => 
                index === projectId ? image : img
            )
        );
    };

    return (
        <section id="Projects" className="max-w-6xl mx-auto py-10 relative">
            <div className="relative">
                <h1 className="text-4xl font-semibold font-inter my-auto relative top-10">{t('title')}</h1>
                <h1 className="text-8xl absolute top-0 left-0 opacity-30">
                    {t('title2')}
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-20 font-inter">
                {projects.map((project, projectId) => (
                    <div key={project.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div>
                            <div className="relative group">
                                <Link href={project.liveLink} target='_blank'>
                                    <Image src={mainImages[projectId]} alt="Main Image" width={600} height={400} className="w-full h-auto rounded" />
                                    <div className="absolute w-40 h-10 top-10 left-40 rounded-3xl inset-0 bg-black bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white ">{t('website')}</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid grid-cols-3 mt-6 gap-4">
                                {project.secondaryImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`Secondary Image ${index + 1}`}
                                        width={200}
                                        height={150}
                                        className="w-32 h-auto rounded cursor-pointer"
                                        onClick={() => handleImageClick(projectId, image)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl mt-4">{project.title}</h2>
                        </div>
                        <div>
                            <p className="mt-2">{t(`project${project.id}Description`)}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="mt-2 font-semibold text-green-700">Technologies used:</p>
                                <div className="flex mt-2 gap-4">
                                    {project.techImages.map((image, index) => (
                                        <Image key={index} src={image} alt={`Technology ${index + 1}`} width={36} height={36} className="w-8 h-auto rounded" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex mt-8  font-semibold ">
                                <Link href={project.githubLink} target='blank' className="text-blue-500 hover:underline mr-4">
                                    GitHub
                                    <Image src="/github.png" alt='' width={36} height={36} />
                                </Link>
                                <Link href={project.liveLink} target='blank' className="text-blue-500 hover:underline">Live Site</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
