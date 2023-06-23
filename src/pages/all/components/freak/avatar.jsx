export const Avatar = ({ src, self = false }) => (
    <img src={src} className={`freak__avatar ${self && 'freak__avatar--self'}`}/>
)