import { useContext, useState } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectContext";
import Todo from "../models/Todos";
import TodoItem from "./TodoItem";

const StyledInput = styled.input`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
`;

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    color: #333;
    cursor: not-allowed;
  }
`;

const StyledSelect = styled.select`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
`;

const ProjectItem = ({ project, projectIndex }) => {
  const { addTodoToProject, removeTodoFromProject, toggleTodoCompletion } =
    useContext(ProjectContext);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  const handleAddTodo = () => {
    if (
      newTodo.title.trim() &&
      newTodo.description.trim() &&
      newTodo.dueDate &&
      newTodo.priority
    ) {
      addTodoToProject(
        projectIndex,
        new Todo(
          newTodo.title,
          newTodo.description,
          newTodo.dueDate,
          newTodo.priority
        )
      );
      setNewTodo({ title: "", description: "", dueDate: "", priority: "low" });
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleDeleteTodo = (todoIndex) => {
    removeTodoFromProject(projectIndex, todoIndex);
  };

  const handleToggleComplete = (todoIndex) => {
    toggleTodoCompletion(projectIndex, todoIndex);
  };

  const isFormValid =
    newTodo.title.trim() &&
    newTodo.description.trim() &&
    newTodo.dueDate &&
    newTodo.priority;

  return (
    <div>
      <h2>{project.name}</h2>
      {project.todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggleComplete={() => handleToggleComplete(index)}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
      <div>
        <StyledInput
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          required
        />
        <StyledInput
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          required
        />
        <StyledInput
          type="date"
          value={newTodo.dueDate}
          onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
          required
        />
        <StyledSelect
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </StyledSelect>
        <StyledButton onClick={handleAddTodo} disabled={!isFormValid}>
          Add Todo
        </StyledButton>
      </div>
    </div>
  );
};

export default ProjectItem;
