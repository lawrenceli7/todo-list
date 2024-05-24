import styled from "styled-components";

const TodoItemContainer = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const DeleteButton = styled.button`
  background-color: gray;
  color: black;
  border: none;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 600px) {
    width: auto;
    margin-top: 0;
  }
`;

const MarkCompleteButton = styled.button`
  background-color: lightgrey;
  color: black;
  border: none;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 600px) {
    width: auto;
    margin-top: 0;
    margin-right: 10px;
  }
`;

const StyledHeader = styled.h3`
  color: #333;
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  width: 100%;

  @media (min-width: 600px) {
    text-align: left;
    width: auto;
  }
`;

const StyledParagraph = styled.p`
  color: #333;
  margin: 15px;
  font-size: 1.1em;
  text-align: center;
  width: 100%;

  @media (min-width: 600px) {
    text-align: left;
    width: auto;
    margin-left: 20px;
  }
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
