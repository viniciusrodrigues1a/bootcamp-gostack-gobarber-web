import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 1.875rem;
`;

export const Content = styled.div`
  height: 4rem;
  max-width: 56.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1.25rem;
      padding-right: 1.25rem;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
      text-transform: uppercase;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 1.25rem;
  padding-left: 1.25rem;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 0.625rem;

    span {
      display: block;
      font-weight: bold;
      color: #333;
    }

    a {
      display: block;
      margin-top: 0.125rem;
      font-size: 0.75em;
      color: #999;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;
