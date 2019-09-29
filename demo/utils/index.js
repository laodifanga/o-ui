const getRoutes = () => {
		let context = require.context('@/router/pages', true, /\.vue$/)
		return context.keys().map(c => {
			let cd = context(c).default
			let {__name} = cd
			__name = __name ? __name.split('|') : []
			let path = '/root/' + c.substr(2, c.length - 6)
			let name = __name.length ? __name[0] : ''
			let desc = __name.length > 1 ? __name[1] : ''
			let component = cd
			let meta = {title: `${name}-${desc}`}
			return {path, name, desc, component, meta}
		})
	}
	
	let getRouteData = () => {
		let routes = getRoutes(), data = {}
		routes.map(r => {
			let dir = r.path.split('/')[2]
			if(data[dir]) {
				data[dir].push(r)
			} else {
				data[dir] = [r]
			}
		})
		return data
	}
	
	export {
		getRoutes, getRouteData
	}