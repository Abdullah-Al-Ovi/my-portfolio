import { FaDownload } from "react-icons/fa"
import { Info } from "../../Components/Info"
import { Stats } from "../../Components/Stats"
import { Skills } from "../../Components/Skills"
import { ResumeItem } from "../../Components/ResumeItem"
import { resume } from "../../../data"
import CV from '../../assets/steve-Cv.pdf'
import './about.css'
export const About = () => {
  return (
    <main className="section container">
        <section className="about">
            <h2 className="section__title">
                About <span>Me</span>
            </h2>
            <div className="about__container grid">
                <div className="about__info">
                    <h3 className="section__subtitle">Personal Info</h3>
                    <ul className="info__list grid">
                        <Info></Info>
                    </ul>
                    <a href={CV} download='' className="button">Download CV <span className="button_icon"><FaDownload></FaDownload></span></a>
                </div>

                <div  style={{ gridTemplateColumns: 'repeat(2, 1fr)',gap:'15px',padding:'20px',marginRight:'10px' }} className="stats">
                    <Stats></Stats>
                </div>
            </div>
        </section>

        <div className="separator"></div>

        <section className="skills">
            <h3 className="section__subtitle subtitle__center">My Skills</h3>
            <div className="skills_container grid">
                <Skills></Skills>
            </div>
        </section>
        <div className="separator"></div>

        <section className="resume">
            <h3 className="section__subtitle subtitle__center">Experience & Education</h3>
            <div className="resume__container grid">
                <div className="resume__data">
                    {
                        resume?.map((val)=>{
                            if(val?.category==='experience'){
                                return <ResumeItem key={val?.id} {...val}></ResumeItem>
                            }
                        })
                    }
                </div>
                <div className="resume__data">
                    {
                        resume?.map((val)=>{
                            if(val?.category==='education'){
                                return <ResumeItem key={val?.id} {...val}></ResumeItem>
                            }
                        })
                    }
                </div>
            </div>
        </section>


    </main>
  )
}
