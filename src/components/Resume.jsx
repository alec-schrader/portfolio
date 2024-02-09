import { useEffect, useState } from 'react';
import '@react95/icons/icons.css';
import { Modal, Frame, List } from '@react95/core';

import {
    Mmsys113
} from "@react95/icons";


function Resume({ toggleShowModal }) {
    const handleCloseModal = () => toggleShowModal(false);
    const [resumeHTML, setResumeHTML] = useState("");

    useEffect(() => {
        let ignore = false;

        async function getResumeHTML() {
          const response = await fetch('/assets/alec_schrader_resume.html')
          if (!ignore) {
            setResumeHTML(await response.text());
          }
        }
      
        getResumeHTML();
      
        return () => {
          ignore = true;
        };
    });

    const downloadResume = (format) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        a.href = "/assets/alec_schrader_resume." + format;
        a.download = "";
        a.click();

        a.remove()
    }

    return (
        <Modal
            width="500"
            height="auto"
            icon={<Mmsys113 variant="32x32_4" />}
            title="Resume"
            defaultPosition={{
                x: 100,
                y: 25
            }}
            closeModal={handleCloseModal}
            menu={[{
                name: 'Download Resume',
                list: <List>
                    <List.Item><a href="/assets/alec_schrader_resume.pdf" download>PDF</a></List.Item>
                    <List.Item><a href="/assets/alec_schrader_resume.docx" download>DOCX</a></List.Item>
                </List>
            }]}
            buttons={[{
                value: 'Download as PDF',
                onClick: () => downloadResume("pdf")
              }, {
                value: 'Download as DOCX',
                onClick: () => downloadResume("docx")
              }]}
        >
            <Frame bg="white" boxShadow="in" h="100%" w="100%" className='textFrame'>
                <div dangerouslySetInnerHTML={{__html: resumeHTML}} />
            </Frame>
        </Modal>
    );
};

export default Resume

