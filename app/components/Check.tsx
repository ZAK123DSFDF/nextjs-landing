"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Check() {
  const router = useRouter();
  const pathName = usePathname();
  const [name, setName] = useState<boolean>(false);
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);
  useEffect(() => {
    setName(true);
  }, []);
  const goTo = () => {
    if (name) {
      router.push("/");
    }
  };
  return <button onClick={goTo}>go home</button>;
}
