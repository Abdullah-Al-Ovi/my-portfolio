import { FaDownload } from "react-icons/fa"
import { Info } from "../../Components/Info"
import { Stats } from "../../Components/Stats"
import { Skills } from "../../Components/Skills"
import { ResumeItem } from "../../Components/ResumeItem"
import { resume } from "../../../data"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import './about.css'
export const About = () => {

    return (
        <main className="section container" >
            <section className="about">
                <h2 className="section__title">
                    <span style={{ color: 'rgb(214, 211, 211)' }}> About</span> <span>Me</span>
                </h2>
                <div className="about__container grid" data-aos="zoom-in-down"  data-aos-duration="1500">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Info</h3>
                        <ul className="info__list grid">
                            <Info></Info>
                        </ul>
                        <div style={{ margin: '13px', marginBottom: '21px', display: 'flex', gap: '17px', alignItems: 'center' }} className="block">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Abdullah-Al-Ovi" className="gitLinked"><FaGithub></FaGithub></a>
                            <a target="_blank" rel="noreferrer" className="gitLinked" href="https://www.linkedin.com/in/abdullah-al-ovi-7042b12a3/" ><FaLinkedin></FaLinkedin></a>
                        </div>
                        <a href='https://drive.google.com/file/d/1OlwBeoeYuoQZzQxuHnw8lH-R1_NO3vE1/view'
                            target="_blank" rel="noreferrer" className="button">Download Resume <span className="button__icon"><FaDownload></FaDownload></span></a>

                    </div>

                    <div style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', padding: '20px', marginRight: '10px' }} className="stats">
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
                    <div className="resume__data" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        {
                            resume?.map((val) => {
                                if (val?.category === 'experience') {
                                    return <ResumeItem key={val?.id} {...val}></ResumeItem>
                                }
                            })
                        }
                    </div>
                    <div className="resume__data" data-aos="fade-up"
                        data-aos-duration="1500">
                        {
                            resume?.map((val) => {
                                if (val?.category === 'education') {
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
