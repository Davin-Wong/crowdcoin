import React from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

function App({ campaigns }) {
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a href='#'>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <div>
      <link
        async
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css'
      />
      {renderCampaigns()}
    </div>
  );
}

App.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};

export default App;
