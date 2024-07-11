import NavBar from "./NavBar";
import "../index.css";
function Contact() {

    return (
        <>
            <NavBar />
            <div className="mainDiv">

                <h1>Get In Touch</h1>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"></img>
            </div>
            
            <hr />
            <div className="contactList">
                <div className="contactItem">
                    <h2>Phone:</h2>
                    <p>7018856400</p>
                </div>
                <div className="contactItem">
                    <h2>Email:</h2>
                    <p>kartikthakur5026@gmail.com</p>
                </div>
                <div className="contactItem">
                    <h2>Address:</h2>
                    <p>Lakhanpur Bilaspur, Himachal Pradesh</p>
                </div>
                <div className="contactItem">
                    <h2>Social:</h2>
                    <a href="https://www.linkedin.com/in/kartik-thakur-/" target="_blank">Linkedin Profile</a>
                </div>
            </div>

        </>
    )
}
export default Contact;