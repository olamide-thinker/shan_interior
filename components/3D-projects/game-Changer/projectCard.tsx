import Image from 'next/image';
import React from 'react';
import { threeDprojects } from '../../../mockData/3dProjects';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
    title: string;
}

export default function ProjectCard({ title }: ProjectCardProps) {
    return (
        <div className=''>

            <div className="flex items-center gap-4 px-8">
                <p className="text-sm font-bold whitespace-nowrap">{title}</p>
                <div className="flex-1 h-[2px] bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 w-full">
                {threeDprojects.map((project, index) => (
                    <div key={index} className="w-full rounded-lg p-4 ">
                        {/* Project Image with Zoom on Hover */}
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={project.imageSrc}
                                alt={project.altText}
                                width={500}
                                height={300}
                                className="rounded-md w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>

                        {/* Project Details */}
                        <div className="mt-4 flex flex-col lg:flex-row w-full justify-between items-center p-4 rounded-md">
                            <div className="text-left text-black w-full">
                                <h2 className="text-xl font-semibold">{project.altText}</h2>
                                <p className="text-sm text-gray-600 break-words">{project.desc}</p>
                            </div>

                            <Button className="bg-black rounded-full text-white px-4 py-2 mt-4 lg:mt-0">
                                View Project
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
