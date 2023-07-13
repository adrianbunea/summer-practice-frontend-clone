import { useEffect, useState } from "react"
import { getFreak } from './get-freak';
import "./index.css"
import {useParams} from "react-router-dom";
import {Avatar} from "../../components/avatar";

export const Details = () => {
    let { freakId } = useParams();
    const [freak, setFreak] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const onSuccess = freak => {
        setFreak(freak);
        setLoading(false);
    }

    const onFailure = error => {
        setError(error);
        setLoading(false);
    }

    useEffect(() => {
        getFreak(onSuccess, onFailure, freakId)
    }, []);

    console.error(error);

    return (freak && !loading
        ? (
            <div className={'freak-details'}>
                <div className={'freak-details__avatar'}><Avatar src={freak.attributes.avatar_url}/></div>
                <h3 className={'freak-details__name'}>{freak.attributes.first_name}</h3>
                <address>
                    <a href={`mailto:${freak.attributes.email}`} className={'freak-details__email'}>
                        {freak.attributes.email}
                    </a>
                </address>
                <p className={'freak-details__age'}>{freak.attributes.age}</p>
            </div>
        )
        : 'Loading...')
}
