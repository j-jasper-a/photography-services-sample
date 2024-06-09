import { products, specialProduct } from "@/config/products";
import ProductCard from "./ProductCard";
import SpecialProductCard from "./SpecialProductCard";

const Products = () => {
  return (
    <div className="relative mx-auto max-w-screen-2xl overflow-x-auto p-6">
      <div className="grid w-max grid-cols-5 divide-x-[1px] divide-dark/25 overflow-x-scroll md:w-full md:overflow-auto">
        <SpecialProductCard {...specialProduct} />
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
