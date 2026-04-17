import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/app/components/Layout";
import destinos from "@/app/data/destinos";
import styles from "./detalhe.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetalheDestinoPage({ params }: Props) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === Number(id));

  if (!destino) {
    notFound();
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Link href="/destinos" className={styles.back}>
          &larr; Voltar aos destinos
        </Link>

        <div className={styles.imageWrapper}>
          <img src={destino.imagem} alt={destino.nome} />
        </div>

        <h1 className={styles.nome}>{destino.nome}</h1>
        <p className={styles.pais}>{destino.pais}</p>
        <p className={styles.descricao}>{destino.descricao}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Pais</p>
            <p className={styles.infoValue}>{destino.pais}</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Clima</p>
            <p className={styles.infoValue}>{destino.clima}</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>Melhor Epoca para Visitar</p>
            <p className={styles.infoValue}>{destino.melhorEpoca}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return destinos.map((d) => ({ id: String(d.id) }));
}
