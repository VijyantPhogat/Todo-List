import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const textareaStyle = {
  width: '100%',
  height: '150px',
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f8f8f8',
  resize: 'none',
};

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a To Do</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>To-Do Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
          />
          <Form.Text className="text-muted text-white">
            <p className='text-white'>Keep the Title length up to 30 characters.</p>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            style={textareaStyle}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Please enter the detailed description of the task."
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add To-Do
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;