import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {siteStructure} from './deskStructure'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'

export default defineConfig({
  name: 'default',
  title: 'planktonproject-backend',

  projectId: 'hdziyq8o',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: siteStructure
    }),
    visionTool(),
    dashboardTool({ widgets: [
      netlifyWidget({
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Plankton Project',
            apiId: '573a65ff-1c7c-44b5-b8ce-aed8238daba0',
            buildHookId: '6556178074fd8a0c5ed632ee',
            name: 'planktonproject.org.uk',
            url: 'https://planktonproject.org.uk/'
          },
        ],
      }),
    ]})
  ],

  schema: {
    types: schemaTypes,
  },
})
