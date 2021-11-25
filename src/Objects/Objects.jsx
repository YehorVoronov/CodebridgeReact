import ObjectComponent from "./ObjectComponent/ObjectComponent";
import style from "./Objects.module.css"
import {useState} from 'react'

let Objects=(props)=>{
    const [searchTerm,setsearchTerm]=useState("")
    let productsMapWithoutDel=props.data.filter(
        val=>{
            if (searchTerm===''){
                return val;
            }else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())||
                val.summary.toLowerCase().includes(searchTerm.toLowerCase())
            ){
                return val
            }
        }
    ).map(el=><ObjectComponent searchTerm={searchTerm} id={el.id} imageUrl={el.imageUrl}
                               updatedAt={el.updatedAt} summary={el.summary} title={el.title} />)
    return(
        <div>
            <div className={style.input}>
               <input type="text" placeholder="Search"
                       onChange={(e)=>{
                           setsearchTerm(e.target.value)
                       }}/>
            </div>
            <div className={style.result}>result:{productsMapWithoutDel.length}</div>
            <hr/>
            <div className={style.allObjects}>
                {productsMapWithoutDel}
            </div>
        </div>
    )
}

export default Objects;