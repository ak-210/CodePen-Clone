import React, {useState} from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {
    const {name, lang, value, onChange, imgSRC} = props

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div id={name} className={`editor-card ${open ? '': 'collapsed'}`}>
            <div className='editor-title'>
                <img src={imgSRC} alt={`${name} logo`}/>
                {name}
                <button onClick={()=>setOpen(prevOpen => !prevOpen)}>
                    <img src={`${open?'img/arrows-fullscreen.svg':'img/fullscreen-exit.svg'}`} alt={name} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='editor-body'
                options={{
                    mode: lang,
                    lineNumbers: true,
                    lineWrapping: true,
                    theme: "material",
                    lint: true,
                    // matchTagPairs: true,
                }}
            />
        </div>
    )
}
