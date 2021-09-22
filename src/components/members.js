import { useEffect } from "react";

const Members = ({members}) => {
    useEffect(()=> {
        console.log(members);
    })
    return (  
        <div className="member">
        {members.map((member)=> (
            <div className="mem" key={member.id}>
                <p>{member.name}</p>
                <p>{member.title}</p>
                <p>{member.description}</p>
                </div>
        ))}
        </div>
    );
}
 
export default Members;