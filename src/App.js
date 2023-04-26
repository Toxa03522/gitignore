import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Pages/Routes';

import './styles/style.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;