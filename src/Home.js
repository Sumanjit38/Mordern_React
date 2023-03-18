import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    //const [name, setName] = useState("mario");

    const [isPending, setIsPending] = useState(true);
    //let name = "Sumanjit";
    //const [name, setName] = useState("Sumanjit");
   // const [age, setAge] = useState(26);

    // const handleClick = () => {
    //     setName("Chirag");
    //     setAge(60);
    //     //console.log("Hello Kuity");
    // }
    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }*/
    
    useEffect(() => {
        //console.log("use effect ran");
        //console.log(name);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(res => {
            
            return res.json()
        })
        .then((data => {
            setBlogs(data);
            setIsPending(false);
        }))
        .catch((err) => {
            console.log(err.message);
        })
        }, 200);
    }, []);

    return (
        <div className="Home">
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs = {blogs} title = "All Blogs !" />}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title = "Mario's blogs"/> */}
            {/* <h2>Home Page</h2> */}
            {/* <p>{ name }</p> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click Here</button> */}
            {/* <button onClick={() => setName("luigi")}>change name </button>
            <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;