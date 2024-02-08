import '../App.css';
import '../components/countdown.css';

function Countdown() {
    return (
        <div className="countdownAll">
            <div className="countdownBack">
                <p className="rectangleTop"></p>
                <p className="rectangleTop"></p>
                <p className="rectangleTop"></p>
            </div>
            <div className="countdownGradient">
                <h className="gradientLine"></h>
                <h className="gradientLine"></h>
                <h className="gradientLine"></h>
            </div>
            <div className="countdownBackBottom">
                <p className="rectangleBottom"></p>
                <p className="rectangleBottom"></p>
                <p className="rectangleBottom"></p>
            </div>
            <div className="countdown">
                <h1 className='number'> 1 </h1>
                <h1 className='number'> 2 </h1>
                <h1 className='number'> 9 </h1>
            </div>
        </div>
    )
}

export default Countdown;