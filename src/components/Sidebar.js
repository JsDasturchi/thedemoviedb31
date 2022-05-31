import React, {useEffect ,useState} from 'react'
import Axios from "axios"

export default function Sidebar() {
  const [qidiruvOpen, setqidiruvOpen] = useState(false)
  const [massiv, setMassiv] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const API_KEY = "2a6bed66b9c565a674eb831d980b838f";
  
  useEffect(() =>{
    Axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) =>{
        setMassiv(response.data.results)
        console.log(response.data.results)
    }).catch((error) =>{
        console.log(error);
    })

}, [])
  
  function qidirFun(){
    setqidiruvOpen(true)
    console.log("ishlavotti");
}

function closeFun(){
  setqidiruvOpen(false)
}


  return (
    <div>
        <div className='container2'>
                <img width="100%" height="330px" src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" alt="" />
        </div>
        <div className='textpos'>
            <h1>Welcome.</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            <input  className='minw text-black'  onClick={qidirFun} onChange={(event) => {setSearchTerm(event.target.value)}} type="text" placeholder='Search...'/>
        
            {
                (qidiruvOpen)?
                <div className='div5'>
                    <button className='btn btn-danger' onClick={closeFun}>close</button>

                    {
                                      massiv.filter((item) =>{
                                          if( searchTerm == ""){
                                              return item
                                          } else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                              return item
                                          }
                                      }).map((item, index) =>{
                                          return(
                                               <div className='' key={index}>
                                                  <div className='d-flex'>
                                                  {/* <Link to="/ishla1" state={{index: index}}> */}
                                                  <h6 className='m-3'>{item.name}</h6>
                                                  {/* </Link> */}
                                                  </div>
                
                                                </div>
                                          )
                                        })
                                  }


                </div>
                :
                <div className='div6'>



                </div>
            }
        
        </div>

    </div>
  )
}
