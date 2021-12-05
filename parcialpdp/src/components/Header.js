
const Header = ({saldoInicial, saldoFinal}) => {
    return (
        <div className="container bg-primary py-3 text-white">
            <div className="d-flex justify-content-between align-items-center">
                <h3>Parcial PDP</h3>
                <div>
                    <strong htmlFor="" className="mx-2">Saldo Inicial:</strong>
                    <input type="text" name="amountInitial" value={Intl.NumberFormat().format(saldoInicial)} />
                </div>
                <div>
                    <strong htmlFor="" className="mx-2">Saldo Final:</strong>
                    <input type="text" name="amountFinal" value={Intl.NumberFormat().format(saldoFinal)} />
                </div>
            </div>
        </div>
    )
}

export default Header;
