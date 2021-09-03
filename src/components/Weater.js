import React,{useState,useEffect} from 'react';



const Weater = () => {
    const [city,setCity]=useState(null);
    const[search,setSearch]=useState('Narowal');

    useEffect( () => {

        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=69ae268edf32936c01caf5a40cd788c2`
            const response= await fetch(url);
            console.log('Response',response)
            const resJson= await response.json();
            console.log(resJson)
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])
    return (
        <>
        <div className="p-5">
        <div className="conatiner">
            <div className="col-4 offset-4 mt-5 ">
                <input type='search' className="form-control bg-dark text-white" value={search}
                onChange = {(event)=> {setSearch(event.target.value)}}/>
            </div>
        </div>
       {
           !city ? (
               <h1 className="text-center mt-5">Not found</h1>
           ): (
            <div className="col-4 offset-4 mt-5">
            <div className="container-fluid">
                <h2 className="text-dark">{search.toUpperCase()}</h2>

                <h1>{city.temp }°C</h1>
             Max Temp <small className="text-white">{city.temp_max} °C</small> | Temp Min <small className="text-white">{city.temp_min} °C</small>

            </div>
        </div>
      

           )
       }
           
        
      
   </div>
       
        </>
    )
}

export default Weater
