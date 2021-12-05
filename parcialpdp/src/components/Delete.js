import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Delete = ({
  modalDelete,
  movementSelected,
  eliminarMovement,
  setModalDelete,
}) => {
  return (
    <Modal isOpen={modalDelete}>
      <ModalHeader  className="bg-primary text-white">
        <div>
          <h2>Eliminar Movimiento</h2>
        </div>
      </ModalHeader>
      <ModalBody>
        ¿Seguro de eliminar el movimiento ? <br /> Nombre:{" "}
        {movementSelected.name} <br /> Saldo: {movementSelected.amount}
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={() => eliminarMovement()}>
          Si, Eliminar
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setModalDelete(!modalDelete)}
        >
          No, Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default Delete;
