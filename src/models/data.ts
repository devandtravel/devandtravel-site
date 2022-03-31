import { v4 } from 'uuid'

import { Project } from './Project'

export interface Data {
  projects: Project[]
}

const data: Data = {
  projects: [
    {
      id: v4(),
      title: 'Telegram bot',
      description: `Fullstack app: Telegram bot for receiving, saving and transferring orders to performers.
        Technologies: NodeJS, TypeScript, Firestore, grammY on the back, React, Material UI on the front.`,
      url: 'https://github.com/devandtravel/p2pVideoEditorBot',
      thumbnailUrl: '/src/static/images/cards/video-editor-bot-thumb.jpg'
    },
    {
      id: v4(),
      title: 'Photo Gallery',
      description: `Photo gallery application with API connection. Features: pagination, full photo display in a modal window, theme switching, deleting photos, setting the number of photos per page, grouping by albums, routing.
      Technologies: Typescript, React, Redux Toolkit, RTK Query, Router DOM, Material UI,  REST API.`,
      url: 'https://github.com/devandtravel/frontend-assignment-gallery',
      thumbnailUrl:
        'https://raw.githubusercontent.com/devandtravel/frontend-assignment-gallery/main/public/favicon.png'
    },
    {
      id: v4(),
      title: 'Hacker News UI',
      description: `Hacker News app with API connection, update options,  theme switching.
        Technologies: React, Redux, Material UI, REST API.`,
      url: 'https://github.com/devandtravel/hacker-news-ui',
      thumbnailUrl:
        'https://raw.githubusercontent.com/devandtravel/hacker-news-ui/c6d1f4d45f58bdb668d1f4579167b1ccbaba3f8d/src/images/favicon.svg'
    },
    {
      id: v4(),
      title: 'Data Management Platform',
      description: `An app for displaying, organizing and modifying hierarchical data about advertising audiences in the form of a tree with the ability to drag and drop.
      Technologies: React, Redux, CSS Modules, REST API, OAuth.`,
      thumbnailUrl: 'src/static/images/cards/git-icon.png'
    },
    {
      id: v4(),
      title: 'Demand-side Platform',
      description: `Participated in the development of UI components of the existing technology platform app for advertising buyers: API connection, forms, authorization, displaying tables and graphs with data, adding, changing, deleting advertising campaigns.
      Technologies: React, Router DOM, Material UI, CSS Modules, Recharts, Formik, REST API, OAuth.`,
      thumbnailUrl: 'src/static/images/cards/git-icon.png'
    }
  ]
}
export default data
