import "../globals.css";
export default function Services(){
    return(
        <div className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
               <div className="services-box">
                    <i className="fa-solid fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam tempora quisquam perferendis in vel accusamus provident corporis quis error nemo rerum, beatae mollitia distinctio atque aliquid. Nulla necessitatibus incidunt minima.</p>                    
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-palette"></i>
                    <h3>UI/UX Designing</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam tempora quisquam perferendis in vel accusamus provident corporis quis error nemo rerum, beatae mollitia distinctio atque aliquid. Nulla necessitatibus incidunt minima.</p>                    
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="services-box">
                    <i className="fa-brand fa-android"></i>
                    <h3>APP Development</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam tempora quisquam perferendis in vel accusamus provident corporis quis error nemo rerum, beatae mollitia distinctio atque aliquid. Nulla necessitatibus incidunt minima.</p>                    
                    <a href="#" className="btn">Read More</a>
                </div>

        </div>
        </div>

    )
}