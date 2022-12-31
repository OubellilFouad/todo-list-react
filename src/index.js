import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './ListCon';
import AddProjectBtn from './AddPorjectBtn';

const Body = () => {
  const showForm = (e) => {
    document.querySelector('#projectForm').classList.add('show');
}
  return (
    <div className='body'>
      ToDo List
      <AddProjectBtn passFunc={(e) => showForm(e)}/>
      <Container/>
    </div>
  )
}

ReactDOM.render(
  <Body/>,
  document.getElementById('root')
)