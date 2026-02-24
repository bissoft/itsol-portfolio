"use client";

import { usePathname } from "next/navigation";
import Contact from "./Contact";

export default function ConditionalContact() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) return null;
  return <Contact />;
}
