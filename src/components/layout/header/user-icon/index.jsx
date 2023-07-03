import "./index.css"
import { Avatar } from "../../../avatar"

export const UserIcon = () => (
    <a href="/me" className="user-icon">
        <Avatar src={"https://i.pravatar.cc/300"} self={true}/>
    </a>
)
