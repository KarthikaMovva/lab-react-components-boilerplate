import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Gallaryheader from './components/Gallaryheader';
// import imageData from './components/GallaryData'
import Gallarybody from './components/Gallarybody';

function App() {
  return (
    <div>
     <Gallaryheader/>        
     
      <Gallarybody/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
