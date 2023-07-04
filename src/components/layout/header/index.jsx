import {useState} from "react";

import "./index.css"
import { Logo } from "./logo"
import { Navigation } from "./navigation"
import {MobileNavigation} from "./mobile-navigation";

export const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const toggleNavigation = () => setNavigationOpen(open => !open)

    return (
        <header className="header">
            <Logo/>
            <button className="header__navigation-toggle" onClick={toggleNavigation}>Click Me</button>
            <Navigation/>
            <MobileNavigation open={navigationOpen} />
        </header>
    )
}
