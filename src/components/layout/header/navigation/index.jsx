import "./index.css"
import { Avatar } from '../../../avatar'

export const Navigation = () => (
    <nav className="navigation">
       <ul className="navigation__list">
        <a href="/freaks" className="navigation__link">Freaks</a>
        <a href="/contact" className="navigation__link">Contact</a>
        <a href="/my-profile" className="navigation__link --user-icon">
            <Avatar src={"https://i.pravatar.cc/300"} self={true} />
        </a>
       </ul>
    </nav>
)
