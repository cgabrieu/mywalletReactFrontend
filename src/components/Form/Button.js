import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function Button ({ isLoading = false, children, ...props }) {
  return (
    <StyledButton {...props}>
      {
        isLoading
         ? <Loader type="ThreeDots" color="#FFF" height={20} width={20} />
         : children
      }
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 326px;
  border: none;
  padding: 16px;
  background-color: #A328D6;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  @media(max-width: 326px) {
    width: 100%;
    border-radius: 0px;
  }
`;
