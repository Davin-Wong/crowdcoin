import React from 'react';
import { Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';

const RequestIndex = ({ address }) => {
  return (
    <Layout>
      <h3>Requests</h3>
      <Link route={`campaigns/${address}/requests/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>
    </Layout>
  );
};

RequestIndex.getInitialProps = async () => {
  const { address } = props.query;

  return { address };
};

export default RequestIndex;
