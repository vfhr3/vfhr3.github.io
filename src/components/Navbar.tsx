
interface INavbar {
    children: React.ReactNode
}

export function Navbar({ children }: INavbar) {
    return (
        <nav>
            <ul className="fixed w-full bg-black h-10px inline-block justify-center items-center">
                {children}
            </ul>
        </nav>
    )
}


interface INavbarLink {
    text: string
    link: string
}

export function NavbarLink({ text, link }: INavbarLink) {
    return (
        <li>
            <a href={link}>
                {text}
            </a>
        </li>
    )
}