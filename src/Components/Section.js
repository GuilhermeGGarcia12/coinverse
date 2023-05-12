import Styles from './Section.module.css'; 
import Invest from '../assets/invest.jpg';
import Moca from '../assets/moca.png';
import Linha from '../assets/linha.png';
import Mocofeliz from '../assets/mocofeliz.png';
import Ruiva from '../assets/ruiva.jpg';
import Mexepc from '../assets/mexepc.jpg';
import Casal from '../assets/casal.jpg';
import Investidor from '../assets/investidor.jpg';
import Logo from '../assets/logobranca.png';

function Section (){
    return (
    <div>
        <div className={Styles.section}>

            <div className={Styles.Texto_Home}>

                <div className={Styles.Pageum}>
                    <h1>
                        Converse sobre dinheiro, invista em ideias.
                    </h1>
                    <br />
                    <h2>
                        A Coinverse útiliza tecnologia de ponta para <br />
                        criar um ambiente de conversação sobre finanças.
                    </h2>

                    <br />

                    <h2>
                        A Coinverse permite que os clientes invistam em diferentes <br />
                        produtos financeiros, como ações, fundos imobiliários, <br />
                        títulos públicos, entre outros.             
                    </h2>
                </div>

            </div>
                <div className={Styles.Image_Invest}>
                    <img src={Invest} className={Styles.Image_Home} /> 
                </div>

        </div>

            <div className={Styles.Texto2}>
                <h1>
                Abra já sua conta de maneira facil gratuíta!
                </h1>
            </div>
        <div className={Styles.Section2}>

            <div className={Styles.Parte1}>

                <div className={Styles.Imagemdamoca}>
                    <img src={Moca} className={Styles.Imagemoca} />
                </div>
                    
                    <h3> Além disso, a empresa oferece uma conta digital completa<br />
                        com cartão de crédito e débito, serviços de análise <br />
                        financeira, notícias e recomendações de investimento.
                    </h3>
            </div>

            <div className={Styles.Parte2}>

                <div className={Styles.Texto3}>

                
                    <h3>
                        A Coinverse oferece uma conta bancária digital <br />
                        completa para seus clientes, que pode ser aberta <br />
                        de forma rápida e fácil, sem a necessidade de <br />
                        enfrentar filas ou burocracias em agências bancárias.
                    </h3>
                    <img src={Linha} className={Styles.Linha} />

                    <div className={Styles.Imagemocofeliz}>
                        <img src={Mocofeliz} className={Styles.Imagemocofeliz} />
                    </div>

                </div>
            </div>
        </div> 

        <div className={Styles.Section3}>
            
            <div className={Styles.Modal1}>
                <img src={Ruiva} className={Styles.Imagemodal} />
                <button>Opere na bolsa</button>
            </div>
            <div className={Styles.Modal1}>
                <img src={Mexepc} className={Styles.Imagemodal} />
                <button>Invista</button>
            </div>
            <div className={Styles.Modal1}>
                <img src={Casal} className={Styles.Imagemodal} />
                <button>Aprenda</button>
            </div>
            <div className={Styles.Modal1}>
                <img src={Investidor} className={Styles.Imagemodal} />
                <button>Conheça nossos serviços</button>
            </div>

        </div>

        <div className={Styles.Section4}>
            <div className={Styles.Cards}>
                <div className={Styles.Cards1}>
                    <img src={Logo} className={Styles.Logozada} />
                    <h3 className={Styles.Textocard}>Cardverse</h3>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Section;