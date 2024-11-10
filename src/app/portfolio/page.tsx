import "../globals.css";
import Image from "next/image";
export default function Portfolio() {
    return(
        <div className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
           
            src='/Assets/picture-1.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
            src='/Assets/picture-2.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
           
            src='/Assets/picture-3.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
            
            src='/Assets/picture-4.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
             
            src='/Assets/picture-5.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <div className="portfolio-box">
            <Image
            alt="Projects"
            className="absolute inset-0 w-full h-full object-cover object-center mx-auto"
            src='/Assets/picture-6.jpg' height={200} width={200} ></Image>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, debitis earum reprehenderit placeat, ex adipisci soluta odio sed id labore, quasi ipsum sunt deserunt consequuntur. Cupiditate nobis itaque at mollitia.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
        </div>
    </div>
    )
}