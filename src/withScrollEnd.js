import { text } from './text';
import { useEffect, useState } from 'react';

// problem with safari

function WithScrollEnd (){
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolling(true)
      }
      const removeScroll = () => {
        setTimeout(()=>{
          setScrolling(false)
        }, 800)
       }
  
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('scrollend', removeScroll)
  
      return () => {
        window.removeEventListener('scroll', removeScroll)
      }
    }, [])
  
  
    return (
      <div>
        <div className='relative'>
          <div className='main-content'>
            {text}
          </div>
          {scrolling
            ? null
            :
            <div className='terms'>
              terms and condition
            </div>
  
          }
        </div>
      </div>
    );
}

export default WithScrollEnd