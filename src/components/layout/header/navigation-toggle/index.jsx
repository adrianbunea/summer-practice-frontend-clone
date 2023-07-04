import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./index.css"

export const NavigationToggle = ({ onClick }) => (
    <button className="navigation-toggle" onClick={onClick}>
        <FontAwesomeIcon icon={faBars} size={"xl"}/>
    </button>
)
