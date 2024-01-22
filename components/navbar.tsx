"use client";

import styles from "@/styles/component/navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Pathname = "" | "about" | "projects" | "contact";

export default function Navbar() {
  const pahtname = usePathname().slice(1) as Pathname;

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        style={{ borderBottom: pahtname === "" ? "2px solid blue" : "none" }}
        className={styles.h1}
      >
        <h1>mruczekpln</h1>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link
            href="/about"
            className={styles.a}
            style={{
              borderBottom: pahtname === "about" ? "2px solid black" : "none",
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
                pahtname === "projects" ? "2px solid black" : "none",
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
              borderBottom: pahtname === "contact" ? "2px solid black" : "none",
            }}
          >
            get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}
