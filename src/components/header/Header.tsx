import React from "react";
import styles from "./header.module.css";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
        <Image src="/images/logo_bright.png" alt="logo bright" width={400} height={350} />
        <ul>
            <li>
                <Link href="#">Главная</Link>
            </li>
            <li>
                <Link href="#">Об отеле</Link>
            </li>
            <li>
                <Link href="#">Номера</Link>
            </li>
            <li>
                <Link href="#">Ресторан</Link>
            </li>
            <li>
                <Link href="#">Конференц зал</Link>
            </li>
            <li>
                <Link href="#">Новости</Link>
            </li>
            <li>
                <Link href="#">Фитнес</Link>
            </li>
            <li>
                <Link href="#">Главная</Link>
            </li>
        </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
