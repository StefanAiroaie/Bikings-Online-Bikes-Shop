"use client";
import product from "@/sanity/schemaTypes/product";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ products }) => {
  const popularProductCat = products.categories.find(
    (products) => products.name === "popular"
  );

  return (
    <div className="group">
      <div className="border mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularProductCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          <Image
            src={urlFor(products.images[0]).url()}
            width={580}
            height={356}
            alt={products.name}
            placeholder="empty"
            loading="lazy" // {lazy} | {eager}
            priority={false}
          />
        </div>
        {/* btn group */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            price_id={products.price_id}
            name={product.name}
            currency="USD"
            description={products.description}
            images={products.images}
            price={products.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${products.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {products.categories[0].name} bike
      </h5>
      <h4 className="mb-1">{products.name}</h4>
      <div className="text-lg font-bold text-accent">${products.price}</div>
    </div>
  );
};

export default ProductCard;
