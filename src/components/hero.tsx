import "../style/hero.css";
import Image from "next/image";

function Hero() {
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
                </div>
                {/*right*/}
                <div className="hero-right-div">
                    <h1 className="title-hero">I&aposm Ansa Abbasi
                        front-end Developer</h1>
                    <p className="desc-hero">  I am a student at GIAIC,pursuing a course in Artificial Intelligence, Web 3.0 ans Metaverse.Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
                    </p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}

export default Hero