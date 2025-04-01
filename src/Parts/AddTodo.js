// import React, { useState } from 'react';

// export const AddTodo = ({ addTodo }) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");


//     const submit = (e) => {
//         e.preventDefault();
//         if (!title || !desc) {
//             alert("Title or Description cannot be blank");
//         }
//         else {
//             addTodo(title, desc);
//             setTitle("");
//             setDesc("");
//         }
//     }
//     return (
//         <div className="container my-3">
//             <br /><br /><br />
//             <h3>Make Your Todo</h3>
//             <form onSubmit={submit}>
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Todo Title</label>
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="desc" className="form-label">Todo Description</label>
//                     <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
//                 </div>
//                 <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
//             </form>
//         </div>
//     )
// }

import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container mt-4 mb-2 d-flex justify-content-center">
            <div className="card shadow-lg p-4" style={{top:'10vh' , maxWidth: '600px', width: '100%' }}>
                <h3 className="text-center mb-4">Create a Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Todo Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="form-control" 
                            id="title" 
                            placeholder="Enter title" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label fw-bold">Todo Description</label>
                        <textarea 
                            value={desc} 
                            onChange={(e) => setDesc(e.target.value)} 
                            className="form-control" 
                            id="desc" 
                            rows="3" 
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Add Todo</button>
                </form>
            </div>
        </div>
    );
}