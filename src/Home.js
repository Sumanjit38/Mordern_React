import { useState } from "react";

const Home = () => {

    //let name = "Sumanjit";
    const [name, setName] = useState("Sumanjit");
    const [age, setAge] = useState(26);

    const handleClick = () => {
        setName("Chirag");
        setAge(60);
        //console.log("Hello Kuity");
    }
    return (
        <div className="Home">
            <h2>Home Page</h2>
            {/* <p>{ name }</p> */}
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}
 
export default Home;