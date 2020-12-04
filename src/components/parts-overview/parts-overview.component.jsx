import React, { useEffect, useState } from 'react';

import Part from '../part/part.component';

import styled from 'styled-components';

import { partData } from '../../partData';

export const PartsOverviewStyles = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
  }
`;

const PartsOverview = () => {
  const [parts, setParts] = useState([
    {
      partNumber: '3',
      description: 'b54v444',
    },
    {
      partNumber: '2',
      description: 'b54v444',
    },
    {
      partNumber: '1',
      description: 'b54v444',
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
          description={part.description}
        />
      ))}
    </PartsOverviewStyles>
  );
};

export default PartsOverview;
