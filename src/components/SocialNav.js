import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialNav = ()=>{
    return(
        <div className="social-nav">
            <ul>
                <li>
                    <a href="#">
                        <FaEnvelope />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaFacebook/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default  SocialNav;