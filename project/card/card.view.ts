namespace $.$$ {
	export class $horrorgamelanding_project_card extends $.$horrorgamelanding_project_card {
		
		@ $mol_mem
		project_uri() {
			const id = this.project_id()
			return id ? `/${id}/` : '#'
		}
		
		@ $mol_mem
		project_title() {
			return 'Project Title'
		}
		
		@ $mol_mem
		project_image() {
			return '/placeholder-image.svg'
		}
		
		@ $mol_mem
		project_id() {
			return ''
		}
	}
}
