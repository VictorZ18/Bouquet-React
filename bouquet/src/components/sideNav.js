import '../views/App.scss';
import '../components/sideNav.scss';
import { Outlet, Link } from 'react-router-dom';
import bars from '../icons/bars.png';
import arrowLeft from '../icons/arrow-left.png';
import home from '../icons/home.png';
import account from '../icons/account.png';
import budget from '../icons/budget.png';
import team from '../icons/team.png';
import personalization from '../icons/personalization.png';
import media from '../icons/media.png';

function SideMenu() {
    return (
        <div className="sideMenu">
            <div className="menuIcon">
                <img src={bars} alt="menu" onClick={OpenMenu} className='bars' />
            </div>
            <div className="menuOpen">
                <img src={arrowLeft} alt="menu" onClick={CloseMenu} className='back-arrow' />
                <h1 className='menuTitle'> Your services </h1>
                <Link to="/" className='menuLinks top'>
                    <img src={home} alt="home" className='menuIcons' />
                    Overview
                </Link>
                <Link to="/account" className='menuLinks'>
                    <img src={account} alt="account" className='menuIcons' />
                    Account
                </Link>
                <Link to="/budget" className='menuLinks'>
                    <img src={budget} alt="budget" className='menuIcons' />
                    Budget
                </Link>
                <Link to="/team" className='menuLinks'>
                    <img src={team} alt="team" className='menuIcons' />
                    Team
                </Link>
                <Link to="/personalization" className='menuLinks'>
                    <img src={personalization} alt="personalization" className='menuIcons' />
                    Personalization
                </Link>
                <Link to="/media" className='menuLinks'>
                    <img src={media} alt="media" className='menuIcons' />
                    Media
                </Link>
            </div>
        </div>
    )
}

function OpenMenu() {
    let bars = document.querySelector(".menuIcon");
    let menu = document.querySelector(".menuOpen");
    bars.style.display = "none";
    menu.style.display = "flex";
}

function CloseMenu() {
    let bars = document.querySelector(".menuIcon");
    let menu = document.querySelector(".menuOpen");
    bars.style.display = "block";
    menu.style.display = "none";
}

export default SideMenu;