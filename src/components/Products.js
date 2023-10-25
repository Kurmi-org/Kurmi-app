'use client'
import Image from "next/image";
import Link from "next/link";
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'
import ProductCard from "@/components/Product_card";


export default function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(urlApi + '/getProduct')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error ->', error))
  }, [])

  return (
    <div className="flex mx-2 justify-around">
      {products.map(product => (
        <ProductCard key={product.id} {...product}/>
      ))}
    </div>
  );
}