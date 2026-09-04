import { ArrowUpRight, Braces } from 'lucide-react';

const projects = [
  {
    slug: 'issueflow', title: 'Issueflow', category: 'GESTIÓN DE INCIDENCIAS',
    problem: 'Organizar incidencias de un equipo, dar seguimiento a su estado y controlar quién puede modificar o eliminar información.',
    architecture: 'Arquitectura por capas',
    reason: 'Separa la API, los servicios de negocio y la persistencia para mantener responsabilidades claras en una aplicación de gestión.',
    structure: 'Presentación → Aplicación → Persistencia',
    features: 'Filtros, prioridades, estados y paginación. Inicio de sesión, roles y protección CSRF.',
    decision: 'Control de versiones para detectar ediciones simultáneas y evitar sobrescribir cambios.',
    tests: 'Contrato REST, permisos, sesión, bloqueo optimista y persistencia con PostgreSQL. Reglas de dependencia entre capas.',
    stack: ['React', 'TypeScript', 'Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'Docker'],
    scope: 'La arquitectura corresponde a la API Java local. La demo alojada utiliza una implementación Worker.',
  },
  {
    slug: 'turno', title: 'Turno · Reservas', category: 'RESERVA DE SALAS',
    problem: 'Coordinar el uso de salas y evitar que dos personas reserven el mismo espacio en horarios superpuestos.',
    architecture: 'Arquitectura hexagonal',
    reason: 'Aísla las reglas de reservas de HTTP y JDBC. Los casos de uso pueden probarse sin arrancar Spring ni una base de datos.',
    structure: 'Adaptadores ↔ Puertos ↔ Casos de uso y dominio',
    features: 'Disponibilidad por sala y fecha, reservas por intervalos y cancelaciones que liberan el horario.',
    decision: 'Bloques de 30 minutos y una restricción única en base de datos resuelven conflictos concurrentes dentro de una transacción.',
    tests: 'Reservas simultáneas, solapamientos, rollback, salas independientes y cancelación idempotente. Dominio con reloj fijo y PostgreSQL real.',
    stack: ['React', 'TypeScript', 'Java 21', 'Spring Boot', 'JDBC', 'PostgreSQL', 'Docker'],
    scope: 'La arquitectura corresponde a la API Java local. La demo alojada utiliza Worker y D1.',
  },
  {
    slug: 'repolens', title: 'RepoLens · GitHub', category: 'EXPLORACIÓN DE DATOS',
    problem: 'Explorar los repositorios públicos de una cuenta de GitHub y comprender sus lenguajes, estrellas y actividad reciente.',
    architecture: 'Feature-Sliced Design',
    reason: 'Organiza el frontend por funcionalidades y dependencias descendentes, separando búsqueda, filtros, entidades y bloques de interfaz.',
    structure: 'Pantalla → Widgets / Features → Entidades → Shared',
    features: 'Búsqueda de cuentas, filtros combinados, ordenación y gráficas de repositorios y actividad pública.',
    decision: 'Caché de cinco minutos y consultas cancelables. Las respuestas parciales y los límites de GitHub se comunican explícitamente.',
    tests: 'Normalización, filtros, paginación, caché, cancelación y errores de API. Verificación de interfaces públicas y dependencias entre módulos.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'GitHub REST API'],
    scope: 'Consulta datos públicos desde el navegador. Las métricas describen la muestra recibida; no representan toda la actividad de una cuenta.',
  },
];

export function ProjectCards() {
  return <>
    <p className="project-access">Prueba Issueflow y RepoLens en línea y consulta los enlaces al código y la documentación. La demo de Turno tiene acceso restringido.</p>
    <div className="project-grid technical-projects">
      {projects.map((project, index) => {
        const repository = `https://github.com/saulipn324-svg/${project.slug}`;
        const demo = `https://${project.slug}-saul.saulipn324.chatgpt.site`;
        return <article className="project" key={project.slug} aria-labelledby={`project-${project.slug}`}>
          <div className="project-top"><span>0{index + 1} / {project.category}</span><Braces size={24} aria-hidden="true" /></div>
          <div className="project-body">
            <span className="status">PROYECTO PERSONAL · FICHA TÉCNICA</span>
            <h3 id={`project-${project.slug}`}>{project.title}</h3>
            <p>{project.problem}</p>
            <div className="architecture-summary"><h4>{project.architecture}</h4><p>{project.reason}</p><p className="architecture-flow">{project.structure}</p></div>
            <dl className="project-facts">
              <div><dt>Funciones principales</dt><dd>{project.features}</dd></div>
              <div><dt>Decisión técnica</dt><dd>{project.decision}</dd></div>
              <div><dt>Pruebas realizadas</dt><dd>{project.tests}</dd></div>
            </dl>
            <ul className="project-stack" aria-label={`Tecnologías de ${project.title}`}>{project.stack.map(technology => <li key={technology}>{technology}</li>)}</ul>
            <p className="project-scope">{project.scope}</p>
          </div>
          <nav className="project-bottom project-links" aria-label={`Enlaces de ${project.title}`}>
            <a href={demo} target="_blank" rel="noopener noreferrer">{project.slug === 'turno' ? 'Demo privada' : 'Demo pública'} <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href={repository} target="_blank" rel="noopener noreferrer">Código <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href={`${demo}/guia.html`} target="_blank" rel="noopener noreferrer">Guía <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href={`${repository}/blob/main/docs/ARQUITECTURA.md`} target="_blank" rel="noopener noreferrer">Arquitectura <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </article>;
      })}
    </div>
  </>;
}
