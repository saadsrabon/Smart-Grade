import ClassesSection from "./components/Classes";
import { Hero } from "./components/hero";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ClassesSection />
      <Footer />
    </div>
  );
};

export default App;
