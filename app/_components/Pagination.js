"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  // function handleChangePage(e) {
  // const params = new URLSearchParams(searchParams);
  // params.set("page", e.target.value);
  // router.replace(`${pathname}?${params.toString()}`);
  // }

  return (
    <div className="flex gap-2 ">
      <button
        className={`${"bg-brand-600 text-brand-50"} border-none rounded-sm font-medium text-1.4rem flex items-center justify-center gap-1.5 p-1.5 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `reservations/?page=${Number(page) - 1}&per_page=${per_page}`
          );
          // handleChangePage;
        }}
      >
        <svg className="h-8 w-8">
          <ChevronLeftIcon />
          next page
        </svg>
      </button>

      <div className="mt-1.5">
        {page} / {Math.ceil(15 / Number(per_page))}
      </div>

      <button
        className={`${"bg-brand-600 text-brand-50"} border-none rounded-sm font-medium text-1.4rem flex items-center justify-center gap-1.5 p-1.5 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `reservations/?page=${Number(page) + 1}&per_page=${per_page}`
          );
          // handleChangePage;
        }}
      >
        <svg className="h-8 w-8">
          <ChevronRightIcon />
          next page
        </svg>
      </button>
    </div>
  );
}
