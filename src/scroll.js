
import { text } from './text';
import { useEffect, useState } from 'react';


function Scroll() {

    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        let timeout;  
        const handleScroll = () => {
            if (!scrolling) {
                setScrolling(true)
            }
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                if (scrolling) {
                    setScrolling(false)
                }
            }, 1000)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolling])


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
    )
}

export default Scroll