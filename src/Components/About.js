import img1 from "./Images/ecommerce.jpeg";
import "./about.css";
function About() {
    return (
        <div style={{height:"70vh" , marginTop:"4rem"}}>
           <div className="container">
            <h3 className="display-3 text-white">About page</h3>
            <div className="about">
                <p>I recently graduated with a degree in ( <b>Computer Science</b> ) from ( <b>Higher Technological Institute</b> ) university. During my academic journey, I gained a comprehensive understanding of <b>web development</b> principles and honed my skills in <b><i>React.js</i></b> through coursework and hands-on projects. </p>
                <img src={img1} style={{height:"350px", borderRadius:"50px"}} alt="..."/>
            </div>
        </div> 
        </div>
    );
}
export default About;