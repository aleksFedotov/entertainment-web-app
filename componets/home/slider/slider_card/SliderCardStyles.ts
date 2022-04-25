import styled from 'styled-components';

interface ICardProps {
  image: string;
}

export const Card = styled.div<ICardProps>`
  width: 47rem;
  height: 23rem;
  border-radius: 0.8rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  padding: 2.4rem;
`;
