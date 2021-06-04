import logo from "../../img/logo.png"
import whatsappicon from "../../img/whatsappicon.png"
import instagramicon from "../../img/instagramicon.png"
import "./Inicio.css"

export function Inicio() {
    return (
        <div className="inicio">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-7 col-lg-7">
                        <img src={logo} className="animate__animated animate__fadeInLeft animate__slow" alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-5 col-lg-5">
                        <h2>Ideas que crean las tuyas</h2>
                    </div>

                    <a href="https://wa.me/message/L7ZKSLA3EDA6D1">
                        <img src={whatsappicon} className="header__img__icowp rounded float-left animate__animated animate__pulse animate__slower animate__infinite" alt="whatsappicon" />
                    </a>

                    <a href="https://www.instagram.com/creativa_ventas/">
                        <img src={instagramicon} className="header__img__icoinsta rounded float-left animate__animated animate__pulse animate__slower animate__infinite" alt="instagramicon" />
                    </a>
                </div>
            </div>
        </div>

    )
}