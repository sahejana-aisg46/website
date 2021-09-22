import Nav from '../components/nav'
import SocialNav from '../components/SocialNav'
import LandDesc  from '../components/LandingDesc'
const LandingDiv = ()=>{
    return(
        <div className='landing-div'>
            <Nav />
            <LandDesc />
            <SocialNav />
        </div>
    )   
}
export default LandingDiv;