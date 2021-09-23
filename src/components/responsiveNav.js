import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
const ResponsiveNav = ()=>{
    return(
        <div className="mobile-nav">
            <button className='open-btn' >
                <GiHamburgerMenu  />
            </button>
            <button className="close-btn">
                <IoMdClose  />
            </button>
        </div>
    )
}


export default ResponsiveNav