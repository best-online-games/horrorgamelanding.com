namespace $ {
	const { rem } = $mol_style_unit

	$mol_style_define($horrorgamelanding_subscribe, {
		background: { color: '#fff' },
		borderRadius: rem(1),
		border: { color: '#e5e7eb', width: rem(0.1), style: 'solid' },
		padding: rem(2),
		maxWidth: rem(26),
		margin: [rem(2), 'auto'],
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		gap: rem(1.5),
	})

	$mol_style_define($horrorgamelanding_subscribe, {
		"Email_field": {
			marginBottom: rem(1.2),
		},
		"Email_control": {
			width: '100%',
			borderRadius: rem(0.5),
			border: { color: '#e5e7eb', width: rem(0.1), style: 'solid' },
			padding: rem(1),
			fontSize: rem(1.05),
			background: { color: '#fafbfc' },
			color: '#222',
			transition: 'border-color 0.2s',
			':focus': {
				border: { color: '#bdbdbd', width: rem(0.13), style: 'solid' },
			},
		},
		"Submit": {
			width: '100%',
			padding: rem(1.1),
			borderRadius: rem(0.5),
			background: { color: '#f4f4f5' },
			color: '#222',
			fontWeight: 'bold',
			fontSize: rem(1.1),
			border: { color: '#e5e7eb', width: rem(0.1), style: 'solid' },
			cursor: 'pointer',
			transition: 'background 0.2s, color 0.2s',
			':hover': {
				background: { color: '#e5e7eb' },
				color: '#111',
			},
		},
		"Message": {
			marginTop: rem(0.7),
			color: '#bdbdbd',
			fontWeight: 'normal',
			textAlign: 'left',
			fontSize: rem(0.98),
		},
	})
}
