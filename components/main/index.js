import Carousel from './Carousel';
import CallToAction from './CallToAction';
import InfoCards from './InfoCards';

export default class Home extends React.Component {
    render() {
    
      return (
        <div >
            <Carousel />
            <CallToAction />
            <InfoCards />
        </div>
     
      );
    }
  }
  