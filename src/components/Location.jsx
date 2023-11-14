import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/location.scss';


const Location = () => {
    return (
        <div className="card_location">
           <FontAwesomeIcon className='location_icon' icon={faLocationDot}/>
           <div>
                <span className='current'>Current location</span><br />
                <span className='countrie'>Antananarivo, Madagascar</span>
           </div>
        </div>
    )
}

export default Location;