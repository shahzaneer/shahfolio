import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Volunteering, Footer } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Volunteering/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <DownloadCVButton/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

function DownloadCVButton() {
  const downloadLink = "https://drive.google.com/file/d/1W9Sk1d2Ypuvxwk5qpCR3CXmZHkkZ9tRB/view?usp=sharing";

  return (
    <div className="flex justify-center mb-10">
      <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="bg-purple-900 hover:bg-tertiary shadow-inner z-[10]  text-white font-bold py-2 px-4 rounded">
        Download CV
      </a>
    </div>
  );
}

export default App;
