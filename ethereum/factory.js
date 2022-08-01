import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x7b736Eeb90b616c112a68e6def2f293D3865BcD0'
);

export default instance;
