import { Freak } from "./components/freak"
import "./index.css"

export const All = () => {
    const freaks = [
        { name: 'Adi', avatar: "https://i.pravatar.cc" },
        { name: 'Sandra', avatar: "https://i.pravatar.cc" },
        { name: 'Calin', avatar: "https://i.pravatar.cc" },
        { name: 'Georgiana', avatar: "https://i.pravatar.cc" },
        { name: 'Anda', avatar: "https://i.pravatar.cc" },
        { name: 'Adi', avatar: "https://i.pravatar.cc" },
        { name: 'Sandra', avatar: "https://i.pravatar.cc" },
        { name: 'Calin', avatar: "https://i.pravatar.cc" },
        { name: 'Georgiana', avatar: "https://i.pravatar.cc" },
        { name: 'Anda', avatar: "https://i.pravatar.cc" },
        { name: 'Adi', avatar: "https://i.pravatar.cc" },
        { name: 'Sandra', avatar: "https://i.pravatar.cc" },
        { name: 'Calin', avatar: "https://i.pravatar.cc" },
        { name: 'Georgiana', avatar: "https://i.pravatar.cc" },
        { name: 'Anda', avatar: "https://i.pravatar.cc" }
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