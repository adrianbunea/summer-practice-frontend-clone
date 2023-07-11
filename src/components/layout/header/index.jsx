import "./index.css"
import { Logo } from "./logo"
import { Navigation } from "./navigation"

export const Header = () =>
    (
        <header className="header">
            <Logo/>
            <Navigation/>
        </header>
    )
