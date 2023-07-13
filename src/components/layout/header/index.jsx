import {useState} from "react";

import "./index.css"
import { Logo } from './logo'
import { Navigation } from './navigation'
import {MobileNavigation} from "./mobile-navigation";
import {NavigationToggle} from "./navigation-toggle";

export const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const toggleNavigation = () => setNavigationOpen(open => !open)


    return (
        <header className="header">
            <Logo />
            <NavigationToggle onClick={toggleNavigation}/>
            <Navigation />
            <MobileNavigation open={navigationOpen} onClickOutside={() => setNavigationOpen(false)}/>
        </header>
    )
}
