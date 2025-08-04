function Button(props) {
  return <button disabled={props.isDeactive}>{props.children}</button>;
}

export default Button;
