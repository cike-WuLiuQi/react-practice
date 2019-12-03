import * as React from "react";
import { Carousel } from "antd";
import { Slider } from "../../../store/reducers/home";
import './index.less';

export interface HomeSliderProps {
  getSliders: any;
  sliders: Array<Slider>;
}

export interface HomeSliderState {}

class HomeSlider extends React.Component<HomeSliderProps, HomeSliderState> {
  // state = { :  }

  async componentDidMount() {
    await this.props.getSliders();
  }
  render() {
    return (
      <Carousel>
        {this.props.sliders.map((slider: Slider) => <img className='slider-img' src={slider.url} key={slider._id} />)}
      </Carousel>
    )
  }
}

export default HomeSlider;
