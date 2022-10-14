import Card from "../Card";
import "./time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (

    (props.colaboradores.length > 0) ? <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="Cards"> 
        {props.colaboradores.map((colaborador) => (
            <Card key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>
        ))}
      </div>
    </section>
    : ''
  );
};

export default Time;
