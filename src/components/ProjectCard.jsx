import React from 'react';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="w-5/6 aspect-[4/3]">
            <img src={image} className="bg-emerald-400 rounded-md p-4 w-full h-full object-cover" alt={title} />
            <h2 className="text-xl font-semibold my-1.5">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
            <button className="text-black font-semibold bg-white border text-sm mt-3 border-gray-200 rounded px-4 py-1.5">
                View Project
            </button>
        </div>
    );
};

export default ProjectCard;
