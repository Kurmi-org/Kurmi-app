"use client"
import Image from "next/image"

export default function ProductDetail() {
    return (
        <div>
            <h1 className="p-3 text-center mt-2 font-bold text-4xl uppercase">Nombre del Producto</h1>
            <div className="w-screen flex justify-center mt-3">
                <div className="w-4/5 h-2/4 flex flex-row flex-wrap p-4 bg-amber-800 rounded-lg">
                    <div className="w-80">
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT6RWDmlDrPMai4g1bDF1TCw3amfHPMIVNA&usqp=CAU"
                            alt="-.." width={100} height={100}
                            className="rounded-lg h-full w-full" />
                    </div>
                    <div className="flex-1 bg-white mx-5 w-20 text-center flex flex-col ">
                        <div>
                        <p className="p-4">asdsadsadsadasasdasda
                        sdasda
                        sdsaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaa
                        aaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaa</p>
                        </div>
                        <div className="flex-end">
                            <button>Agregar Carrito</button>
                            <button>Ver infrmacion del productor</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
