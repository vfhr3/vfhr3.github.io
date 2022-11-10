
interface INavbar {
    children : React.ReactNode
}

export default function Navbar({ children } : INavbar) {
    return (
        <nav>
            <ul className={'navbar'}>
                { children }
            </ul>
        </nav>
    )
}