import React, { ReactNode } from "react"
import Container from '@mui/material/Container';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Search from "../Search";



export interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {

	return (
		<>

			<Container maxWidth="lg" sx={{ marginBottom: 5, minHeight: '90vh' }}>
				<Navbar />
				<Search />
				{children}
			</Container>
			<Footer copyright="2023" />
		</>
	)
};

export default Layout;
