import '@react95/icons/icons.css';
import { Modal, Frame, List } from '@react95/core';

import {
    Mmsys113
} from "@react95/icons";

function Resume({ toggleShowModal }) {
    const handleCloseModal = () => toggleShowModal(false);

    const downloadResume = (format) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        a.href = "/assets/resume." + format;
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
                    <List.Item><a href="/assets/resume.pdf" download>PDF</a></List.Item>
                    <List.Item><a href="/assets/resume.docx" download>DOCX</a></List.Item>
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
                <div>
                    <h1>Alec Schrader</h1>
                    <h4>alecschrader@gmail.com - (810) 588-1382 - Grand Rapids, MI</h4>
                    <h4>
                        <a href='http://www.linkedin.com/in/alec-schrader-dev'>LinkedIn</a> -
                        <a href='http://www.github.com/alec-schrader'> Github</a>
                    </h4>

                    <hr />
                    <h2>Summary</h2>
                    <hr />
                     
                    <p>
                        Dedicated Software Engineer with 7 years of expertise in designing and implementing innovative web applications. 
                        Proven track record of collaborating with cross-functional teams and clients to deliver tailored solutions that 
                        streamline processes and enhance business outcomes. Recognized for driving projects to successful completion and 
                        exceeding client expectations.
                    </p>

                    <hr />
                    <h2>Work Experience</h2>
                    <hr />

                    <h3>INHERET, Inc.</h3>
                    <h4>Sep. 2020 - Present</h4>
                    <h4>Full-Stack Software Developer (Remote)</h4>
                    <ul>
                        <li>
                            Revamped and optimized a patient facing React.js interface, resulting in a 50% decrease in customer 
                            support requests.
                        </li>
                        <li>
                            Created a sophisticated algorithm in ASP.Net Core utilizing patient data and NCCN guidelines to 
                            enable precise risk assessment and informed decision-making in over 6,000 patients.
                        </li>
                        <li>
                            Led the creation of a RESTful ASP.Net Core API and React.js user interface, establishing a profitable 
                            new revenue stream for genetic laboratory test order processing and results management, resulting in 
                            a 35% reduction in order processing time and a 45% increase in revenue.
                        </li>
                        <li>
                            Enhanced the precision of patient breast cancer risk assessment outcomes by implementing an C++ API layer 
                            that improved the Gail and Tyrer-Cuzick risk models, increasing accuracy by 30% over the previous solution.
                        </li>
                        <li>
                            Migrated company cloud infrastructure to Amazon Web Services using Terraform, increasing maintainability and decreasing 
                            cost by 40%.
                        </li>
                        <li>
                            Overhauled and optimized MSSQL database tables, views, and stored procedures, resulting in at times 60% faster queries.
                        </li>
                    </ul>

                    <h3>Paquette Software</h3>
                    <h4>Mar. 2016 - Sep. 2020</h4>
                    <h4>Full-Stack Software Developer (Remote)</h4>
                    <ul>
                        <li>
                            Collaborated on a comprehensive survey and appointment tracking system utilizing ASP.Net MVC for state 
                            insurance recipients, contributing to the company's #1 ranking for reporting within the state.
                        </li>
                        <li>
                            Engineered an integrated claims data submission portal with ASP.Net MVC, jQuery, and Bootstrap, 
                            resulting in a significant reduction in lead time for medical review on insurance claims.
                        </li>
                        <li>
                            Designed and developed a customized CRM software solution in ASP.Net MVC for a medical imaging 
                            dealership, improving operational efficiency through streamlined warranty tracking and installation 
                            date management.
                        </li>
                        <li>
                            Improved system load times by 30%, allowing improved user experience and efficiency by utilizing 
                            existing APIs and complex cloud deployments via AWS.
                        </li>
                    </ul>

                    <hr />
                    <h2>Education</h2>
                    <hr />

                    <h3>Kalamazoo Valley Community College</h3>
                    <h4>May. 2021 - Aug. 2023</h4>
                    <h4>AA, English </h4>

                    <hr />
                    <h2>Skills</h2>
                    <hr />

                    <p>
                        HTML, CSS, JavaScript, Python, C#, C++, React, ASP.Net Core, jQuery, LESS, Bootstrap, Material UI, Django, 
                        Django Rest Framework, Postgres, Microsoft SQL Server (MSSQL), Firebase, Amazon Web Services (AWS), Git, Docker, 
                        Terraform, Playwright, Agile
                    </p>


                </div>

            </Frame>
        </Modal>
    );
};

export default Resume

