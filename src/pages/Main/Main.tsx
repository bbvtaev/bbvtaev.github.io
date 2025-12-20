import styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroHeader}>
                    <img 
                        src="realeyes.png" 
                        alt="Bakar Bataev" 
                        className={styles.avatar} 
                    />
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Бакар Батаев</h1>
                        <p className={styles.subtitle}>Backend Developer</p>
                    </div>
                </div>
                <p className={styles.description}>
                    Разработчик с невероятным опытом в разработке и командной работе. Я решу все твои проблемы. Боль пройдет.
                    Был участником стартап проектов и доводил их до финансовых прорывов засчет своих умений в архитектуру
                    Изменял структуры проектов и менял составляющие, улучшая системы.
                    Мне нет равных dear me I think im becoming a god
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Опыт / Проекты</h2>
                <div className={styles.experienceItem}>
                    <div className={styles.expHeader}>
                        <span className={styles.company}>RedLab</span>
                        <span className={styles.period}>Апрель 2024 - Текущее время</span>
                    </div>
                    <p className={styles.expRole}>Middle Golang Developer</p>
                    <p className={styles.expDescription}>
                        фывафыва
                    </p>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.expHeader}>
                        <span className={styles.company}>Approfy</span>
                        <span className={styles.period}>Январь 2023 - Март 2024</span>
                    </div>
                    <p className={styles.expRole}>Junior Golang Developer</p>
                    <p className={styles.expDescription}>
                        фывафыва
                    </p>
                </div>
            </section>

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