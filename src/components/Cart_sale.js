'use client'
const prod_cart = [1, 2, 3, 4, 5, 6];
export default function CartSale(params) {
    return (
        <div class="table w-full border-t-2 border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50">
            <div class="table-header-group">
                <div class="table-row font-bold ">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row">
                    <div class="table-cell p-3 text-end">Subtotal</div>
                    <div class="table-cell p-3 text-start">Bs. 1000.00</div>
                </div>
                <div class="table-row">
                    <div class="table-cell p-3 text-end">Impuestos</div>
                    <div class="table-cell p-3 text-start">Bs. 0.00</div>
                </div>
                <div class="table-row">
                    <div class="table-cell p-3 text-end border-t-2 border-black">Total</div>
                    <div class="table-cell p-3 text-start border-t-2 border-black">Bs. 1000.00</div>
                </div>
            </div>
        </div>
    );
}