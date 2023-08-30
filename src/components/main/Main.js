import './Main.css';
import Chart from '../charts/Charts';
const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Bem vindo ao painel</h1>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card__inner">
                            <p className="text-primary-p"> Numero de Pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                    <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card__inner">
                        <p className="text-primary-p">Pagamentos</p>
                        <span className="font-bold text-title">R$3000</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-archive fa02x text-yellow"></i>
                        <p className="text-primary-p">Numero de produtos</p>
                        <span className="font-bold text-title">169</span>
                    </div>
                    <div className="card">
                        <i className="fa fa-bars fa02x text-green"></i>
                        <p className="text-primary-p">Categoria</p>
                        <span className="font-bold text-title">10</span>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>São Paulo</p>
                            </div>
                            <i className="fa fa-usd"></i>
                            <Chart/>
                        </div>
                    </div>
                    <div className="charts">
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Rio de Janeiro</p>
                            </div>
                            <i className="fa fa-fa-chart"></i>
                            <Chart/>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2500</p>
                            </div>
                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$4500</p>
                            </div>

                            <div className="card3">
                                <h1>Custos</h1>
                                <p>R$1500</p>
                            </div>
                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$100,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}
export default Main;