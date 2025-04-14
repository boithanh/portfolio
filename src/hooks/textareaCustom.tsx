import React from 'react'

type Props = {
    name: string,
    id: string,
    rows: number,
    value: string,
    placeHolder: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextareaCustom = ({ name, id, rows, value, onChange, placeHolder }: Props) => {
    return (
        <div className="mb-3">
            <label className="form-label" />
            <textarea className="form-control" name={name} id={id} rows={rows} value={value} placeholder={placeHolder} onChange={onChange} />
        </div>
    )
}

export default TextareaCustom