import { StaticImageData } from 'next/image'
import {UpcomingData} from '../public/upcomingData'
import Products from './products'
type Data = {
  name:string,
  img:StaticImageData,
  price:number,
  bestSeller:boolean,
  delivery:number,
  id:number,
  country?: string,
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-12 text-center py-5 bg-gray-200 m-auto sm:flex flex-wrap w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      {UpcomingData.map((product: Data) => {
        return <Products data={product} />;
      })}
    </div>
  );
}
