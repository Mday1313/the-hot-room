import Carousel from './Carousel';
import CallToAction from './CallToAction';
import InfoCards from './InfoCards';
import Reviews from './Reviews';

export default class Home extends React.Component {
    render() {
    
      return (
        <div >
            <Carousel />
            <CallToAction />
            <InfoCards />
            <Reviews />
        </div>
     
      );
    }
  }
  