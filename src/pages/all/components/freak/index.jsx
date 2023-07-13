import "./index.css";
import { Avatar } from '../../../../components/avatar'
import {Link} from "react-router-dom";

export const Freak = ({ freak }) => (
    <Link to={`${freak.id}`} className={'link'}>
        <div className="freak">
            <Avatar src={freak.attributes.avatar_url}/>
            <div className="freak__name">{freak.attributes.first_name}</div>
        </div>
    </Link>
)
