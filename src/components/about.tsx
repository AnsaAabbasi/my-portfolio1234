import "../style/hero.css";
import Image from "next/image";
import "../style/about.css";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";





function About() {
    return (
        <div className="header-contianer">
            <div className="header-boxes-container">
                {/*left*/}
                <div>
                    <Image src={"/picture/profile.jpg"}
                        width={200}
                        height={200}
                        className="header-image"
                        alt="profile" />
                        <div className="social-icons">
                        <Link href={""}><BsYoutube className="s-icon1"/></Link>
                        <Link href={""}><FaFacebookSquare className="s-icon2"/></Link>
                        <Link href={""}><FaInstagram className="s-icon3"/> </Link>
                        </div>
                </div>
                {/*right*/}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p className="desc-hero">  I am a student at GIAIC,pursuing a course in Artificial Intelligence, Web 3.0 ans Metaverse.Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.I am a student at GIAIC,pursuing a course in Artificial Intelligence, Web 3.0 ans Metaverse.Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.I am a student at GIAIC,pursuing a course in Artificial Intelligence, Web 3.0 ans Metaverse.Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default About