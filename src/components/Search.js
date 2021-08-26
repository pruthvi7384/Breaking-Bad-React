import React,{useState} from 'react'

function Search({inputSearch}) {
    const [input,setinput] = useState("");
    const onChange = (event)=>{
        setinput(event.target.value);
        inputSearch(event.target.value);
    }
    console.log(input);
    return (
        <div className="search">
            <input type="text" value={input} placeholder="Search Actores Name Here..." onChange={onChange} />
        </div>
    )
}

export default Search
