"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterStatus() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("status") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("status", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>
      <Button
        filter="checked-in"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        checked-in
      </Button>
      <Button
        filter="checked-out"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        checked-out
      </Button>
      <Button
        filter="unconfirmed"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        unconfirmed
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterStatus;
