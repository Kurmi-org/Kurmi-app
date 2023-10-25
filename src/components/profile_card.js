'use client'
import Image from "next/image"
import CartProductProducer from "@/components/Cart_product_producer"
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'

export default function Profile_producer(props) {

    const [producer, setProducer] = useState({})
    const id = props._id
    useEffect(() => {
        fetch(urlApi + '/getProducer/' + id)
            .then(res => res.json())
            .then(data => setProducer(data))
            .catch(error => console.error('Error ->', error))
    }, [id])
    return (
        <div className="w-6/6 flex justify-center">
            <div className=" w-6/6 md:w-4/6 flex flex-col justify-center">
                <h1 className="text-center text-2xl md:text-4xl font-bold uppercase mt-4">Perfil</h1>
                {/* card */}
                <div className="flex justify-center">
                    <div className="flex bg-yellow-400 w-6/6 md:w-3/6 flex flex-col justify-center m-4 pt-8 pb-8 rounded-xl">
                        <div className="flex justify-center">
                            <Image src="/img/user.png"
                                width={200}
                                height={200}
                                alt="..."
                                className="rounded-xl w-2/6 md:w-2/6" />
                        </div>
                        <div className="flex flex-col items-center pt-4 text-center text-sm md:text-lg font-semibold">
                            <p>
                                Nombre: <span>{producer.user}</span>
                            </p>
                            <p>
                                Ocupacion: <span>Granjero</span>
                            </p>
                            <p>
                                Celular: <span>{producer.phone}</span>
                            </p>
                            <p>
                                Gmail: <span>{producer.email}</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* end card */}

                {/* list of products */}
                <div className="mb-8">
                    <h1 className="text-xl md:text-2xl p-3 font-bold">Otros Productos</h1>
                    <CartProductProducer _id={id}/>
                </div>
                {/* end list */}
            </div>
        </div>
    )
};