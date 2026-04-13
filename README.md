# Sushi da Naya — Guia de Desenvolvimento

Site de encomendas omakase premium · Maputo / Matola, Moçambique

---

## ⚠️ Directório correcto

O repositório real é **este** (`nexttest/`), ligado ao GitHub em:

```
https://github.com/NiraslabDEV/SushiNaya
```

> A pasta `RestJapones/sushi-da-naya/` é um repo **antigo e abandonado** — nunca trabalhar lá.

---

## Como fazer um commit

### 1. Entrar na pasta certa

```bash
cd C:/Users/Gabriel/Desktop/nexttest
```

### 2. Ver o que mudou

```bash
git status
git diff
```

### 3. Adicionar os ficheiros alterados

Sempre adicionar ficheiros específicos — nunca `git add .` ou `git add -A`:

```bash
git add src/components/Hero.tsx
git add src/components/Navbar.tsx
# etc.
```

### 4. Fazer o commit

```bash
git commit -m "feat: descrição curta do que foi feito"
```

**Prefixos de commit:**

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correcção de bug |
| `style:` | Só CSS / visual, sem lógica |
| `refactor:` | Reorganização sem mudar comportamento |
| `chore:` | Dependências, configs, ficheiros de projecto |

### 5. Push para o GitHub

```bash
git push
```

---

## Estrutura do projecto

```
nexttest/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── encomenda/route.ts   # POST — recebe pedido (stub Fase 1)
│   │   │   └── stock/route.ts       # GET  — devolve combos disponíveis
│   │   ├── globals.css              # Tailwind v4 + @theme (cores, fontes)
│   │   ├── layout.tsx               # Root layout (fontes, metadata)
│   │   └── page.tsx                 # Página principal
│   ├── components/
│   │   ├── Navbar.tsx               # Barra de navegação fixa
│   │   ├── Hero.tsx                 # Secção principal com imagem de fundo
│   │   ├── MenuGrid.tsx             # Grelha dos 4 combos
│   │   ├── ComboCard.tsx            # Card individual de cada combo
│   │   ├── CheckoutSection.tsx      # Formulário + resumo do pedido
│   │   ├── FloatingCartBadge.tsx    # Botão flutuante + drawer do carrinho
│   │   └── Footer.tsx               # Rodapé com contactos
│   ├── data/
│   │   └── combos.ts                # Os 4 combos e preços em MT
│   └── store/
│       └── cartStore.ts             # Estado do carrinho (Zustand v5)
├── next.config.mjs                  # remotePatterns para imagens Google
├── postcss.config.mjs               # @tailwindcss/postcss
└── tsconfig.json                    # Paths: @/ → src/
```

---

## Comandos úteis

```bash
# Servidor local
npm run dev        # http://localhost:3000

# Build de produção (testar antes de deploy)
npm run build
npm start
```

---

## Stack

- **Next.js 16.2.3** — App Router + Turbopack
- **React 19** — Server + Client Components
- **Tailwind CSS v4** — `@import "tailwindcss"` + `@theme` (sem tailwind.config)
- **Zustand v5** — carrinho (estado imutável)
- **Deploy:** Railway (build automático ao fazer push para `main`)

---

## Negócio

- **Moeda:** MT (Metical moçambicano) — nunca R$ ou €
- **WhatsApp:** `+258 84 688 9389` → `wa.me/258846889389`
- **Sinal 50%:** E-mola `87 880 5603` (Yuznick)
- **Combos:** Naya Selection 1150 MT · Signature Box 1350 MT · Zen Experience 1750 MT · Master Omakase 2300 MT
