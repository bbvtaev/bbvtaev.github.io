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
    role: 'Golang Developer',
    description: 'Работал в продуктовой команде над масштабируемыми Backend-решениями. Прошел путь от исправления технического долга в инфраструктуре до проектирования систем с большой пропускной способностью (10M+).',
    projects: [
      {
        id: 'billing-subscriptions',
        name: 'Billing & Access Manager',
        desc: 'Система управления подписками и RBAC систему разграничения прав.',
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
        desc: 'Система гарантированной доставки Push-уведомлений.',
        technologies: ['Go', 'PostgreSQL', 'Redis', 'RabbitMQ', 'FCM'],
        fullDescription: 'Существующая система рассылок работала синхронно и падала, при увеличении нагрузки. Задача была создать отказоустойчивый сервис, который принимает пачку уведомлений, буферизирует их и гарантированно доставляет пользователям, соблюдая лимиты провайдера.',
        process: [
          {
            title: 'Проектирование модели данных',
            description: 'Разработал схему БД, позволяющую одному пользователю иметь несколько активных устройств. Реализовал систему версионирования токенов для поддержки обновлений приложения.'
          },
          {
            title: 'Реализация идемпотентности API',
            description: 'Внедрил механизм дедупликации на основе Redis. API проверяет уникальные ID запросов, чтобы исключить повторную отправку пушей при сбоях на стороне вызывающего сервиса.'
          },
          {
            title: 'Асинхронная обработка',
            description: 'Разделил прием запросов и отправку. API валидирует запрос и кладет сообщение в RabbitMQ. Воркеры на Go вычитывают очередь и отправляют пуши параллельно.'
          },
          {
            title: 'Механизм Retry и DLQ',
            description: 'Реализовал стратегию Exponential Backoff: если внешний сервис (FCM) недоступен, сообщение возвращается в очередь с задержкой. "Битые" сообщения уходят в DLQ для ручного разбора.'
          },
          {
            title: 'Контроль нагрузки',
            description: 'Чтобы избежать блокировки со стороны Google/Apple, реализовал алгоритм Token Bucket в Redis. Воркеры автоматически снижают скорость отправки при приближении к лимитам провайдера.'
          }
        ],
        challenges: [
          'Обработка спайков нагрузки во время маркетинговых рассылок.',
          'Соблюдение Rate Limits внешних провайдеров (Google/Apple), для избежания блокировок.',
          'Проблема дубликатов сообщений при сетевых сбоях.'
        ],
        results: [
          'Пропускная способность выросла до 50 000 уведомлений в минуту.',
          'Zero-loss delivery: процент потерянных сообщений снизился с 5% до 0.01% (только невалидные токены).',
          'Время ответа API на прием рассылки сократилось до 10мс.'
        ]
      }
    ]
  }
];