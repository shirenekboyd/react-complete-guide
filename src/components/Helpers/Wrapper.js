//props.children returns all JSX children content(all of the other components in AddUser.js), one root element
    //prevents unnecessary extra div content

const Wrapper = (props) => {
return props.children;
}

export default Wrapper;