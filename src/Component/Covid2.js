import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Covid2 = () => {
    const [text, setText] = useState("");
    const [country, setCountry] = useState("India");
    const [report, setReport] = useState({});

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then((responce) => {
                
                setReport(responce.data);
            })
    }, [country])
    console.log(report)
    // Country Name : {dataCovid.country}
    // cases : {dataCovid.cases}
    // todayCases : {dataCovid.todayCases}
    // deaths : {dataCovid.deaths}
    // todayDeaths : {dataCovid.todayDeaths}
    // recovered : {dataCovid.recovered}
    // todayRecovered : {dataCovid.todayRecovered}


    return (
        <div>
            <h1>Covie Report</h1>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setCountry(text)} >Search</button>

        </div>
    )
}

export default Covid2