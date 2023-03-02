
const Cookies = ({phrasesData}) => {
    console.log(phrasesData)
    
    return (
        <>
            <h1 className="titulo" >GALLETAS DE LA <br /> FORTUNA</h1>
        
        
        <div className="cook-fortune">
            
            <h3>{phrasesData.phrase} </h3>
            <h3>{phrasesData.author}</h3>
           
        </div>
        
        </>
    );
};

export default Cookies;