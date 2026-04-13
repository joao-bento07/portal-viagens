import Link from "next/link";
import Layout from "@/app/components/Layout";
import styles from "@/app/styles/page.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            Descubra o mundo com <span>MundoViagens</span>
          </h1>
          <p className={styles.subtitle}>
            Explore destinos incriveis ao redor do globo. De metrópoles vibrantes a
            paraísos naturais, encontre a viagem dos seus sonhos.
          </p>
          <Link href="/destinos" className={styles.cta}>
            Explorar destinos
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Por que viajar com a gente?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌍</span>
            <h3 className={styles.featureTitle}>Destinos Selecionados</h3>
            <p className={styles.featureText}>
              Curadoria dos melhores destinos turísticos do mundo, com informações
              detalhadas para planejar sua viagem.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📅</span>
            <h3 className={styles.featureTitle}>Melhor Época</h3>
            <p className={styles.featureText}>
              Saiba qual é o período ideal para visitar cada destino e aproveitar ao máximo
              sua experiência.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌤️</span>
            <h3 className={styles.featureTitle}>Informações de Clima</h3>
            <p className={styles.featureText}>
              Conheça o clima de cada região para se preparar corretamente para a sua
              aventura.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✈️</span>
            <h3 className={styles.featureTitle}>Inspiração Constante</h3>
            <p className={styles.featureText}>
              Novos destinos adicionados regularmente para que você nunca pare de
              sonhar e planejar.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
