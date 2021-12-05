import { useState } from "react";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const saldoInicial=100000;
  // State para controlar ingresos
  const [saldoFinal, setSaldoFinal] = useState(0);

  // State para cada movimiento
  const [movements, setMovements] = useState({
    type: "",
    name: "",
    amount: 0,
  });

  // State para controlar el listado de movimientos
  const [list, setList] = useState([]);

  return (
    <>
      <Header
        saldoInicial={saldoInicial}
        saldoFinal={saldoFinal}
      />
      <div className="container mt-5 bg-light p-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Registro
              movements={movements}
              setMovements={setMovements}
              list={list}
              setList={setList}
              saldoInicial={saldoInicial}
              saldoFinal={saldoFinal}
              setSaldoFinal={setSaldoFinal}
            />
          </div>
          <div className="col-12 col-lg-6">
            <Listado
              movements={movements}
              setMovements={setMovements}
              list={list}
              setList={setList}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
