import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AreaLanding from './pages/AreaLanding';

function App() {
  const areas = [
    "chennai", "tambaram", "vandalur", "urapakkam", "guduvanchery",
    "potheri", "kattankulathur", "maraimalai-nagar", "sp-koil",
    "paranur", "chengalpattu", "sholinganallur", "pallikaranai",
    "medavakkam", "perumbakkam", "navalur", "siruseri", "kelambakkam", "thiruporur"
  ];

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* SEO Area Pages */}
        {areas.map(area => (
          <Route
            key={area}
            path={`/borewell-service-${area}`}
            element={<AreaLanding locationName={area} />}
          />
        ))}

        {/* Dynamic fallback for other areas */}
        <Route path="/borewell-service-:area" element={<AreaLanding />} />
      </Routes>
    </Layout>
  );
}

export default App;
