import React, { useState, useEffect, useCallback } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

function NameCard() {

    const [nameArr, setNameArr] = useState([]);
    const [nameInput, setNameInput] = useState('');

    const addRowCallBack = useCallback(() => {
        console.log('addRowCallBack');
        setNameArr([nameInput, ...nameArr]);
        setNameInput('');
    }, [nameInput]);

    useEffect(() => {
        console.log('nameArr', nameArr);
    }, [nameArr])


    return (
        <Container>
            <h1>Row of name</h1>
            <label>Add name</label>
            <input type={'text'} value={nameInput} onChange={(e) => {
                setNameInput(e.target.value);
            }} />

            <Button className="ms-3" onClick={() => {
                addRowCallBack();
            }}>Add</Button>


            {nameArr.map((nameItem, id) => (
                <Card className="mt-2" key={id}>
                    <Card.Body>
                        {nameItem}
                    </Card.Body>
                </Card>
            ))}

        </Container>
    )
}

export default NameCard