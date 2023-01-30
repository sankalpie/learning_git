import React, { useState } from "react";
// import "./prism-dracula.css";

import Code from "./Code";

function CodeEditor() {
  const style2=
  {
    width:'77%',
    backgroundColor:'#FFF',
    marginTop:'10px',
    marginBottom:'20px',
    marginLeft:'10px',
    paddingLeft:'20px',
  }

  var [text,setText]=useState(`#include<stdio.h>

int main()
{
    return 0;
}`);

    var lang="cpp";
    var [lang_select,setLangSelect]=useState("C++");

  // const handleOnChange=(event)=>
  // {  
  //   setText(event.target.value);
  // }
  const handleJava= ()=>
  {
    var text_java=`class HelloWorld {
        public static void main(String[] args) {
            
        }
        }`;
    lang="java";
    setText(text_java);
    lang_select="Java";
    setLangSelect(lang_select);
  }

  const handlePython=()=>
  {
    var text_python=`#include<bit....OOPS! I forgot it's Python :( `;
    lang="python";
    setText(text_python);
    lang_select="Python";
    setLangSelect(lang_select);
  }

  const handleCpp=()=>
  {
    var text_cpp=`#include<stdio.h>

    int main()
    {
        return 0;
    }`
    lang="cpp";
    setText(text_cpp);
    lang_select="C++";
    setLangSelect(lang_select);
  }

  return (
    <div>
        <div className="card" style={style2}>
        <div className="card-body">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {lang_select}
                </button>
                <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={handlePython}>Python</button></li>
                <li><button className="dropdown-item" onClick={handleJava}>Java</button></li>
                <li><button className="dropdown-item" onClick={handleCpp}>C++</button></li>
                </ul>
                </div>
            <br/>
            {/*<textarea className="form-control" id="box" rows="7" value={text} onChange={handleOnChange}>

  </textarea>*/}
            <Code code={text} language={lang}/>
            
        </div>
        </div>
    </div>
  )
}

export default CodeEditor