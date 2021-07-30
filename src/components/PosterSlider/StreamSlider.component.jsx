import React from 'react'


import Slider from 'react-slick';
import StreamPoster from '../Poster/streamPoster.component';
import settings from '../../config/PosterCarousel.config';

const StreamSlider = (props) => {

    const SliderConfig = props.config ? props.config : settings;
    
    return (
        <>
            <Slider {...SliderConfig}>
                {props.images.map((image) => (
                <StreamPoster {...image} />
                ))}
            </Slider>
        </>
    )
}

export default StreamSlider;