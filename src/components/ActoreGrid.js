import React from 'react'
import ActoreCard from './ActoreCard'
import Spiner from './Spiner'

function ActoreGrid({isloading,error,data}) {
    if(isloading) {
        return <Spiner/>
    }
    if(error){
        return <div style={{marginTop:'20px',color: 'red',fontSize:'20px',textAlign:'center'}}><h1>Error Occured : {error}</h1></div>
    }
    if(data && data.length === 0){
        return <div style={{marginTop:'20px',color: 'red',fontSize:'20px',textAlign:'center'}}>No Actors Data Found !</div>
    }
    return (
        <div className="cards">
            {data.map((data)=>(
                <ActoreCard key={data.char_id} iteam={data} />
          ))}
        </div>
    )
}

export default ActoreGrid
