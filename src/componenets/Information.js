import React from 'react'

function Information(props) {
  return (
    <div>
        <b>INFORMATION</b>
        <ul style={{marginTop:'0px',listStyleType:'none',textAlign:'left',textDecoration:'underline',fontSize:'17px'}}>
          <li>Question ID : {props.data.ID}</li>
          <li>Time Limit : {props.data.TimeLimit}</li>
          <li>Memory Limit : {props.data.MemoryLimit}</li>
          <li>Created By : {props.data.Creator}</li>
          <li>Level : {props.data.Level}</li>
          <li>Tags : {props.data.Tags}</li>
        </ul>
    </div>
  )
}

export default Information