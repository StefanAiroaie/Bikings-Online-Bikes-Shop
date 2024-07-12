import { client } from "../lib/sanity";
import Link from "next/link";
import PopularProductsCarousel from "./PopularProductsCarousel";

// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
        name }
      }`;
  const data = await client.fetch(query);
  return data;
};

const PopularProducts = async () => {
  const productsData = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Brands In One Destination.
        </p>

        <PopularProductsCarousel productsData={productsData} />
        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">See all bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
