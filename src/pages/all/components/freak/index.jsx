import "./index.css";
import { Avatar } from "./avatar";

export const Freak = ({ freak }) => (
    <div className="freak">
        <Avatar src={freak.avatar}/>
        <span className="freak__name">{freak.name}</span>
    </div>
)