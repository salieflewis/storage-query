import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import env from '../services/env'

const transport = http(
  `https://opt-goerli.g.alchemy.com/v2/${env.ALCHEMY_KEY}`,
)

export const client = createPublicClient({
  chain: mainnet,
  transport,
})
