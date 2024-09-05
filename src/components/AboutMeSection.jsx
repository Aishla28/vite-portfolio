import React from 'react';

const AboutMeSection = () => {
    return (
        <section className="items-center mb-20 mt-[-10px] bg-stone-900 p-10 rounded-3xl">
            <div className="flex grid grid-cols-2 gap-10">
                <p className="text-2xl font-semibold">
                    As a multifaceted designer, I thrive on blending creativity with technical acumen to craft engaging digital experiences. 
                    I am driven by the challenge of crafting seamless web experiences, breathing new life into digital platforms through thoughtful redesigns. 
                    Actively honing my skills in UX research and web design, I am committed to bringing my innovative ideas to fruition.
                    <br /><br />
                    My passion for design is matched only by my love for music and sports, adding depth and diversity to my perspective.
                </p>
                <img className="rounded-3xl" src="portfolio.jpg" alt="Portfolio" />
            </div>
        </section>
    );
};

export default AboutMeSection;
