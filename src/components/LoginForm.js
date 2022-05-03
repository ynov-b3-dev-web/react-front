import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const LoginField = styled(TextField)`
  &&& {
    display: block;
    margin-bottom: 1rem;
  }
`;

const LoginForm = () => (
  <form>
    <LoginField label="Login" variant="outlined" />
    <TextField type="password" label="Password" variant="outlined" />
  </form>
);

export default LoginForm;
