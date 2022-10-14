
import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderAlterada = `${props.placeholder}...`

    const aoDigitado=(evento)=>{
        props.aoAlterado(evento.target.value)
        
    }
    
    return(
        <div className ='Campo-Texto'>
            <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderAlterada}/>
        </div>
    )
}

export default CampoTexto

