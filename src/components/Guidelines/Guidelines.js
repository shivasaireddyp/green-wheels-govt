import React from "react";
import { useState } from "react";
function Guidelines() {
  let [msg, setMsg] = useState("");
  return (
    <div className="text-white">
      <h1 className="text-center fw-bold mt-4 mb-4">Guidelines</h1>
    </div>
  );
}

export default Guidelines;
