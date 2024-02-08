import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Gallaryheader from './components/Gallaryheader';
import Gallarybody from './components/Gallarybody';
import lake from "/src/image/lake.JPG";

const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]

function App() {
  return (
    <div>
     <Gallaryheader/>        
     
      <Gallarybody arrdata={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
