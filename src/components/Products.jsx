'use client'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'
import ProductCard from "./ProductCard";


export default function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(urlApi + '/getProducts')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error ->', error))
  }, [])



  return (
    <div className="grid grid-cols-1 gap-4 mx-2 mr-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map(product => (
            <ProductCard key={product.id} {...product}/>
        ))}
    </div>
  );
}