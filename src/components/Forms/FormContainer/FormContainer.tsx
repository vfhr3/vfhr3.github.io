interface IFormContainer {
    children : React.ReactNode
}

export default function FormContainer({children} : IFormContainer) {
    return (
        <div className={'w-[500px] bg-[#ffffff99] relative flex flex-col p-10 items-evenly rounded-2xl shadow-2xl max-w-[95vw] overflow-auto gap-5 z-2'}>
            {children}
        </div>  
    );
}