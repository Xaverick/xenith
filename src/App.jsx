import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './container/Banner/Banner';
import About from './container/About/About';
import Footer from './components/Footer/Footer';
import Team from './container/Team/Team';
import Events from './container/Events/Events'
import Gallery from './container/Gallery/Gallery';
//zimport Gallery-3D from './container/Gallery/Gallery-3D';
import Sponsors from './container/Sponsors/Sponsors';
import Preloader from './components/Preloader/Preloader'; // Import the Preloader component
import Timeline from './container/Timeline/Timeline';
// import EventPage from './pages/EventPage';
import Carousel from './container/Gallery/Gallery';
import { Ansh, Aryan_Gupta, Tanish_Goyal, Tanya_Gupta } from './assets/Team Members';
import ScrollDown from './container/Banner/ScrollDown';
import ChiefGuest from './components/ChiefGuest/ChiefGuest';

function App() {
  const imageUrls = [
    Ansh, Aryan_Gupta, Tanish_Goyal, Tanya_Gupta
    // Add more image URLs as needed
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) for 3 seconds
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5300));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>

          <Navbar />
          <Banner />
          <ScrollDown />
          <About />
          <ChiefGuest />
          <Timeline />
          <Events />
          <Sponsors />
          <Team />

          {/* <Gallery images={imageUrls} interval={3000} /> */}

          <Footer />
          {/*<EventPage/>*/}
        </>
      )}
    </div>
  );
}

export default App;