import '../styles/App.scss';
import '../styles/Header.scss';
import imageHeader from '../images/img-task2.png'


function Header() {
    return (
        <header className='header'>
            <h1 className="header__title">Taskify </h1>
            <img src={imageHeader} className='header__img'></img>
        </header>
    )
}

export default Header;