import React from 'react';
import Form from '../components/form';
import './contact.css';
import logo from '../Static/image/image copy 7.png';
import GradientCircles from '../components/GradientCircles';
const Contact = () => {
  return (
    <div className='Contact'>
   
    <div className="Contact-main">
    <GradientCircles />
      <div className="left-side-content">
        <div className="co-text1">
          <h1>Campus Ambassadors</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Placerat arcu pretium orci eu integer sed commodo euismod suspendisse. Integer et viverra fermentum amet nunc eget. Diam lacus turpis luctus mauris. Ornare ullamcorper congue feugiat sollicitudin eget ut. Tincidunt sodales sapien egestas arcu praesent senectus neque a. Risus erat vel urna libero nec egestas. Gravida tristique duis elit commodo neque viverra leo amet convallis. Pellentesque ut a tristique nullam facilisis libero at potenti. Diam nisl risus orci cursus.</p>
        </div>
        <div className="Our-Team">
          <h2>Join Our Team</h2>
        </div>
        <div className="forms">
          <Form />
        </div>
      </div>
      
      <div className="left-side-image">
        <img src={logo} alt="Campus Ambassador Logo" />
      </div>
    </div>
    </div>
  );
};

export default Contact;
