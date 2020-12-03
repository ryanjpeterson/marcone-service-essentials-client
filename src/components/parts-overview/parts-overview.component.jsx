import React, { useEffect, useState } from 'react';

import Part from '../part/part.component';

import styled from 'styled-components';

import { partData } from '../../partData';

export const PartsOverviewStyles = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
  }
`;

const PartsOverview = () => {
  const [parts, setParts] = useState([
    {
      partNumber: '3',
      partDescription: 'b54v444',
    },
    {
      partNumber: '2',
      partDescription: 'b54v444',
    },
    {
      partNumber: '1',
      partDescription: 'b54v444',
    },
  ]);

  const fetchData = () => {
    setParts(partData);
  };

  useEffect(() => {
    console.log('render');
    setTimeout(fetchData, 2000);
  }, [parts]);

  return (
    <PartsOverviewStyles>
      {parts.map((part) => (
        <Part
          key={part.partNumber}
          partNumber={part.partNumber}
          partDescription={part.partDescription}
        />
      ))}
    </PartsOverviewStyles>
  );
};

export default PartsOverview;
