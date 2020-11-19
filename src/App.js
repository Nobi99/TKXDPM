import './App.css';

import {
  ListDockingStation,
  HiringBike
} from './page';




import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */ }
      < HiringBike />
      {/* <ListBike /> */ }
    </div>
  );
}

export default App;
