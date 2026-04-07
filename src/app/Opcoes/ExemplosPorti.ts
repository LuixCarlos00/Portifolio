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
        Sistema web fullstack para administração de clínicas médicas, composto por uma API REST robusta
        em Spring Boot e uma SPA em Angular 17. Cobre desde o agendamento de consultas e prontuário
        eletrônico até geração de documentos PDF, notificações por e-mail/SMS e controle de acesso por perfil.
      </p>

      <h3 class="desc-subtitle">Funcionalidades</h3>
      <ul>
        <li>Agendamento e gerenciamento completo de consultas médicas (CRUD)</li>
        <li>Prontuário eletrônico com histórico médico por paciente</li>
        <li>Geração de PDFs: receitas, atestados e solicitações de exames</li>
        <li>Dashboard com métricas e gráficos de acompanhamento (Chart.js)</li>
        <li>Cadastro de médicos com especialidades e secretárias</li>
        <li>Notificações por e-mail e SMS via Twilio</li>
        <li>Autenticação JWT com verificação 2FA por código de e-mail</li>
        <li>Controle de acesso por perfil: Admin, Médico e Secretária</li>
        <li>Troca de senha e gerenciamento de usuários</li>
        <li>Interface responsiva para desktop e mobile</li>
      </ul>

      <h3 class="desc-subtitle">Backend</h3>
      <ul>
        <li>API REST com módulos independentes: consultas, médicos, pacientes, prontuários, secretárias, endereços e verificação 2FA</li>
        <li>Autenticação e autorização com Spring Security + JWT</li>
        <li>Envio de e-mail e SMS (Twilio) como serviços desacoplados</li>
        <li>Tratamento centralizado de exceções e configurações de segurança</li>
      </ul>

      <h3 class="desc-subtitle">Frontend</h3>
      <ul>
        <li>SPA em Angular 17 com Angular Material como biblioteca de componentes</li>
        <li>Guards de rota por role (AuthGuard, GuestGuard, RoleGuard)</li>
        <li>Interceptors de autenticação e tratamento de erros HTTP</li>
        <li>Rich text com ngx-quill para prontuários e receitas médicas</li>
        <li>Alertas com SweetAlert2 e manipulação de datas com date-fns</li>
      </ul>

      <h3 class="desc-subtitle">Tecnologias</h3>
      <div class="desc-tech">
        <span>Angular 17</span>
        <span>TypeScript</span>
        <span>Angular Material</span>
        <span>Spring Boot</span>
        <span>Java 17</span>
        <span>Spring Security</span>
        <span>JWT</span>
        <span>MySQL 8</span>
        <span>Twilio</span>
        <span>Chart.js</span>
        <span>html2pdf.js</span>
        <span>REST API</span>
      </div>
    `,
    imageUrl: [
      { url: 'assets/imagens/SoftwareDeClinica/home.png' },
      { url: 'assets/imagens/SoftwareDeClinica/agenda.png' },
      { url: 'assets/imagens/SoftwareDeClinica/angenda.png' },
      { url: 'assets/imagens/SoftwareDeClinica/genereConsulta.png' },
    ],
    videoUrl: [
      { url: 'assets/imagens/SoftwareDeClinica/homepage.mp4' },
      { url: 'assets/imagens/SoftwareDeClinica/loadpage.mp4' },
    ],
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
