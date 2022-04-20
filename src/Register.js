import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "./Copyright";
import {
	Container,
	CssBaseline,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
	Link,
} from "@mui/material";

const theme = createTheme();

const Register = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);
	const [message, setMessage] = useState(true);

	const handleFirstName = (e) => {
		setValues({ ...values, firstName: e.target.value });
	};

	const handleLastName = (e) => {
		setValues({ ...values, lastName: e.target.value });
	};

	const handleEmail = (e) => {
		setValues({ ...values, email: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.firstName && values.lastName && values.email) {
			setValid(true);
			setMessage(false);
		}
		setSubmitted(true);
		setValues({ firstName: "", lastName: "", email: "" });
		setTimeout(() => {
			setSubmitted(false);
		}, 1500);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign Up
					</Typography>
					<Box component="form" noValidate sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							{valid && submitted && (
								<Typography component="h6" sx={{ color: "success.main" }}>
									Succes! Thank you for registering
								</Typography>
							)}
							<Grid item xs={12} sm={6}>
								<TextField
									value={values.firstName}
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									onChange={handleFirstName}
								/>
								{submitted && !values.firstName && message && (
									<Typography component="h6" sx={{ color: "error.main" }}>
										Please enter a first name
									</Typography>
								)}
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									value={values.lastName}
									autoComplete="family-name"
									name="lastName"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									autoFocus
									onChange={handleLastName}
								/>
								{submitted && !values.lastName && message && (
									<Typography component="h6" sx={{ color: "error.main" }}>
										Please enter a last name
									</Typography>
								)}
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={values.email}
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={handleEmail}
								/>
								{submitted && !values.email && message && (
									<Typography component="h6" sx={{ color: "error.main" }}>
										Please enter an email
									</Typography>
								)}
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={handleSubmit}
						>
							Register
						</Button>
						<Grid container justifyContent="center">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
};

export default Register;
