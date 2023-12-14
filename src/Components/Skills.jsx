import { skills } from "../../data";
import { AnimatedCircularProgressBar } from "./AnimatedCircularProgressBar ";


export const Skills = () => {
  return (
    <>
      {skills?.map(({ title, percentage }, index) => (
        <div className="progress__box" key={index}>
          <div className="progress__circle">
            <AnimatedCircularProgressBar percentage={percentage}></AnimatedCircularProgressBar>
          </div>
          <h3 className="skills__title">{title}</h3>
        </div>
      ))}
    </>
  );
};

