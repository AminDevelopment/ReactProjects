function Backdrop(props) {
    {/*
        instead of configuring onClick = someFunction, we forward the job to a built
        in element that can do it for us by using divs onClick functionality and setting
        it to equal props.onClick <- onClick here is not = onClick, its a variable
    */}
  return <div className="backdrop" onClick={props.onClick} />;
}

export default Backdrop;
