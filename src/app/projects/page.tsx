import ProjectCard from "@/components/ProjectCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Project } from "@/types";

const Projects = () => {
  const projectsIndex: Project = getListPage("projects/_index.md");
  const projects: Project[] = getSinglePage("projects");
  const { title, meta_title, description, image } = projectsIndex.frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {projects.map((project: Project, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <ProjectCard data={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
