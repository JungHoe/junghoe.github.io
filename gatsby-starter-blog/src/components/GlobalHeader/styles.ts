import styled from 'styled-components';

const styles = styled.header`
  text-align: center;
  background: #3292c5;
  padding: var(--spacing-3) 0;
  margin-bottom: var(--spacing-10);
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */

  .main-heading {
    font-size: var(--fontSize-4);
    margin: 0 0 0 var(--spacing-10);
    color: #ffffff;
  }
  .main-heading a {
    display: flex;
  }
  .dev-icon ~ span {
    margin-left: var(--spacing-2);
  }
  ul {
    /*selected */
    [aria-current]:not([aria-current='false']) {
      color: #ffffcc;
    }
    margin: 0 0 0 var(--spacing-10);
    cursor: pointer;
    li {
      display: inline;
      ~ li {
        margin-left: var(--spacing-4);
      }
      a {
        color: #efefef;
        text-decoration: none;
      }
    }
  }
`;

export default styles;
