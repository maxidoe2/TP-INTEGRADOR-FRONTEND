
import { setProductoActivo } from "../../integradorfrontend/main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal";

export const handleGetProductsToStore = ()=>{
    const products = handleGetProductLocalStorage()
    handleRenderList(products)
};

export const handleRenderList = (productosIn) =>{
    const burguers = productosIn.filter((el)=> el.categories ==="Hamburguesas")
    const papas = productosIn.filter((el)=> el.categories ==="Papas")
    const gaseosas = productosIn.filter((el)=> el.categories ==="Gaseosas");

    const renderProductGroup = (productos, title) =>{
        if(productos.length >0){
            const productosHTML =productos.map ((producto, index)=>{
                return`<div 
                class = "containerTargetItem" 
                id='product-${producto.categories}-${index}'>
                <div>
                <img src='${producto.imagen}'/>
                <div > 
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'> 
                <p> <b> Precio:</b> $ ${producto.precio} </p>    
                </div>
                </div>

                </div>`;
                
            });
        return `
        <section class ='sectionStore'>
        <div class="containerTitleSection">
            <h3> ${title} </h3>
        </div>
        <div class='containerProductStore'>
        ${productosHTML.join("")}

        </div>
        </section>
        `;
        }else{
            return ""
        }
    };

    const appContainer =document.getElementById("storeContainer")
    appContainer.innerHTML = `
    ${renderProductGroup(burguers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;

    const addEvents=(productosIn)=>{
        if(productosIn){
            productosIn.forEach((element,index) =>{
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}`
                );
                productContainer.addEventListener("click", () => {
                    setProductoActivo(element);
                    
                    openModal();

                });
            })
        };

        
    };
    

    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};