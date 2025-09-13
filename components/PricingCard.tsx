type PricingCardProps = {
  regularPrice: number;
  discount: number;
};

export default function PricingCard({
  regularPrice,
  discount,
}: PricingCardProps) {
  const discountedPrice = regularPrice - discount;

  return (
    <div className="lg:col-span-1">
      <div className="from-primary-950/80 to-primary-800/80 border-primary-700/30 flex h-full flex-col justify-between rounded-xs border bg-gradient-to-br p-6">
        <div className="space-y-4">
          <div className="text-center">
            {discount > 0 ? (
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-primary-50 text-3xl font-bold sm:text-4xl">
                    ${discountedPrice}
                  </span>
                  <span className="text-primary-400 text-lg line-through">
                    ${regularPrice}
                  </span>
                </div>
                <p className="text-primary-300 text-sm">per night</p>
                <div className="text-accent-400 text-sm font-semibold">
                  Save ${discount} per night!
                </div>
              </div>
            ) : (
              <div>
                <div className="text-primary-50 text-3xl font-bold sm:text-4xl">
                  ${regularPrice}
                </div>
                <p className="text-primary-300 text-sm">per night</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
