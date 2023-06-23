import "./index.css";

export const Freak = ({ freak }) => (
    <div className="freak">
        <img src="https://i.pravatar.cc" className="freak__avatar"/>
        <span className="freak__name">{freak.name}</span>
    </div>
)