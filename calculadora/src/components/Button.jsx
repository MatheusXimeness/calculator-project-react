import React from 'react'
import './Button.css'

// Quando a propriedade for passada, caso seja com alguma das opções abaixo serão aplicados os estilos
export default props =>
<button
// dispara uma arrow function que recebe o evento
    onClick = {e => props.click && props.click(props.label)}
    className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
`}>
    {props.label}
</button>