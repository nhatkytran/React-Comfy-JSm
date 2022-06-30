import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loader from "../imgs/loader.svg";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <LoadingStyles className="center-flex-display">
        <div className="App">
          <img src={loader} alt="Loader" />
        </div>
      </LoadingStyles>
    );
  }

  if (error) {
    return (
      <ErrorStyles className="center-flex-display">
        <div className="App">
          <h3>Something went wrong</h3>
          <p>Please try again!</p>
        </div>
      </ErrorStyles>
    );
  }

  return children;
}

const LoadingStyles = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ErrorStyles = styled.div`
  width: 100vw;
  height: 100vh;
  color: #102a42;
`;

export default AuthWrapper;
