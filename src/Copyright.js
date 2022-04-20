import React from "react";
import { Typography, Link, Divider } from "@mui/material";

const Copyright = (props) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			{new Date().getFullYear()}
			{"."}
			<Divider orientation="vertical" />
			<Link
				color="inherit"
				href="https://github.com/LuisSalas94"
				target="_blank"
			>
				Check my other projects!
			</Link>
			<Divider orientation="vertical" />
			<Link
				color="inherit"
				href="https://www.linkedin.com/in/luisfernandosalasgave/"
				target="_blank"
			>
				#100DaysOfCode
			</Link>
		</Typography>
	);
};

export default Copyright;
