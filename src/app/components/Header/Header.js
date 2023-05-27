import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css"
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image 
            alt="logo" 
            src="/nextjsOttlogo.png" 
            width={150}
            height={40}
          />
        </Link>
      </div>

      <Nav />
    </header>
  )
};

export default Header;
