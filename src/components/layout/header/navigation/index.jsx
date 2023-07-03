import "./index.css"
import {UserIcon} from "../user-icon";

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <a href="/all" className="navigation__link">Freaks</a>
            <UserIcon/>
        </ul>
    </nav>
)
