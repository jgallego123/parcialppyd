import React from "react";

const Search = ({ handleChangeBusqueda, list }) => {
  return (
    <div className="d-flex align-items-center justify-content-lg-evenly mb-4">
      <div class="input-group mb-3 mt-2">
        <span class="input-group-text" id="basic-addon1">🔎</span>
        <input
          class="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="basic-addon1"
          type="text"
          onChange={handleChangeBusqueda}
        />
      </div>
      <div>
        <label className="mx-2">
          <input
            type="radio"
            name="check"
            value="all"
            onChange={handleChangeBusqueda}
          />{" "}
          Todos
        </label>
        <label className="mx-2">
          <input
            type="radio"
            name="check"
            value="ingreso"
            onChange={handleChangeBusqueda}
          />{" "}
          Ingresos
        </label>
        <label className="mx-2">
          <input
            type="radio"
            name="check"
            value="egreso"
            onChange={handleChangeBusqueda}
          /> Egresos
        </label>
      </div>
      <p className="py-2 px-3 bg-primary text-white m-0">{list.length}</p>
    </div>
  );
};

export default Search;