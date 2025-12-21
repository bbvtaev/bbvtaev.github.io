import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { experiences } from '../../data'; // Путь к вашему файлу данных

export const Main = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section ... (без изменений) */}
             <section className={styles.hero}>
                <div className={styles.heroHeader}>
                    <img src="/realeyes_avg.png" alt="Bakar Bataev" className={styles.avatar} />
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Бакар Батаев</h1>
                        <p className={styles.subtitle}>Backend Developer</p>
                    </div>
                </div>
                <p className={styles.description}>
                   Разработчик с невероятным опытом...
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Опыт / Проекты</h2>
                <div className={styles.experienceList}>
                    {experiences.map((exp) => (
                        <Link to={`/projects/${exp.id}`} key={exp.id} className={styles.experienceLink}>
                            <div className={styles.experienceItem}>
                                <div className={styles.expHeader}>
                                    <span className={styles.company}>{exp.company}</span>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <p className={styles.expRole}>{exp.role}</p>
                                <p className={styles.expDescription}>
                                    {exp.description}
                                </p>
                                <span className={styles.moreLabel}>Посмотреть проекты →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Остальные секции (Стек, Контакты) ... */}
             <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Стек технологий</h2>
                <div className={styles.tags}>
                    {['Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'gRPC', 'RabbitMQ', 'Nginx'].map(tech => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                </div>
            </section>
             <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Как связаться</h2>
                <div className={styles.contacts}>
                    <a href="https://t.me/bbvtaev" className={styles.link}>Telegram</a>
                    <a href="https://github.com/bbvtaev" className={styles.link}>GitHub</a>
                    <a href="mailto:bbvtaev@email.com" className={styles.link}>Email</a>
                    <a href="/bbvtaev.pdf" className={styles.resumeBtn}>Download CV</a>
                </div>
            </section>
        </div>
    )
}