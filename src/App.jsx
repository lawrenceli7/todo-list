import styled from "styled-components";
import ProjectList from "./components/ProjectList";
import ProjectProvider from "./context/ProjectContext";

const StyledHeader = styled.h1`
  color: #333;
  text-align: center;
`;

function App() {
  return (
    <ProjectProvider>
      <div>
        <StyledHeader>Todo List</StyledHeader>
        <ProjectList />
      </div>
    </ProjectProvider>
  );
}

export default App;
