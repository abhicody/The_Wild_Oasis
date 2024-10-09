"use client";
import { useRouter } from "next/router";

export default function MoveBack() {
  const router = useRouter();
  return () => router.back();
}
