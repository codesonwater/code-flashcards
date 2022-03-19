import React, {useEffect, useState} from 'react'

function Loader() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>  {
        setLoaded(true);
        }, []);
    
    if (!loaded) {
        return <>
            <div 
                className={"loader"} 
                style={{marginTop: "10em"}}>
            </div>
            <h2>Loading...</h2>
            </>;
      }
}

export default Loader
