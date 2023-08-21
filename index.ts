import { type Block, toHex, concat, type Hex } from 'viem';
import { client } from './viem/client';

async function queryStorageSlot() {
  // Logic
  const logic = await client.getStorageAt({
    address: '0xF297a0c06F4784a3CEf81C76D3dc1440046db7fE', // press proxy
    slot: toHex(156),
  });
  console.log('Logic:', logic);
  // Renderer
  const renderer = await client.getStorageAt({
    address: '0xF297a0c06F4784a3CEf81C76D3dc1440046db7fE', // press proxy
    slot: toHex(157),
  });
  console.log('Renderer:', renderer);

  console.log('Hex concat result:', concat([logic as Hex, renderer as Hex]));
}

queryStorageSlot();
