export default function Contact(){
    return(
        <div className="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile Number"/>
                <input type="text" placeholder="Email Subject"/>
            </div>
            <textarea name="" id="" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn"/>
        </form>
    </div>

    )
}