import "./index.css"
import {Avatar} from "../../../avatar";

export const MobileNavigation = ({ open, onClickOutside }) => {
    const openClassName = open ? '--open' : ''
    return (
        <div className={`mobile-navigation-container  ${openClassName}`}>
            <nav className="mobile-navigation">
                <ul className="mobile-navigation__list">
                    <a href="/all" className="mobile-navigation__link">Freaks</a>
                    <a href="/about" className="mobile-navigation__link">About</a>
                    <a href="/contact" className="mobile-navigation__link">Contact</a>

                    <a href="/me" className="mobile-navigation__link user-icon">
                        <Avatar src={"https://i.pravatar.cc/300"} self={true}/>
                    </a>
                </ul>
            </nav>

            <div className="mobile-navigation-backdrop" onClick={onClickOutside}/>
        </div>
    );
}
