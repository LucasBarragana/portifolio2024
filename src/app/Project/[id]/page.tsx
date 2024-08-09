'use client'

import { notFound } from 'next/navigation';
import { useState } from 'react';
import projects from '@/app/components/Projects/projectsData';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const projectId = parseInt(params.id);
    const project = projects.find((project) => project.id === projectId);

    const [mainImage, setMainImage] = useState(project?.mainImage || '');

    if (!project) {
        return notFound();
    }

    const handleImageClick = (image: string) => {
        setMainImage(image);
    };

    return (
        <section className="max-w-6xl mx-auto px-10 xl:px-0 py-10 relative">
            <h1 className="text-4xl font-semibold font-inter mb-8">
                {project.title}
            </h1>
            <div className="relative mb-8">
                <Image src={mainImage} alt="Main Image" width={800} height={500} className="w-full h-auto rounded" />
            </div>
            <p className="mb-4">{project.description}</p>
            <div className="grid grid-cols-3 gap-4">
                {project.secondaryImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Secondary Image ${index + 1}`}
                        width={300}
                        height={200}
                        className="w-full h-auto rounded cursor-pointer"
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            <div className="mt-8">
                <h2 className="font-semibold text-2xl mb-4">Technologies Used:</h2>
                <div className="flex gap-4">
                    {project.techImages.map((image, index) => (
                        <Image key={index} src={image} alt={`Technology ${index + 1}`} width={40} height={40} className="w-10 h-auto" />
                    ))}
                </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <Link href={project.githubLink} target="_blank" className="text-blue-500 hover:underline">
                    GitHub Repository
                </Link>
                <Link href={project.liveLink} target="_blank" className="text-blue-500 hover:underline">
                    Live Site
                </Link>
            </div>
        </section>
    );
}
