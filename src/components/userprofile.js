import Image from "next/image";
export default function userprofile() {
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
                                Nombre: <span>Juan Ramirez</span>
                            </p>                     
                            <p>
                                Otro: <span>Dato</span>
                            </p>
                            <p>
                                Otro: <span>Dato</span>
                            </p>
                        </div>
                    </div>
                </div>
        

              
            </div>
        </div>
    )
};