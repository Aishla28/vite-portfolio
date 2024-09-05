import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
    

    return (
        <section className="items-center mb-5 mt-[-10px] bg-stone-900 p-10 rounded-3xl">
            <h1 className="text-7xl font-bold mb-10">Projects</h1>
            <p className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-[5%] text-sm">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
