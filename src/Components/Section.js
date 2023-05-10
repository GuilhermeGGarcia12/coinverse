import Styles from './Section.module.css'; 
import Invest from '../assets/invest.jpg';

function Section (){
    return (
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
    )
}

export default Section;