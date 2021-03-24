import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formsubmit = (e) => {
        e.preventDefault();
          alert(`${data.fullname} ${data.email} ${data.msg}`)

    }


    return (
        <>
            <div className='container text-center my-5 '>
                <h1 className='display-5' style={{ fontFamily: 'bold' }}>Contact US</h1>
            </div>
            <div className='container '>
                <div className='col-6 mx-auto'>
                    <form onSubmit={formsubmit}>
                        <div className="mb-3">
                            <label  className="form-label">Fullname</label>
                            <input type="text" className="form-control" id="validationTooltip01" autoComplete='off' name='name' value={data.fullname} onChange={InputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" autoComplete='off' name='email' value={data.email} onChange={InputEvent} aria-describedby="emailHelp" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            

        </>
    )
}


export default Contact;


// import React, { Component } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import { Button , Table } from 'bootstrap'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import { getTodos, deleteTodo, addTodo } from './actions/todoAction'

// class Todo extends Component {

//     componentDidMount(){
//         this.props.getTodos()
//     }

//     render() { 

//         const { todos } = this.props.todo
    
//         const handleAddTodo = (e) => {
//             const todo = prompt('Enter todo here', '');

//             const newTodo = {
//                 name : todo
//             }

//             this.props.addTodo(newTodo);
//         }

//         const handleDelete = id => {
//             this.props.deleteTodo(id)
//         }

//         return ( 
//             <div style={{
//                 margin : '10px',
//                 border : '2px solid #ec'
//             }}>

//                 <button variant="primary" style={{
//                     margin : '10px'
//                 }} onClick={handleAddTodo}>Add todo</button>

//                 <table hover responsive striped bordered>
                
//                 <tbody>
//                  {todos.map((todo) => {
//                      return(
//                          <tr key={todo._id}>
//                             <td>{todo.name}</td>
//                             <td><button variant="dark" onClick={
//                                 () => handleDelete(todo._id)
//                             }>Delete</button></td>
//                         </tr>
//                      )
//                  })}
//                  </tbody>
//                 </table>

//             </div>
//          );
//     }
// }
 
// Todo.propTypes = {
//     getTodos : PropTypes.func.isRequired,
//     todo : PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     todo : state.todo
// })

// export default connect(mapStateToProps, { getTodos, deleteTodo, addTodo })(Todo);