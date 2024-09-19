
interface ExemplosPortifolio {
  codigo: number;
  title: string;
  description: string;
  imageUrl: {
    url: string
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
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
    ]
  },

  {
    codigo: 2,
    title: 'Plataforma de Gerenciamento para Clínica Médica',
    description: `A plataforma de e-commerce voltada para a gestão de clínicas médicas,
      abrangendo desde o controle de agendamentos de consultas até a gestão financeira. A plataforma
      foi projetada para facilitar o processo de tomada de decisões, oferecendo relatórios analíticos e
      dashboards personalizados.`,
    imageUrl: [
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
      { url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
    ]
  }



];
