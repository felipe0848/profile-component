import Profile from "./Components/Profile";
import avatarImg from "./assets/avatar.png"
import "./App.css"

export default function App(){
    return(
        <div className="container">
        <Profile avatar= {avatarImg} name="John Doe" bio="Full-stack Javascript developer at Acme Inc." email="john.doe@email.com" phone="+5511987654321" githubUrl="https://github.com/felipe0848?" linkedinUrl="https://www.linkedin.com/in/felipe0848/" courseUrl="https://cursos.onebitcode.com/area/vitrine"/>
        </div>
    )
}