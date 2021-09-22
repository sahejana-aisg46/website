import ResponsiveNav from "./responsiveNav";


const Nav =()=>{
    return(
        <div className="nav">
            {/* <img src=""></img> */}
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Project</a>
                </li>
            </ul>
            <ResponsiveNav />
        </div>
    )
}

export default Nav;