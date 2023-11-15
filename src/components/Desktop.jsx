import React, { useState } from "react";

import { TaskBar, List, Modal, Frame, Button } from '@react95/core';
import {
    User,
    Globe,
    Mail,
    Comdlg32528,
    FolderSettings,
    Explorer103,
    Brush
} from "@react95/icons";
import '@react95/icons/icons.css';

import Links from './Links'
import Projects from './Projects'
import Paint from './Paint'

import DesktopIcon from './DesktopIcon';

import About from './About'
import Resume from './Resume'

function Desktop() {
    const [showAbout, toggleShowAbout] = useState(true);
    const [showResume, toggleShowResume] = useState(false);
    const [showPaint, toggleShowPaint] = useState(false);

    return (
    <>
        <DesktopIcon
            icon={<Explorer103 variant="32x32_4" />}
            onClick={toggleShowAbout}
            text={"About Alec"}
        ></DesktopIcon>

        <DesktopIcon
            icon={<Comdlg32528 variant="32x32_4" />}
            onClick={toggleShowResume}
            text={"Resume"}
        ></DesktopIcon>

        {showAbout && <About toggleShowModal={toggleShowAbout}></About>}
        {showResume && <Resume toggleShowModal={toggleShowResume}></Resume>}
        {showPaint && <Paint toggleShowModal={toggleShowPaint}></Paint>}

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
                        onClick={toggleShowResume}
                    >
                        Resume
                    </List.Item>
                    <List.Divider />
                    <List.Item
                        as="a"
                        icon={<Brush variant="32x32_4"/>}
                        onClick={toggleShowPaint}
                    >
                        Paint
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