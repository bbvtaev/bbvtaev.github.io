import { useParams, Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { experiences } from '../../data';

export const Projects = () => {
    const { companyId } = useParams(); // Получаем параметр из URL

    // Если ID передан, ищем конкретный опыт
    const selectedExp = companyId 
        ? experiences.find(e => e.id === companyId) 
        : null;

    // Если мы на странице /projects (без ID), показываем список всех
    if (!companyId) {
        return (
            <div className={styles.projectsContainer}>
                <h1>Все проекты</h1>
                {experiences.map(exp => (
                     <div key={exp.id} className={styles.companyBlock}>
                        <h2>{exp.company}</h2>
                        <div className={styles.grid}>
                            {exp.projects.map((proj, idx) => (
                                <div key={idx} className={styles.card}>
                                    <h3>{proj.name}</h3>
                                    <p>{proj.desc}</p>
                                    <div className={styles.techStack}>
                                        {proj.technologies.join(' • ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                ))}
            </div>
        );
    }

    // Если ID передан, но такой компании нет
    if (companyId && !selectedExp) {
        return <div className={styles.projectsContainer}>Company not found</div>;
    }

    // Если ID передан и компания найдена
    return (
        <div className={styles.projectsContainer}>
            <Link to="/" className={styles.backLink}>← Назад на главную</Link>
            
            <div className={styles.header}>
                <h1>Проекты в <span className={styles.highlight}>{selectedExp?.company}</span></h1>
                <p className={styles.role}>{selectedExp?.role}</p>
            </div>

            <div className={styles.grid}>
                {selectedExp?.projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{project.name}</h3>
                        <p className={styles.cardDesc}>{project.desc}</p>
                        <div className={styles.techTags}>
                            {project.technologies.map(t => (
                                <span key={t} className={styles.techTag}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
}