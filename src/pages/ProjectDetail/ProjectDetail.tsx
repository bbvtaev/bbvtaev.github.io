import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProjectDetail.module.css';
import { experiences } from '../../data';

export const ProjectDetail = () => {
    const { companyId, projectId } = useParams();
    const navigate = useNavigate();

    const company = experiences.find(e => e.id === companyId);
    const project = company?.projects.find(p => p.id === projectId || p.name === projectId);

    if (!project) {
        return (
            <div className={styles.error}>
                <h2>Проект не найден</h2>
                <button onClick={() => navigate(-1)}>Вернуться назад</button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{project.name}</h1>
                <div className={styles.tags}>
                    {project.technologies.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
            </header>

            <section className={styles.content}>
                <div className={styles.overview}>
                    <p>{project.fullDescription}</p>
                </div>

                {project.process && (
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Процесс разработки</h2>
                        <div className={styles.processGrid}>
                            {project.process.map((step, i) => (
                                <div key={i} className={styles.step}>
                                    <h3>0{i + 1}. {step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.outcomeGrid}>
                    <div className={styles.outcomeSection}>
                        <h2 className={styles.sectionTitle}>Challenges</h2>
                        <ul>
                            {project.challenges?.map((c, i) => <li key={i}>{c}</li>) || <li>Standard task implementation</li>}
                        </ul>
                    </div>
                    <div className={styles.outcomeSection}>
                        <h2 className={styles.sectionTitle}>Results</h2>
                        <ul>
                            {project.results?.map((r, i) => <li key={i}>{r}</li>) || <li>Project successfully deployed</li>}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};