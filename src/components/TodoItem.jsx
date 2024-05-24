import styled from "styled-components";

const TodoItemContainer = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  margin: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const DeleteButton = styled.button`
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
`;

const MarkCompleteButton = styled.button`
  background-color: #0f0;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
`;

const StyledHeader = styled.h3`
  color: #333;
  margin: 0;
  font-size: 1.5em;
`;

const StyledParagraph = styled.p`
  color: #333;
  margin: 0;
  font-size: 1.1em;
`;

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <TodoItemContainer>
      <StyledHeader>{todo.title}</StyledHeader>
      <StyledParagraph>{todo.dueDate}</StyledParagraph>
      <MarkCompleteButton onClick={onToggleComplete}>
        {todo.completed ? "Mark Incomplete" : "Mark Complete"}
      </MarkCompleteButton>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
