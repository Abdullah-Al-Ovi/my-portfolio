import { personalInfo } from "../../data"

export const Info = () => {
  return (
    <>
        {personalInfo?.map(({title,description},index)=>{
           return(
            <li className="into__item" key={index}>
                <span className="info__title">{title}</span>
                <span style={{fontSize:'17px'}} className="info__description">{description}</span>
            </li>
           ) 
        })}
        
    </>
  )
}
