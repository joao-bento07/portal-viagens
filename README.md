# Portal de Viagens

Aplicacao web desenvolvida com Next.js que simula um portal de viagens, listando destinos turisticos com paginas individuais de detalhes.

## Site publicado

https://portal-viagens-ten.vercel.app/

## Repositorio

https://github.com/joao-bento07/portal-viagens

## Funcionalidades

- Pagina inicial com apresentacao do portal
- Listagem de 6 destinos turisticos
- Pagina de detalhes para cada destino (rota dinamica)
- Menu de navegacao em todas as paginas
- Estilizacao com CSS Modules

## Tecnologias

- Next.js 16
- TypeScript
- CSS Modules

## CI/CD

Pipeline configurada com GitHub Actions (`.github/workflows/main.yml`):

- Instalacao de dependencias (`npm ci`)
- Lint (`eslint`)
- Testes (`npm run test`)
- Build (`npm run build`)
- Deploy automatico no Vercel a cada push na branch `main`

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000
