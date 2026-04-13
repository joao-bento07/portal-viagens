import { destinos } from "@/data/destinos";
import Layout from "@/components/Layout";

export default function Detalhe({ params }: { params: { id: string } }) {
  const destino = destinos.find((d: Destino) => d.id === params.id);
  if (!destino) {
    return <p>Destino não encontrado</p>;
  }

  return (
    <Layout>
      <h2>{destino.nome}</h2>
      <img src={destino.imagem} alt={destino.nome} width={400} />
      <p>{destino.descricao}</p>
    </Layout>
  );
}