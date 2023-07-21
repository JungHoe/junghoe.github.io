import styled from 'styled-components';

const styles = styled.div`
  & > section {
    background: #ffffff;
    position: relative;
    border-radius: var(--spacing-2);
    padding: var(--spacing-5);
  }
  .bio-avatar {
    position: absolute;
    left: 38%;
    top: -70px;
  }
  .emptyPad {
    height: var(--spacing-10);
  }
  .name {
    text-align: center;
    margin: var(--spacing-0);
    .hl {
      color: #76cdcd;
    }
  }
  .description {
    font-family: 'Noto Sans KR';
    font-size: var(--fontSize-1);
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-4) var(--spacing-0) var(--spacing-4) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-primary);
    background: #f5f5f5;
    border-radius: var(--spacing-1);
    word-break: keep-all;
    & > p {
      margin-bottom: var(--spacing-2);
    }
  }
`;

export default styles;
