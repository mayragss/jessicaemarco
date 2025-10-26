# Convite de Casamento - Jessica & Marco

Um convite de casamento moderno desenvolvido em Angular, otimizado exclusivamente para dispositivos móveis.

## Características

- ✅ Detecção automática de dispositivos móveis
- ✅ Mensagem de aviso para utilizadores de desktop
- ✅ Design responsivo e elegante
- ✅ Interface moderna com gradientes
- ✅ Informações do casamento apresentadas de forma clara

## Requisitos

- Node.js (versão 18 ou superior)
- npm

## Instalação

1. Instale as dependências:
```bash
npm install
```

## Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm start
```

Depois abra o navegador e acesse `http://localhost:4200/`

## Build

Para criar a versão de produção:

```bash
npm run build
```

Os ficheiros otimizados serão gerados na pasta `dist/convite-casamento/`

## Detecção Mobile

O convite inclui um sistema de detecção móvel que:
- Detecta o user agent do navegador
- Verifica se é um dispositivo touch
- Analisa a largura da tela
- Exibe uma mensagem apropriada para utilizadores de desktop

## Personalização

Edite os ficheiros seguintes para personalizar o convite:

- `src/app/app.component.html` - Conteúdo do convite
- `src/app/app.component.css` - Estilos e cores
- `src/app/mobile-detection.service.ts` - Lógica de detecção móvel

## Suporte

Para questões ou problemas, por favor contacte os desenvolvedores.

---

Feito com ❤️ para Jessica & Marco


