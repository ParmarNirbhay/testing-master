import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Covid = () => {

    const [text, setText] = useState('');
    const [country, setCountry] = useState("India");
    const [dataCovid, setDataCovid] = useState([]);
    const [errSt, setErrSt] = useState(false);
    const [err, setErr] = useState('');

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then((response) => {
                // console.log(response)
                setDataCovid(response.data)
            })
            .catch(function (error) {
                console.log('Error', error.response.data.message);
                setErr(error.response.data.message)
                setErrSt(true);
            });
    }, [country])
    console.log(dataCovid)
    function handleCountry (v){
        if(!v)
        return
        setCountry(v)
    }
    // console.log(err,errSt)
    // Country Name : {dataCovid.country}
    // cases : {dataCovid.cases}
    // todayCases : {dataCovid.todayCases}
    // deaths : {dataCovid.deaths}
    // todayDeaths : {dataCovid.todayDeaths}
    // recovered : {dataCovid.recovered}
    // todayRecovered : {dataCovid.todayRecovered}
    return (
        <div>
            <h1>Covid Cases</h1>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={()=>handleCountry(text)}>Search</button>


            {errSt ? err : <div style={{ listStyle: 'none' }}>

                <li>Country Name : {dataCovid.country}</li>
                <li>cases : {dataCovid.cases}</li>
                <li>todayCases : {dataCovid.todayCases}</li>
                <li>deaths : {dataCovid.deaths}</li>
                <li>todayDeaths : {dataCovid.todayDeaths}</li>
                <li>recovered : {dataCovid.recovered}</li>
                <li>todayRecovered : {dataCovid.todayRecovered}</li>

            </div>}



        </div>
    )
}

export default Covid