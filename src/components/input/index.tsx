import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createTodo, updateTodo } from "./../../config/redux/todo/action";

const FormInput = (props: any) => {
    const dispatch = useDispatch();
    const { id, title, description, status } = props.data;
    const titleDefault = title;
    const descriptionDefault = description;
    const statusDefalt = status || 0;

    const [titles, setTitle] = useState(titleDefault);
    const [descriptions, setDescription] = useState(descriptionDefault);
    const [statuss, setStatus] = useState(statusDefalt);

    const CreateTodos = (e: any) => {
        console.log(e.status)
        e.preventDefault();
        if (props.status === "Update") {
            dispatch(updateTodo(id, {
                title: titles,
                description: descriptions,
                status: statuss
            }))
            
        } else {
            dispatch(createTodo({
                title: titles,
                description: descriptions,
                status: statuss
            }))
        }

        props.setOpenModal();
    }
    console.log(status)
    return <Form inline onSubmit={(e) => {
        CreateTodos(e)
    }}>
        <FormGroup>
            <Label
                for="title"
            >
                Title
            </Label>
            <Input
                id="title"
                name="title"
                type="text"
                value={titles}
                onChange={(e) => setTitle(e.target.value)}
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="description"
            >
                Description
            </Label>
            <Input
                id="description"
                name="description"
                type="textarea"
                value={descriptions}
                onChange={(e) => setDescription(e.target.value)}
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="status">
                Status
            </Label>
            <Input
                id="status"
                name="status"
                type="select"
                value={statuss}
                onChange={(e) => setStatus(parseInt(e.target.value))}
            >
                <option value={0}>
                    On Progress
                </option>
                <option value={1}>
                    Done
                </option>
            </Input>
        </FormGroup>
        {' '}
        <Button color="primary" type="submit">
            {props.status} todo
        </Button>
    </Form>
}

export default FormInput;