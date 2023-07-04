import "./index.css";

export const Avatar = ({ src, self = false }) => (
    <img
        src={src}
        alt={'Avatar'}
        className={`avatar ${self && '--self'}`}
    />
)
