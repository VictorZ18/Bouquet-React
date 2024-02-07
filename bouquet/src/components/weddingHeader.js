import '../App.css';
import arrowDown from '../icons/arrow-down.png';
import '../components/weddingHeader.css';

function WeddingHeader() {
    return (
        <div className="weddingHeader">
            <div className="weddingInfo">
                <h2 className='names'> Victor & Maité </h2>
                <p className='date'> 15.06.2025 </p>
            </div>
            <img src={arrowDown} alt="arrow" className="arrowDown"/>
        </div>
    )
}

export default WeddingHeader;