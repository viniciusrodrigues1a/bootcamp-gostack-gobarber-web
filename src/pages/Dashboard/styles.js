import styled from 'styled-components';

export const Container = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 3.125rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      margin: 0 0.9375rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.9375rem;
    margin-top: 1.875rem;
  }
`;

export const Time = styled.li`
  padding: 1.25rem;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    font-size: 1.25rem;
    font-weight: normal;
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
  }

  span {
    display: block;
    margin-top: 0.1875rem;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
