import Layout from "@/app/components/Layout";
import CardDestino from "@/app/components/CardDestino";
import destinos from "@/app/data/destinos";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Nossos Destinos</h1>
        <p className={styles.pageSubtitle}>
          Escolha o destino dos seus sonhos e comece a planejar sua próxima aventura.
        </p>
        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
