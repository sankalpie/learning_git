import React, { useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers';

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code " style={{marginRight:'15px',}}>
      <pre><code className={`language-${language} line-numbers`}>{code}</code></pre>
    </div>
  );
}