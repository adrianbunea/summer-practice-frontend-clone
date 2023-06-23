import { Freak } from "./components/freak"
import "./index.css"

export const All = () => {
    const freaks = [
        { name: 'Adi' },
        { name: 'Sandra' },
        { name: 'Calin' },
        { name: 'Georgiana' },
        { name: 'Anda' },
        { name: 'Adi' },
        { name: 'Sandra' },
        { name: 'Calin' },
        { name: 'Georgiana' },
        { name: 'Anda' },
        { name: 'Adi' },
        { name: 'Sandra' },
        { name: 'Calin' },
        { name: 'Georgiana' },
        { name: 'Anda' }
    ]

    return (
        <div className="page">
            <div className="freak-list">
                {freaks.map(freak => (
                    <div className="freak-list__cell">
                        <Freak freak={freak} />
                    </div>
                ))}
            </div>
        </div>
    ) 
}