import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

const RequestRow = ({ id, request, address, approversCount }) => {
  const { Row, Cell } = Table;
  const readyToFinalize = request.approvalCount > approversCount / 2;

  const onApprove = async () => {
    const campaign = Campaign(address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(id).send({
      from: accounts[0],
    });
  };

  const onFinalize = async () => {
    const campaign = Campaign(address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods.finalizeRequest(id).send({
      from: accounts[0],
    });
  };

  return (
    <Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalCount}/{approversCount}
      </Cell>
      <Cell>
        <Button
          color='green'
          basic
          onClick={onApprove}
          disabled={request.complete}
        >
          Approve
        </Button>
      </Cell>
      <Cell>
        <Button
          color='teal'
          basic
          onClick={onFinalize}
          disabled={request.complete}
        >
          Finalize
        </Button>
      </Cell>
    </Row>
  );
};

export default RequestRow;
