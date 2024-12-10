import './GradientCircles.css'; // Path must match your project structure

const GradientCircles = () => {
  return (
    <div className="gradient-circles-wrapper">
      {/* Semi-circle on the left */}
      <div className="semi-circle-container"></div>

      {/* Semi-circle on the right */}
      <div className="semi-circle-container-right"></div>
    </div>
  );
};

export default GradientCircles;
