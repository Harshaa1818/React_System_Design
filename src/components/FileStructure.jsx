import { useState } from "react"
import { useNavigate } from "react-router-dom"


  
function FileStructure({data}){
    
    const [showFolder, setShowFolder] = useState(false)
    const [openInput, setOpenInput] = useState(false)
   
   
    const handleAdd = (e)=>{
        e.stopPropagation();
        setOpenInput(!openInput)

    }
   
      
    return (
        <div>
            
        <div style={{paddingLeft:"30px"}}>
                <div onClick={()=>setShowFolder(!showFolder)}>
                📁{ data.name} 
{/*                 
                    <div>
                    <button style={{padding:"0"}} onClick={handleAdd}>Add 🗒️</button><button onClick={handleAdd} style={{padding:"0"}}>Add 📁</button>
                    </div> */}
                
                </div >

              { showFolder && 
              (data.type == 'folder' && data.content.map((currentData,index)=>(
              <div key={index}>
              {
              currentData.type=='folder' ? <FileStructure data={currentData}/> : 
              <div style={{paddingLeft:"30px"}}>🗒️{currentData.name}</div>
              }
              </div>
              )))}
          
        </div>
        </div>
    )
}

export default FileStructure