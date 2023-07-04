import "./index.css"
import logo from './logo.png'
import {useThemeContext} from "../../../../themeContext";

export const Logo = () => {
    const { toggleTheme } = useThemeContext()

    return (
        <img src={logo} alt="Logo of Agile Freaks Evil Incorporated" className="logo" onClick={toggleTheme}/>
    );
}
