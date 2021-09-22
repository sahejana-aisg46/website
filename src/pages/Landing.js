import Nav from '../components/nav'
import ResponsiveNav from '../components/responsiveNav'
import SocialNav from '../components/SocialNav'
import LandDesc  from '../components/LandingDesc'
import LandImg from '../components/landImg'

const LandingDiv = ()=>{
    return(
        <div className='landing-div'>
            <ResponsiveNav />
            <Nav />
            <LandDesc />
            <LandImg />
            <SocialNav />
        </div>
    )   
}
export default LandingDiv;