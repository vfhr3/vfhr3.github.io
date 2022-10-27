
interface INavbar {
    children : React.ReactNode
}

export default function Navbar({ children } : INavbar) {
    return (
        <nav>
            <ul className={'fixed flex w-full items-center justify-center z-50 bg-[#FFFFFF22] h-12'}>
                { children }
            </ul>
        </nav>
    )
}