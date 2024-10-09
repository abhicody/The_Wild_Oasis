"use client";

import { useState } from "react";
import StarRating from "./StarRating";

export function Ratings() {
  const [userRating, setUserRating] = useState("");

  return <StarRating userRating={userRating} onSetRating={setUserRating} />;
}
