import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loader from "../imgs/loader.svg";

function AuthWrapper({ children }) {
  const { isLoading, isError } = useAuth0();

  if (isLoading) {
    return (
      <LoadingStyles>
        <div className="App">
          <img src={loader} alt="Loader" />
        </div>
      </LoadingStyles>
    );
  }

  if (isError) {
    <ErrorStyles>
      <div className="App">
        <h3>Something went wrong loading Featured Products</h3>
        <p>Please try again!</p>
      </div>
    </ErrorStyles>;
  }

  return children;
}

const LoadingStyles = styled.div``;

const ErrorStyles = styled.div``;

export default AuthWrapper;
