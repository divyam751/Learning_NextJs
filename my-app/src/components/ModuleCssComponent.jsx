import React from "react";
import styles from "../app/css/ModuleCssComp.module.css";
const ModuleCssComponent = () => {
  return (
    <div className={styles.fontSize_60}>
      it's Module CSS component for this we have to create a file with extension
      name "fileName.module.css" then import it in component and use as an
      object
    </div>
  );
};

export default ModuleCssComponent;
