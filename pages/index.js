import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

const App = ({ campaigns }) => {
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
        style: { marginLeft: '0px' },
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route='/campaigns/new'>
          <a>
            <Button
              floated='right'
              content='Create Campaign'
              icon='add circle'
              primary
            />
          </a>
        </Link>
        {renderCampaigns()}
      </div>
    </Layout>
  );
};

App.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};

export default App;
