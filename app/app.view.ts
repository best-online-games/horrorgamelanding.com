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

		// u0421u043au0440u043eu043bu043b u043a u0441u0435u043au0446u0438u0438 u043fu043eu0434u043fu0438u0441u043au0438
		scroll_to_subscribe() {
			const subscribe_section = this.Subscribe_section().dom_node()
			if (subscribe_section) {
				subscribe_section.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}
}