import images from "./images"

const Carousel = () => {
    return(
        <>
            {images.map(image => {
                return(
                    <img src={image} alt="s" />
                );
            })}
        </>
    )
}

export default Carousel;