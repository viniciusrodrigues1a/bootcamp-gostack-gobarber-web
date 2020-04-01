import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 16.25rem;
  left: calc(50% - 8.125rem);
  top: calc(100% + 1.875rem);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 0.9375rem 0.3125rem;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1.25rem);
    top: -1.25rem;
    width: 0;
    height: 0;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-bottom: 1.25rem solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 16.25rem;
  padding: 0.3125rem 0.9375rem;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 0.9375rem;
    padding-top: 0.9375rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 0.8125rem;
    line-height: 1.125rem;
    margin-bottom: 0.3125rem;
  }

  time {
    display: block;
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 0.3125rem;
  }

  button {
    font-size: 0.75rem;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};

    ${props =>
      !props.unread &&
      css`
        display: none;
      `}
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 0.625rem;
      }
    `}
`;
