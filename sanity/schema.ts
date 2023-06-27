import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import schedule from './schemas/schedule'
import formation from './schemas/formation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [schedule, formation, post, author, category, blockContent],
}
