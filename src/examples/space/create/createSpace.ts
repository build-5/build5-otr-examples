import { MIN_IOTA_AMOUNT, TangleRequestType } from '@build-5/interfaces';
import config from '../../../config.json';
import { getNewWallet } from '../../../utils/wallet/Wallet';
import { getResponseBlockMetadata } from '../../../utils/wallet/block.utils';

export const createSpace = async (mnemonic: string, params: Record<string, unknown>) => {
  console.log('Creating space');

  const wallet = await getNewWallet();
  const sender = await wallet.getIotaAddressDetails(mnemonic);
  const metadata = JSON.stringify({
    request: {
      requestType: TangleRequestType.SPACE_CREATE,
      ...params,
    },
  });

  const blockId = await wallet.send(
    sender,
    config.tangleRequestBech32,
    0.5 * MIN_IOTA_AMOUNT,
    [],
    metadata,
  );

  const responseMetadata = await getResponseBlockMetadata(blockId, wallet.client);
  console.log(responseMetadata.response, '\n\n');

  return responseMetadata.response;
};
