import { List } from '@react95/core';

import {
  Progman24,
  Joy102,
  Taskman100,
  Drvspace7
} from "@react95/icons";

const ProjectsArr = [
  {
    title: "Workout With Friends",
    link: "https://workoutcomp.alecschrader.dev",
    description: (
      <>
        <p>I created this application for me and my friends to score our workout competitions.</p>
        <p>We were using a google sheet, but the maintenance was getting out of hand especially when trying to add new competitors.</p>
        <p>How this application works:</p>
        <ol>
          <li>A new user signs up.</li>
          <li>The user creates a new competition or joins an existing one.</li>
          <li>The user adds their friends to the competition.</li>
          <li>Whenever the user works out, they log their workout in the app.</li>
          <li>The scores for the competition are scored using the workout data and a winner is determined.</li>
        </ol>
        <p>Backend created using Python, Django, and Django Rest Framework. Hosted on Google Cloud.</p>
        <p>Frontend created using React.js and Material UI. Hosted on Vercel.</p>
        <p>Authentication provided by <a href="https://auth0.com/">Auth0</a>.</p>
      </>
    ),
    icon: (<Taskman100 variant="32x32_4"/>),
    image: "/assets/workout-thumbnail.png"
  },
  {
    title: "Doom Clone",
    link: "https://games.alecschrader.dev/doom-clone/index.html",
    description: (
      <>
        <p>My attempt to create a retro doom-like game engine.</p>
        <p>Control the character using the arrow keys and walk around in a map that is randomized on each refresh.</p>
        <p>There are no enemies or goals to achieve just have fun walking around!</p>
        <p>Created using HTML canvas and a technique called <a href="https://lodev.org/cgtutor/raycasting.html" target="_blank">raycasting.</a></p>
      </>
    ),
    icon: (<Joy102 variant="32x32_4"/>),
    image: "/assets/doom-thumbnail.png"
  },
  {
    title: "Pong Clone",
    link: "https://games.alecschrader.dev/pong/index.html",
    description: (
      <>
        <p>A two player pong clone.</p>
        <p>However, I've replaced the ball with a ninja star and the paddles with two karate masters!</p>
        <p>Grab a friend and play a round!</p>
        <p>Created using HTML canvas.</p>
      </>
    ),
    icon: (<Joy102 variant="32x32_4"/>),
    image: "/assets/pong-thumbnail.png"
  },
]

function ProjectList(projectClick){
  return ProjectsArr.map((project) => (<List.Item
    as="a"
    key={project.title}
    icon={project.icon}
    onClick={() => projectClick(project)}
  >
    {project.title}
  </List.Item>))
}

function Projects({ toggleShowModal, setActiveProject }) {
  const projectClick = (project) => {
    toggleShowModal(true);
    setActiveProject(project)
  };

  return (
    <List>
      {ProjectList(projectClick)}
    </List>
  )
}

export default Projects;