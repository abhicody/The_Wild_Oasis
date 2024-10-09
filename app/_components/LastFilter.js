"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function LastFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("last") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("last", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="7"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 7 Days
      </Button>
      <Button
        filter="30"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 30 Days
      </Button>
      <Button
        filter="90"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 90 Days
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50 " : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default LastFilter;
