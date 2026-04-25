# SGPD - Sistema de Gestão de Processos Digitais

Protótipo navegável desenvolvido para a Experiência Prática IV da disciplina de Prototipagem de Sistemas Computacionais.

## Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **DaisyUI v5**
- Dados mockados em **JSON**

## Funcionalidades

O protótipo simula 8 telas principais do SGPD:

1. **Login** — Tela de autenticação corporativa
2. **Dashboard** — Listagem de processos com filtros e estatísticas
3. **Abrir Processo** — Formulário de cadastro de novo processo (etapa 1/3)
4. **Anexar Documentos** — Upload de arquivos (etapa 2/3)
5. **Confirmação** — Feedback de sucesso com número de protocolo (etapa 3/3)
6. **Detalhamento do Processo** — Visão completa com abas e timeline
7. **Tramitar Processo** — Encaminhamento entre setores
8. **Notificações** — Lista cronológica de eventos

## Como executar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

## Estrutura

```
sgpd-prototipo/
├── app/
│   ├── login/              # Tela 1 - Autenticação
│   ├── dashboard/          # Tela 2 - Listagem
│   ├── abrir-processo/     # Tela 3 - Cadastro
│   ├── anexar-documentos/  # Tela 4 - Upload
│   ├── confirmacao/        # Tela 5 - Sucesso
│   ├── processo/[id]/      # Tela 6 - Detalhamento
│   ├── tramitar/[id]/      # Tela 7 - Tramitação
│   ├── notificacoes/       # Tela 8 - Notificações
│   ├── globals.css         # Estilos globais + DaisyUI
│   ├── layout.jsx          # Layout raiz
│   └── page.jsx            # Redireciona para login
├── components/
│   ├── AppLayout.jsx       # Layout com Header + Sidebar
│   ├── Header.jsx          # Cabeçalho com logo e usuário
│   ├── Sidebar.jsx         # Menu lateral
│   ├── StatusBadge.jsx     # Badge de status colorido
│   └── Stepper.jsx         # Indicador de etapas
├── data/
│   ├── processos.json      # Mock de processos
│   ├── notificacoes.json   # Mock de notificações
│   └── dominio.json        # Categorias, setores, prioridades
├── package.json
├── postcss.config.mjs
├── jsconfig.json
└── next.config.js
```

## Modelagem que sustenta o protótipo

Este protótipo é a materialização das EPs anteriores:

- **EP I**: Levantamento de requisitos do SGPD
- **EP II**: Modelagem de casos de uso e especificação textual
- **EP III**: Diagramas estruturais (classes) e comportamentais (sequência, atividades)
- **EP IV**: Protótipo navegável (este projeto)

Os fluxos do protótipo refletem os casos de uso "Abrir Processo" e "Tramitar Processo" especificados na EP II, e operam sobre as entidades modeladas no diagrama de classes da EP III (Processo, Tramitação, Documento, Notificação, etc.).

## Autor

Muh Silva — Engenharia de Software
