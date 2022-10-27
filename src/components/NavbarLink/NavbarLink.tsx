
interface INavbarLink {
    href: string,
    className : string,
    title: string
}

export default function NavbarLink({href, className, title} : INavbarLink) {
    return (
        <li className="p-10 opacity-100">
            <a className={ className } href={ href }>
                { title }
            </a>
        </li>
    )
}