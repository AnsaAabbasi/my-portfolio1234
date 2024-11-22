import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { AiFillSound } from "react-icons/ai";
import { SiGamedeveloper } from "react-icons/si";
import { MdMonochromePhotos } from "react-icons/md";
import { BsApp } from "react-icons/bs";




function Services() {
    return (
        <main className="main">
            <div className="serv-container">
            {/*top div*/}
            <div className="top-div-serv">
                <h2 className="title-serv">My Services</h2>
                <p className="des-serv">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur veritatis esse maxime explica. Accusamus amet nisi provident.</p>
            </div>
            {/*top div*/}
            <div className="boxes-cont">
                <div className="box"><FaLaptopCode className="service-icon"/> 
                <h3>Web Development</h3>
                <span>Blog, E-commerce</span>
                </div>

                <div className="box"><TbBrandRedux className="service-icon"/> 
                <h3>Ui/Ux Design</h3>
                <span>Mobile App, Website Design</span>
                </div>

                <div className="box"><AiFillSound className="service-icon"/> 
                <h3>Sound Design</h3>
                <span>Voice over Beat making</span>
                </div>

                <div className="box"><SiGamedeveloper className="service-icon"/> 
                <h3>Game Design</h3>
                <span>Character Design,Props & Object</span>
                </div>

                <div className="box"><MdMonochromePhotos className="service-icon"/> 
                <h3>Photography</h3>
                <span>Product Photography</span>
                </div>

                <div className="box"><BsApp className="service-icon"/> 
                <h3>App Development</h3>
                <span>Blog, E-commerce</span>
                </div>

              
              
            </div>
            </div>
        </main>
    )
}
export default Services