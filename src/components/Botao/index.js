import "./Botao.css"

const Botao = (props) =>{
    return (
        <button className='Botao-Criar'>
            {props.children}
        </button>

    )
}
export default Botao