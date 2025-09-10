import './styles.css';
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';

export default function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/TitoL0ficial">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/TitoL0ficial</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
