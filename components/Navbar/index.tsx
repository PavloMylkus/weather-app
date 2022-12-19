import React from "react"
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
	Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";





interface Props {
	window?: () => Window;
}
const drawerWidth = 240;

const Navbar = (props: Props) => {

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MyForecast
			</Typography>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/'>
							<ListItemText primary='Home' />
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/About'>
							<ListItemText primary='About' />
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/Contact'>
							<ListItemText primary='Contact' />
						</Link>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);


	const container = window !== undefined ? () => window().document.body : undefined;
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				sx={{ background: '#29547f' }}
				component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						MyForecast
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Link href='/'>
							<Button sx={{ color: '#fff' }}>
								Home
							</Button>
						</Link>

						<Link href='/About'>
							<Button sx={{ color: '#fff' }}>
								About
							</Button>
						</Link>

						<Link href='/Contact'>
							<Button sx={{ color: '#fff' }}>
								Contact
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
};

export default Navbar;
