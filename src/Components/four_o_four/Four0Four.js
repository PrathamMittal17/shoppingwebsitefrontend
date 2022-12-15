import TypeWriterEffect from 'react-typewriter-effect';

const Four0Four = () => {
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'40px'}}>
        <TypeWriterEffect
            startDelay={50}
            text={"Error 404! Page Not Found :("}
            typeSpeed={80}
            />
        </div>
    );
}


export default Four0Four;
