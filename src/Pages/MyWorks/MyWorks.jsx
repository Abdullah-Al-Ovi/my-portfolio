
import { portfolio } from '../../../data'
import { PortfolioItem } from '../../Components/PortfolioItem'
import './myworks.css'

export const MyWorks = () => {
 
  return (
    <section className="portfolio section" data-aos="fade-down"
     data-aos-duration="1500">
      <h2 className="section__title"> <span style={{color:'rgb(214, 211, 211)'}}> My </span><span>Projects</span></h2>

      <div className="portfolio__container container grid" >
        {
          portfolio?.map((item)=>{
            return <PortfolioItem key={item?.id} {...item}></PortfolioItem>
          })
        }
      </div>
    </section>
  )
}
