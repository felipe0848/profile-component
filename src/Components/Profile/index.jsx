import Button from "../Button";
import "./style.css"

export default function Profile({avatar, name, bio, email, phone, githubUrl, linkedinUrl, courseUrl}){
    return(
        <>
            <img src={avatar} alt={name}/>
            <h2 className="name borderBottom">{name}</h2>
            
            <p className="bio borderBottom">{bio}</p>
            
            <p className="phone borderBottom">{phone}</p>
            
            <a href={"mailto:"+ email} className="email borderBottom">{email}</a>
            
            <Button text="GitHub" url={githubUrl}/>
            <Button text="Linkedin" url={linkedinUrl}/>
            <Button text="Curso" url={courseUrl}/>

        </>
    )
}