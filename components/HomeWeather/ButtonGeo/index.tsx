import React from "react"
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocale } from "../../../hooks/useLocale";

interface IProps {
	getLocation(): void;
}


const ButtonGeo: React.FC<IProps> = ({ getLocation }) => {
	const { t } = useLocale()
	return (
		<>
			<Button sx={{
				borderRadius: '30px',
				background: '#F58025',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				maxWidth: '338px',
				maxHeight: '59px',
				color: '#fff',
				border: 'none',
				'&:hover': {
					backgroundColor: '#fff',
					color: '#F58025',
					border: 'none',
				},
			}}
				onClick={getLocation}
				variant="outlined"
				startIcon={<LocationOnIcon />}
			>
				{t.home.get_location}
			</Button>
		</>
	)
};

export default ButtonGeo;
