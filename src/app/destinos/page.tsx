import Layout from "@/components/Layout";
import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino";
import styles from "../../styles/page.module.css";

export default function Destinos() {
  return (
    <Layout>
      <h2>Destinos</h2>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} {...destino} />
        ))}
      </div>
    </Layout>
  );
}