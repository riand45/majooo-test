import {Card, CardBody, CardTitle, CardText, CardSubtitle,  Button} from "reactstrap";

const Content = (props: any) => {

    const { id, title, description, createdAt, status } = props.data;

    return (
        <Card className="mt-2">
            <CardBody>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {formatDate(createdAt)}
                </CardSubtitle>
                <CardText>
                    {description}
                </CardText>
                <Button 
                    color="warning" 
                    size="sm"
                    onClick={() => props.getUpdate(props.data)}>
                    Update
                </Button>
                {' '}
                {
                    status === 0 && (
                        <Button 
                            color="danger" 
                            size="sm"
                            onClick={() => props.delete(id)}>
                            Delete
                        </Button>
                    )
                }
            </CardBody>
        </Card>
    )
}

const formatDate = (date: any) =>  {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;

    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}

export default Content;
