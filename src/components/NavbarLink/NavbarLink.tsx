import './styles.css'


interface INavbarLink {
    href: string,
    className : string,
    title: string
}

export default function NavbarLink({href, className, title} : INavbarLink) {
    return (
        <li className="list">
            <a className={ className } href={ href }>
                { title }
            </a>
        </li>
    )
}