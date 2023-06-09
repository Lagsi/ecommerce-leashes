import AddToCart from "@/app/components/addToCart";
import ColorAndLength from "@/app/components/colorAndLength";
import Price from "@/app/components/price";
import prisma from "@/lib/prisma";
import Image from "next/image";

const getData = async (id: string) => {
  const leash = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return leash;
};

export async function generateStaticParams() {
  const leashes = await prisma.product.findMany();
  return leashes.map((leash) => ({
    id: leash.id,
  }));
}

export default async function LeashPage({
  params,
}: {
  params: { id: string };
}) {
  const leash = await getData(params.id);

  if (!leash) {
    return (
      <div className="flex-grow">
        <h1>No leash found</h1>
      </div>
    );
  }
  leash.onSale = true;
  // leash.salePercent = 50;
  leash.saleAmount = 5;
  let finalPrice;
  leash.salePercent
    ? (finalPrice = leash.price * (1 - leash.salePercent / 100))
    : (finalPrice = leash.price - leash.saleAmount!);

  return (
    <>
      <div className="flex flex-col mx-auto min-h-[calc(100vh-8rem)] max-w-lg lg:flex-row lg:gap-10 lg:max-w-6xl lg:justify-center lg:items-center">
        <div className="w-full relative md:rounded-b-lg lg:max-w-lg">
          <img
            src={leash.imgSrc!}
            alt={`product image of ${leash.title}`}
            className="sm:rounded-b-lg lg:rounded-lg"
          />
        </div>
        <div className="p-4 flex flex-col gap-6 lg:max-w-md">
          <h1 className="text-stone-900 text-xl font-bold lg:text-4xl">
            {leash.title}
          </h1>
          <ColorAndLength leash={leash} />
          <p className="text-sm">
            (description) Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Repudiandae repellendus maiores mollitia accusamus asperiores.
            Non.
          </p>
          <div className="flex justify-between">
            <Price leash={leash} />
          </div>
          <AddToCart
            leash={leash}
            id={leash.id}
            price={finalPrice}
            title={leash.title}
          />
        </div>
      </div>
    </>
  );
}
