import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
const ResponsiveNav = ()=>{
    const openNav= ()=>{

    }
    const closeNav = ()=>{

    }
    return(
        <div className="mobile-nav">
            <button className='open-btn' onClick={openNav()}>
                <GiHamburgerMenu  />
            </button>
            <button className="close-btn" onClick={closeNav()}>
                <IoMdClose  />
            </button>
        </div>
    )
}


export default ResponsiveNav