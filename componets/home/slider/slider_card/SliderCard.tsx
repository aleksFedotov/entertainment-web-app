import React from 'react';

import { IMovie } from '../../../../@types/types';

import { Card } from './SliderCardStyles';

const SliderCard: React.FC<{ data: IMovie }> = ({ data }) => {
  return <Card image={data.thumbnail.trending.large}>SliderCard</Card>;
};

export default SliderCard;
