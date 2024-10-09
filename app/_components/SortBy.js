"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SortBy() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(router);

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", e.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  }
  const sortBy = searchParams.get("sortBy") || "";

  return (
    <Select
      options={[
        { value: "startDate-desc", label: "Sort by date (recent first)" },
        { value: "startDate-asc", label: "Sort by date (earlier first)" },
        {
          value: "totalPrice-desc",
          label: "Sort by amount (high first)",
        },
        { value: "totalPrice-asc", label: "Sort by amount (low first)" },
      ]}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );

  function Select({ options, value, onChange, ...props }) {
    return (
      <select
        className="bg-gray-800  border-primary-800 "
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}

export default SortBy;
