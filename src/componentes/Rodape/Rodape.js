import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="logos">
                <div>
                    <img src="/imagens/fb.png" alt="facebook" />
                </div>
                <div>
                    <img src="/imagens/ig.png" alt="instagram" />
                </div>
                <div>
                    <img src="/imagens/tw.png" alt="twitter" />
                </div>
            </div>
            <div className="escrita">
                <h3>Desenvolvido por Andre Tassis</h3>
            </div>
        </footer>
    )
}

export default Rodape