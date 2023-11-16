import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/searchLocation.scss';

const SearchLocation = ({ onSubmit })=> {

    
    return (
        <div className='container_search'>
            <div className='content'>
                <h2>The Only best Weather App </h2>
                <div className='input_block'>
                    <form onSubmit={onSubmit}>
                        <FontAwesomeIcon className='search_icon' icon={faSearch}/>
                        <input type="text" placeholder='Search location'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchLocation;