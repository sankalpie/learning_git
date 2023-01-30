import React from 'react'
import CodeEditor from './CodeEditor';
import Information from './Information';
import Submissions from './Submissions';

function Description() {
  const data = 
    {Title: "A+B Problem", Desciption: "You will be given 2 numbers A and B and you have to find the appropriate sum.", Input: "First line will contain the number of testcases T, the second line will contain 2 integers A and B.", Output: "Output the sum of two numbers, each in a new line respectively.",SampleInput:"1 2",SampleOutput:"3",ID:"0000",TimeLimit:"1s",MemoryLimit:"256MB",Creator:"ItsAmeMario!",Level:"Low",Tags:"Tree"}
  

  const style1=
  {
    width:'77%',
    backgroundColor:'#FFF',
    marginTop:'20px',
    marginBottom:'20px',
    marginLeft:'10px',
    paddingLeft:'20px',
  }
  
  

  function copytext()
  {
    console.log("hii");
    navigator.clipboard.writeText(data.SampleInput);
    let CopyButton=document.getElementById("CopyButton")
    CopyButton.innerText="Copied!"
    setInterval(()=>{CopyButton.innerText="Copy Inputs"},2600)
    
  }
  
  return (
    <div>
      <div style={{flexDirection:'row',justifyContent:'spread-evenly',display:'flex',}}>

        <div className="card" style={style1}>
          <div className="card-body">
            <b>{data.Title}</b>
            <br/><br/>
            <b style={{color:'blue',}}>Desciption</b>
            <br/>
            <div style={{paddingLeft:'25px',paddingTop:'7px',}}>{data.Desciption}</div>
            <br/>
            <b style={{color:'blue',}}>Input</b>
            <br/> 
            <div style={{paddingLeft:'25px',paddingTop:'7px',}}>{data.Input}</div>
            <br/>
            <b style={{color:'blue',}}>Output</b>
            <br/>
            <div style={{paddingLeft:'25px',paddingTop:'7px',}}>{data.Output}</div>
            <br/>
          </div>

              <table style={{width:'100%',textAlign:'center'}}>
              <tr>
                <th><b>Sample Input</b></th>
                <th><b>Sample Output</b></th>
              </tr>
              <tr style={{textAlign:'center',}}>
                <td>{data.SampleInput}</td>
                <td>{data.SampleOutput}</td>
              </tr>
              <tr style={{textAlign:'center',}}>
              <button type="button" className="btn btn-primary btn-sm" id="CopyButton" onClick={copytext}>Copy Inputs</button>
              </tr>
              </table>
              <br/>
            

          
        
        
        </div>

        <div style={{width:'18%',marginTop:'20px',textAlign:'center',backgroundColor:'#D3D3D3', marginLeft:'10px', marginRight:'10px',marginBottom:'20px',alignItems:'center',position:'absolute',right:'0px',}}>
          <div style={{border:'dashed',backgroundColor:'#fff',borderWidth:'2px',}}>
            <Information data={data}/>
          </div>
          <div style={{border:'dashed',marginTop:'20px',backgroundColor:'#fff',borderWidth:'2px',}}>
            <Submissions/>
          </div>    
        </div>

      </div>

      <CodeEditor/>
    </div>
  )
}

export default Description