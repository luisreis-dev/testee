# Curso Agência Duvidiu — protótipo visual

Protótipo **sem backend**: dados mockados, login simulado em `localStorage`.

## Rodar

```bash
npm install
npm run dev
# abra http://localhost:3000
```

## Contas de teste

| Perfil | E-mail              | Senha  |
| ------ | ------------------- | ------ |
| Aluno  | aluno@duvidiu.com   | 123456 |
| Admin  | admin@duvidiu.com   | 123456 |

Novos cadastros entram como **aluno**. No painel admin › Visão geral há um botão para restaurar os dados de exemplo.

## Onde mexer

- **Tema (cores, fontes, cantos):** `app/globals.css` (variáveis em `:root`) — o `tailwind.config.ts` só aponta para elas.
- **Logo:** `public/logo.svg` (extraído de duvidiu.com.br).
- **Dados mockados:** `lib/mock.ts`.
- **Camada de dados:** `lib/data.ts` — todas as telas usam só essas funções async. Para ir para Supabase, reimplemente as funções mantendo as assinaturas.
