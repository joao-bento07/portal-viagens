"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            Mundo<span>Viagens</span>
          </Link>
          <nav className={styles.nav}>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            >
              Inicio
            </Link>
            <Link
              href="/destinos"
              className={`${styles.navLink} ${pathname.startsWith("/destinos") ? styles.navLinkActive : ""}`}
            >
              Destinos
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} MundoViagens &mdash; Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
