import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";


const App = () => {
    return (
        <div className="bg-gradient-to-b from-stone-900 to-stone-800 text-white ">
          <div className="px-20">
          <Header />
          <HeroSection/>
          <AboutMeSection />
          <ProjectsSection />
          </div>
          <div>
          <Footer />
          </div> 
        </div>
    );
};

export default App;

