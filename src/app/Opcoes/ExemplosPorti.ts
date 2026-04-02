import { PortfolioExample } from '../core/models';

export const ExemplosPortifolio: PortfolioExample[] = [
  {
    codigo: 1,
    title: 'Software de Gestão de Automóveis',
    description: `
      <h2 class="desc-title">Software de Gestão de Automóveis</h2>
      <p>
        Aplicação desktop desenvolvida para auxiliar empresas no controle completo de sua frota de veículos.
        O sistema centraliza informações operacionais e financeiras, permitindo maior eficiência na tomada de decisões.
      </p>

      <h3 class="desc-subtitle">Sobre o Projeto</h3>
      <p>
        Desenvolvido com foco em usabilidade e robustez, o software oferece módulos integrados para
        gestão de funcionários, veículos, movimentações e requisições de compra, com controle de acesso por perfil de usuário.
      </p>

      <h3 class="desc-subtitle">Funcionalidades</h3>
      <ul>
        <li>Cadastro e gerenciamento completo de veículos e funcionários</li>
        <li>Monitoramento em tempo real da movimentação da frota</li>
        <li>Controle de manutenções preventivas e corretivas</li>
        <li>Requisições de compra com fluxo de aprovação</li>
        <li>Controle de gastos por veículo e período</li>
        <li>Geração de relatórios detalhados de utilização</li>
        <li>Sistema de login com autenticação por perfil</li>
      </ul>

      <h3 class="desc-subtitle">Tecnologias</h3>
      <div class="desc-tech">
        <span>Java</span>
        <span>Java Swing</span>
        <span>MySQL</span>
        <span>JDBC</span>
      </div>
    `,
    imageUrl: [
      { url: 'assets/imagens/softwareGestaoVeiculos/login.png' },
      { url: 'assets/imagens/softwareGestaoVeiculos/criarLogin.png' },
      { url: 'assets/imagens/softwareGestaoVeiculos/home.png' },
      { url: 'assets/imagens/softwareGestaoVeiculos/cadastro.png' },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/cadstroFuncionario.png',
      },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/cadastroVeiculo.png',
      },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/cadastroEmpresa.png',
      },
      { url: 'assets/imagens/softwareGestaoVeiculos/movimentacao.png' },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/movimentacaoDeVeiculos.png',
      },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/controleDeGasto.png',
      },
      {
        url: 'assets/imagens/softwareGestaoVeiculos/requisisaoDeCompra.png',
      },
      { url: 'assets/imagens/softwareGestaoVeiculos/outros.png' },
      { url: 'assets/imagens/softwareGestaoVeiculos/sobre.png' },
    ],
    videoUrl: [],
  },

  {
    codigo: 2,
    title: 'Plataforma de Gerenciamento para Clínica Médica',
    description: `
      <h2 class="desc-title">SaúdeConecta — Plataforma de Gestão para Clínicas Médicas</h2>
      <p>
        Sistema web completo voltado para a administração de clínicas médicas, cobrindo desde o
        agendamento de consultas e gestão de prontuários até o controle financeiro e relatórios gerenciais.
      </p>

      <h3 class="desc-subtitle">Sobre o Projeto</h3>
      <p>
        Desenvolvida com uma arquitetura moderna, a plataforma foi projetada para ser responsiva e
        acessível em dispositivos móveis e desktop. O foco principal é simplificar a rotina operacional
        das clínicas, reduzindo retrabalho e centralizando informações em um único ambiente.
      </p>

      <h3 class="desc-subtitle">Funcionalidades</h3>
      <ul>
        <li>Agendamento e gerenciamento de consultas médicas</li>
        <li>Histórico completo de prontuário eletrônico por paciente</li>
        <li>Painel financeiro com receitas, despesas e relatórios analíticos</li>
        <li>Dashboard personalizado por perfil de acesso (médico, recepcionista, admin)</li>
        <li>Troca de senha e gerenciamento de usuários</li>
        <li>Interface responsiva para uso em dispositivos móveis</li>
        <li>Controle de permissões por função na clínica</li>
      </ul>

      <h3 class="desc-subtitle">Tecnologias</h3>
      <div class="desc-tech">
        <span>Angular</span>
        <span>TypeScript</span>
        <span>Spring Boot</span>
        <span>Java</span>
        <span>MySQL</span>
        <span>REST API</span>
      </div>
    `,
    imageUrl: [
      { url: 'assets/imagens/SoftwareDeClinica/home.png' },
      { url: 'assets/imagens/SoftwareDeClinica/agenda.png' },
      { url: 'assets/imagens/SoftwareDeClinica/angenda.png' },
      { url: 'assets/imagens/SoftwareDeClinica/genereConsulta.png' },
    ],
    videoUrl: [],
  },

  {
    codigo: 3,
    title: 'Assistente de IA com Voz — Gemini Chatbot',
    description: `
      <h2 class="desc-title">Assistente de IA com Voz — Gemini Chatbot</h2>
      <p>
        Chatbot inteligente desenvolvido em Python que combina reconhecimento de voz, síntese de fala
        e inteligência artificial generativa da Google para criar uma experiência de conversa natural e fluida.
      </p>

      <h3 class="desc-subtitle">Sobre o Projeto</h3>
      <p>
        O assistente é capaz de ouvir comandos do usuário pelo microfone, processar a intenção utilizando
        o modelo <strong>Gemini</strong> da Google e responder tanto por texto quanto por voz. A personalidade
        e o estilo de resposta podem ser configurados, incluindo um modo sarcástico para interações descontraídas.
      </p>

      <h3 class="desc-subtitle">Como Funciona</h3>
      <ul>
        <li><strong>Reconhecimento de fala:</strong> captura e processa áudio do microfone via SpeechRecognition e PyAudio com ajuste automático ao ruído ambiente</li>
        <li><strong>Síntese de voz:</strong> converte respostas em fala utilizando pyttsx3 com suporte a português e velocidade configurável</li>
        <li><strong>IA Generativa:</strong> integração com Google Generative AI (Gemini) para respostas contextuais e inteligentes</li>
        <li><strong>Personalização:</strong> estilo de resposta configurável por prompt de sistema</li>
      </ul>

      <h3 class="desc-subtitle">Tecnologias</h3>
      <div class="desc-tech">
        <span>Python</span>
        <span>Google Gemini API</span>
        <span>SpeechRecognition</span>
        <span>pyttsx3</span>
        <span>PyAudio</span>
      </div>
    `,
    imageUrl: [
      { url: 'assets/imagens/chatBoot/chatBot1.png' },
      { url: 'assets/imagens/chatBoot/chatBot2.png' },
      { url: 'assets/imagens/chatBoot/chatBot3.png' },
      { url: 'assets/imagens/chatBoot/chatBot4.png' },
    ],
    videoUrl: [],
  },
  {
    codigo: 4,
    title: 'Downloader e Transcritor de Vídeos do YouTube',
    description: `
      <h2 class="desc-title">Downloader e Transcritor de Vídeos do YouTube</h2>
      <p>
        Aplicação desktop com interface gráfica desenvolvida em Python que permite baixar vídeos e áudios
        do YouTube e transcrever automaticamente o conteúdo de áudio em texto.
      </p>

      <h3 class="desc-subtitle">Sobre o Projeto</h3>
      <p>
        A ferramenta foi criada para facilitar o acesso offline a conteúdos do YouTube e automatizar
        processos de transcrição, sendo útil para estudantes, pesquisadores e criadores de conteúdo.
        Conta com interface gráfica intuitiva e suporte a modo escuro.
      </p>

      <h3 class="desc-subtitle">Funcionalidades</h3>
      <ul>
        <li>Download de vídeos em alta resolução a partir de URL do YouTube</li>
        <li>Download exclusivo de áudio nos formatos MP3/MP4</li>
        <li>Suporte a múltiplos downloads simultâneos por lista de URLs</li>
        <li>Transcrição automática de áudio (MP3, MP4, WAV) para texto</li>
        <li>Conversão para WAV e divisão em segmentos para maior precisão</li>
        <li>Interface gráfica com modo escuro disponível</li>
        <li>Organização automática de arquivos em pastas no diretório do usuário</li>
      </ul>

      <h3 class="desc-subtitle">Tecnologias</h3>
      <div class="desc-tech">
        <span>Python</span>
        <span>tkinter</span>
        <span>pytubefix</span>
        <span>SpeechRecognition</span>
        <span>pydub</span>
        <span>ffmpeg</span>
      </div>
    `,
    imageUrl: [
      {
        url: 'assets/imagens/Analizador-De-Video-Youtube/analizadorVideo.png',
      },
    ],
    videoUrl: [
      {
        url: 'assets/imagens/Analizador-De-Video-Youtube/Analizador-De-Video-Youtube ‐ Feito com o Clipchamp.mp4',
      },
    ],
  },
];
