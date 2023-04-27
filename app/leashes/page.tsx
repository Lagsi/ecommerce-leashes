import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import Card from '../components/card'


export const revalidate = 10;

const getData = async () => {
  const leashes = await prisma.product.findMany();
  return leashes;
};

export default async function LeashesPage() {
  const leashes = await getData();

  return (
    <div className="mt-16 px-6">
      <h1 className="text-6xl text-center my-8 text-stone-100">Leashes</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 max-w-5xl mx-auto">
        {leashes?.map((leash: Product) => (
          <Card
            key={leash.id}
            productName={leash.title}
            productColor={leash.color}
            productPrice={leash.price}
            imgSrc={leash.imgSrc!}
          />
        ))}
        {leashes?.map((leash: Product) => (
          <Card
            key={leash.id}
            productName={leash.title}
            productColor={leash.color}
            productPrice={leash.price}
            imgSrc={leash.imgSrc!}
          />
        ))}
      </div>
    </div>
  );
}
