import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x57c75dea3914168f23815d104b09eb079c013f51'
);

export default instance;
