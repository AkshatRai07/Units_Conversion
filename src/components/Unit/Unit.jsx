import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import conversionFactors from '../../hooks/ConversionFactors'

function Unit() {
  const [unitType, setUnitType] = useState("Area")
  const [value, setValue] = useState(0)
  const [from, setFrom] = useState("Square kilometre")
  const [to, setTo] = useState("Square kilometre")
  const [convertedValue, setConvertedValue] = useState(0)

  const typeOptions = Object.keys(conversionFactors)
  const unitOptions = Object.keys(conversionFactors[unitType])

  useEffect(() => {
    setFrom(Object.keys(conversionFactors[unitType])[0])
    setTo(Object.keys(conversionFactors[unitType])[0])
  }, [unitType])

  useEffect(() => {
    const val = parseFloat(value)
    if(!isNaN(val)){
      const factors = conversionFactors[unitType]
      const convertedVal = val / factors[from] * factors[to]
      setConvertedValue(convertedVal.toFixed(6))
    }
    else{
      setConvertedValue(0)
    }
  }, [value, from, to, unitType])

  return (
    <div className='w-[100vw] h-[80vh] flex flex-col justify-center gap-[5vh] items-center'>
      <select
        className="rounded-lg px-2 py-4 cursor-pointer outline-none border-[2px] border-blue-400 w-[47vw]"
        value={unitType}
        onChange={(e) => setUnitType(e.target.value)}
      >
       {typeOptions.map((type) => (
          <option key={type} value={type}>
              {type}
          </option>
        ))}
      </select>
      <InputBox
        label='From'
        value={value}
        currentUnit={from}
        unitOptions={unitOptions}
        onValueChange={(value) => setValue(value)}
        onUnitsChange={(unit) => setFrom(unit)}
      />
      <InputBox
        label='To'
        value={convertedValue}
        currentUnit={to}
        unitOptions={unitOptions}
        onUnitsChange={(unit) => setTo(unit)}
      />
    </div>
  )
}

export default Unit