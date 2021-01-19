import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    produtosSelecionados: Product[];
    selecionarProduto:(product: Product)=> void;
    //onSelectProduct:(product: Product)=> void;
}

function ProductList({ products, produtosSelecionados, selecionarProduto }:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={selecionarProduto}
                    isSelected={checkIsSelected(produtosSelecionados, product)}
                     />
                ))}
            </div>
        </div>
    )
}

export default ProductList;