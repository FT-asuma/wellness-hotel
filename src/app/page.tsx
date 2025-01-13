import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <Container>
        <Image
          src="/images/room.jpg"
          alt="Room"
          width={1920}
          height={1080}
        />
      </Container>
    </div>
  );
}
