'use client'

import ProductCard from "@/components/Product_card";

const productos = [1,2,3,4,5,6];


export default function Products(params) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {productos.map((product, index) => (
        <ProductCard key={index} />                    
      ))}
    </div>
  );
}
