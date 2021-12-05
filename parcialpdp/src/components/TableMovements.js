import React from "react";
import ItemListado from "./ItemListado";

const TableMovements = ({resultados, deleteMovement, editMovement}) => {
  return (
    <table className="table table-bordered mt-2">
      <thead className="text-center">
        <tr>
          <th>Acciones</th>
          <th>Nombre</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        {resultados.map((item) => (
          <ItemListado key={item.id} item={item} deleteMovement={deleteMovement} editMovement={editMovement} />
          
        ))}
      </tbody>
    </table>
  );
};

export default TableMovements;
