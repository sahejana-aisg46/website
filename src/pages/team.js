import Members from "../components/members";
import {team} from "../data/db.json"
const Team = () => {
    
    return ( 
        <div className="Team">
        <h1>Our Team</h1> <br></br>
        <Members members={team} />
        </div>
     );
}
 
export default Team;