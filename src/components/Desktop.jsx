import React, { useState } from "react";

import { TaskBar, List, Modal, Frame, Button } from '@react95/core';
import {
    User,
    Globe,
    Mail,
    Comdlg32528,
    FolderSettings,
    Explorer103
} from "@react95/icons";
import '@react95/icons/icons.css';

import Links from './Links'
import Projects from './Projects'

import DesktopIcon from './DesktopIcon';

import About from './About'

function onClick(msg) {
    alert(msg)
}


function Desktop() {
    const [showAbout, toggleShowAbout] = useState(true);

    return (
    <>
        <DesktopIcon
            icon={<Explorer103 variant="32x32_4" />}
            onClick={toggleShowAbout}
            text={"About Alec"}
        ></DesktopIcon>

        <DesktopIcon
            icon={<Explorer103 variant="32x32_4" />}
            onClick={onClick}
            text={"test icon 2"}
        ></DesktopIcon>

        {showAbout && <About toggleShowModal={toggleShowAbout}></About>}

        <TaskBar
            list={
                <List>
                    <List.Item
                        as="a"
                        icon={<User variant="32x32_4" />}
                        onClick={toggleShowAbout}
                    >
                        About
                    </List.Item>
                    <List.Item
                        as="a"
                        icon={<Comdlg32528 variant="32x32_4" />}
                    >
                        Resume
                    </List.Item>
                    <List.Divider />
                    <List.Item icon={<FolderSettings variant="32x32_4" />}>
                        Projects
                        <List>
                            {Projects.map(({ name, url }) => (
                                <List.Item
                                    as="a"
                                    href={url}
                                    key={name}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {name}
                                </List.Item>
                            ))}
                        </List>
                    </List.Item>
                    <List.Item icon={<Globe variant="32x32_4" />}>
                        Links
                        <List>
                            {Links.map(({ name, url }) => (
                                <List.Item
                                    as="a"
                                    href={url}
                                    key={name}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {name}
                                </List.Item>
                            ))}
                        </List>
                    </List.Item>
                    <List.Item
                        as="a"
                        href="mailto:alecschrader@gmail.com"
                        icon={<Mail variant="32x32_4" />}
                        target="_blank"
                    >
                        Email me
                    </List.Item>
                </List>
            }
        />
    </>
    )
};

export default Desktop