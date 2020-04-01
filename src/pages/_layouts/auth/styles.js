import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 19.6875rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.875rem;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 2.75rem;
      padding: 0 0.9375rem;
      color: #fff;
      margin: 0 0 0.625rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.85);
      }
    }

    span {
      color: ${lighten(0.03, '#f64c75')};
      align-self: center;
      margin-bottom: 0.625rem;
      font-weight: bold;
    }

    button {
      margin-top: 0.3125rem;
      height: 2.75rem;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 1em;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 0.9375rem;
      font-size: 1em;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
