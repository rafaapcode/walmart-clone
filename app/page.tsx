import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption title="Presentes por preço baixo" image="https://links.papareact.com/1dy" className="bg-pink-200 h-full md:h-32"/>
        <GridOption title="Roupas" image="https://links.papareact.com/8ko" className="bg-blue-100 col-span-2 row-span-2"/>
        <GridOption title="Casa" image="https://links.papareact.com/szu" className="bg-pink-200 row-span-2"/>
        <GridOption title="Eletronicos" image="https://links.papareact.com/n7r" className="bg-yellow-100 h-64"/>
        <GridOption title="Brinquedos" image="https://links.papareact.com/pj2" className="bg-green-100 h-64 col-span-2"/>
        <GridOption title="Tudo o que você precisa" image="https://links.papareact.com/m8e" className="bg-red-100 col-span-2 row-span-2"/>
        <GridOption title="Acessórios" image="https://links.papareact.com/gs1" className="bg-orange-100 h-64"/>
        <GridOption title="Higiene" image="https://links.papareact.com/4y0" className="bg-blue-100 h-64"/>
        <GridOption title="Shop Sports" image="https://links.papareact.com/sq2" className="bg-blue-100 h-64"/>
        <GridOption title="Frete gratis" image="https://links.papareact.com/9fh" className="bg-rose-100 h-64"/>
        <GridOption title="Flash Deals" image="https://links.papareact.com/qx7" className="bg-orange-200 h-64 col-span-2"/>
      </div>
    </main>
  );
}
