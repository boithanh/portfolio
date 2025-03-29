'use client';
import React, { useState } from 'react'


type Props = {}

const Header = (props: Props) => {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    return (
        <div>
            <input type="text" className="p-3 border-white rounded-md" placeholder='Vui lòng nhập nội dung:' onChange={(event) => {
                setValue(event.target.value)
            }} />
            <p>{value}</p>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)} className='bg-amber-300 p-2 cursor-pointer hover:bg-amber-950 transition:5s hover:text-white'>Increment</button>
            </div>
        </div>
    )
}

export default Header