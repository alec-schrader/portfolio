import '@react95/icons/icons.css';
import { Modal, Frame } from '@react95/core';

import {
    Mmsys113
} from "@react95/icons";




function ProjectSplash({ project, toggleShowModal }) {
    const handleCloseModal = () => toggleShowModal(false);

    return (
        <Modal
            width="500"
            icon={<Mmsys113 variant="32x32_4" />}
            title={project.title}
            defaultPosition={{
                x: 100,
                y: 25
            }}
            closeModal={handleCloseModal}
            buttons={[{
                value: 'Open',
                onClick: () => window.open(project.link, '_blank').focus()
              }]}
        >
            <Frame bg="white" boxShadow="in" h="100%" w="100%" className='textFrame'>
                <h2>{project.title}</h2>
                <div class="flex-container">
                    <div>
                        <img className='projectSplashImage' src={project.image}></img>
                    </div>
                    <div className='projectSplashDescr'>
                        {project.description}
                    </div>
                </div>

            </Frame>
        </Modal>
    );
};

export default ProjectSplash

