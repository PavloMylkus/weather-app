import React, { ReactNode } from "react"
import Container from '@mui/material/Container';
import Navbar from "../Navbar";
import Footer from "../Footer";


export interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Navbar />
			<Container maxWidth="md" sx={{ marginTop: 10, marginBottom: 5, minHeight: '80vh' }}>
				{children}
			</Container>
			<Footer />
		</>
	)
};

export default Layout;
