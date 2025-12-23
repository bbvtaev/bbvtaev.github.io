import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { experiences } from '../../data';

export const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.statusContainer}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>Available</span>
                </div>
                
                <div className={styles.heroHeader}>
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Бакар Батаев</h1>
                        <p className={styles.subtitle}>Middle Backend Developer / Software Architect</p>
                    </div>
                    <img src="/realeyes_avg.png" alt="Bakar Bataev" className={styles.avatar} />
                </div>
                
                <p className={styles.description}>
                    Специализируюсь на проектировании высоконагруженных систем и микросервисной архитектуре. 
                    Верю в чистый код, строгую типизацию и инженерный подход к решению бизнес-задач.
                </p>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumber}>01</span>
                    <h2 className={styles.sectionTitle}>Опыт и Проекты</h2>
                </div>
                
                <div className={styles.experienceList}>
                    {experiences.map((exp) => (
                        <Link to={`/projects/${exp.id}`} key={exp.id} className={styles.experienceLink}>
                            <div className={styles.experienceItem}>
                                <div className={styles.expTimeline}>
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineLine}></div>
                                </div>
                                <div className={styles.expContent}>
                                    <div className={styles.expHeader}>
                                        <h3 className={styles.company}>{exp.company}</h3>
                                        <span className={styles.period}>{exp.period}</span>
                                    </div>
                                    <p className={styles.expRole}>{exp.role}</p>
                                    <p className={styles.expDescription}>{exp.description}</p>
                                    <div className={styles.moreLabel}>
                                        View Case Study 
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumber}>02</span>
                    <h2 className={styles.sectionTitle}>Synthetis TSDB</h2>
                </div>
                <div className={styles.projectHighlight}>
                    <p className={styles.description}>
                        Собственная реализация высокопроизводительной Time Series Database на Go. 
                        Проект ориентирован на эффективное хранение и быструю агрегацию метрик с использованием 
                        кастомного движка хранения и механизмов сжатия данных.
                    </p>
                    <div className={styles.tags} style={{ marginTop: '1rem' }}>
                        {['Go', 'Storage Engine', 'TSDB', 'LSM-tree', 'Zero-copy'].map(tech => (
                            <span key={tech} className={styles.tag}>{tech}</span>
                        ))}
                    </div>
                    <a href="https://github.com/bbvtaev/synthetis" target="_blank"  className={styles.link} style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        View Repository 
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumber}>03</span>
                    <h2 className={styles.sectionTitle}>Стек технологий</h2>
                </div>
                <div className={styles.tags}>
                    {['Go', 'REST', 'gRPC', 'Postgres', 'Clickhouse', 'Redis', 'RabbitMQ', 'Docker', 'Prometheus', 'Kubernetes', 'CI/CD', 'Grafana', 'Nginx'].map(tech => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionNumber}>04</span>
                    <h2 className={styles.sectionTitle}>Связь</h2>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactLinks}>
                        <a href="https://t.me/bbvtaev" target="_blank" className={styles.link}>Telegram</a>
                        <a href="https://github.com/bbvtaev" target="_blank" className={styles.link}>GitHub</a>
                        <a href="mailto:bbvtaev@email.com" target="_blank" className={styles.link}>Email</a>
                    </div>
                    <a href="/bbvtaev.pdf" className={styles.resumeBtn}>
                        Download CV [PDF]
                    </a>
                </div>
            </section>
        </div>
    );
};