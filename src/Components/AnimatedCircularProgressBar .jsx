import React, { useRef, useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const AnimatedCircularProgressBar = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circularProgressBarRef = useRef();

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 1000; // Adjust the duration as needed
      const interval = 10;
      let currentPercentage = 0;

      const animationInterval = setInterval(() => {
        currentPercentage += (percentage / (animationDuration / interval));
        setAnimatedPercentage(Math.min(currentPercentage, percentage));

        if (currentPercentage >= percentage) {
          clearInterval(animationInterval);
        }
      }, interval);

      return () => {
        clearInterval(animationInterval);
      };
    }
  }, [isVisible, percentage]);
  const customStyles = buildStyles({
    pathColor: `hsl(271, 76%, 53%)`, // Set the desired color here
    trailColor: 'hsl(0, 0%, 50%)', // Optionally, set the trail color to transparent
    textColor: 'rgb(216, 214, 214)', 
  });

  return (
    <VisibilitySensor
      onChange={(visible) => {
        if (visible && !isVisible) {
          setIsVisible(true);
        }
      }}
    >
      <div>
        <CircularProgressbar
          ref={(ref) => (circularProgressBarRef.current = ref)}
          styles={customStyles}
          value={animatedPercentage}
          text={`${animatedPercentage}%`}
          strokeWidth={8} // Adjust the strokeWidth as needed
        />
      </div>
    </VisibilitySensor>
  );
};
