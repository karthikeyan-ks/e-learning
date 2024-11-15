import './program.css';
import logo from '../Static/image/image copy 5.png';
import arrow from '../Static/image/arrow.png'; // Path to your arrow image

const Program = () => {
  return (
    <div className='program-main'>
      <div className='prg-text1'>
        <h1>Unlock your potential with our Programs</h1>
      </div>
      <div className='prgm-main'>
        <div className='prg-continer'>
          <div className='pgm'>
            <div className='image-prg'>
              <img src={logo} alt="Program Logo" />
            </div>
            <div className='pgm-text2'>
              <h1>WorkShop</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Ac integer elit mi turpis vel bibendum egestas volutpat. Curabitur magna ipsum eget</p>
              <button className='arrow-button'>
                 <img src={arrow} alt="Arrow" className='arrow-icon'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
