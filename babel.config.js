module.exports = {
  presets: [
    '@vue/app'
  ],
	
	plugins: [
	  [
	    "import",
	    {
	      "libraryName": "o-ui",
	      "libDir": "lib",
				"style": true
	    }
	  ]
	]
}
