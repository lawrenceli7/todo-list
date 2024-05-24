import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} projectIndex={index} />
      ))}
    </div>
  );
};

export default ProjectList;
