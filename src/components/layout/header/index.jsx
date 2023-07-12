import "./index.css"
import { Logo } from './logo'
import { Navigation } from './navigation'

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    )
}
