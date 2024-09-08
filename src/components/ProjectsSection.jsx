import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects as initialProjects } from '../data/projects';

const ProjectsSection = () => {
    // Set up state to manage projects
    const [projects, setProjects] = useState(initialProjects);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        image: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProject.title && newProject.description && newProject.image) {
            setProjects([...projects, newProject]);
            setNewProject({
                title: '',
                description: '',
                image: ''
            });
        }
    };

    return (
        <section className="items-center mb-5 mt-[-10px] bg-stone-900 p-10 rounded-3xl">
            <h1 className="text-7xl font-bold mb-10">Projects</h1>
            <p className="text-xl font-semibold mb-10">
                Tpe in the details in the form below and add your projects effortlessly!
            </p>

            {/* Project Form */}
            <form className="mb-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 mb-5">
                    <input 
                        type="text" 
                        name="title" 
                        className="bg-stone-800 text-white p-3 rounded-md"
                        placeholder="Enter project title" 
                        value={newProject.title}
                        onChange={handleInputChange} 
                        required
                    />
                    <textarea 
                        name="description" 
                        className="bg-stone-800 text-white p-3 rounded-md"
                        placeholder="Enter project description" 
                        value={newProject.description}
                        onChange={handleInputChange} 
                        required
                    />
                    <input 
                        type="text" 
                        name="image" 
                        className="bg-stone-800 text-white p-3 rounded-md"
                        placeholder="Enter image URL" 
                        value={newProject.image}
                        onChange={handleInputChange} 
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-emerald-500 hover:bg-emerald-600 py-3 px-6 rounded-lg font-semibold"
                >
                    Add Project
                </button>
            </form>

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
