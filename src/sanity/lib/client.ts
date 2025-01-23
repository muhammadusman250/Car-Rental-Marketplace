import { createClient } from 'next-sanity'

import { apiVersion } from '../env'

export const client = createClient({
  projectId :"ftx2r4xa",
  dataset:"production",
  token:"sk836YvaBtFzNmmrsfUkA8aSrRroGN6NdRH7kP1I6em1XUY9zUWBfc8STwnwz7u3sKA8TEZqD8xkUsuJrsFXxny0n0z4Hbc0TIjE8KmlTxfVYiqzfmFPqM8KC2vc4Sdx90sTy6mtbOxi1pWcOqtfhXPmpXAehXCatjUmGK8eoo7Rj43wwyz9",
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
