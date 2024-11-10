import React from "react";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="home">
      <div className="home-content">
        <h3>Hi This is</h3>
        <h1>Fareed Ahmed</h1>
        <h3>
          And I'm a <span>Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          laboriosam fuga tempora non sunt quam iste numquam perferendis vel
          pariatur! At iure explicabo quo neque labore maiores voluptatem velit
          soluta?
        </p>
        <div className="social-media">
          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-twiter"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
        <Link href="/Assets/CV-Fareed.pdf" className="btn">
          Download CV
        </Link>
      </div>
      <div className="home-img">
        <Image
          src="/Assets/Fareed.jpg"
          height={400}
          width={400}
          alt="Fareed Picture"
        ></Image>
      </div>
    </div>
  );
}
