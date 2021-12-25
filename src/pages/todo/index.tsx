import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Content from '../../components/content';
import FormInput from '../../components/input';

import { useDispatch, useSelector } from 'react-redux';
import { getTodo, deleteTodo } from '../../config/redux/todo/action';
import { TodoInterface } from '../../Interfaces/todo/index.interface';

const Todo = () => {
    const [data, setData] = useState({});
    const [openModal, setOpenModal] = useState(false); 
    const [statusAction, setStatusAction] = useState("Create");

    const dispatch = useDispatch();
    const todo = useSelector((state:any) => { return state.todo })

    const getUpdate = (update: Object) => {
        console.log(update)
        setOpenModal(true);
        setData(update)
        setStatusAction("Update")
    }

    useEffect(() => {
        if (!localStorage.getItem('persist:root')) {
            dispatch(getTodo());
        }
    }, [dispatch]);

    return (
        <>
        <Row className="mt-5">

            <Button 
                className="mb-3" 
                color="success"
                onClick={() => {
                    setOpenModal(true)
                    setStatusAction("Create")
                }}>
                Create Data
            </Button>

            <Col lg={6} className="bg-light p-3">
                <Alert color="primary"> On Progress</Alert>
                {
                    todo?.data?.filter((item: TodoInterface) => item.status === 0).sort(
                        function (first: TodoInterface, second: TodoInterface){
                            return new Date(`${first.createdAt}`).getTime() - new Date(`${second.createdAt}`).getTime()
                        }).map((todo: TodoInterface) => {
                            return (
                                <div key={`${todo.id}`}>
                                    <Content 
                                        data={todo}
                                        getUpdate={getUpdate}
                                        delete={(id: Number) => {
                                            dispatch(deleteTodo(id))
                                        }}
                                    />
                                </div>
                            );
                        })
                }
            </Col>
            <Col lg={6} className="bg-light p-3">
                <Alert color="success"> Done</Alert>
                {
                    todo?.data?.filter((item: TodoInterface) => item.status === 1).sort(
                        function (first: TodoInterface, second: TodoInterface){
                            return new Date(`${second.createdAt}`).getTime() - new Date(`${first.createdAt}`).getTime()
                        }).map((todo: TodoInterface) => {
                            return (
                                <div key={`${todo.id}`}>
                                    <Content 
                                        data={todo}
                                        getUpdate={getUpdate}
                                    />
                                </div>
                            );
                        })
                }
            </Col>
        </Row>

        <Modal
            fullscreen="lg"
            isOpen={openModal}
            toggle={() => {
                setOpenModal(false)
                setData({})
            }}>
            <ModalHeader 
                toggle={() => {
                    setOpenModal(false)
                    setData({})
                }}>
                {statusAction} Todo
            </ModalHeader>
            <ModalBody>
                <FormInput
                    data={data}
                    status={statusAction}
                    setOpenModal={() => {
                        setOpenModal(false)
                    }}
                />
            </ModalBody>
        </Modal>
        </>
    );
}

export default withRouter(Todo);