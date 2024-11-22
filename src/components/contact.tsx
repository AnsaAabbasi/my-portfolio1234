import "../style/contact.css"

function Contact(){
    return(
        <main className="contact-name">
            <div className="form-cont">
                <h1 className="cont-title">Contact Us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="abc@gmail.com"/>
                    <input className="msg" type="text" placeholder="Your message"/>
                </form>
                <button className="btn">Submit</button>
            </div>
        </main>
    )
}
export default Contact