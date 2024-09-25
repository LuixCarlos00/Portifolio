export interface PortfolioItem {
  codigo: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const Portifolio: PortfolioItem[] = [
  {
    codigo: 1,
    title: 'Software de Gestão de Automóveis',
    description: `Software desenvolvido para auxiliar a gestão de veículos permite o monitoramento em tempo
      real dos veículos, controle de manutenção, e geração de relatórios detalhados sobre a utilização
      dos automóveis. A interface foi construída utilizando Java Swing e o MySQL.`,
    imageUrl: '../../assets/imagens/softwareGestaoVeiculos/login.png'
  },
  {
    codigo: 2,
    title: 'Plataforma de Gerenciamento para Clínica Médica - SaudeConecta',
    description: `A plataforma de e-commerce voltada para a gestão de clínicas médicas,
      abrangendo desde o controle de agendamentos de consultas até a gestão financeira. A plataforma
      foi projetada para facilitar o processo de tomada de decisões, oferecendo relatórios analíticos e
      dashboards personalizados.`,
    imageUrl: '../../assets/imagens/SoftwareDeClinica/logo.png'
  },


];
