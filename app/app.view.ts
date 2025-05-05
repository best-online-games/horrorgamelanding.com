namespace $.$$ {
	export class $horrorgamelanding_app extends $.$horrorgamelanding_app {
		@$mol_mem
		email(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		Subscribe() {
			return new this.$.$horrorgamelanding_subscribe()
		}

		scroll_to_subscribe() {
			const subscribe_section = this.Subscribe_section().dom_node()
			if (subscribe_section) {
				subscribe_section.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}
}
