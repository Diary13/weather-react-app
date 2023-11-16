import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/location.scss';


const Location = ({location}) => {
    return (
        <div className="card_location">
           <FontAwesomeIcon className='location_icon' icon={faLocationDot}/>
           <div>
                <span className='current'>Current location</span><br />
                <span className='countrie'>{location.city}, {location.country}</span>
           </div>
        </div>
    )
}

export default Location;