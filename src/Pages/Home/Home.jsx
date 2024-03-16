
import Profile from '../../assets/pixelcut-export.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
export const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="Profile" className="home__img" />
            <div className="home__content" data-aos="zoom-out-up" data-aos-duration="2000">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>Greetings.
                            <span style={{ display: 'block', color: 'rgb(216, 214, 214)' }}>I am Abdullah Al Ovi</span></span>

                    </h1>

                    <p className="home__description">
                        I&rsquo;m a web developer with a strong focus on front-end design, bringing creativity and functionality to digital spaces. While my expertise lies in crafting engaging user interfaces, I&rsquo;m also familiar with backend technologies, allowing me to seamlessly integrate and enhance the overall web experience.
                    </p>
                    <Link to='about' className='button'>
                        More About Me <span className='button__icon'><FaArrowRight></FaArrowRight></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
