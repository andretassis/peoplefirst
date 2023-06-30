import { IoMdCloseCircle } from 'react-icons/io'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <IoMdCloseCircle
                size={25}
                className="deletar"
                onClick={() => props.deletar(props.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador