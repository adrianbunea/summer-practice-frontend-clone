import { useEffect, useState } from "react"
import { getFreaks } from './get-freaks';
import "./index.css"

export const All = () => {
    const [freaks, setFreaks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const onSuccess = freaks => {
        setFreaks(freaks);
        setLoading(false);
    }

    const onFailure = error => {
        setError(error);
        setLoading(false);
    }

    useEffect(() => {
        getFreaks(onSuccess, onFailure)
    }, []);

    return (
        <div className="page">
            <div className="freak-list">
                {!loading ?
                    freaks.map((freak, index) => (
                        <div className="freak-list__cell" key={index}>
                            <p>{freak.attributes.first_name}</p>
                        </div>
                    ))
                : 'Loading...' }
            </div>
        </div>
    )
}
