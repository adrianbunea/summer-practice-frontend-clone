import "./index.css";
import { Avatar } from "../../../../components/avatar";

export const Freak = ({ freak }) =>
    (
        <div className="freak">
            <Avatar src={freak.attributes.avatar_url}/>
            <span className="freak__name">{freak.attributes.first_name}</span>
        </div>
    )
