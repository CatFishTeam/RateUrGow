import React from 'react'

const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(/pictures/${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: props.images,
            currentIndex: 0,
            translateValue: 0
        }

        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
    }

    goToPrevSlide(e) {
        e.preventDefault();
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide(e) {
        e.preventDefault();
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth() {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                     style={{
                         transform: `translateX(${this.state.translateValue}px)`,
                         transition: 'transform ease-out 0.45s'
                     }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image}/>
                        ))
                    }
                </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}

export default Slider