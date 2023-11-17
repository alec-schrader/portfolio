import '@react95/icons/icons.css';
import { Modal, Frame } from '@react95/core';

import {
    Mmsys113
} from "@react95/icons";




function About({ toggleShowModal }) {
    const handleCloseModal = () => toggleShowModal(false);

    return (
        <Modal
            width="300"
            icon={<Mmsys113 variant="32x32_4" />}
            title="About"
            defaultPosition={{
                x: 100,
                y: 25
            }}
            closeModal={handleCloseModal}
        >
            <Frame bg="white" boxShadow="in" h="100%" w="100%" className='textFrame'>
                <h2>About</h2>
                <img className='aboutImage' src='/assets/pixelated.png'></img>
                <p>
                    Hello and welcome to my website!
                </p>
                <p>
                    My name is Alec Schrader, I am a software developer with 7 years of experience from Grand Rapids, MI. I love to work on interesting projects and solve challenging problems.
                </p>
                <p>
                    I designed this website to recreate the nostolgia of my first experiences on a computer - the computer lab in elementary school!
                </p>
                <p>
                    This is my portfolio site! Feel free to click around and explore my projects!
                </p>
                <p>
                    For the best experience view this site on a desktop browser. 
                    Developed using <a href='https://github.com/React95/React95'>React95.</a>
                </p>
            </Frame>
        </Modal>
    );
};

export default About

