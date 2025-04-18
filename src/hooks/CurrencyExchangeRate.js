import { useEffect, useState } from "react";

function KeysToUpperCase(obj){
    const OBJ = {}
    for(let key in obj){
        OBJ[key.toUpperCase()] = obj[key]
    }
    return OBJ
}

function CurrencyExchangeRate(currency){
    const [data, setData] = useState({})
    currency = currency.toLowerCase()
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((result) => result.json())
        .then((result) => KeysToUpperCase(result[currency]))
        .then((result) => setData(result))
    }, [currency])
    return data
}

export default CurrencyExchangeRate;
