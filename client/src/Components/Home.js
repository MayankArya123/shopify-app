import React from 'react';
import NavigationExample from './Navigation';
import SimpleIndexTableExample from './Customers';

const Home = () => {
    return (
        <div>
            <div className="main">
        <div className="sidebar">
          <NavigationExample />
        </div>
        <div className="data-table">
          <SimpleIndexTableExample />
        </div>
      </div>

        </div>
    );
}

export default Home;
