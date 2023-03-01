import './scss/style.css';

import Navbar from './components/navbar/Navbar.js';
import EventDetail from './pages/EventDetailPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <EventDetail />
    </div>
  );
}

export default App;
