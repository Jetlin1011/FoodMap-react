import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';
import ViewRest from './ViewRest';

function App() {
  return (
    <div className="App">
      <Header/>

     <Routes>
      <Route path='/' element={<Restaurant/>}></Route>
      <Route path='/view/:id' element={<ViewRest/>}></Route>
      </Routes>
  
     <Footer/>
    </div>
  );
}

export default App;
