import '@react95/icons/icons.css';
import { Modal, Frame } from '@react95/core';

import {
    Mmsys113
} from "@react95/icons";


const About = ({closeModal}) => (
    <Modal 
        width="300" height="200" 
        icon={<Mmsys113 variant="32x32_4" />} 
        title="About" 
        defaultPosition={{
            x: 0,
            y: 20
        }} 
        closeModal={() => closeModal(false)} >
        <Frame bg="white" boxShadow="in" h="100%" w="100%">
            <p>
                Test about modal
            </p>
        </Frame>
    </Modal>
);

export default About

