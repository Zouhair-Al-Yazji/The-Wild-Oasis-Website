"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter + "");
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="border-primary-800 rounded-xs border">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

type ButtonProps = {
  filter: string;
  activeFilter: string;
  children: React.ReactNode;
  handleFilter: (filter: string) => void;
};

function Button({ filter, activeFilter, handleFilter, children }: ButtonProps) {
  return (
    <button
      className={`hover:bg-primary-700 text-primary-100 cursor-pointer px-5 py-3 ${filter === activeFilter ? "bg-primary-800 cursor-not-allowed" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
