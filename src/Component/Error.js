import { useRouteError } from "react-router-dom";

const Error = () => {
    const arr = useRouteError();
    console.log(arr);
  return (
    <div>
      <h1>OOPS!</h1>
      <h1>Something went wrong</h1>
      <h3>{arr.status}:{arr.statusText}</h3>
      <h3>{arr.data}</h3>
    </div>
  )
}

export default Error;
