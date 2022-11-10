import './styles.css'


interface IFormContainer {
    children : React.ReactNode
}

export default function ContainerBox({children} : IFormContainer) {
    return (
        <div className={'container'}>
            {children}
        </div>  
    );
}