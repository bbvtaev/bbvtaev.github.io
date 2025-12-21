export interface Project {
  name: string;
  desc: string;
  technologies: string[];
}

export interface Experience {
  id: string; // Уникальный ID для URL
  company: string;
  period: string;
  role: string;
  description: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    id: 'redlab',
    company: 'RedLab',
    period: 'Апрель 2024 - Текущее время',
    role: 'Middle Golang Developer',
    description: 'Разработка высоконагруженных систем...',
    projects: [
      {
        name: 'Crypto Exchange Core',
        desc: 'Разработка ядра биржевой торговли, матчинг ордеров.',
        technologies: ['Go', 'gRPC', 'PostgreSQL']
      },
      {
        name: 'Internal Admin Panel',
        desc: 'Админка для управления пользователями и транзакциями.',
        technologies: ['Go', 'React', 'Rest API']
      }
    ]
  },
  {
    id: 'approfy',
    company: 'Approfy',
    period: 'Январь 2023 - Март 2024',
    role: 'Junior Golang Developer',
    description: 'Поддержка легаси и написание микросервисов...',
    projects: [
      {
        name: 'Payment Gateway Integration',
        desc: 'Интеграция с платежными системами Stripe и PayPal.',
        technologies: ['Go', 'Redis', 'Docker']
      }
    ]
  }
];