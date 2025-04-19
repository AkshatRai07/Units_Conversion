import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import CurrencyExchangeRate from '../../hooks/CurrencyExchangeRate'

function Currency() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("INR")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = CurrencyExchangeRate(from)
    const options = Object.keys(currencyInfo)

    useEffect(() => {
        const floatAmount = parseFloat(amount)
        setConvertedAmount((isNaN(floatAmount) ? 0: floatAmount * currencyInfo[to]).toFixed(2))
    }, [amount, from, to, currencyInfo])

    return (
        <div className='w-[100vw] h-[80vh] flex flex-col justify-center gap-[5vh] items-center'>
            <InputBox
                label = {"From"}
                amount={amount}
                currentCurrency={from}
                currencyOptions={options}
                onAmountChange={(val) => setAmount(val)}
                onCurrencyChange={(currency) => setFrom(currency)}
            />
            <InputBox
                label = {"To"}
                amount={convertedAmount}
                currentCurrency={to}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
            />
        </div>
    )
}

export default Currency