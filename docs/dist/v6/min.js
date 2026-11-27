var e = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			"instructions-type": [{
				type: "single",
				key: "buildColgroup"
			}, {
				type: "single",
				key: "buildHeader"
			}]
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildFooter"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			"instructions-type": [{
				type: "single",
				key: "buildBody"
			}]
		},
		simpleSortable: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeaderClickable",
				"buildBody"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeaderClickable"
				},
				{
					type: "single",
					key: "buildBody"
				}
			]
		},
		full: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody",
				"buildFooter",
				"set-search",
				"search-show-label",
				"search-show-helper",
				"search-show-input",
				"set-serial",
				"serial-show-serial",
				"options-show-button",
				"options-show-edit-button"
			],
			"instructions-type": [
				{
					type: "single",
					key: "buildColgroup"
				},
				{
					type: "single",
					key: "buildHeader"
				},
				{
					type: "single",
					key: "buildBody"
				},
				{
					type: "single",
					key: "buildFooter"
				},
				{
					type: "single",
					key: "set-search"
				},
				{
					type: "single",
					key: "search-show-label"
				},
				{
					type: "single",
					key: "search-show-helper"
				},
				{
					type: "single",
					key: "search-show-input"
				},
				{
					type: "multi",
					key: "set-serial"
				},
				{
					type: "single",
					key: "serial-show-serial"
				},
				{
					type: "multi",
					key: "options-show-button"
				},
				{
					type: "multi",
					key: "options-show-edit-button"
				}
			]
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		"instructions-type": [{
			type: "single",
			key: "buildSelectWithOptions"
		}]
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		"instructions-type": [{
			type: "single",
			key: "buildDataListWithOptions"
		}]
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		"instructions-type": [{
			type: "single",
			key: "buildOptionsArray"
		}]
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		"instructions-type": []
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		"instructions-type": [{
			type: "single",
			key: "buildFormField"
		}]
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			"instructions-type": [{
				type: "single",
				key: "buildAccordionItems"
			}]
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			"instructions-type": [{
				type: "single",
				key: "buildAccordionItems"
			}]
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardBody"
			}]
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardHeader"
			}, {
				type: "single",
				key: "buildCardBody"
			}]
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			"instructions-type": [{
				type: "multi",
				key: "card-with-footer"
			}]
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			"instructions-type": [{
				type: "single",
				key: "buildCardBody"
			}]
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListItems"
			}]
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListGroupItems"
			}]
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			"instructions-type": [{
				type: "single",
				key: "buildListGroupItems"
			}]
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			"instructions-type": [{
				type: "single",
				key: "buildMenuItems"
			}]
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			"instructions-type": [{
				type: "single",
				key: "buildMenuCards"
			}]
		}
	}
}, t = {
	name: "declarative-definitions",
	version: "1.6.1"
}, n = (e) => {
	typeof globalThis < "u" && (globalThis.ks ??= {}, globalThis.ks.declarative ??= {}, globalThis.ks.declarative.definitions = {
		meta: t,
		data: e
	});
}, r = e;
n(e);
export { r as default, e as definitions, t as meta };
