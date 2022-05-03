import PropTypes from 'prop-types';
import Counter from './Counter';

const Hello = ({ name, lastName, age }) => (
  <>
    <h1> {`Hello ${name} ${lastName}`}</h1>
    <p>J'ai {age} ans</p>
    <Counter />
  </>
);

Hello.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
};

export default Hello;
