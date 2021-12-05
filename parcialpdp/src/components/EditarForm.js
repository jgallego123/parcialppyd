import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const EditarForm = ({ list, setList, modal, movementSelected, setModal }) => {

  const [movementEdit, setMovementEdit] = useState({
    id: movementSelected.id,
    type: '',
    name: '',
    amount: 0,
  })

  const handleInputChange = (e) => {

    setMovementEdit({
      ...movementEdit,
      [e.target.name]: e.target.value,
    });
  };

  // Función para editar movimiento
  const editar = async (id, newMovement) => {
    const { type, name, amount } = newMovement;

    const newElement = {
      id,
      type,
      name,
      amount: parseInt(amount),
    }

    const editMovement = await list.map((item) => (item.id === id ? newElement : item));
    setList(editMovement);

    setMovementEdit({
      id: '',
      type: '',
      name: '',
      amount: 0,
    })

    setModal(!modal);
  }

  return (
    <Modal isOpen={modal}>
      <ModalHeader   className="bg-primary text-white">
        <div>
          <h2>Editar Movimiento</h2>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <strong htmlFor="">Tipo Movimiento</strong>
          <select
            class="form-select mb-3 mt-2 w-50" aria-label="Default select example"
            name="type"
            onChange={handleInputChange}
            defaultValue={movementSelected.type}
          >
            <option value="">-- Tipo --</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
          <strong htmlFor="">Nombre</strong>
          <div class="input-group mb-3 mt-2 w-50">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              defaultValue={movementSelected.name}
            />
          </div>
          <strong htmlFor="">Cantidad</strong>
          <div class="input-group mb-3 mt-2">
            <span class="input-group-text">💰</span>
            <input
              type="number"
              name="amount"
              min="0"
              onChange={handleInputChange}
              defaultValue={movementSelected.amount}
            />
            <span class="input-group-text">.00</span>
          </div>
            <button className="btn btn-success" type="submit" onClick={() => editar(movementSelected.id, movementEdit)}>Editar Movimiento</button>
            <button className="btn btn-primary mx-3" type="button" onClick={() => setModal(!modal)}>
              Cerrar
            </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default EditarForm;
