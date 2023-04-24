import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imgSrc: string;
  productName: string;
  productPrice: number;
  discountPercent?: number;
}

function Card({
  imgSrc,
  productName,
  productPrice,
  discountPercent,
}: CardProps) {
  return (
    <div className="h-[500px] max-w-xs w-full flex flex-col rounded-md hover:shadow-2xl">
      <div className="relative h-3/4">
        <Link href={`product/1`}>
          <Image
            className="rounded-md"
            fill={true}
            src={imgSrc}
            alt={`${productName} product image`}
          />
        </Link>
      </div>

      <div className="px-12 py-4 text-white font-semibold">
        <Link
          href={`product/1`}
          className=" flex flex-col items-center justify-center"
        >
          <p className="w-fit">{productName}</p>

          <p
            className={`w-fit ${
              discountPercent
                ? "line-through text-gray-200 text-lg"
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

export default function LeashesPage() {
  return (
    <div className="mt-16 px-6">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 max-w-5xl mx-auto">
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
        <Card
          imgSrc="/hamza-gharnati-small.jpg"
          productName="Leather leash - Black"
          productPrice={100}
        />
      </div>
    </div>
  );
}
