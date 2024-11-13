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
        <p>Lorem ipsum dolor sit amet consectetur.<br></br> Ac integer elit mi turpis vel bibendum egestas volutpat. Curabitur magna ipsum eget turpis aenean dictum</p>
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
