import { Suspense } from "react";
import ElementLoader from "./ELementLoader";


const Wrapper = ({ children }) => {
    return <Suspense fallback={<ElementLoader />}>{children}</Suspense>;
  };

export default Wrapper;  