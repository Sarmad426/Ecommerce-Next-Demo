import React from "react";
import { UpcomingData } from "@/public/upcomingData";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";


const Product = ({ params }: any) => {
  const { product } = params;
  const productDetail = UpcomingData.filter((e) => e.id === parseInt(product));
  return (
    <div className="w-full text-center">
      <Link href="/" className="text-blue-500 underline font-semibold">
        Back Home
      </Link>
      {productDetail.map((item) => (
        <div
          key={item.id}
          className="xl:grid xl:grid-cols-2 xl:gap-32 px-12 2xl:grid 2xl:gap-8"
        >
          <Image
            src={item.img}
            width={500}
            height={500}
            alt={item.name}
            priority
            className="w-full m-auto mt-16 md:w-1/2 lg:w-1/2 2xl:w-[80%] xl:w-[70%]"
          />
          <div>
            <h2 className="my-32 mx-5 text-2xl text-start">{item.name}</h2>
            <div className="my-12 flex justify-evenly">
              <span className="bg-green-500 text-white rounded px-3 py-1">
                ${item.price}
              </span>
              <span>
                Delivery Cost :{" "}
                <span className="font-bold text-2xl tracking-wide">
                  ${item.delivery}
                </span>
              </span>
            </div>
            {item.bestSeller && (
              <span
                className="text-white inline-block mx-5
         bg-orange-500 rounded px-5 py-2 md:text-sm sm:text-sm
          md:ml-[4.6rem] lg:ml-[2.2rem] xl:ml-[4.6rem] 2xl:ml-[7.6rem]"
              >
                Best Seller
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
