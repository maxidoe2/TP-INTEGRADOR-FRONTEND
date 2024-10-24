//Productos
import Swal from 'sweetalert2';
import { productoActivo } from "../../integradorfrontend/main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//guardar
const acceptButton = document.getElementById("acceptButton");

acceptButton.addEventListener("click",()=>{
  handleSaveOrModifyElement();
})


//Funcion de guardar
const handleSaveOrModifyElement =()=>{
  const nombre = document.getElementById("name").value,
    imagen = document.getElementById("imagen").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;
  let object = null;
  if(productoActivo){
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categories,
    }

  }else{
    object = {
      id:new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categories,
    };
    Swal.fire({
        title: "¡Producto creado con éxito!",
        text: "Producto agregado correctamente",
        icon: "success"
      });

  }
 
  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();

  //eliminar


};

export const handleDeleteProduct = () =>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar"
      }).then((result) => {
        if (result.isConfirmed) {
            const product = handleGetProductLocalStorage();
            const result = product.filter((el)=> el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        
            Swal.fire({
            title: "¡Producto Eliminado!",
            text: "Producto eliminado exitosamente.",
            icon: "success"
            
            });
        }else{
            closeModal();
        }
      });
    
};