import { getCabinPrice } from "@/lib/data-service";

export default async function Price({ cabinId }: { cabinId: string }) {
  const { regularPrice, discount } = await getCabinPrice(cabinId);

  return (
    <p className="mt-12 flex items-baseline gap-3 text-3xl">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">
            ${regularPrice - discount}
          </span>
          <span className="text-primary-600 font-semibold line-through">
            ${regularPrice}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${regularPrice}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}
