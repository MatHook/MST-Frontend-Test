import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Footer from './components/Footer'
import Header from './components/Header'
import SectionMenu from './components/SectionMenu';
import { ContentList } from './content/ContentList';

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
};

function App() {
  return (
    <Router>
      <div style={bodyStyle}>
        <Header />
        <SectionMenu />
        <React.Fragment>
          <ContentList />
        </React.Fragment>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
