import React from 'react';
import ImageList from './components/ImageList'
import ImageModal from './components/ImageModal';
import GitHubLink from './components/GitHubLink';

import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubLink />
      <ImageList />
      <ImageModal/>
    </div>
  );
}

export default App;
