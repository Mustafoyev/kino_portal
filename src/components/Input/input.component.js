import { forwardRef } from 'react';
import { StyledInput } from './input.styles';

export const Input = forwardRef((props, ref) => {
	return <StyledInput ref={ref} {...props} />;
});
