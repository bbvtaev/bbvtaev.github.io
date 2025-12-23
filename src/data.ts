export interface Project {
  id: string; 
  name: string;
  desc: string;
  technologies: string[];

  fullDescription?: string; 
  process?: {
    title: string;
    description: string;
  }[];
  
  challenges?: string[];
  results?: string[];  
  links?: {
    github?: string;
    live?: string;
  };
}

export interface Experience {
  id: string;
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
        id: 'admin-backend',
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
        id: 'billing-subscriptions',
        name: 'Billing & Access Manager',
        desc: 'Спроектировал модуль управления подписками и RBAC систему разграничения прав. Реализовал безопасную загрузку контента в S3 через Presigned URLs, минимизировав нагрузку на бэкенд и трафик сервера',
        technologies: ['Go', 'PostgreSQL', 'AWS S3', 'JWT', 'RBAC']
      },
      {
        id: 'data-processing',
        name: 'Data Processing Engine',
        desc: 'Система потоковой обработки данных на 10М+ записей.',
        technologies: ['Go', 'PostgreSQL', 'Docker'],
        fullDescription: 'Перед командой стояла задача обеспечить экспорт огромных массивов данных без падения производительности основной БД и перерасхода оперативной памяти.',
        process: [
          {
            title: 'Выбор стратегии чтения',
            description: 'Вместо обычной выгрузки через SELECT ALL был реализован курсорный подход (Keyset Pagination), что позволило читать данные фиксированными пачками.'
          },
          {
            title: 'Потоковая обработка (Streaming)',
            description: 'Использовали каналы (channels) в Go для передачи данных от парсера к энкодеру в реальном времени, что снизило потребление RAM до стабильных 50МБ.'
          }
        ],
        challenges: [
          'Ограничение памяти в Docker-контейнере (128MB).',
          'Медленные JOIN-ы на таблицах с миллионами записей.'
        ],
        results: [
          'Время генерации отчета сократилось с 15 минут до 2 минут.',
          'Система успешно обрабатывает файлы размером до 5ГБ.'
        ]
      },
      {
        id: 'notifications',
        name: 'Notifications Service',
        desc: 'Разработал сервис гарантированной доставки Push-уведомлений (Go, RabbitMQ). Реализовал асинхронную архитектуру и обработку ошибок через очереди, обеспечив стабильную работу системы под высокой нагрузкой',
        technologies: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ']
      },
    ]
  }
];