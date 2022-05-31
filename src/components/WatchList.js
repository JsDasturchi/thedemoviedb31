import React from 'react'
import { useSelector } from 'react-redux';
export default function WatchList() {
    const API_IMG = "https://image.tmdb.org/t/p/w500";


    const savat = useSelector((state) => {
        return state.korzinkaSavat;
      });

      console.log(savat);
  return (
    <div>
        <div className='container'>
              
                         <div className='card'>
                            {
                                savat.map((item,index) => {
                                    return(
                                        <div className='row d-flex cardLists'>
                                            <div className='col-4'>
                                            <img width="300px" src={API_IMG + item.poster_path} alt="" />
                                            </div>
                                            <div className='col-6'>
                                            <h4>{item.title}</h4>
                                            <h4>{item.release_date}</h4>
                                            <h4>{item.overview}</h4>
                                            </div>
                                            
    
                                        </div>
                                    )

                                })
                            }
                        </div>   
                   
        </div>
    </div>
  )
}
