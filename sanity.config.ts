import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {siteStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'planktonproject-backend',

  projectId: 'hdziyq8o',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: siteStructure
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
