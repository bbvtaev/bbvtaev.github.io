import { useParams, Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { experiences } from '../../data';

export const Projects = () => {
    // Берем оба параметра из URL
    const { companyId, projectId } = useParams();

    // Находим компанию
    const selectedExp = companyId 
        ? experiences.find(e => e.id === companyId) 
        : null;

    // Находим конкретный проект, если мы в него зашли
    const selectedProject = projectId 
        ? selectedExp?.projects.find(p => p.id === projectId)
        : null;

    // Компонент карточки теперь всегда знает свой companyId
    const ProjectCard = ({ proj, index, compId }: { proj: any, index: number, compId: string }) => (
        <Link 
            to={`/projects/${compId}/${proj.id || index}`} 
            className={styles.cardLink}
        >
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span className={styles.projectNumber}>PROJ_{String(index + 1).padStart(2, '0')}</span>
                    <h3 className={styles.cardTitle}>{proj.name}</h3>
                </div>
                <p className={styles.cardDesc}>{proj.desc}</p>
                <div className={styles.techStack}>
                    {proj.technologies.map((t: string) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                </div>
            </div>
        </Link>
    );

    // СОСТОЯНИЕ 1: Открыт конкретный проект
    if (selectedProject) {
        return (
            <div className={styles.projectsContainer}>
                <div className={styles.header}>
                    <h1 className={styles.mainTitle}>{selectedProject.name}</h1>
                    <p className={styles.subtitle}>Проект в рамках работы в {selectedExp?.company}</p>
                </div>
                
                <div className={styles.projectDetail}>
                   <p className={styles.largeDesc}>{selectedProject.desc}</p>
                   <div className={styles.techStackDetailed}>
                       {selectedProject.technologies.map(t => (
                           <span key={t} className={styles.techTag}>{t}</span>
                       ))}
                   </div>
                </div>
            </div>
        );
    }

    // СОСТОЯНИЕ 2: Ошибка (компания не найдена)
    if (companyId && !selectedExp) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.errorCode}>404</div>
                <p>Entity not found in current context</p>
                <Link to="/" className={styles.backLink}>Return to system</Link>
            </div>
        );
    }

    // СОСТОЯНИЕ 3: Список проектов компании ИЛИ Весь архив
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.header}>
                <h1 className={styles.mainTitle}>
                    {selectedExp ? `Проекты в ${selectedExp.company}` : "Архив проектов"}
                </h1>
                {selectedExp && (
                    <div className={styles.metaInfo}>
                        <span className={styles.roleLabel}>Role:</span>
                        <span className={styles.roleValue}>{selectedExp.role}</span>
                    </div>
                )}
            </div>

            {selectedExp ? (
                <div className={styles.grid}>
                    {selectedExp.projects.map((project, index) => (
                        <ProjectCard key={index} proj={project} index={index} compId={companyId!} />
                    ))}
                </div>
            ) : (
                experiences.map(exp => (
                    <div key={exp.id} className={styles.companyBlock}>
                        <div className={styles.companyHeader}>
                            <h2 className={styles.companyName}>{exp.company}</h2>
                            <span className={styles.companyPeriod}>{exp.period}</span>
                        </div>
                        <div className={styles.grid}>
                            {exp.projects.map((proj, idx) => (
                                <ProjectCard key={idx} proj={proj} index={idx} compId={exp.id} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}