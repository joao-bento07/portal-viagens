import Link from "next/link";
import { Destino } from "@/app/data/destinos";
import styles from "@/app/styles/card.module.css";

type Props = {
  destino: Destino;
};

export default function CardDestino({ destino }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={destino.imagem} alt={destino.nome} />
      </div>
      <div className={styles.body}>
        <h2 className={styles.nome}>{destino.nome}</h2>
        <p className={styles.pais}>{destino.pais}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver detalhes &rarr;
        </Link>
      </div>
    </div>
  );
}
