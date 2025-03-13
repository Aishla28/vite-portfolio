import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const AboutMeSection = () => {
    const sectionRef = useRef(null);
    const [scale, setScale] = useState(0.5); // Initial scale
    const [opacity, setOpacity] = useState(0.5); // Initial opacity

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.clientHeight;
                const windowHeight = window.innerHeight;

                // Check when the section is near the center of the screen
                const middleOfScreen = windowHeight / 2;
                const sectionMiddle = sectionTop + sectionHeight / 2;
                
                // When section is near the middle of the screen
                if (sectionMiddle < middleOfScreen + windowHeight / 2 && sectionMiddle > middleOfScreen - windowHeight / 2) {
                    // Calculate progress based on distance to the center
                    const distanceFromCenter = Math.abs(middleOfScreen - sectionMiddle);
                    const maxDistance = windowHeight / 2; // Max distance to center
                    const progress = 1 - distanceFromCenter / maxDistance; // Progress from 0 to 1

                    // Update scale and opacity based on how close it is to the center
                    const newScale = 0.5 + progress * 0.5; // Grows from 0.5 to 1
                    const newOpacity = 0.5 + progress * 0.5; // Opacity increases from 0.5 to 1

                    setScale(newScale);
                    setOpacity(newOpacity);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="about-me-section items-center mb-20 mt-[-10px] bg-stone-900 p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl"
            style={{
                transform: `scale(${scale})`,
                opacity: opacity,
            }}
        >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-10">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                    As a multifaceted designer, I thrive on blending creativity with technical acumen to craft engaging digital experiences. 
                    I am driven by the challenge of crafting seamless web experiences, breathing new life into digital platforms through thoughtful redesigns. 
                    Actively honing my skills in UX research and web design, I am committed to bringing my innovative ideas to fruition.
                    <br /><br />
                    My passion for design is matched only by my love for music and sports, adding depth and diversity to my perspective.
                </p>
                <img className="rounded-3xl w-full h-auto mb-6 md:mb-0" src="aishla.jpg" alt="Portfolio" />
            </div>
        </section>
    );
};

export default AboutMeSection;
