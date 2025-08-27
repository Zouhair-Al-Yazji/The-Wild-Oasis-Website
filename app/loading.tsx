import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="space-y-6 text-center">
        <Spinner />
        <div className="space-y-2">
          <h2 className="text-primary-100 animate-pulse text-lg font-medium">
            Loading...
          </h2>
          <p className="text-primary-300 text-sm">
            Please wait while we prepare your content
          </p>
        </div>
      </div>
    </div>
  );
}
