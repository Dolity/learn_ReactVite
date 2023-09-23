import React, { useState, useEffect, useCallback } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

function BasicHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // ทำงานหลังจาก render เสร็จสิ้น
        console.log('Component rendered');
    }, [count]); // useEffect จะทำงานเมื่อ count เปลี่ยนแปลง

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]); // ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่

    return (
        <div>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default BasicHook;
