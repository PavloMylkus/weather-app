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
	Button,
	MenuItem,
	Select
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useLocale } from "../../hooks/useLocale";




interface Props {
	window?: () => Window;
}
const drawerWidth = 240;

const Navbar = (props: Props) => {
	const { t, handleLocaleChange, router, locale } = useLocale();


	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<Link href='/'>MyForecast</Link>
			</Typography>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/'>
							<ListItemText primary={t.navigation.home} />
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/About'>
							<ListItemText primary={t.navigation.about} />
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href='/Contact'>
							<ListItemText primary={t.navigation.contact} />
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
						sx={{ flexGrow: 1, display: { sm: 'block' } }}
					>
						<Link href='/'>MyForecast</Link>
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>

						<Link href='/'>
							<Button sx={{ color: '#fff' }}>
								{t.navigation.home}
							</Button>
						</Link>

						<Link href='/About'>
							<Button sx={{ color: '#fff' }}>
								{t.navigation.about}
							</Button>
						</Link>

						<Link href='/Contact'>
							<Button sx={{ color: '#fff' }}>
								{t.navigation.contact}
							</Button>
						</Link>

					</Box>
					<Select
						sx={{ color: '#fff', marginLeft: 1 }}
						variant="standard"
						labelId="label"
						id="standard"
						value={locale}
						onChange={handleLocaleChange}
						label={locale}
					>

						<MenuItem value='en'>EN</MenuItem>
						<MenuItem value='uk'>UA</MenuItem>
					</Select>

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
