 import  styles from './Button.module.css';

// import styled from "styled-components";

// default button before installing styled components package
const Button = props => {
  return (
    // styles object with class names
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//tagged template literal syntax, can be used in any JavaScript project
//accessing the button method from styled
// styled has a method for all html tags ex: h1, p, etc.
// const Button = styled.button`
//   //default width for button
//   width: 100%; //button is the length of the container
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   //adjust button size for screens that are more than 768px, smaller button for container
//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
