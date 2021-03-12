import styled from 'styled-components'
import { rem } from 'polished'

export default styled.div.attrs({
  className: 'input--group',
})`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
  input,
  select {
    height: 56px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #aeaeae;
    border-radius: 4px;
    letter-spacing: 0.14px;
    color: #aeaeae;
    padding: 0 1em;
    border-radius: 4px;
    &:active,
    &:focus {
      outline: none;
      border: 1.5px solid #855aaf;
    }
    &:invalid {
      color: #222222;
      border: 1px solid #ff5e5e;
    }
  }
  input::placeholder {
    color: #aeaeae;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 200;
  }
  label {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14.5px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #222222;
    opacity: 0.5;
    margin-bottom: 0.5em;
  }
  p.helper--text {
    letter-spacing: 0.13px;
    color: #aeaeae;
    margin-top: 0.6em;
    font-weight: 100;
  }
`
