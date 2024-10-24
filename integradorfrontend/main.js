import { renderCategories } from "../src/services/categories";
import { handleSearchProductByName } from "../src/services/searchBar";
import { openModal } from "../src/views/modal";
import { handleGetProductsToStore } from "../src/views/store";
import './style.css';

//Aplicacion

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setProductoActivo = (productoIn) =>{
  productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

//Header

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
  openModal();

});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();

});

