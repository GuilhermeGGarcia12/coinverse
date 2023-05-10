import Styles from './Section.module.css'; 
import Invest from '../assets/invest.jpg';
import Moca from '../assets/moca.png';
import Linha from '../assets/linha.png';
import Mocofeliz from '../assets/mocofeliz.png';

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
                <div className="Image_Invest">
                    <img src={Invest} className={Styles.Image_Home} /> 
                </div>

        </div>

        <div className="Section2">
            
            <div className={Styles.Texto2}>
                <h1>
                Abra já sua conta de maneira facil gratuíta!
                </h1>
            </div>

            <div className="Parte1">

                <div className="Imagemdamoca">
                    <img src={Moca} className={Styles.Imagemoca} />
                </div>
                    
                        <h3>A Coinverse oferece uma conta bancária digital <br />
                            completa para seus clientes, que pode ser aberta <br />
                            de forma rápida e fácil, sem a necessidade de <br />
                            enfrentar filas ou burocracias em agências bancárias.
                        </h3>
          
                

            </div>
            <br />

            <div className="Parte2">

                <div className="Texto3">
                    </div>

                    <div className="Imagemocofeliz">
                        <img src={Mocofeliz} className={Styles.Imagemocofeliz} />
                    </div>
                <h3>
                    Além disso, a empresa oferece uma conta digital completa<br />
                    com cartão de crédito e débito, serviços de análise <br />
                    financeira, notícias e recomendações de investimento.
                </h3>

                </div>

        </div>

        <div className="Section3">
            
        </div>



    </div>
    )
}

export default Section;