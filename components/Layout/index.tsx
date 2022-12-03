import React, { ReactNode } from "react"
import Container from '@mui/material/Container';


interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Container maxWidth="md" sx={{ marginTop: 2 }}>
				{children}
			</Container>
		</>
	)
};

export default Layout;
