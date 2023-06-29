import "./style.css"
export default function Button({text, url}){
    return(
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
        </>
    )
}