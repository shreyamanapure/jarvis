import images from "./images"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const Carousel = () => {

    const [width, setWidth] = useState(0);

    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return(
        <>
            <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className="carousel">
                <motion.div drag="x"  dragConstraints={{right:0, left:-width}} className="inner-carousel">
                {images.map(image => {
                    return(
                        <motion.div className="item" key={image}>
                            <img src={image} alt=""/>
                        </motion.div>
                    );
                })}
                </motion.div>
            </motion.div>
        </>
    )
}

export default Carousel;

