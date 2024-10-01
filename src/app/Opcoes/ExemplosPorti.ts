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
    title: 'Plataforma de Gerenciamento para Clínica Médica',
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
];
