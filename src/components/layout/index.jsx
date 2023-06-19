import { Header } from "../header";
import "./index.css";

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}