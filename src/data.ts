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
    description: 'Работал в продуктовой команде над масштабируемыми Backend-решениями. Прошел путь от исправления технического долга в инфраструктуре до проектирования систем с большой пропускной способностью (10M+).',
    projects: [
      {
        name: 'Billing & Access Manager',
        desc: 'Спроектировал модуль управления подписками и RBAC систему разграничения прав. Реализовал безопасную загрузку контента в S3 через Presigned URLs, минимизировав нагрузку на бэкенд и трафик сервера',
        technologies: ['Go', 'PostgreSQL', 'AWS S3', 'JWT', 'RBAC']
      },
      {
        name: 'Data Processing Engine',
        desc: 'Реализовал систему выгрузки данных из базы с целевой емкостью 10М+. Была реализована потоковая обработка для минимизации потребления памяти и последовательное чтение для уменьшения нагрузки на БД.',
        technologies: ['Go', 'PostgreSQL', 'SQL Optimization', 'Docker']
      },
      {
        name: 'Notifications Service',
        desc: 'Разработал сервис гарантированной доставки Push-уведомлений (Go, RabbitMQ). Реализовал асинхронную архитектуру и обработку ошибок через очереди, обеспечив стабильную работу системы под высокой нагрузкой',
        technologies: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ']
      },
    ]
  }
];