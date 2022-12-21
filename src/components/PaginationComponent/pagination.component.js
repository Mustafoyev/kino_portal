import { Pagination } from '@mui/material';
import { StyledPaginationWrapper } from './pagination.styles';

export const PaginationComponent = ({ setPages, totalPages }) => {
	return (
		<StyledPaginationWrapper>
			<Pagination
				onChange={(_, num) => setPages(num)}
				count={totalPages > 500 ? 500 : totalPages}
				showFirstButton
				showLastButton
			/>
		</StyledPaginationWrapper>
	);
};
