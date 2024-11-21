//App.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import useStore from './store';

function App() {
  const [taskDescription, setTaskDescription] = useState('');
  const { tasks, addTask, toggleTask, countPendingTasks } = useStore();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      addTask({ id: Date.now(), description: taskDescription, completed: false });
      setTaskDescription('');
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Gestor de Tareas</h1>
          <Form onSubmit={handleAddTask}>
            <Form.Group controlId="taskDescription">
              <Form.Label>Descripción de la tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe una nueva tarea"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Agregar tarea
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Tareas Pendientes: {countPendingTasks()}</h3>
          <ListGroup className="mt-3">
            {tasks.map((task) => (
              <ListGroup.Item
                key={task.id}
                variant={task.completed ? 'success' : 'light'}
                onClick={() => toggleTask(task.id)}
                style={{ cursor: 'pointer' }}
              >
                {task.description}
                {task.completed && <span className="ml-2">(Resuelta)</span>}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

