import React, { ReactNode } from "react"
import Container from '@mui/material/Container';
import Navbar from "../Navbar";


interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Container maxWidth="md" sx={{ marginTop: 2 }}>
				<Navbar />
				{children}
			</Container>
		</>
	)
};

export default Layout;
