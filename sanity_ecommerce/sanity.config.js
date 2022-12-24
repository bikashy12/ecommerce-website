import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'
import index from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'ojct849s',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: index,
  },
})
