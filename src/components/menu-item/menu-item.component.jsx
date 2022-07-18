import React from 'react'
import './menu-item.styles.scss'
import { useNavigate } from 'react-router';



const MenuItem = (props) => {
     let navigate=useNavigate()
     return(
          <div className={`${props.size} menu-item`}
               onClick={()=>navigate(`${props.linkUrl}`)
               }
          >
               <div
                    className='background-image'
                    style={{
                         backgroundImage:`url(${props.imageUrl})`
                    }}
               />
               <div className='content'>
                    <h1 className='title'>{props.title.toUpperCase()}</h1>
                    <span className='subTitle'>{props.imageUrl.toUpperCase()}</span>
               </div>
          </div>
          )
     
               }
export default MenuItem

 