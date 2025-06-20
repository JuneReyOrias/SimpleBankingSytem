
import './App.css'
import Footer from './Components/footer';

import Navbar from './Components/Navbar';
import Contact from './LandingPage/Contact';
import Faqs from './LandingPage/Faqs';
import Features from './LandingPage/features';
import Home from './LandingPage/Home';
import Security from './LandingPage/Security';

function App() {
 

  return (
<>
      <Navbar />
      {/* You can add main content here */}
      <main className="pt-16">
      
      <Home/>
      <Features/>
      <Security/>
      <Faqs/>
      <Contact/>
      </main>
      <Footer />
    </>
  )
}

export default App
