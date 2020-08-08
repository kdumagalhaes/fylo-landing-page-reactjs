import styled from 'styled-components';

export const FooterTag = styled.footer`
  width: 100%;
  height: auto;
  background-color: var(--very-dark-blue);
  margin: 0 auto;
  padding: 40px 30px 40px 30px;
  color: var(--light-grayish-blue);
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  a {
    color: var(--light-grayish-blue);
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

export const LinkList1 = styled.ul`
  li {
    margin-bottom: 15px;

    a {
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const LinkList2 = styled.ul`
  li {
    margin-bottom: 15px;

    a {
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const SocialLinks = styled.ul`
  li {
    display: inline-block;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    a {
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
