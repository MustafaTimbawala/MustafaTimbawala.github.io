export default function Contact(){  
    
    const handleCopy = () => {
    const textToCopy = "mm.timbawala@gmail.com";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
    return(  

        <section> 
            <h1>Contact</h1> 
            <p>Let's build something.</p> 
            <p>Open to full-time software engineering roles starting 2026. If you're hiring full-stack or mobile, I'd love to talk.</p> 
            <button onClick={handleCopy}>mm.timbawala@gmail.com</button> 
            <div> 
                <p>GitHub</p>
            </div> 
            <div>
                <p>LinkedIn</p>
            </div>
        </section>
    )

}