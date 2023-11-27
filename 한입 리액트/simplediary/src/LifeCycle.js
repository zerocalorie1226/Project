import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div> Unmount Testing Component</div>;
};

const LifeCycle = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggle = () => setIsVisable(!isVisable);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisable && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
