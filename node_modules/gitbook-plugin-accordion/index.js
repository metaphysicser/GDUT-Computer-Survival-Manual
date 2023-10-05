module.exports = {
	website: {
		assets: "./assets",
		css: [
			"accordion.css"
		],
		js: [
			"accordionSelector.js"
		]
	},
	hooks: {
		page: formater
	}
};

function formater (page) {

	page.content = page.content
		.replace(new RegExp('<p>%accordion%', "g"),
			'<div class="accordion accordionClose">' +
				'<div class="accordionButton">' +
					'<div class="accordionTitle">'
		)
		.replace(new RegExp('%accordion%</p>', "g"),
					'</div>' +
					'<div class="accordionSpinnerBox">' +
						'<div class="accordionSpinner"></div>' +
					'</div>' +
				'</div>' +
				'<div class="accordionContent">'
		)
		.replace(new RegExp('<p>%/accordion%</p>', "g"),
				'</div>' +
			'</div>'
		);

	return page;
};