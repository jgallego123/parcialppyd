import { useEffect, useState } from "react";

import Delete from "./Delete";
import Search from "./Search";
import TableMovements from "./TableMovements";
import EditarForm from "./EditarForm";

const Listado = ({ movement, movements, setMovements, list, setList }) => {
  // Estado para controlar el estado del modal
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // State para manejar lo que el usuario escribe
  const [busqueda, setBusqueda] = useState("");

  // State que almacena los productos que coinciden con la búsqueda
  const [resultados, setResultados] = useState([]);

  const [movementSelected, setMovementSelected] = useState({
    type: "",
    name: "",
    amount: 0,
  });

  useEffect(() => {
    const valorBuscar = busqueda.toLowerCase();
    const resultados = list.filter(
      (movement) =>
        movement.name.toLowerCase().includes(valorBuscar) ||
        movement.amount.toString().toLowerCase().includes(valorBuscar) ||
        movement.type.toLowerCase().includes(valorBuscar) ||
        valorBuscar === "all"
    );
    setResultados(resultados);
  }, [busqueda, list]);

  const handleChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const deleteMovement = (movement, tipoAccion) => {
    setMovementSelected(movement);

    if (tipoAccion === "Delete") {
      setModalDelete(true);
    }
  };

  const editMovement = (item, tipoAccion) => {
    setMovementSelected({
      id: item.id,
      type: item.type,
      name: item.name,
      amount: item.amount
    })

    if (tipoAccion === "Edit") {
      setModal(true);
    }
  }

  // Función para eliminar movimiento
  const eliminarMovement = async () => {
    await setList(
      list.filter((movement) => movement.id !== movementSelected.id)
    );

    setModalDelete(!modalDelete);
  };
  return (<div>
    <Search handleChangeBusqueda={handleChangeBusqueda} list={list} />

    <TableMovements resultados={resultados} deleteMovement={deleteMovement} editMovement={editMovement} />

    <EditarForm
      setModal={setModal}
      modal={modal}
      movementSelected={movementSelected}
      list={list}
      setList={setList}
    />

    <Delete
      modalDelete={modalDelete}
      movementSelected={movementSelected}
      eliminarMovement={eliminarMovement}
      setModalDelete={setModalDelete}
    />
  </div>
  );
};

export default Listado;
