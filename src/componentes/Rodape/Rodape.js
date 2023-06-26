import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="logos">
                <div>
                    <a href="#">
                        <img src="/imagens/fb.png" alt="facebook" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/andretassis">
                        <img src="/imagens/ig.png" alt="instagram" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="/imagens/tw.png" alt="twitter" />
                    </a>
                </div>
            </div>
            <div className="escrita">
                <h3>Desenvolvido por <a href="https://www.linkedin.com/in/andretassis">Andre Tassis</a></h3>
            </div>
        </footer>
    )
}

export default Rodape