import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    //let name = "Sumanjit";
    //const [name, setName] = useState("Sumanjit");
   // const [age, setAge] = useState(26);

    // const handleClick = () => {
    //     setName("Chirag");
    //     setAge(60);
    //     //console.log("Hello Kuity");
    // }
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div className="Home">
            <BlogList blogs = {blogs} title = "All Blogs !" handleDelete = {handleDelete} />
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title = "Mario's blogs"/> */}
            {/* <h2>Home Page</h2> */}
            {/* <p>{ name }</p> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click Here</button> */}
        </div>
    );
}
 
export default Home;