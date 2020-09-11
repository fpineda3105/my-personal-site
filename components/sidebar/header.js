export const MyName = 'Fernando Pineda'
export const Occupation = 'Software engineer'
export default function Header() {    
    return (
        <div className="header">
            <div className="profile">
                <img className="profile-img" src="/profile.webp" alt="Fernando Pineda" />
            </div>                
            <h1 className="brand-title">{MyName}</h1>
            <h2 className="brand-tagline">{Occupation}</h2>                
        </div>
    )
}