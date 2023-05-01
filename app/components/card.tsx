import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imgSrc: string;
  productId: string;
  productName: string;
  productColor?: string;
  productPrice: number;
  discountPercent?: number;
}

export default function Card({
  imgSrc,
  productId,
  productName,
  productColor,
  productPrice,
  discountPercent,
}: CardProps) {
  return (
    <div className="h-[400px] max-w-xs w-full flex flex-col p-3 bg-stone-100 rounded-md hover:scale-[1.02] transition ease-out shadow-xl hover:shadow-2xl">
      <div className="h-3/4">
        <Link
          className="h-full relative w-full block rounded-md overflow-hidden"
          href={`/leashes/${productId}`}
        >
          <Image
            className="rounded-md"
            fill={true}
            style={{ objectFit: "cover" }}
            src={imgSrc}
            alt={`${productName} product image`}
          />
        </Link>
      </div>

      <div className="py-4 text-gray-800 font-semibold">
        <Link href={`/leashes/${productId}`} className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="w-fit text-xl">{productName}</p>
            <p className="w-fit">{productColor}</p>
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
