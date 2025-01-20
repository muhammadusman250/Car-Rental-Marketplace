import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"ftx2r4xa",
  dataset:"production",
  token:"skMlcv2B4i4i7eSaJTQ4LWAaUULIJn9mIb1leBZlHswLYTYrVnKamid3fCdxnK1qHzZ0HR0lnwWOQnLbzFhQqzXyzVNlgHjT9OoWvhu7z83GlILvmd3YzDY3tfOrVKje8J6XdvCmFmvC4WPePXAkqhj7EMOYsp0gbYh2zGcr5RFQa6rfLA2t",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
