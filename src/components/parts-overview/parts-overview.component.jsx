import React, { useEffect, useState } from 'react';

import Part from '../part/part.component';

import styled from 'styled-components';

export const PartsOverviewStyles = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
  }
`;

const PartsOverview = ({ parts }) => {
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
