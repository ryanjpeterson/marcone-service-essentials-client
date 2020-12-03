import React from 'react';
import styled from 'styled-components';
import TestImage from '../../img/part-img.jpg';

const PartComponent = styled.div`
   {
    background: #f0f0f0;
    min-width: 250px;
    min-height: 200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
  }
`;

const PartImage = styled.img`
  background-image: url(${TestImage});
  width: 100%;
`;

const PartInfo = styled.div`
  background: #202020;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  padding: 1rem;
  width: 100%;

  box-sizing: border-box;
`;

const PartNumber = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const PartDescription = styled.p`
  margin-bottom: 1rem;
`;

const Part = ({ partNumber, partDescription }) => (
  <PartComponent>
    <PartImage src={TestImage} alt={partNumber} />

    <PartInfo>
      <PartNumber>{partNumber}</PartNumber>
      <PartDescription>{partDescription}</PartDescription>
    </PartInfo>
  </PartComponent>
);

export default Part;
