import React from 'react';
import styled from 'styled-components';
import PlaceholderImage from '../../img/part-img.jpg';

const PartComponent = styled.div`
   {
    min-height: 200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 999px) {
      grid-column: span 6;
    }

    @media screen and (min-width: 1000px) {
      grid-column: span 3;
    }

    @media screen and (min-width: 1400px) {
      grid-column: span 2;
    }
  }
`;

const PartImageContainer = styled.div`
  height: 200px;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 5px;
`;

const PartImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
`;

const PartNumber = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Part = ({ part: { partNumber, description, imageURL } }) => (
  <PartComponent>
    <PartImageContainer>
      <PartImage
        src={imageURL === '' ? PlaceholderImage : imageURL}
        alt={partNumber}
      />
    </PartImageContainer>
    <PartInfo>
      <PartNumber>{partNumber}</PartNumber>
      <Description>{description}</Description>
    </PartInfo>
  </PartComponent>
);

export default Part;
