import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import ProductList from "../../../components/client/product/ProductList"
import useFetchProduct from "../../../hooks/product/useFetchProduct";

const ClientProductContainer = () => {
    const { products, error, loading } = useFetchProduct();
    
    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }
    
    return ( 
        
        <div className="flex items-center justify-center container gray-100"> 
            <ProductList products={products}/>
        </div>
       
     );
}
export default ClientProductContainer;