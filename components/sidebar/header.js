export const MyName = 'Fernando Pineda'
export const Occupation = 'Software engineer'
export default function Header() {    
    return (
        <header className="header">
            <figure className="profile">
                <img className="profile-img" title="Fernando Pineda" src="/profile.webp" alt="Fernando Pineda" />
            </figure>                
            <h1 className="brand-title">{MyName}</h1>
            <h2 className="brand-tagline">{Occupation}</h2>                
        </header>
    )
}