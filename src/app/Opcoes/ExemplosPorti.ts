import { SafeHtml } from '@angular/platform-browser';

interface ExemplosPortifolio {
  codigo: number;
  title: string;
  description: SafeHtml; // Alterado para SafeHtml
  imageUrl: {
    url: string;
  }[];
  videoUrl: {
    url: string;
  }[];
}

export const ExemplosPortifolio: ExemplosPortifolio[] = [
  {
    codigo: 1,
    title: 'Software de Gestão de Automóveis',
    description: `Software desenvolvido para auxiliar a gestão de veículos permite o monitoramento em tempo
      real dos veículos, controle de manutenção, e geração de relatórios detalhados sobre a utilização
      dos automóveis. A interface foi construída utilizando Java Swing e o MySQL.`,
    imageUrl: [
      { url: '../../assets/imagens/softwareGestaoVeiculos/login.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/criarLogin.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/home.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/cadastro.png' },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/cadstroFuncionario.png',
      },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/cadastroVeiculo.png',
      },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/cadastroEmpresa.png',
      },
      { url: '../../assets/imagens/softwareGestaoVeiculos/movimentacao.png' },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/movimentacaoDeVeiculos.png',
      },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/controleDeGasto.png',
      },
      {
        url: '../../assets/imagens/softwareGestaoVeiculos/requisisaoDeCompra.png',
      },
      { url: '../../assets/imagens/softwareGestaoVeiculos/outros.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/sobre.png' },
    ],
    videoUrl: [],
  },

  {
    codigo: 2,
    title: 'Plataforma de Gerenciamento para Clínica Médica',
    description: `A plataforma de e-commerce voltada para a gestão de clínicas médicas,
      abrangendo desde o controle de agendamentos de consultas até a gestão financeira. A plataforma
      foi projetada para facilitar o processo de tomada de decisões, oferecendo relatórios analíticos e
      dashboards personalizados.`,
    imageUrl: [
      { url: '../../assets/imagens/SoftwareDeClinica/login.png' },
      { url: '../../assets/imagens/SoftwareDeClinica/home.png' },
      { url: '../../assets/imagens/SoftwareDeClinica/barraLatera.png' },
    ],
    videoUrl: [
      {
        url: '../../assets/imagens/SoftwareDeClinica/SaudeConecta.Gerenciamento.mp4',
      },
      {
        url: '../../assets/imagens/SoftwareDeClinica/SaudeConecta.HistoricoDeProntuario.mp4',
      },
      {
        url: '../../assets/imagens/SoftwareDeClinica/SaudeConect.TrocaSenha.mp4',
      },
      { url: '../../assets/imagens/SoftwareDeClinica/responsividade.mp4' },
    ],
  },

  {
    codigo: 3,
    title: 'IA - Chat Boot - gemini',
    description: `Este chatbot utiliza a biblioteca SpeechRecognition para reconhecer comandos de voz,
     pyttsx3 para síntese de voz e google-generativeai para gerar respostas utilizando o modelo
     generativo da Google.

      Funcionamento:
      Reconhecimento de Fala: Utiliza SpeechRecognition e pyaudio para capturar e processar áudio do microfone.
      O sistema está configurado para ajustar o reconhecimento de fala ao ambiente, permitindo uma captura mais
      precisa das entradas do usuário.

      Síntese de Voz: Utiliza pyttsx3 para transformar texto em fala, permitindo que o chatbot converse com o
      usuário. A velocidade da fala é configurável e a voz pode ser ajustada para português.

      Integração com Google Generative AI: Utiliza google-generativeai para gerar respostas inteligentes e
       contextuais com base nas entradas do usuário. O chatbot pode ser configurado para dar respostas sarcásticas ou em um estilo específico, dependendo da personalização.
     `,
    imageUrl: [
      { url: '../../assets/imagens/chatBoot/chatBot1.png' },
      { url: '../../assets/imagens/chatBoot/chatBot2.png' },
      { url: '../../assets/imagens/chatBoot/chatBot3.png' },
      { url: '../../assets/imagens/chatBoot/chatBot4.png' },
    ],
    videoUrl: [],
  },
  {
    codigo: 4,
    title: 'Projeto de Download e Transcrição de Vídeos e Áudios do YouTube',
    description: `Descrição do Projeto
    <br><br>
     Este projeto é uma aplicação GUI desenvolvida em Python que permite <br>
     baixar vídeos e áudios do YouTube e realizar a transcrição de áudios<br>
     em texto.

    <br><br>

     A aplicação utiliza diversas bibliotecas como <strong>pytubefix</strong>,<br>
     <strong>tkinter</strong>, <strong>speech_recognition</strong>, e <strong>pydub</strong> para oferecer uma interface amigável <br>
     e funcionalidades robustas. <br> Abaixo estão os  principais componentes e funcionalidades do projeto.

    <br><br>

    <h1>Funcionalidades</h1>
    <br>
    <h3>Download de Vídeos do YouTube</h3>

    <li>
    Usuários podem inserir um link de vídeo do YouTube e baixar o vídeo em alta resolução.
    Os vídeos são salvos na pasta "Videos_Downloads" no diretório do usuário.
    </li>

   <br><br>

  <h3>Download de Áudios do YouTube</h3>
    <li>
    Permite baixar apenas o áudio dos vídeos do YouTube.
    Os áudios são salvos na pasta "Audios_Downloads" no diretório do usuário.
    </li>

    <br><br>

  <h3>Download de Múltiplos Vídeos e Áudios</h3>

    <li>
    Suporte para baixar múltiplos vídeos e áudios a partir de uma lista de URLs separadas por vírgulas.
    </li>

    <br><br>

  <h3>Transcrição de Áudios</h3>
    <li>
    Transcreve arquivos de áudio (MP3, MP4, WAV) em texto utilizando a biblioteca speech_recognition.
    Os arquivos de áudio são convertidos para o formato WAV, divididos em partes menores para processamento, e então transcritos.
    </li>

    <br><br>

  <h3>Interface Gráfica</h3>
    <li>
    Desenvolvida com tkinter, a interface gráfica permite fácil interação do usuário com a aplicação.
    </li>
<br>
    <li>
    Modo escuro disponível para melhor visualização.
   </li>


     `,
    imageUrl: [
      {
        url: '../../assets/imagens/Analizador-De-Video-Youtube/analizadorVideo.png',
      },
    ],
    videoUrl: [
      {
        url: '../../assets/imagens/Analizador-De-Video-Youtube/Analizador-De-Video-Youtube ‐ Feito com o Clipchamp.mp4',
      },
    ],
  },
];
