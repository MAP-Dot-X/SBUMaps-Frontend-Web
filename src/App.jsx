import Navbar from './components/Navbar';
import Sidebar from './components/sidebars/Sidebar';
import MapComponent from './components/MapComponent';

import './App.css';
import './index.css';
import { ToggleProvider } from './context/ToggleContext';

function App() {
  return (
    <>
      <ToggleProvider>
        <Navbar />
        <Sidebar />
        <MapComponent />
      </ToggleProvider>
    </>
  );
}

export default App;
