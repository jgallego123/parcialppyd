import { v4 as uuidv4 } from "uuid";

const Registro = ({
  movements,
  setMovements,
  list,
  setList,
  saldoInicial,
  saldoFinal,
  setSaldoFinal,
}) => {
  const { type, name, amount } = movements;

  const handleInputChange = (e) => {
    setMovements({
      ...movements,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const movement = {
      id: uuidv4(),
      type,
      name,
      amount: parseInt(amount),
    };

    setList([...list, movement]);

    setMovements({
      type: "",
      name: "",
      amount: 0,
    });

    if (type === "ingreso" && amount > 0) {
      const nuevoSaldo = list.reduce(
        (acumulado, item) => acumulado + item.amount,
        saldoInicial
      );
      setSaldoFinal(nuevoSaldo);
    }

    if (type === "egreso" && amount > 0) {
      const sumaSaldos = list.reduce(
        (acumulado, item) => acumulado + item.amount,
        saldoInicial
      );
      const nuevoSaldo = sumaSaldos - amount;
      setSaldoFinal(nuevoSaldo);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <strong>Tipo Movimiento</strong>
        <select
          class="form-select mb-3 mt-2 w-50" aria-label="Default select example"
          name="type"
          value={type}
          onChange={handleInputChange}
          required

        >
          <option value="">-- Tipo --</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </select>
        <strong>Nombre</strong>
        <div class="input-group mb-3 mt-2 w-50">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            class="form-control " placeholder="Nombre..." aria-label="Username" aria-describedby="basic-addon1"
            type="text"
            name="name"
            required
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <strong>Cantidad</strong>
        <div class="input-group mb-3 mt-2">
          <span class="input-group-text">💰</span>
          <input
            type="number"
            name="amount"
            min="0"
            required
            value={amount}
            onChange={handleInputChange}
          />
          <span class="input-group-text">.00</span>
        </div>
        <button class="btn btn-primary mt-2" type="submit">Agregar Movimiento</button>
      </form>
    </div>
  );
};

export default Registro;
