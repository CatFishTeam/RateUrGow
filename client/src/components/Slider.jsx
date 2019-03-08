import React from 'react'

const Slide = ({image}) => {
    let styles = {
        backgroundImage: `url(/pictures/${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    if (image.startsWith('http://')) {
        styles.backgroundImage = `url(${image})`
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
            translateValue: 0,
            loop: false
        }

        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.loopNext()
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
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    loopNext(time = 5000){
        if(this.loop) return;
        setInterval(() => this.goToNextSlide(document.createEvent('Events')), time);
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