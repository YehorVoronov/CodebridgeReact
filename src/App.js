import './App.css';
import OneInform from "./OneInform/OneInform";
import Objects from "./Objects/Objects";
import { Route} from "react-router-dom";
import {Routes} from "react-router";
import {useState,useEffect} from 'react'
import * as axios from 'axios'

function App(props) {

    const [data,setData] =useState([])

    useEffect(()=>{
        axios.get('https://api.spaceflightnewsapi.net/v3/articles/').then(
            res=>{
                if (data.length=1){
                    setData(res.data)
                }
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
                }
            )
    },[])

  return (
      <div className="App">
        <Routes>
            {data.map(el=><Route path={"/oneInform/"+el.id} element={<OneInform title={el.title} imageUrl={el.imageUrl}
                                                                                summary={el.summary}/>}/>)}

          <Route path="/" element={<Objects data={data}/>}/>
        </Routes>
      </div>

  );
}
export default App;