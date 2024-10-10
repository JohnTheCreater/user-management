import logo from './logo.svg';
import './App.css';
import BasicMenu from './BasicMenu';
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {

  const navs=['home','service','contact']
  return (
    <div className="App">
      <ResponsiveAppBar/>
    </div>
  );
}

export default App;
