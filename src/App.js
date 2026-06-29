
import './App.css';
import Divider from './components/Divider';
import { AboutMeSection, ExperienceSection, Introduction, ProjectsPage } from './sections';


function App() {
  return (
    <main className="bg-white flex flex-col items-center justify-start font-body"> 
    <Introduction/>
    <ExperienceSection/> 
    <ProjectsPage/> 
    <AboutMeSection/>
    <Divider/>
    </main>
  );
}

export default App;
