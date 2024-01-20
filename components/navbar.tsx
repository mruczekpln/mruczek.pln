"use client";

import styles from "@/styles/navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Pathname = "about" | "projects" | "contact";

export default function Navbar() {
  const pahtname = usePathname().slice(1) as Pathname;

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.h1}>
        <h1>mruczekpln</h1>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link
            href="/about"
            className={styles.a}
            style={{
              borderBottom: pahtname === "about" ? "1px solid black" : "none",
            }}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={styles.a}
            style={{
              borderBottom:
                pahtname === "projects" ? "1px solid black" : "none",
            }}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={styles.contact}
            style={{
              borderBottom: pahtname === "contact" ? "1px solid black" : "none",
            }}
          >
            get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}
