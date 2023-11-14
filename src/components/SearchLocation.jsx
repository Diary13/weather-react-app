import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/searchLocation.scss';

const SearchLocation = ()=> {
    return (
        <div className='container_search'>
            <div className='content'>
                <h2>The Only best Weather App </h2>
                <div className='input_block'>
                    <div>
                        <FontAwesomeIcon className='search_icon' icon={faSearch}/>
                        <input type="text" placeholder='Search location'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchLocation;