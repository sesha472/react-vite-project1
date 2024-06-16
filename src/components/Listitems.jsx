import { useState } from "react"
import React from 'react'

const Listitems = () => {
    const [list1, setlist1] = useState([
        {user:"item 1",isChacked:false,id:"1"},
        {user:"item 2",isChacked:false,id:"2"},
        {user:"item 3",isChacked:false,id:"3"},
        {user:"item 4",isChacked:false,id:"4"},
    ])

    const [list2, setlist2] = useState([
        {user:"item A",isChacked:false,id:"1"},
        {user:"item B",isChacked:false,id:"2"},
        {user:"item C",isChacked:false,id:"3"},
        {user:"item D",isChacked:false,id:"4"},
    ])

    const checkedHAndler=(index)=>{
            const newlist1=[...list1];
          newlist1[index].isChacked = !newlist1[index].isChacked ;
         setlist1(newlist1)
        }
   
        const swapHanlder=()=>{
          const updatedlist1=[...list1]
          const updatedlist2=[...list2]
          
          updatedlist1.forEach((item,index)=>{
                    if(item.isChacked==true){
                     let temp= updatedlist1[index].user
                     updatedlist1[index].user=updatedlist2[index].user
                     updatedlist2[index].user=temp;
                     updatedlist1[index].isChacked=false;

                    }

                    setlist1(updatedlist1)
                    setlist2(updatedlist2)
          })
          

        }
  return (
    <div>
      <ul>
        {list1.map((item, index) => (
          <li key={item.id}>
            <input type="checkbox"
             checked={item.isChacked} 
             onChange={()=>checkedHAndler(index)}
             />
            {item.user}
          </li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        {list2.map((item, index) => (
          <li key={item.id}>
           
            {item.user}
          </li>
        ))}
      </ul>

      <button onClick={swapHanlder}>swap checked items</button>
    </div>
  );
}

export default Listitems
