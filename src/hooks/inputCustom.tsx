import React from 'react'

type Props = {
    name: string,
    id: string,
    type: string,
    value: string,
    placeHolder: string,
    label: string,
    onchange: React.ChangeEventHandler<HTMLInputElement>,
    onBlur: React.ChangeEventHandler<HTMLInputElement>
}

const InputCustom = ({ onchange, onBlur, value, placeHolder, label, name, id, type }: Props) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type={type} className="form-control" name={name} id={id} aria-describedby="helpId" placeholder={placeHolder} onChange={onchange} onBlur={onBlur} value={value} />
        </div>
    )
}

export default InputCustom