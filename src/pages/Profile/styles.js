import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 3.125rem 0;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 0.625rem 0 1.25rem;
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
  }

  > button {
    width: 100%;
    margin-top: 0.625rem;
    height: 2.75rem;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 1em;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
