import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects as initialProjects } from '../data/projects';

const ProjectsSection = () => {
    // Set up state to manage projects
    const [projects] = useState(initialProjects); // No need for setProjects since we're not adding projects anymore

    return (
        <section className="items-center mb-5 mt-[-10px] bg-stone-900 p-10 rounded-3xl">
            <h1 className="text-7xl font-bold mb-10">Projects</h1>
            <p className="text-xl font-semibold mb-10">
                Here are some of the amazing projects I have worked on.
            </p>

            {/* Project Cards */}
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
