import { List } from '@react95/core';

import {
  Progman24,
  Joy102,
  Taskman100,
  Drvspace7
} from "@react95/icons";


const Projects = [
  <List.Item
    as="a"
    href={"https://workoutcomp.alecschrader.dev"}
    key={1}
    rel="noopener noreferrer"
    target="_blank"
    icon={<Taskman100 variant="32x32_4"/>}
  >
    Workout Competitions
  </List.Item>,
  <List.Item
    as="a"
    href={""}
    key={2}
    rel="noopener noreferrer"
    target="_blank"
    icon={<Drvspace7 variant="32x32_4"/>}
  >
    Pizza Pals
  </List.Item>,
  <List.Item
    as="a"
    href={""}
    key={2}
    rel="noopener noreferrer"
    target="_blank"
    icon={<Progman24 variant="32x32_4"/>}
  >
     Art Museum
  </List.Item>,
  <List.Item
    as="a"
    href={"https://boom.alecschrader.dev"}
    key={2}
    rel="noopener noreferrer"
    target="_blank"
    icon={<Joy102 variant="32x32_4"/>}
  >
    Boom
  </List.Item>,
];

export default Projects;