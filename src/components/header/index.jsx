import { Logo } from "../logo"
import { Navigation } from "../navigation"
import { User } from "../user"
import "./index.css"

export const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Navigation/>
            <User/>
        </header>
    )
}