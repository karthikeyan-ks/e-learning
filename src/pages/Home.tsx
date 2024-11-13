import Spline from '@splinetool/react-spline';
import './home.css'; // Import your custom CSS for styling

const Home = () => {
  return (
    <div className="container">
      <div className="text1">
        <h1>
          Learn Smart <br />
          <span className="highlight">Grow Fast</span> <br />
          Achieve More
        </h1>
        
        <p>Lorem ipsum dolor sit amet consectetur. Ac integer elit mi <br></br>turpis vel bibendum egestas volutpat.
        Curabitur magna ipsum eget 
        <br></br>turpis aenean dictum</p>
        
        <button className='Connect-button'> Connect Us</button>
      </div>
      <main className="spline-container">
        <Spline
          scene="https://prod.spline.design/lHyNMWDWdxR-omhL/scene.splinecode"
        />
      </main>
    </div>
  );
};

export default Home;
