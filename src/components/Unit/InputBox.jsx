import React from 'react'

function InputBox({
    label,
    value,
    currentUnit = "",
    unitOptions = [],
    onValueChange,
    onUnitsChange,
}) {
    return (
        <div className="bg-white p-3 rounded-lg text-[20px] flex border-[2px] border-blue-400 w-[47vw]">
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => onValueChange && onValueChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/50 mb-2 w-full">Unit</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currentUnit}
                    onChange={(e) => onUnitsChange && onUnitsChange(e.target.value)}
                >
                    {unitOptions.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox