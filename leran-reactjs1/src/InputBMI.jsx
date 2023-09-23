import React, { useEffect, useState, useCallback } from 'react';

function InputBMI({ addBMI }) {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);



    function onChange(event) {
        const { name, value } = event.target;
        if (name === 'weight') {
            setWeight(value);
        } else if (name === 'height') {
            setHeight(value);
        }
    }

    function onKeyDown(event) {

        const dataWeight = event.target.value;
        const dataHeight = event.target.value;

        if (event.key === 'Enter' && dataWeight && dataHeight) {
            console.log('Enter');

            addBMI(dataWeight, dataHeight);
            setWeight('');
            setHeight('');
        }
    }

    const buttonCallBack = useCallback(() => {
        console.log('Test call back: ', weight, height);
    }, [weight, height])

    useEffect(() => {
        console.log('weight', weight)
        console.log('height', height)
        setBmi(height / weight)
    }, [weight, height])

    useEffect(() => {
        console.log('BMI', bmi)
    }, [bmi])

    return (
        <div className="Input">
            <div className="Input_header">Cal BMI</div>
            <label>
                Weight (KG)
                <input
                    className="Input_field2"
                    type="number"
                    name="weight"
                    value={weight}
                    onKeyDown={onKeyDown}
                    onChange={(e) => {
                        setWeight(e.target.value);
                    }}
                />
            </label>
            <br />
            <label>
                Height (CM)
                <input
                    className="Input_field2"
                    type="number"
                    name="height"
                    value={height}
                    onKeyDown={onKeyDown}
                    onChange={(e) => {
                        setHeight(e.target.value);
                    }}
                />
            </label>
            <br />
            <button className="btn btn-primary" onClick={buttonCallBack}>Test</button>
        </div>
    );
}

export default InputBMI;
