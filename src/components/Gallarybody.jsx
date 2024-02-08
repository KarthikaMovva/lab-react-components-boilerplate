// import imageData from './GallaryData';
export default function(props){
    return(
        <div>
        {
          props.arrdata.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>  
    )
}