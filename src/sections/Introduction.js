export default function Introduction(){ 
    return( 
        <section className='min-h-[80vh] w-full  flex flex-col items-center justify-start px-[7.5vw] md:h-[85vh]'> 
      <div className='flex flex-col items-center justify-between w-full pt-[10vh] md:flex-row-reverse '> 
        <div className='flex flex-col items-center w-72 h-128'><img alt='Mustafa Timbawala - Software Developer Profile ' src='Mustafa_PFP.png'></img></div>  
        
        <div className="max-w-[50%]"> 
          <p className='text-lg font-semibold opacity-75'>Hello! I am</p>
          <h1 className='text-6xl font-semibold'>Mustafa</h1> 
          <h1 className='text-6xl font-semibold'>Timbawala</h1>   
          <div className="flex flex-row py-4">
            <p className="text-2xl pr-2 text-accent font-semibold">Software Engineer — Full-Stack & Mobile</p>
          </div> 
          <p> 
            I'm a fourth-year Computer Science student at the University of Toronto who enjoys building reliable software. 
            I care about clean APIs, consistent data models, and systems that remain fast and maintainable as they grow. 
            Through two software engineering internships, I've built backend services, full-stack applications, and mobile features, and I'm looking for a team where I can take ownership of features from design to deployment.
          </p>
          
        </div> 
      </div>
      
      <div className='pt-16 pb-[7.5vh]'> 
        <a href='#Projects' className='scroll-smooth'><button className='text-highlight-heavy bg-white rounded-full px-6 py-2 text-lg font-medium hover:font-semibold'>Projects</button></a>
      </div> 
      
  
    </section>  
    )
}