import style from "./ObjectComponent.module.css"
import {NavLink} from "react-router-dom";

let ObjectComponent=(props)=>{

let summary=String(props.summary).substr(0,100)+"..."
let updatedAt=new  Date(props.updatedAt)
    let month=String(props.updatedAt).substr(5,2)

    let months=[ "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September", "October",
        "November", "December"]


    return(
        <div className={style.allObject}>
            <img src={props.imageUrl}/>
            {/*<div className={style.data}>{props.updatedAt}</div>*/}
            <div className={style.data}>{months[month] +"  "+updatedAt.getUTCDate()+"th,"+updatedAt.getFullYear()}</div>
            <div className={style.title}>{props.title}</div>
            <div>{summary}</div>
            <div className={style.footer}>
                <NavLink to={"oneInform/"+props.id}>Read more-></NavLink>
            </div>

        </div>
    )
}

export default ObjectComponent;