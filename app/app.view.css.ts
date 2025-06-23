namespace $ {
	const { rem, per } = $mol_style_unit

	$mol_style_define($horrorgamelanding_app, {
		background: { color: '#ffffff' },
		minHeight: per(100),
		font: {
			family: 'system-ui, -apple-system, sans-serif',
		},

		Container: {
			maxWidth: rem(75),
			margin: {
				top: 0,
				right: 'auto',
				bottom: 0,
				left: 'auto',
			},
			padding: rem(2),
		},

		Newsletter_tagline: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: rem(0.5),
			margin: { bottom: rem(3) },
			color: '#666',
			fontSize: rem(0.9),
		},

		Newsletter_icon: {
			width: rem(1.2),
			height: rem(1.2),
		},

		Site_logo: {
			display: 'block',
			margin: {
				top: 0,
				right: 'auto',
				bottom: rem(1),
				left: 'auto',
			},
			width: rem(20),
			height: 'auto',
		},
	})

	$mol_style_define($horrorgamelanding_app, {
		Projects_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
			gap: rem(2),
			margin: { bottom: rem(4) },
		},

		Footer: {
			textAlign: 'center',
			color: '#666',
			fontSize: rem(0.9),
			lineHeight: '1.6',
		},

		Social_links: {
			display: 'flex',
			justifyContent: 'center',
			gap: rem(2),
			margin: { bottom: rem(2) },
		},

		Newsletter_link: {
			display: 'flex',
			alignItems: 'center',
			gap: rem(0.5),
			color: '#007bff',
			textDecoration: 'none',

			':hover': {
				textDecoration: 'underline',
			},
		},

		Contact_link: {
			color: '#007bff',
			textDecoration: 'none',

			':hover': {
				textDecoration: 'underline',
			},
		},
	})

	$mol_style_define($horrorgamelanding_project_card, {
		display: 'block',
		textDecoration: 'none',
		borderRadius: rem(0.5),
		overflow: 'hidden',
		transition: 'transform 0.2s ease',

		':hover': {
			transform: 'translateY(-2px)',
		},

		Card_image: {
			width: per(100),
			height: rem(12),
			objectFit: 'cover',
			display: 'block',
		},
	})
}
