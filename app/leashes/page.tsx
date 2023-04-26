import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imgSrc: string;
  productName: string;
  productColor?: string;
  productPrice: number;
  discountPercent?: number;
}

function Card({
  imgSrc,
  productName,
  productColor,
  productPrice,
  discountPercent,
}: CardProps) {
  return (
    <div className="h-[500px] max-w-xs w-full flex flex-col p-3 bg-stone-100 rounded-md hover:scale-[1.02] transition ease-out shadow-xl hover:shadow-2xl">
      <div className="h-3/4">
        <Link
          className="h-full relative w-full block rounded-md overflow-hidden"
          href={`/`}
        >
          <Image
            className="rounded-md"
            fill={true}
            src={imgSrc}
            alt={`${productName} product image`}
          />
        </Link>
      </div>

      <div className="py-4 text-gray-800 font-semibold">
        <Link href={`/`} className="flex flex-col gap-2">
          <div>
            <p className="w-fit text-xl">{productName}</p>
            <p className="w-fit text-xl">{productColor}</p>
          </div>
          <p
            className={`w-fit ${
              discountPercent
                ? "line-through text-gray-700"
                : "underline text-xl"
            }`}
          >{`$${productPrice}`}</p>
          {discountPercent && (
            <p className="underline w-fit text-xl">
              {/* {`$${productPrice - (productPrice / discountPercent) * 100}`} */}
              {`$${productPrice * (1 - discountPercent / 100)}`}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
}

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
