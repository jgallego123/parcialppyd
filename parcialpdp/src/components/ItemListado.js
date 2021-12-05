const ItemListado = ({item, deleteMovement, editMovement}) => {
  return (
    <tr>
      <td className="text-center">
        <button
          className="btn btn-warning"
          onClick={() => editMovement(item, "Edit")}
        >
          🖊
        </button>
        {"  "}
        <button
          className="btn btn-danger"
          onClick={() => deleteMovement(item, "Delete")}
        >
          ❌
        </button>
      </td>
      <td className="text-center">{item.name}</td>
      <td
        className="text-center"
      >
        <p
          className={`${item.type === 'egreso' ? 'bg-danger' : 'bg-success '} text-white`}
        >
          $ {Intl.NumberFormat().format(item.amount)}
        </p>
        
      </td>
    </tr>
  );
};

export default ItemListado;