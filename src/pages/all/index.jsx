import {useEffect, useState} from "react";

import "./index.css"
import { Freak } from "./components/freak"
import {getFreaks} from "./get-freaks";

export const All = () => {
    const [freaks, setFreaks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onSuccess = freaks => {
        setFreaks(freaks)
        setLoading(false)
    }

    const onFailure = error => {
        setError(error)
        setLoading(false)
    }

    useEffect(() => {
        getFreaks(onSuccess, onFailure)
    }, []);

    if (error) console.error(error)

    return (
        <div className="page">
            <div className="freak-list">
                {!loading
                    ? freaks.map((freak, index) => (
                        <div className="freak-list__cell" key={index}>
                            <Freak freak={freak} />
                        </div>
                    ))
                    : 'Loading...'
                }
            </div>
        </div>
    )
}
