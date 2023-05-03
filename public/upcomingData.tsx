import acer from "./images/acer.webp";
import airpods from "./images/airpods.jpg";
import black from "./images/black airpods.webp";
import hard from "./images/hard drive.webp";
import head from "./images/headphones.jpg";
import keyboard from "./images/keyboard and mouse.jpg";
import mobile from "./images/mobile.webp";
import smart from "./images/smart watch.jpg";
import ssd from "./images/ssd.webp";
import watch from "./images/watch.webp";
import { StaticImageData } from "next/image";
type DataProps = {
  name: string;
  img: StaticImageData;
  price: number;
  bestSeller: boolean;
  delivery: number;
  id: number;
  country?: string;
};
export const UpcomingData : DataProps[] = [
  {
    name: "Acer Chromebook Spin 311 Convertible Laptop | Intel Celeron N4000 | 11.6 HD Touch Corning Gorilla Glass Display | 4GB",
    img: acer,
    price: 235,
    bestSeller: true,
    delivery: 48.67,
    id: 13,
  },
  {
    name: "Samsung Airpods, Water Proof | With Charge Cable and packets",
    img: airpods,
    price: 18,
    bestSeller: false,
    delivery: 61.5,
    country: "Pakistan",
    id: 14,
  },
  {
    name: "Black Air_pods | Water Proof. Highly Optimized Charging Capacity",
    img: black,
    price: 20,
    delivery: 56.61,
    country: "Pakistan",
    bestSeller: true,
    id: 15,
  },
  {
    name: "Hard Drive High Optimization and upto 5 times charging capacity in one Go.",
    img: hard,
    price: 25,
    delivery: 64,
    bestSeller: true,
    id: 16,
  },
  {
    name: "Head Phones. Comfortable and fast track audio phones runs on any Operating System.",
    img: head,
    price: 40,
    delivery: 62.84,
    bestSeller: false,
    id: 17,
  },
  {
    name: "Keyboard and Mouse ,Runs on any Operating System, Powerful and less battery/Charge Consumption",
    img: keyboard,
    price: 25,
    delivery: 48.98,
    bestSeller: false,
    id: 18,
  },
  {
    name: "IOS 14/Iphone 14 With Accesibilities and Features",
    img: mobile,
    price: 320,
    delivery: 62,
    bestSeller: false,
    id: 19,
  },
  {
    name: "Smart Watch, Stable and Comfortable. Long Charging Capacity and Calling Features",
    img: smart,
    price: 99,
    delivery: 71,
    bestSeller: true,
    id: 20,
  },
  {
    name: "SSD Solid State Drive. Very Powerful Supports all Operating Systems 256 GB of Mega Power",
    img: ssd,
    price: 39,
    delivery: 68.74,
    bestSeller: false,
    id: 21,
  },
  {
    name: "Smart Watch, Stable and Comfortable. Long Charging Capacity and Calling Features",
    img: watch,
    price: 99,
    bestSeller: false,
    delivery: 68.47,
    id: 22,
  },
];
