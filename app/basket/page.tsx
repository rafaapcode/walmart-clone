import Basket from "@/components/Basket";
import { ShoppingCartIcon } from "lucide-react";

const Basketpage = () => {
  return (
    <div className="w-full p-10 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
            <ShoppingCartIcon className="w-10 h-10"/>
            <h1 className="text-3xl">Seu Carrinho</h1>
        </div>
        <p className="mt-2 mb-5">
            Revise seus itens.
        </p>
        <Basket />
    </div>
  )
};

export default Basketpage;