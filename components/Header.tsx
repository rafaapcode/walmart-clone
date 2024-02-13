'use client';
import Link from "next/link";
import Image from "next/image";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = e.currentTarget.input.value;
        router.push(`/search?q=${input}`);
    };

    return (
        <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
            <Link href="/" className="mb-5 md:mb-0">
                <Image
                    src="https://i.imgur.com/5V4wehM.png"
                    alt="Logo of Walmart"
                    width={150}
                    height={150}
                />
            </Link>
            <form onSubmit={e => handleSubmit(e)} className="flex items-center bg-white rounded-full w-full flex-1">
                <input name="input" type="text" placeholder="Busque um produto ..." className="flex-1 px-4 rounded-l-full outline-none placeholder:text-xs text-black" />
                <button>
                    <Search
                        className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer"
                    />
                </button>
            </form>

            <div className="flex space-x-5 mt-5 md:mt-0">
                <Link href={"/"} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <Grid2X2 size={20} />
                    <p>Departamentos</p>
                </Link>
                <Link href={"/"} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <LayoutGrid size={20} />
                    <p>Serviços</p>
                </Link>
                <Link href={"/"} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reordenar</p>
                        <p>Meus itens</p>
                    </div>
                </Link>
                <Link href={"/"} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">LogIn</p>
                        <p>Conta</p>
                    </div>
                </Link>
                <Link href={"/basket"} className="flex text-white font-bold items-center space-x-2 text-sm">
                    <ShoppingCart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sem Itens</p>
                        <p>R$ 0,00</p>
                    </div>
                </Link>
            </div>
        </header>
    )
};

export default Header;