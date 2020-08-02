import styled from 'styled-components';

export const Nav = styled.nav`
  ul {
    display: flex;

    li {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }

      a {
        text-decoration: none;
        color: var(--very-dark-blue);
        transition: color 0.3s;

        &:hover {
            color: var(--desaturated-blue);
        }
      }
    }
  }
  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`;
