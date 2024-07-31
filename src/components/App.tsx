import { ReactElement } from 'react';
import MediaPlayer from './MediaPlayer';
import './App.css';
import Header from './Header';

export function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <MediaPlayer />
    </div>
  );
};

export default App;
