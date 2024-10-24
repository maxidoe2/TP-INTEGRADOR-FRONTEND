import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();

    const result = product.filter((el)=>
        el.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
};