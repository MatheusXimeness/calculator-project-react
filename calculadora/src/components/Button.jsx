import React from 'react'
import './Button.css'

// Quando a propriedade for passada, caso seja com alguma das opções abaixo serão aplicados os estilos
export default props =>
<button className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
`}>
    {props.label}
</button>