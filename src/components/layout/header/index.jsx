import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { UserIcon } from "./user-icon"
import "./index.css"

export const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Navigation/>
            <UserIcon/>
        </header>
    )
}
