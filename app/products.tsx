import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
type Props = {
  data: {
    name: string;
    img: StaticImageData;
    price: number;
    bestSeller: boolean;
    delivery: number;
    id: number;
    country?: string;
  };
};

export default function Products(props: Props) {
  const { name, img, price, bestSeller, delivery, id, country } = props.data;
  return (
    <Link href={`${id}`}> 
    <div className="lg:w-full m-auto sm:w-full sm:min-w-full bg-white text-center p-5 max-h-[26rem] min-h-[25rem] cursor-pointer rounded-md">
      {bestSeller && (
        <span 
        className="absolute ml-[3rem] sm:ml-[9.6rem] mt-[-0.7rem] text-white
         bg-orange-500 rounded px-5 py-2 md:text-sm sm:text-sm
          md:ml-[4.6rem] lg:ml-[2.2rem] xl:ml-[4.6rem] 2xl:ml-[7.6rem]">
          <p>Best Seller</p>
        </span>
      )}
      <Image
        src={img}
        width={200}
        height={150}
        alt={name}
        priority
        className="m-auto w-[20rem] h-[16rem]"
      />
      <h2 className="my-2 text-start block">{name}</h2>
      <div className="flex my-1 justify-between w-full">
      <span className="bg-green-500 text-white rounded px-3 py-1">${price}</span>
      <Link href={`${id}`} className="text-blue-500 underline font-bold">More Info</Link>
      </div>
    </div>
    </Link>
  );
}
