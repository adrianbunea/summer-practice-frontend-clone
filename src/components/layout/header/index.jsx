import { Logo } from "./logo"
import { Navigation } from "./navigation"
import "./index.css"

export const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Navigation/>
        </header>
    )
}
