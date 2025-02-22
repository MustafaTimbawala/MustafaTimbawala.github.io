export const Footer = () => {  
    const year = new Date().getFullYear(); 
    return(  
        
        <footer className='bg-off-white w-full max-h-fit flex flex-row justify-center items-center px-8 py-8'> 
            <h1 className="text-highlight">© {year} Mustafa Timbawala. All Rights Reserved.</h1>
        </footer>
    )
}; 
