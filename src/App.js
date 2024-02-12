// import logo from './logo.svg';
import './App.css';
import UploadFile from './components/UploadFile/UploadFile'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import HomeStyle from './Styles/Home';
import { Button } from 'react-bootstrap';
import Home from "./components/Project/Pages/Home"
import Datasets from "./components/Project/Pages/Datasets"
import Cards from './components/Card/Card';
import Cleaning from './components/Cleaning/Cleaning';
import profiling from './components/Profiling/profiling';
import{  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import DetailData from './components/Project/DetailData';
import BoxPlot from './components/BoxPlot';
function App() {
  return (
    <Router>
      <div className="App" style={HomeStyle}>
        <NavBar/>
        <Routes>
          <Route path='project' element= {<Cards/>}/> 
          
          <Route path="project/:id" element={<Home/>}/>
          <Route path="/project/:id/datasets" element={<Datasets/>}/>
          <Route path="/project/:id/profiling" element={<profiling/>}/>
          {/* <Route path="/project/:id/datasets/:fileName" element={<DetailData/>}/> */}
          <Route path="/project/:id/cleaning" element= {<Cleaning/>}></Route>
        
        </Routes>
      {/* <BoxPlot/> */}
      {/* <UploadFile/> */}
      </div>
    </Router>
    
  );
}

export default App;
