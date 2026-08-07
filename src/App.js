import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import {
  ExperienceSection,
  Introduction,
  ProjectsPage,
  SkillsSection,
  Contact,
} from './sections';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-start font-text text-tx">
        <Introduction />
        <ProjectsPage />
        <ExperienceSection />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
