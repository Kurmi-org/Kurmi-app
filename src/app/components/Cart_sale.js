
export default function CartSale(params) {
    return (
        <div className="table w-full border-t-2 border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                </div>
            </div>
            <div className="table-row-group">
                <div className="table-row">
                    <div className="table-cell p-3 text-end">Subtotal</div>
                    <div className="table-cell p-3 text-start">Bs. 1000.00</div>
                </div>
                <div className="table-row">
                    <div className="table-cell p-3 text-end">Impuestos</div>
                    <div className="table-cell p-3 text-start">Bs. 0.00</div>
                </div>
                <div className="table-row">
                    <div className="table-cell p-3 text-end border-t-2 border-black">Total</div>
                    <div className="table-cell p-3 text-start border-t-2 border-black">Bs. 1000.00</div>
                </div>
            </div>
        </div>
    );
}