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


const styleSelect = {
	width: '45px',
	height: '25px',
	border: 'none',
	borderRadius: '8px',
	color: '#F58025',
	background: 'transparent',
	fontSize: '14px',
	fontWeight: '700',
}

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
			<Typography variant="h6" sx={{ color: '#F58025', my: 2 }}>
				<Link style={{ display: 'flex', alignItems: 'center' }} href='/'>
					<img src="/action/tittle-icon.png" style={{ width: '50px' }} />
					MyForecast
				</Link>
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
		<Box sx={{
			display: 'flex'
		}}>
			<CssBaseline />
			<AppBar
				sx={{ background: 'transparent', boxShadow: 'none', position: 'relative', }}
				component="nav">
				<Toolbar sx={{ pl: '0 !important', pr: '0 !important', justifyContent: 'space-between', mt: 1, mb: 1 }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ m: 1, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ color: '#fff', fontWeight: 800, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Link style={{ color: '#F58025', display: 'flex', alignItems: 'center' }} href='/'>
							<img src="/action/tittle-icon.png" style={{ width: '50px', marginRight: '8px' }} />
							MyForecast
						</Link>
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
					<select
						style={styleSelect}
						// sx={{ color: '#fff', marginLeft: 1 }}
						// variant="standard"
						// labelId="label"
						// id="standard"
						value={locale}
						onChange={handleLocaleChange}
					// label={locale}
					>
						<option value='en'>EN</option>
						<option value='uk'>UA</option>
					</select>
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
		</Box >
	)
};

export default Navbar;
