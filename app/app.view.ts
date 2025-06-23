namespace $.$$ {
	export class $horrorgamelanding_app extends $.$horrorgamelanding_app {
		@$mol_mem
		projects_data() {
			return [
				{
					id: 'perfect-circle',
					title: 'Draw a Perfect Circle',
					image: '/images/perfect-circle.svg',
				},
				{
					id: 'password-game',
					title: 'The Password Game',
					image: '/images/password-game.svg',
				},
				{
					id: 'space-elevator',
					title: 'Space Elevator',
					image: '/images/space-elevator.svg',
				},
				{
					id: 'deep-sea',
					title: 'The Deep Sea',
					image: '/images/deep-sea.svg',
				},
				{
					id: 'spend-money',
					title: 'Spend Bill Gates Money',
					image: '/images/spend-money.svg',
				},
				{
					id: 'life-stats',
					title: 'Life Stats',
					image: '/images/life-stats.svg',
				},
			]
		}

		@$mol_mem
		project_rows() {
			return this.projects_data().map((project, index) => this.Project_card(index))
		}

		@$mol_mem_key
		Project_card(index: number) {
			const card = new this.$.$horrorgamelanding_project_card()
			const project = this.projects_data()[index]
			if (project) {
				card.project_id = () => project.id
				card.project_title = () => project.title
				card.project_image = () => project.image
			}
			return card
		}

		@$mol_mem
		Subscribe() {
			return new this.$.$horrorgamelanding_subscribe()
		}
	}
}
