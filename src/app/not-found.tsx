"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-2xl text-color-accent">Not Found</h3>
        <Link href="/" className="hover:text-color-accent text-color-primary underline text-xl">
          Kembali
        </Link>
      </div>
    </div>
  );
}
