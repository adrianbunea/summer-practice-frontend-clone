import { useEffect, useState } from "react"
import { getFreaks } from './get-freaks';
import { Freak } from './components/freak';
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
    }, [getFreaks, onSuccess, onFailure]);

    console.error(error);

    return (
        <div className="page">
            <div className="freak-list">
                {!loading ?
                    freaks.map((freak, index) => (
                        <div className="freak-list__cell" key={index}>
                            <Freak freak={freak} />
                        </div>
                    ))
                : 'Loading...' }
            </div>
        </div>
    )
}
