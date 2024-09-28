import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Pagination() {
 
  const [totalDataFromApi, setTotalDataFromApi] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [currentData, setCurrentData] = useState([])
  

  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
      setTotalDataFromApi(res.data)

     })
     .catch((err)=>{
      console.log(err)

     })
     
  
  },[])
 

  useEffect(()=>{
   
    
        let data = totalDataFromApi.filter((pro,index)=>(index+1 > selectedPage*10-10)  && (index+1 <= selectedPage*10));
        setCurrentData(data)
    
   

  },[selectedPage,totalDataFromApi]);

  const navigate = useNavigate();



  return (
    <div className='container'>
      <button  style={{display:'flex'}}onClick={()=>navigate('/file-structure')}>See file structure project</button>
      <h1 style={{textAlign:"center"}}>React Pagination</h1> 


    {currentData && currentData.map((prod,index)=>(
      <div key={index} style={{display:"flex", gap:"10px", marginLeft:"300px" }}>
       <span>{prod.id}</span> 
       <span> {prod.title}</span>
      </div>
    ))}

  <div className='pagination__pageNO'>
 {selectedPage > 1 &&  <div className='prev__button' onClick={()=>setSelectedPage(selectedPage-1)}>←</div>}
  {new Array(10).fill("").map((e,index)=>(
    <span className={selectedPage==index+1 ? "selectedPageHover":""} id='pagination__pageNO__box' key={index} onClick={()=>setSelectedPage(index+1)}>
      {index+1}
    </span>
  ))}
  {selectedPage <10 && <div className='next__button' onClick={()=>setSelectedPage(selectedPage+1)}>→</div>}
  </div>
    </div>
  )
}

export default Pagination
