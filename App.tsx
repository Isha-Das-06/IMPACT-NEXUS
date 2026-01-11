
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HeartCursor } from './components/HeartCursor';
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/WhatWeDo';
import { Impact } from './pages/Impact';
import { VisionValues } from './pages/VisionValues';
import { Programs } from './pages/Programs';
import { GetInvolved } from './pages/GetInvolved';
import { People } from './pages/People';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <HeartCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/vision-values" element={<VisionValues />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/people" element={<People />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
