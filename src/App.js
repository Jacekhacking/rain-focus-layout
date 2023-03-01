import './scss/style.css';

import Navbar from './Components/Navbar/Navbar.js';
import EventDetail from './Components/EventDetail/EventDetail';
function App() {
  return (
    <div className="App">
      <Navbar />
      <EventDetail />
    </div>
  );
}

export default App;
