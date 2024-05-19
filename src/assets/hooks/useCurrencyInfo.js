// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData]= useState({})
//     useState(()=>{
       
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`)
//         .then((res)=>res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     },[currency])
//     console.log(data);
//     return data;
// }
// export default useCurrencyInfo;
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error('Error fetching currency data:', error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
