import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  thumbnail: string;
  details: string;
  responsibilities: string[];
  developmentPlatform: string;
  platform: 'Mobile' | 'PC' | 'Both';
  developmentDuration: string; 
  customContent?: string; 
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    // Your projects here
    {
      id: 'project1',
      title: 'Treasures of Innocence',
      description: 'First person puzzle.',
      mediaType: 'image',
      mediaSrc: 'assets/projects/01_TOI/Cover Art/Cover.png',
      thumbnail: '',
      details: `In Treasures of Innocence, the player takes on the role of a kid with a passion for archaeology. 
      The game's goal is to dig up, from deep under the sandbox, hidden everyday objects reimagined as ancient artifacts. 
      As more objects are uncovered the player can learn more about the life of the kid hidden behind the innocence of childhood.`,
      responsibilities: ['Producer', 'Gameplay Design'],
      developmentPlatform: 'Unity',
      platform: 'PC',
      developmentDuration: 'January 2020 - March 2020', 
      customContent: `
        <h2>Additional Information</h2>
        <p>In questo progetto, mi sono occupato di...</p>
        <ul>
          <li>Design dei livelli</li>
          <li>Scrittura della narrativa</li>
          <li>Implementazione del sistema di combattimento</li>
        </ul>
      `
    },
    {
      id: 'project2',
      title: 'Darts Town',
      description: 'Mobile sport.',
      mediaType: 'image',
      mediaSrc: 'assets/projects/02_DT/Cover_Art/Library_Cover630x500.png',
      thumbnail: 'assets/projects/02_DT/Cover_Art/Library_Cover630x500.png',
      details: `Step into the shoes of an ordinary employee in Darts Town who dreams of breaking free from their monotonous job. 
      Guided by your grandma, a former professional darts player, embark on an exciting journey to become the town's best darts player. 
      Compete in various stages, each with unique environments, targets, rewards, and rules. 
      Customize your darts with unique aesthetics unlocked through a loot box system, adding a personal touch to your gameplay experience.`,
      responsibilities: ['Lead Design', 'Art Direction'],
      developmentPlatform: 'Unity',
      platform: 'Mobile', developmentDuration: 'January 2020 - March 2020', // Durata di sviluppo
      customContent: `
        <h2>Additional Information</h2>
        <p>In questo progetto, mi sono occupato di...</p>
        <ul>
          <li>Design dei livelli</li>
          <li>Scrittura della narrativa</li>
          <li>Implementazione del sistema di combattimento</li>
        </ul>
      `
    },
    {
      id: 'project3',
      title: 'The Last Tide',
      description: 'Third person adventure.',
      mediaType: 'image',
      mediaSrc: 'assets/projects/04_TLT/Cover_Art/The Last Tide.png',
      thumbnail: '',
      details: `Embark on a third-person puzzle adventure set on a mysterious archipelago trapped in a time loop. 
                Discover an ancient cursed civilization, interact with intriguing characters, and solve challenging puzzles. 
U               se your wits to stop the loop and save everyone from the apocalypse.`,
      responsibilities: ['Worldbuilding', 'Art Direction'],
      developmentPlatform: 'Unreal Engine',
      platform: 'PC', developmentDuration: 'January 2020 - March 2020', // Durata di sviluppo
      customContent: `
        <h2>Additional Information</h2>
        <p>In questo progetto, mi sono occupato di...</p>
        <ul>
          <li>Design dei livelli</li>
          <li>Scrittura della narrativa</li>
          <li>Implementazione del sistema di combattimento</li>
        </ul>
      `
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
