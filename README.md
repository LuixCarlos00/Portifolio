# Portfólio - Luiz Carlos

Portfólio pessoal desenvolvido em Angular, exibindo experiências profissionais, projetos, certificados e informações de contato.

## Descrição

Este projeto é um portfólio interativo que apresenta:
- **Experiências profissionais** - Histórico de trabalho e contribuições
- **Projetos** - Showcase de projetos desenvolvidos com detalhes e screenshots
- **Certificados** - Galeria de certificações obtidas
- **Sobre** - Informações pessoais e especialidades
- **Contato** - Formulário de contato via EmailJS
- **Easter Egg** - Jogo Snake integrado

## Tecnologias

| Categoria | Tecnologia | Versão |
|-----------|------------|--------|
| Framework | Angular | 17.3.0 |
| UI Library | Angular Material | 17.3.10 |
| Icons | FontAwesome | 6.6.0 |
| Email | EmailJS | 3.2.0 |
| Sanitização | DOMPurify | 3.1.7 |
| Linguagem | TypeScript | 5.4.2 |

## Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   └── models/           # Interfaces e tipos centralizados
│   ├── CertificadoModal/     # Modal de certificados
│   ├── Exemplos-Portifolio/  # Modal de exemplos de projetos
│   ├── Experiencias/         # Seção de experiências
│   ├── Opcoes/               # Dados estáticos (constantes)
│   ├── Projetos/             # Seção de projetos
│   ├── certificados/         # Seção de certificados
│   ├── enviar-email/         # Formulário de contato
│   ├── menu/                 # Componente principal
│   │   └── snake/            # Jogo Snake
│   ├── service/              # Serviços (sanitização)
│   └── sobre/                # Seção sobre
├── assets/                   # Imagens e recursos
└── environments/             # Configurações de ambiente
```

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/luixcarlos00/Portifolio.git

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais do EmailJS
```

## Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Atualize `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'SUA_PUBLIC_KEY',
    serviceId: 'SEU_SERVICE_ID',
    templateId: 'SEU_TEMPLATE_ID'
  }
};
```

## Desenvolvimento

```bash
# Servidor de desenvolvimento
npm start
# Navegue para http://localhost:4200/

# Build de produção
npm run build

# Executar testes
npm test
```

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm test` | Executa testes unitários |
| `npm run watch` | Build com watch mode |

## Arquitetura

O projeto segue os princípios:
- **Single Responsibility Principle** - Cada componente tem uma responsabilidade clara
- **Tipagem forte** - Interfaces centralizadas em `core/models`
- **Separação de dados** - Constantes isoladas em `Opcoes/`
- **Sanitização** - DOMPurify para prevenir XSS

## Segurança

- Credenciais do EmailJS configuradas via variáveis de ambiente
- Sanitização de HTML com DOMPurify
- Inputs validados no formulário de contato

## Licença

Este projeto é privado e de uso pessoal.

## Autor

**Luiz Carlos**
- GitHub: [@luixcarlos00](https://github.com/luixcarlos00)
- LinkedIn: [luixcarlos00](https://www.linkedin.com/in/luixcarlos00)
