import React from 'react';
;

interface FooterProps {
	copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
	return (
		<footer className="footer">
			<p className="footer-text">
				<a href="/About">About</a> | <a href="/Contact">Contact</a> | {copyright}
			</p>
		</footer>
	);
};

export default Footer;
