namespace $ {
	const { rem, px } = $mol_style_unit

	// u041eu0441u043du043eu0432u043du044bu0435 u0446u0432u0435u0442u0430
	const horror_theme = {
		primary: '#6200EA',
		secondary: '#FF4081',
		dark: '#13131F',
		darkAccent: '#1A1A2E',
		light: '#FFFFFF',
		lightSecondary: '#E0E0E0',
	}

	$mol_style_define($horrorgamelanding_subscribe, {
		width: '100%',
		maxWidth: rem(50),
		margin: [rem(1), 'auto'],
		background: { color: 'rgba(0, 0, 0, 0.3)' },
		padding: rem(2.5),
		border: '1px solid rgba(255, 255, 255, 0.1)',
		borderRadius: rem(1),
		boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
		transition: 'transform 0.3s ease',
		color: horror_theme.light,
		boxSizing: 'border-box',

		// u0421u0442u0438u043bu0438 u0437u0430u0433u043eu043bu043eu0432u043au0430
		Title: {
			fontSize: rem(2),
			fontWeight: 'bold',
			margin: [0, 0, rem(1.5)],
			color: horror_theme.light,
			textAlign: 'center',
		},

		// u0421u0442u0438u043bu0438 u0444u043eu0440u043cu044b
		Form: {
			width: '100%',
			margin: 0,
			padding: 0,
		},

		// u041eu043fu0438u0441u0430u043du0438u0435 u0444u043eu0440u043cu044b
		Form_description: {
			color: horror_theme.lightSecondary,
			fontSize: rem(1.1),
			lineHeight: 1.6,
			margin: [0, 0, rem(2)],
			textAlign: 'center',
		},

		// u041fu043eu043bu0435 u0432u0432u043eu0434u0430
		Email_field: {
			margin: [rem(1.5), 0],
			width: '100%',
		},

		// u041fu043eu043bu0435 u0432u0432u043eu0434u0430 email
		Email_control: {
			padding: rem(1),
			fontSize: rem(1),
			background: { color: 'rgba(255, 255, 255, 0.08)' },
			border: '1px solid rgba(255, 255, 255, 0.2)',
			borderRadius: rem(0.3),
			color: horror_theme.light,
			width: '100%',
			transition: 'border-color 0.3s ease, background-color 0.3s ease',

			$mol_view_focus: {
				outline: 'none',
				border: '1px solid rgba(255, 64, 129, 0.7)',
				background: { color: 'rgba(255, 255, 255, 0.12)' },
				boxShadow: '0 0 0 3px rgba(255, 64, 129, 0.15)',
			},
		},

		// u041au043du043eu043fu043au0430 u043fu043eu0434u043fu0438u0441u043au0438
		Submit: {
			background: { color: horror_theme.secondary },
			color: horror_theme.light,
			fontWeight: 'bold',
			padding: [rem(0.85), rem(2.5)],
			borderRadius: rem(0.3),
			textTransform: 'uppercase',
			fontSize: rem(1),
			boxShadow: '0 4px 12px rgba(255, 64, 129, 0.3)',
			transition: 'all 0.3s ease',
			margin: [rem(1), 0],
			letterSpacing: px(1),
			
			$mol_view_select: {
				background: { color: '#FF6699' },
				transform: 'scale(1.05)',
				boxShadow: '0 6px 16px rgba(255, 64, 129, 0.5)',
			},
		},

		// u0421u043eu043eu0431u0449u0435u043du0438u0435 u043eu0431 u043eu0442u043fu0440u0430u0432u043au0435
		Message: {
			margin: [rem(1), 0],
			padding: rem(1),
			fontSize: rem(0.9),
			textAlign: 'center',
			transition: 'opacity 0.3s ease',
		},

		// u041fu0440u0435u0438u043cu0443u0449u0435u0441u0442u0432u0430 u043fu043eu0434u043fu0438u0441u043au0438
		Benefits: {
			margin: [rem(2.5), 0, 0],
			padding: [rem(1.5), 0, 0],
			borderTop: '1px solid rgba(255, 255, 255, 0.1)',
			display: 'flex',
			flexDirection: 'column',
			gap: rem(1),
		},

		// u0421u0442u0440u043eu043au0438 u043fu0440u0435u0438u043cu0443u0449u0435u0441u0442u0432
		Benefit1: {
			display: 'flex',
			alignItems: 'center',
			gap: rem(0.8),
		},

		Benefit2: {
			display: 'flex',
			alignItems: 'center',
			gap: rem(0.8),
		},

		Benefit3: {
			display: 'flex',
			alignItems: 'center',
			gap: rem(0.8),
		},

		// u0418u043au043eu043du043au0438 u043fu0440u0435u0438u043cu0443u0449u0435u0441u0442u0432
		Benefit1_icon: {
			color: horror_theme.secondary,
			fontSize: rem(1.1),
			fontWeight: 'bold',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: rem(1.8),
			height: rem(1.8),
			background: { color: 'rgba(255, 64, 129, 0.15)' },
			borderRadius: '50%',
			flexShrink: 0,
		},

		Benefit2_icon: {
			color: horror_theme.secondary,
			fontSize: rem(1.1),
			fontWeight: 'bold',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: rem(1.8),
			height: rem(1.8),
			background: { color: 'rgba(255, 64, 129, 0.15)' },
			borderRadius: '50%',
			flexShrink: 0,
		},

		Benefit3_icon: {
			color: horror_theme.secondary,
			fontSize: rem(1.1),
			fontWeight: 'bold',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: rem(1.8),
			height: rem(1.8),
			background: { color: 'rgba(255, 64, 129, 0.15)' },
			borderRadius: '50%',
			flexShrink: 0,
		},

		// u0422u0435u043au0441u0442 u043fu0440u0435u0438u043cu0443u0449u0435u0441u0442u0432
		Benefit1_text: {
			color: horror_theme.lightSecondary,
			fontSize: rem(0.95),
		},

		Benefit2_text: {
			color: horror_theme.lightSecondary,
			fontSize: rem(0.95),
		},

		Benefit3_text: {
			color: horror_theme.lightSecondary,
			fontSize: rem(0.95),
		},
	})

	// u0421u0442u0438u043bu0438 u0434u043bu044f u043fu043eu043bu044f u0444u043eu0440u043cu044b
	$mol_style_define($mol_form_field, {
		margin: [rem(1), 0],
		padding: 0,

		Name: {
			color: horror_theme.lightSecondary,
			margin: [0, 0, rem(0.4)],
			fontSize: rem(0.9),
			fontWeight: 500,
			letterSpacing: rem(0.05),
		},
	})

	// u0421u0442u0438u043bu0438 u0434u043bu044f u0441u043eu043eu0431u0449u0435u043du0438u044f u043eu0431 u043eu0442u043fu0440u0430u0432u043au0435
	$mol_style_define($mol_status, {
		padding: rem(0.8),
		background: { color: 'rgba(0, 0, 0, 0.2)' },
		borderRadius: rem(0.25),
		color: horror_theme.light,
		border: '1px solid rgba(255, 255, 255, 0.1)',
		textAlign: 'center',
		fontSize: rem(0.9),
	})
}