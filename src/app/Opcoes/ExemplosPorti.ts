
interface ExemplosPortifolio {
  codigo: number;
  title: string;
  description: string;
  imageUrl: {
    url: string
  }[];
  videoUrl:{
    url: string}[];
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
      { url: '../../assets/imagens/softwareGestaoVeiculos/cadstroFuncionario.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/cadastroVeiculo.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/cadastroEmpresa.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/movimentacao.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/movimentacaoDeVeiculos.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/controleDeGasto.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/requisisaoDeCompra.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/outros.png' },
      { url: '../../assets/imagens/softwareGestaoVeiculos/sobre.png' },

    ],
    videoUrl: []
  },

  {
    codigo: 2,
    title: 'Plataforma de Gerenciamento para Clínica Médica',
    description: `A plataforma de e-commerce voltada para a gestão de clínicas médicas,
      abrangendo desde o controle de agendamentos de consultas até a gestão financeira. A plataforma
      foi projetada para facilitar o processo de tomada de decisões, oferecendo relatórios analíticos e
      dashboards personalizados.`,
    imageUrl: [
      { url: '../../assets/imagens/SoftwareDeClinica/login.png'},
      { url: '../../assets/imagens/SoftwareDeClinica/home.png'},
      { url: '../../assets/imagens/SoftwareDeClinica/barraLatera.png'},

    ],
    videoUrl: [
      { url: '../../assets/imagens/SoftwareDeClinica/SaudeConecta.Gerenciamento.mp4'},
      { url: '../../assets/imagens/SoftwareDeClinica/SaudeConecta.HistoricoDeProntuario.mp4'},
      { url: '../../assets/imagens/SoftwareDeClinica/SaudeConect.TrocaSenha.mp4'},
      { url: '../../assets/imagens/SoftwareDeClinica/responsividade.mp4'}
    ]
  }



];
