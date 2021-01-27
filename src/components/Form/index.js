import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  padding-top: 10px;

  input {
    height: 40px;
    background: transparent;
    border: 1.5px solid ${({ theme }) => theme.colors.placeholder};
    border-radius: ${({ theme }) => theme.borderRadius};

    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
    text-indent: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    text-indent: 10px;
    }
  }
  
  button {
    height: 39px;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mainBg};
    font-weight: 700;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    transition: .4s;
    &:hover {
      opacity: .89;
    }
  }
`;

export default Form;
