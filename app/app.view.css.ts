namespace $ {
	const { rem, px } = $mol_style_unit

	// u041eu0441u043du043eu0432u043du044bu0435 u0446u0432u0435u0442u0430 u0434u043bu044f u0442u0435u043cu044b u0443u0436u0430u0441u043eu0432
	const horror_theme = {
		primary: '#6200EA', // u0433u043bu0430u0432u043du044bu0439 u0446u0432u0435u0442 (u0444u0438u043eu043bu0435u0442u043eu0432u044bu0439)
		secondary: '#FF4081', // u0430u043au0446u0435u043du0442u043du044bu0439 u0446u0432u0435u0442 (u0440u043eu0437u043eu0432u044bu0439)
		dark: '#13131F', // u0442u0435u043cu043du044bu0439 u0444u043eu043d
		darkAccent: '#1A1A2E', // u0442u0435u043cu043du044bu0439 u0430u043au0446u0435u043du0442u043du044bu0439
		light: '#FFFFFF', // u0431u0435u043bu044bu0439 u0442u0435u043au0441u0442
		lightSecondary: '#E0E0E0', // u0441u0432u0435u0442u043bu044bu0439 u0432u0442u043eu0440u0438u0447u043du044bu0439
	}

	// u0413u043bu043eu0431u0430u043bu044cu043du044bu0435 u0441u0442u0438u043bu0438 u043fu0440u0438u043bu043eu0436u0435u043du0438u044f
	$mol_style_define($horrorgamelanding_app, {
		background: {
			color: horror_theme.dark,
			image: 'linear-gradient(to bottom, #13131F, #1A1A2E)',
		},
		color: horror_theme.light,
		width: '100%',
		minHeight: '100vh',
		padding: 0,
		margin: 0,
		position: 'relative',
		fontFamily: 'system-ui, -apple-system, sans-serif',

		// u0421u0442u0438u043bu0438 u0434u043bu044f u0448u0430u043fu043au0438
		Head: {
			background: { color: 'rgba(0, 0, 0, 0.3)' },
			boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: [rem(1), rem(2)],
			position: 'sticky',
			top: 0,
			zIndex: 10,
		},
	})

	// u041du0430u0432u0438u0433u0430u0446u0438u044f
	$mol_style_define($mol_nav, {
		display: 'flex',
		justifyContent: 'center',
		gap: rem(1),
		margin: [0, rem(1)],
	})

	$mol_style_define($mol_link, {
		color: horror_theme.light,
		textTransform: 'uppercase',
		letterSpacing: px(1),
		fontWeight: 'bold',
		padding: [rem(0.5), rem(1)],
		transition: 'color 0.2s ease',
		fontSize: rem(0.9),
		
		':hover': {
			color: horror_theme.secondary,
			textDecoration: 'none',
		},
	})

	// u041bu043eu0433u043eu0442u0438u043f
	$mol_style_define($mol_image, {
		height: rem(3.5),
		width: 'auto',
		margin: 0,
	})

	// u041eu0441u043du043eu0432u043du043eu0439 u043au043eu043du0442u0435u043du0442
	$mol_style_define($mol_page_body, {
		padding: 0,
		margin: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		overflow: 'visible',
	})

	// u0413u0435u0440u043eu0439-u0441u0435u043au0446u0438u044f
	$mol_style_define($horrorgamelanding_app_Hero, {
		width: '100%',
		minHeight: '80vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: [rem(6), rem(2)],
		background: {
			color: 'rgba(0, 0, 0, 0.4)',
			image: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1543330091-24e42a66156b?q=80&w=1932&auto=format&fit=crop")'
		},
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxSizing: 'border-box',
		margin: 0,
		position: 'relative',

		$mol_paragraph: {
			color: horror_theme.light,
			fontSize: rem(1.25),
			lineHeight: 1.6,
			margin: [rem(1), 0, rem(2)],
			letterSpacing: px(1),
			maxWidth: rem(40),
			textAlign: 'center',
		},

		// u0417u0430u0433u043eu043bu043eu0432u043eu043a u0433u0435u0440u043eu044f
		Title: {
			fontSize: rem(4),
			lineHeight: 1.2,
			fontWeight: 800,
			color: horror_theme.light,
			margin: [0, 0, rem(1.5)],
			textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
			textAlign: 'center',
			maxWidth: rem(45),
		},
	})

	// u041eu0441u043du043eu0432u043du044bu0435 u0441u0435u043au0446u0438u0438
	$mol_style_define($mol_section, {
		width: '100%',
		padding: [rem(5), 0],
		margin: 0,
		background: { color: horror_theme.darkAccent },
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		position: 'relative',

		// u0417u0430u0433u043eu043bu043eu0432u043au0438 u0441u0435u043au0446u0438u0439
		Title: {
			fontSize: rem(2.5),
			fontWeight: 'bold',
			color: horror_theme.light,
			margin: [0, 0, rem(3)],
			textAlign: 'center',
			textTransform: 'uppercase',
			letterSpacing: rem(0.1),
		}
	})

	// u0427u0435u0440u0435u0434u043eu0432u0430u043du0438u0435 u0446u0432u0435u0442u043eu0432 u0441u0435u043au0446u0438u0439
	$mol_style_define($horrorgamelanding_app_Features_section, {
		background: { color: horror_theme.dark },
	})

	$mol_style_define($horrorgamelanding_app_Testimonials, {
		background: { 
			color: 'rgba(26, 26, 46, 0.95)',
			image: 'linear-gradient(rgba(26, 26, 46, 0.95), rgba(26, 26, 46, 0.95)), url("https://images.unsplash.com/photo-1626788353778-38c5295b979e?q=80&w=1932&auto=format&fit=crop")'
		},
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	})

	$mol_style_define($horrorgamelanding_app_Subscribe_section, {
		background: { color: horror_theme.dark },
		padding: [rem(7), rem(2)],
	})

	// u0421u043fu0438u0441u043au0438 u0438 u0441u0435u0442u043au0438
	$mol_style_define($mol_list, {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'stretch',
		gap: rem(2),
		width: '100%',
		maxWidth: rem(75),
		padding: [0, rem(2)],
		margin: 0,
		boxSizing: 'border-box',
	})

	// u041au0430u0440u0442u043eu0447u043au0438
	$mol_style_define($mol_card, {
		background: { color: 'rgba(255, 255, 255, 0.05)' },
		padding: rem(2),
		borderRadius: rem(0.5),
		width: '100%',
		maxWidth: rem(22),
		flexGrow: 1,
		boxSizing: 'border-box',
		boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		margin: 0,

		':hover': {
			transform: 'translateY(-5px)',
			boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
		},

		// u0417u0430u0433u043eu043bu043eu0432u043au0438 u043au0430u0440u0442u043eu0447u0435u043a
		Title: {
			fontSize: rem(1.5),
			fontWeight: 'bold',
			color: horror_theme.secondary,
			margin: [0, 0, rem(1)],
			textAlign: 'center',
		},

		$mol_paragraph: {
			color: horror_theme.lightSecondary,
			fontSize: rem(1),
			lineHeight: 1.6,
			margin: [rem(0.5), 0],
		},
	})

	$mol_style_define($horrorgamelanding_app_Testimonial1, {
		maxWidth: rem(32),
		Title: {
			fontStyle: 'italic',
			color: horror_theme.light,
			textAlign: 'left',
			position: 'relative',
			paddingLeft: rem(1.5),

			':before': {
				content: '"\201C"',
				position: 'absolute',
				left: 0,
				top: rem(-0.5),
				fontSize: rem(4),
				color: 'rgba(255, 64, 129, 0.4)',
				fontFamily: 'Georgia, serif',
				lineHeight: 1,
			},
		},
	})

	$mol_style_define($horrorgamelanding_app_Testimonial2, {
		maxWidth: rem(32),
		Title: {
			fontStyle: 'italic',
			color: horror_theme.light,
			textAlign: 'left',
			position: 'relative',
			paddingLeft: rem(1.5),

			':before': {
				content: '"\201C"',
				position: 'absolute',
				left: 0,
				top: rem(-0.5),
				fontSize: rem(4),
				color: 'rgba(255, 64, 129, 0.4)',
				fontFamily: 'Georgia, serif',
				lineHeight: 1,
			},
		},
	})

	$mol_style_define($mol_button_major, {
		background: { color: horror_theme.secondary },
		color: horror_theme.light,
		fontWeight: 'bold',
		padding: [rem(0.85), rem(2.5)],
		borderRadius: rem(2),
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
	})

	$mol_style_define($horrorgamelanding_app_footer, {
		width: '100%',
		padding: [rem(4), 0],
		background: { color: '#0D0D16' },
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: 0,
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: rem(0.9),
		
		$mol_paragraph: {
			margin: [rem(0.5), 0],
			textAlign: 'center',
		},
		
		$mol_list: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			gap: rem(1.5),
			margin: [rem(1), 0],
		},
	})
}
