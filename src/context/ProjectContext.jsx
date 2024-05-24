import { createContext, useEffect, useState } from "react";
import Project from "../models/Project";
import Todo from "../models/Todos";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      return JSON.parse(savedProjects).map((projectData) => {
        const project = new Project(projectData.name);
        projectData.todos.forEach((todoData) => {
          const todo = new Todo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
            todoData.notes,
            todoData.checklist
          );
          project.addTodo(todo);
        });
        return project;
      });
    }
    return [new Project("Default Project")];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (name) => {
    setProjects([...projects, new Project(name)]);
  };

  const addTodoToProject = (projectIndex, todo) => {
    const newProjects = [...projects];
    newProjects[projectIndex].addTodo(todo);
    setProjects(newProjects);
  };

  const removeTodoFromProject = (projectIndex, todoIndex) => {
    const newProjects = [...projects];
    newProjects[projectIndex].removeTodo(todoIndex);
    setProjects(newProjects);
  };

  const toggleTodoCompletion = (projectIndex, todoIndex) => {
    const newProjects = [...projects];
    newProjects[projectIndex].todos[todoIndex].toggleComplete();
    setProjects(newProjects);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        addTodoToProject,
        removeTodoFromProject,
        toggleTodoCompletion,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
