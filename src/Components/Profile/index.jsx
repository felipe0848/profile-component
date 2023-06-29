import Button from "../Button";
import "./style.css"

export default function Profile({avatar, name, bio, email, phone, githubUrl, linkedinUrl, courseUrl}){
    return(
        <>
            <img src={avatar} alt={name}/>
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{phone}</p>
            <a href={"mailto:"+ email}>{email}</a>
            <Button text="GitHub" url={githubUrl}/>
            <Button text="Linkedin" url={linkedinUrl}/>
            <Button text="Curso" url={courseUrl}/>

        </>
    )
}