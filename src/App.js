import "./styles/style.css";
import image from "./imageInSrc.jpg";

function App() {
  let styles = {
    border:'solid 1px black',
    maxWidth:'100vw'
  };
  
  return (
    <div style={styles}>

        <h1 className="title red">Your name here</h1>

        <br />

        <img src={image} alt="myImage" />

        <br />

        <img src="/imageInPublic.jpg" alt="myImage2" />


      <video  controls>

          <source src="myVideo.mp4" type="video/mp4"/> 

      </video>

    </div>

   




  );
}

export default App;
