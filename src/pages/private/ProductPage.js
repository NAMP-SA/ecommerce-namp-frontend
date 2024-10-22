import { RiShoppingBag4Fill } from "react-icons/ri";
import ProductContainer from "../../containers/admin/product/ProductContainer";


const ProductPage = () => {
    return ( 
        <div className="bg-gray-100 flex flex-col">
            <div className="bg-white ml-6 mr-6 mt-2 rounded-xl shadow-md">
                <div className="ml-6 mt-6 flex items-center">  
                    <RiShoppingBag4Fill className="text-3xl md:text-4xl lg:text-4xl mb-2 text-gray-900" /> 
                    <h6 className="ml-2 mb-2 text-4xl font-extrabold poppins-extrabold leading-none tracking-tight text-gray-900 ">Listado de productos.</h6> 
                </div>
                <div className='ml-6'>
                    <p className="text-lg font-normal poppins-light text-gray-500 lg:text-xl dark:text-gray-400 mb-2">Administre sus productos de forma rápida y eficiente con este módulo.</p>
                </div>
            </div>
            <div className="bg-white ml-6 mr-6 mt-2 rounded-xl shadow-md">
                <ProductContainer/>
            </div>
        </div>
     );
}
 
export default ProductPage;