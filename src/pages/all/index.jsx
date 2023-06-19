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
            <div className="freaks-list">
                {freaks.map(freak => <Freak freak={freak} />)}
            </div>
        </div>
    ) 
}