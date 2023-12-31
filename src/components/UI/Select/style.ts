import styled from 'styled-components';
import { ISelectStyle } from '@src/components/UI/Select/types';

export const SelectWrapper = styled.div<ISelectStyle>`
	display: flex;
  position: relative;
	flex-direction: column;
  margin: ${({ margin = '5px 0' }) => margin};
  width: ${({ width = 'auto' }) => width};
  font-size: ${({ fz = 16 }) => `${fz}px`};
  user-select: none;
`;

export const SelectLabel = styled.label<ISelectStyle>`
	margin-bottom: 10px;
	font-size: inherit;
	color: ${({ theme, isValid }) => (isValid ? 'inherit' : theme.accentColorActive)};
`;

export const SelectElemWrapper = styled.div<ISelectStyle>`
  position: relative;
  height: ${({ height = '35px' }) => height};
  border: 1px solid ${({ isValid, theme, isOpen }) => (isValid ? isOpen ? theme.blackColor : '#E2E8F0' : theme.accentColorActive)};
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ padding = '0 30px 0 10px' }) => padding};
  
  &:hover {
    border-color: ${({ theme, isValid }) => (isValid ? theme.lightBgColor : theme.accentColorActive)};
  }
`;

export const SelectPlaceholder = styled.p<ISelectStyle>`
  margin: 0;
  font-size: ${({ fz = 16 }) => `${fz}px`};
  color: ${({ theme }) => theme.lightBgColor};
`;

export const SelectInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  outline: unset;
  user-select: none;
  position: absolute;
  left: 0;
  top: 50%;
  padding: 0 70px 0 10px;
  transform: translateY(-50%);
  background-color: transparent;
  font-family: 'Inter', sans-serif;
`;

export const SelectValue = styled.p`
  margin: 0;
`;

export const SelectIconsWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SelectIcon = styled.span<ISelectStyle>`
  font-size: 20px;
  color: ${({ theme, isOpen }) => (isOpen ? theme.blackColor : theme.borderColor)};
  font-weight: 100;
`;

export const SelectIconClear = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.lightBgColor};
  font-weight: 100;
  margin-right: 3px;
  
  &:hover {
    color: ${({ theme }) => theme.blackColor};
  }
`;

export const SelectSeparator = styled.span`
  color: #E2E8F0;
  font-size: 15px;
  margin: 0 5px;
`;
