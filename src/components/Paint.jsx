import { useRef, useEffect } from 'react';

import '@react95/icons/icons.css';
import { Modal, Frame, Range } from '@react95/core';

import {
    Brush
} from "@react95/icons";

import PaintColor from './PaintColor';

function Paint({ toggleShowModal }) {
    const handleCloseModal = () => toggleShowModal(false);

    const canvasRef = useRef(null);
    let context, boundings;

    var isDrawing = false;
    let mouseX = 0, mouseY=0;

    useEffect(() => {
        const canvas = canvasRef.current;
        context = canvas.getContext('2d');
        boundings = canvas.getBoundingClientRect();

        canvas.addEventListener('mousedown', canvasMouseDown);
        canvas.addEventListener('mousemove', canvasMouseMove);
        canvas.addEventListener('mouseup', canvasMouseUp);

        canvas.addEventListener('touchdown', canvasMouseDown);
        canvas.addEventListener('touchmove', canvasMouseMove);
        canvas.addEventListener('touchup', canvasMouseUp);
      }, []);

    function canvasMouseDown (event) {
        setMouseCoordinates(event);
        isDrawing = true;

        // Start Drawing
        context.beginPath();
        context.moveTo(mouseX, mouseY);
    };

    function canvasMouseMove(event) {
        setMouseCoordinates(event);

        if (isDrawing) {
            context.lineTo(mouseX, mouseY);
            context.stroke();
        }
    };

    function canvasMouseUp(event) {
        setMouseCoordinates(event);
        isDrawing = false;
    };

    // Handle Mouse Coordinates
    function setMouseCoordinates(event) {
        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;
    }

    function setLineWidth(event) {
        context.lineWidth = event.target.value;
    }

    function setColor(color) {
        context.strokeStyle = color;
    }

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black']
    const paintColors = colors.map((color) => (<PaintColor color={color} changeColor={setColor} />));

    return (
        <Modal
            icon={<Brush variant="32x32_4" />}
            title="Paint"
            defaultPosition={{
                x: 100,
                y: 25
            }}
            closeModal={handleCloseModal}
        >
            Brush Size
            <Range step={1} min={1} max={25} onChange={setLineWidth}/>
            Color
            <div className='paintColorContainer'>
                {paintColors}
            </div>
            <Frame bg="white" boxShadow="in" h="100%" w="100%">
                <canvas ref={canvasRef} height={500} width={500}  />
            </Frame>
        </Modal>
    );
};

export default Paint

