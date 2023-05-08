import Styles from "./Header.module.css";
import Logo from "../assets/logoprincipal.png";
import Olho from "../assets/olho.png";
import Ganhos from "../assets/ganhos.png";
import Perfil from "../assets/perfil.png";

function Header(){
    return (
    <div className={Styles.Header}>

        <div className={Styles.Logocomnome}>
            <img src={Logo} />
            <a>Coinverse</a>
        </div>
        
        <div className={Styles.Operacoes}>
            <nav>
                <a>Aprenda</a>
                <a>Invista</a>
                <a>Opere na bolsa</a>
                <a>Serviços</a>
            </nav>
        </div>

        <div className={Styles.Canto_esquerdo}>

            <div className={Styles.Saldo}>
                <img src={Olho} />
                <p>Seu Saldo</p>
                <img src={Ganhos} />
            </div>

            <div className={Styles.User}>
            <p>Entre</p> 
            <img src={Perfil} />
            </div>

        </div>
    </div>
    )
}
export default Header