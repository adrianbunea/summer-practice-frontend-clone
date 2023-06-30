import "./index.css";
import { Avatar } from "../../../../components/avatar";

export const Freak = ({ freak }) => (
    <div className="freak">
        <Avatar src={freak.avatar}/>
        <span className="freak__name">{freak.name}</span>
    </div>
)
