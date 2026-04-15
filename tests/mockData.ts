export const mockApiData = {
	formId: '1Mb19XwU6i4UbsF8oeBbY7B8jC3Ti_0Dx3XrKM_P1HBY',
	info: {
		title: 'Testing Form',
		description:
			'Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. ',
		documentTitle: 'Testing Form'
	},
	settings: {},
	revisionId: '000000a0',
	responderUri:
		'https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform',
	items: [
		{
			itemId: '3eafbaac',
			title: 'Text Antwortvalidierung',
			description: 'Text Beschreibung',
			questionItem: {
				question: {
					questionId: '1aa59e6c',
					required: true,
					textQuestion: {}
				},
				image: {
					contentUri:
						'https://lh6.googleusercontent.com/xP4B9DXn0pt5E2h0xEbk7zcOcUGTAfvCXKX-XUFXgrHAJZQoQ76lXIuSjt-UXNaO631vu-MowtWZZpLtagwR9HNb-Cq3hlNpZENOON35ACcqpqkWpRhjfiSxIRXipac3EA',
					properties: {
						alignment: 'LEFT',
						width: 740
					}
				}
			}
		},
		{
			itemId: '14ac2ec9',
			title: 'Paragraph Antwortvalidierung',
			questionItem: {
				question: {
					questionId: '4209d302',
					required: true,
					textQuestion: {
						paragraph: true
					}
				},
				image: {
					contentUri:
						'https://lh6.googleusercontent.com/P1wH0MKvSJXwgar2hOzIg6GvL6QE9DlASNfEMOglzhBpdj9l8kubwm5jyboLT4qZvI_Pl53yK0BKB5FTS-pp52QVAdLXhGofnHgdbhoDtLTl1ojb2RAtHztsY6YP1miRig',
					properties: {
						alignment: 'LEFT',
						width: 740
					}
				}
			}
		},
		{
			itemId: '76c09710',
			title: 'Multiple Choice',
			questionItem: {
				question: {
					questionId: '44f795c0',
					choiceQuestion: {
						type: 'RADIO',
						options: [
							{
								value: 'Option 1'
							},
							{
								value: 'Option 2'
							},
							{
								isOther: true
							}
						],
						shuffle: true
					}
				}
			}
		},
		{
			itemId: '55d6b21a',
			title: 'Kästchen',
			questionItem: {
				question: {
					questionId: '32b0c403',
					choiceQuestion: {
						type: 'CHECKBOX',
						options: [
							{
								value: 'Option 1'
							},
							{
								value: 'Option 2'
							},
							{
								isOther: true
							}
						],
						shuffle: true
					}
				}
			}
		},
		{
			itemId: '3003dbd2',
			questionItem: {
				question: {
					questionId: '3d429df9',
					choiceQuestion: {
						type: 'DROP_DOWN',
						options: [
							{
								value: 'Option 1'
							},
							{
								value: 'Option 2'
							},
							{
								value: 'Option 3'
							}
						],
						shuffle: true
					}
				}
			}
		},
		{
			itemId: '58d3a366',
			questionItem: {
				question: {
					questionId: '29202f93',
					scaleQuestion: {
						low: 1,
						high: 10,
						lowLabel: '1',
						highLabel: '10'
					}
				}
			}
		},
		{
			itemId: '53b7407a',
			questionGroupItem: {
				questions: [
					{
						questionId: '772577ac',
						rowQuestion: {
							title: 'Zeile 1'
						}
					},
					{
						questionId: '59f0d6ea',
						rowQuestion: {
							title: 'Zeile 2'
						}
					},
					{
						questionId: '4c5a1ba2',
						rowQuestion: {
							title: 'Zeile 3'
						}
					}
				],
				grid: {
					columns: {
						type: 'RADIO',
						options: [
							{
								value: 'Spalte 1'
							},
							{
								value: 'Spalte 2'
							},
							{
								value: 'Spalte 3'
							}
						]
					}
				}
			},
			title: 'Multiple Choice Raster'
		},
		{
			itemId: '36fa0eb6',
			questionGroupItem: {
				questions: [
					{
						questionId: '77552915',
						rowQuestion: {
							title: 'Zeile 1'
						}
					},
					{
						questionId: '156eb9aa',
						rowQuestion: {
							title: 'Zeile 2'
						}
					},
					{
						questionId: '651d1308',
						rowQuestion: {
							title: 'Zeile 3'
						}
					}
				],
				grid: {
					columns: {
						type: 'CHECKBOX',
						options: [
							{
								value: 'Spalte 1'
							},
							{
								value: 'Spalte 2'
							},
							{
								value: 'Spalte 3'
							}
						]
					},
					shuffleQuestions: true
				}
			},
			title: 'Kästchenraster'
		},
		{
			itemId: '4065cd09',
			title: 'Datum mit Jahr und Zeit',
			questionItem: {
				question: {
					questionId: '56e57cf0',
					dateQuestion: {
						includeTime: true,
						includeYear: true
					}
				}
			}
		},
		{
			itemId: '6c75c462',
			title: 'Zeit',
			questionItem: {
				question: {
					questionId: '3d322eff',
					timeQuestion: {}
				}
			}
		},
		{
			itemId: '75c86893',
			title: 'Dauer',
			questionItem: {
				question: {
					questionId: '6a3f93e8',
					timeQuestion: {
						duration: true
					}
				}
			}
		}
	]
};

export const mockParsedHtmlData = [
	{
		submitId: '447061612',
		validation: {
			category: 1,
			type: 2,
			value: ['10'],
			message: 'Benutzerdefinierte Fehlermeldung'
		}
	},
	{
		submitId: '1107940098',
		validation: {
			category: 4,
			type: 300,
			value: ['test-regex'],
			message: 'Benutzerdefinierte Fehlermeldung'
		}
	},
	{
		submitId: '1157076416',
		validation: {}
	},
	{
		submitId: '850445315',
		validation: {
			category: 7,
			type: 200,
			value: ['3'],
			message: 'Wähle mindestens 3'
		}
	},
	{
		submitId: '1027775993',
		validation: {}
	},
	{
		submitId: '689975187',
		validation: {}
	},
	{
		submitId: '1998944172',
		validation: {}
	},
	{
		submitId: '1508955882',
		validation: {}
	},
	{
		submitId: '1280973730',
		validation: {}
	},
	{
		submitId: '1696404232',
		validation: {}
	},
	{
		submitId: '2002069781',
		validation: {}
	},
	{
		submitId: '359578026',
		validation: {}
	},
	{
		submitId: '1457880304',
		validation: {}
	},
	{
		submitId: '1026699007',
		validation: {}
	},
	{
		submitId: '1782551528',
		validation: {}
	}
];

export const mockedParsedApiData = [
	{
		type: 'TEXT_QUESTION',
		validation: {
			isRequired: true
		},
		attributes: {
			isParagraph: false
		},
		displayData: {
			title: 'Text Antwortvalidierung',
			description: 'Text Beschreibung',
			image: {
				src: 'https://lh6.googleusercontent.com/xP4B9DXn0pt5E2h0xEbk7zcOcUGTAfvCXKX-XUFXgrHAJZQoQ76lXIuSjt-UXNaO631vu-MowtWZZpLtagwR9HNb-Cq3hlNpZENOON35ACcqpqkWpRhjfiSxIRXipac3EA',
				width: 740,
				alignment: 'LEFT'
			}
		}
	},
	{
		type: 'PARAGRAPH_QUESTION',
		validation: {
			isRequired: true
		},
		attributes: {
			isParagraph: true
		},
		displayData: {
			title: 'Paragraph Antwortvalidierung',
			image: {
				src: 'https://lh6.googleusercontent.com/P1wH0MKvSJXwgar2hOzIg6GvL6QE9DlASNfEMOglzhBpdj9l8kubwm5jyboLT4qZvI_Pl53yK0BKB5FTS-pp52QVAdLXhGofnHgdbhoDtLTl1ojb2RAtHztsY6YP1miRig',
				width: 740,
				alignment: 'LEFT'
			}
		}
	},
	{
		type: 'RADIO_QUESTION',
		options: ['Option 1', 'Option 2', '__other_option__'],
		validation: {
			isRequired: false
		},
		attributes: {
			randomizeOrder: true,
			otherOption: true
		},
		displayData: {
			title: 'Multiple Choice'
		}
	},
	{
		type: 'CHECKBOX_QUESTION',
		options: ['Option 1', 'Option 2', '__other_option__'],
		validation: {
			isRequired: false
		},
		attributes: {
			randomizeOrder: true,
			otherOption: true
		},
		displayData: {
			title: 'Kästchen'
		}
	},
	{
		type: 'DROPDOWN_QUESTION',
		options: ['Option 1', 'Option 2', 'Option 3'],
		validation: {
			isRequired: false
		},
		attributes: {
			randomizeOrder: true,
			otherOption: false
		},
		displayData: {}
	},
	{
		type: 'SCALE_QUESTION',
		validation: {
			isRequired: false
		},
		attributes: {
			min: 1,
			minLabel: '1',
			max: 10,
			maxLabel: '10'
		},
		displayData: {}
	},
	{
		type: 'RADIO_GRID_QUESTION',
		columns: ['Spalte 1', 'Spalte 2', 'Spalte 3'],
		rows: [
			{
				title: 'Zeile 1'
			},
			{
				title: 'Zeile 2'
			},
			{
				title: 'Zeile 3'
			}
		],
		validation: {
			isRequired: false
		},
		attributes: {
			randomizeOrder: false
		},
		displayData: {
			title: 'Multiple Choice Raster'
		}
	},
	{
		type: 'CHECKBOX_GRID_QUESTION',
		columns: ['Spalte 1', 'Spalte 2', 'Spalte 3'],
		rows: [
			{
				title: 'Zeile 1'
			},
			{
				title: 'Zeile 2'
			},
			{
				title: 'Zeile 3'
			}
		],
		validation: {
			isRequired: false
		},
		attributes: {
			randomizeOrder: false
		},
		displayData: {
			title: 'Kästchenraster'
		}
	},
	{
		type: 'DATE_QUESTION',
		validation: {
			isRequired: false
		},
		attributes: {
			yearIncluded: true,
			timeIncluded: true
		},
		displayData: {
			title: 'Datum mit Jahr und Zeit'
		}
	},
	{
		type: 'TIME_QUESTION',
		validation: {
			isRequired: false
		},
		attributes: {
			isDuration: false
		},
		displayData: {
			title: 'Zeit'
		}
	},
	{
		type: 'TIME_QUESTION',
		validation: {
			isRequired: false
		},
		attributes: {
			isDuration: true
		},
		displayData: {
			title: 'Dauer'
		}
	}
];
export const mockConstructedFormData = {
	success: true,
	info: {
		formId: '1Mb19XwU6i4UbsF8oeBbY7B8jC3Ti_0Dx3XrKM_P1HBY',
		responderUri:
			'https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform',
		title: 'Testing Form',
		description:
			'Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. ',
		documentTitle: 'Testing Form',
		collectsEmail: true
	},
	items: [
		{
			type: 'TEXT_QUESTION',
			submitId: 'emailAddress',
			displayData: {
				title: 'Your Email Adress',
				description: 'Please enter your email adress'
			},
			validation: {
				isRequired: true,
				category: 2,
				type: 102
			},
			attributes: {
				isParagraph: false
			}
		},
		{
			type: 'TEXT_QUESTION',
			validation: {
				isRequired: true,
				category: 1,
				type: 2,
				value: ['10'],
				message: 'Benutzerdefinierte Fehlermeldung'
			},
			attributes: {
				isParagraph: false
			},
			displayData: {
				title: 'Text Antwortvalidierung',
				description: 'Text Beschreibung',
				image: {
					src: 'https://lh6.googleusercontent.com/xP4B9DXn0pt5E2h0xEbk7zcOcUGTAfvCXKX-XUFXgrHAJZQoQ76lXIuSjt-UXNaO631vu-MowtWZZpLtagwR9HNb-Cq3hlNpZENOON35ACcqpqkWpRhjfiSxIRXipac3EA',
					width: 740,
					alignment: 'LEFT'
				}
			},
			submitId: '447061612'
		},
		{
			type: 'PARAGRAPH_QUESTION',
			validation: {
				isRequired: true,
				category: 4,
				type: 300,
				value: ['test-regex'],
				message: 'Benutzerdefinierte Fehlermeldung'
			},
			attributes: {
				isParagraph: true
			},
			displayData: {
				title: 'Paragraph Antwortvalidierung',
				image: {
					src: 'https://lh6.googleusercontent.com/P1wH0MKvSJXwgar2hOzIg6GvL6QE9DlASNfEMOglzhBpdj9l8kubwm5jyboLT4qZvI_Pl53yK0BKB5FTS-pp52QVAdLXhGofnHgdbhoDtLTl1ojb2RAtHztsY6YP1miRig',
					width: 740,
					alignment: 'LEFT'
				}
			},
			submitId: '1107940098'
		},
		{
			type: 'RADIO_QUESTION',
			options: ['Option 1', 'Option 2', '__other_option__'],
			validation: {
				isRequired: false
			},
			attributes: {
				randomizeOrder: true,
				otherOption: true
			},
			displayData: {
				title: 'Multiple Choice'
			},
			submitId: '1157076416'
		},
		{
			type: 'CHECKBOX_QUESTION',
			options: ['Option 1', 'Option 2', '__other_option__'],
			validation: {
				isRequired: false,
				category: 7,
				type: 200,
				value: ['3'],
				message: 'Wähle mindestens 3'
			},
			attributes: {
				randomizeOrder: true,
				otherOption: true
			},
			displayData: {
				title: 'Kästchen'
			},
			submitId: '850445315'
		},
		{
			type: 'DROPDOWN_QUESTION',
			options: ['Option 1', 'Option 2', 'Option 3'],
			validation: {
				isRequired: false
			},
			attributes: {
				randomizeOrder: true,
				otherOption: false
			},
			displayData: {},
			submitId: '1027775993'
		},
		{
			type: 'SCALE_QUESTION',
			validation: {
				isRequired: false
			},
			attributes: {
				min: 1,
				minLabel: '1',
				max: 10,
				maxLabel: '10'
			},
			displayData: {},
			submitId: '689975187'
		},
		{
			type: 'RADIO_GRID_QUESTION',
			columns: ['Spalte 1', 'Spalte 2', 'Spalte 3'],
			rows: [
				{
					title: 'Zeile 1',
					submitId: '1998944172'
				},
				{
					title: 'Zeile 2',
					submitId: '1508955882'
				},
				{
					title: 'Zeile 3',
					submitId: '1280973730'
				}
			],
			validation: {
				isRequired: false
			},
			attributes: {
				randomizeOrder: false
			},
			displayData: {
				title: 'Multiple Choice Raster'
			}
		},
		{
			type: 'CHECKBOX_GRID_QUESTION',
			columns: ['Spalte 1', 'Spalte 2', 'Spalte 3'],
			rows: [
				{
					title: 'Zeile 1',
					submitId: '1696404232'
				},
				{
					title: 'Zeile 2',
					submitId: '2002069781'
				},
				{
					title: 'Zeile 3',
					submitId: '359578026'
				}
			],
			validation: {
				isRequired: false
			},
			attributes: {
				randomizeOrder: false
			},
			displayData: {
				title: 'Kästchenraster'
			}
		},
		{
			type: 'DATE_QUESTION',
			validation: {
				isRequired: false
			},
			attributes: {
				yearIncluded: true,
				timeIncluded: true
			},
			displayData: {
				title: 'Datum mit Jahr und Zeit'
			},
			submitId: '1457880304'
		},
		{
			type: 'TIME_QUESTION',
			validation: {
				isRequired: false
			},
			attributes: {
				isDuration: false
			},
			displayData: {
				title: 'Zeit'
			},
			submitId: '1026699007'
		},
		{
			type: 'TIME_QUESTION',
			validation: {
				isRequired: false
			},
			attributes: {
				isDuration: true
			},
			displayData: {
				title: 'Dauer'
			},
			submitId: '1782551528'
		}
	]
};

export const mockHtmlData = `
<!DOCTYPE html><html lang="de" class="HB1eCd-UMrnmb PHOcVb"><head><link rel="shortcut icon" sizes="16x16" href="https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png"><link href="https://fonts.googleapis.com/icon?family=Material+Icons+Extended" rel="stylesheet" nonce="H96zsO7XGE6YUAZgwRiBcA"><title>Testing Form</title><link rel="stylesheet" href="https://www.gstatic.com/_/freebird/_/ss/k=freebird.v.L7256Xof_BU.L.X.O/am=HAw/d=1/rs=AMjVe6j7JKFY0A9Rl52ZlorjznvrZVG-Wg" data-id="_cl" nonce="H96zsO7XGE6YUAZgwRiBcA"><link href="https://fonts.googleapis.com/css?family=Google+Sans_old:400,500|Roboto_old:300,400,400i,500,700&subset=latin,vietnamese,latin-ext,cyrillic,greek,cyrillic-ext,greek-ext" rel="stylesheet" nonce="H96zsO7XGE6YUAZgwRiBcA"><script nonce="oCiWSFsOpymY5wSdvokvTg">var DOCS_timing={}; DOCS_timing['pls']=new Date().getTime(); DOCS_timing['sl']=DOCS_timing['pls']; _docs_webfonts_json = "{}"</script><link href="https://fonts.googleapis.com/css?family=Product+Sans&subset=latin,vietnamese,latin-ext,cyrillic,greek,cyrillic-ext,greek-ext" rel="stylesheet" type="text/css" nonce="H96zsO7XGE6YUAZgwRiBcA"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="referrer" content="origin"><script data-id="_gd" nonce="oCiWSFsOpymY5wSdvokvTg">window.WIZ_global_data = {"K1cgmc":"%.@.[null,null,null,[null,1,[1733454408,486443000]]]]","SpaT4e":"editors","TSDtV":"%.@.[[null,[[45667914,null,false,null,null,null,\"YjdXIe\"]],\"\"]]]","eNnkwf":"1733771158","nQyAE":{},"pzJKf":1,"qymVe":"AK2LxBQbzqFsis-DYQWXjWUsAUo","w2btAe":"%.@.null,null,\"\",true,null,null,null,false]"};</script><style id="WTVccd" nonce="H96zsO7XGE6YUAZgwRiBcA">.Iq2xPb .kaAt2 .KKHx9e {background-color: #3C4043;}.Iq2xPb .kaAt2.KKjvXb .KKHx9e {background-color: rgb(103, 58, 183);}.Iq2xPb .kaAt2.RDPZE .KKHx9e {background-color: #70757a;}.wGQFbe.N2RpBe:not(.RDPZE), .wGQFbe.B6Vhqe:not(.RDPZE) {border-color: rgb(103, 58, 183);}.wGQFbe.i9xfbb > .MbhUzd, .wGQFbe.u3bW4e > .MbhUzd {background-color: rgba(103, 58, 183, 0.15);}.wGQFbe.wGQFbe:hover > .MbhUzd {background-color: rgba(103, 58, 183, 0.04);}.wGQFbe.wGQFbe:focus > .MbhUzd {background-color: rgba(103, 58, 183, 0.15);}.BJHAP.N2RpBe.RDPZE, .BJHAP.B6Vhqe.RDPZE {border-color: rgb(103, 58, 183);}.BJHAP.RDPZE:not(.N2RpBe):not(.B6Vhqe) {border-color: #9AA0A6;}.da8bmd .BJHAP.N2RpBe.RDPZE, .da8bmd .BJHAP.B6Vhqe.RDPZE, .wMUAvd .BJHAP.RDPZE {border-color: #5F6368;}.aomaEc.N2RpBe:not(.RDPZE) .Id5V1, .aomaEc .nQOrEb {border-color: rgb(103, 58, 183);}.aomaEc .N2RpBe:not(.RDPZE) .Id5V1 {border-color: rgb(103, 58, 183);}.aomaEc.i9xfbb > .MbhUzd, .aomaEc.u3bW4e > .MbhUzd {background-color: rgba(103, 58, 183, 0.15);}.aomaEc :not(.RDPZE):hover > .MbhUzd {background-color: rgba(103, 58, 183, 0.04);}.aomaEc :not(.RDPZE):focus > .MbhUzd {background-color: rgba(103, 58, 183, 0.15);}.ECvBRb .N2RpBe.RDPZE .Id5V1, .ECvBRb .N2RpBe.RDPZE .nQOrEb {border-color: rgb(103, 58, 183);}.ECvBRb .RDPZE:not(.N2RpBe) .Id5V1 {border-color: #9AA0A6;}.da8bmd .ECvBRb .N2RpBe.RDPZE .Id5V1, .da8bmd .ECvBRb .N2RpBe.RDPZE .nQOrEb, .wMUAvd .ECvBRb .RDPZE .Id5V1 {border-color: #5F6368;}.aYSFK > :first-child {border-left: transparent solid 5px;}.aYSFK.N2RpBe {background-color: rgb(240, 235, 248);}.aYSFK.N2RpBe > :first-child {border-left-color: rgb(103, 58, 183);}.mhLiyf.KKjvXb.RDPZE {color: #5F6368;}.TFBnVe .MbhUzd {background-image: radial-gradient( circle farthest-side,rgba(103, 58, 183, 0.15),rgba(103, 58, 183, 0.15) 80%,rgba(103, 58, 183, 0) 100% );}.TFBnVe {color: rgb(103, 58, 183);}.TFBnVe.RDPZE {color: rgba(103, 58, 183, 0.5);}.TFBnVe.u3bW4e .CeoRYc {background-color: rgba(103, 58, 183, 0.15);}.RvMhje .MbhUzd {background-image: radial-gradient( circle farthest-side,rgba(255, 255, 255, .3),rgba(255, 255, 255, .3) 80%,rgba(255, 255, 255, 0) 100% );}.RvMhje {background-color: rgb(103, 58, 183); color: rgba(255, 255, 255, 1);}.RvMhje.RDPZE {color: rgba(255, 255, 255, 1); opacity: .54;}.RvMhje a .snByac {color: rgba(255, 255, 255, 1);}.RvMhje.u3bW4e .CeoRYc {background-color: rgba(255, 255, 255, .3);}.QvWxOd {background-color: rgb(103, 58, 183);}.QvWxOd .TpQm9d, .QvWxOd .TpQm9d:hover, .QvWxOd .TpQm9d:link, .QvWxOd .TpQm9d:visited {background-color: rgb(103, 58, 183);}.QvWxOd:hover {box-shadow: 0px 2px 1px -1px rgba(103, 58, 183, 0.2), 0px 1px 1px 0px rgba(103, 58, 183, 0.14), 0px 1px 3px 0px rgba(103, 58, 183, 0.12);}.QvWxOd.RDPZE:hover {box-shadow: none;}.QvWxOd.qs41qe.qs41qe {box-shadow: 0px 3px 5px -1px rgba(103, 58, 183, 0.2), 0px 6px 10px 0px rgba(103, 58, 183, 0.14), 0px 1px 18px 0px rgba(103, 58, 183, 0.12);}.ctEux {color: rgb(103, 58, 183);}.ctEux .CeoRYc {background-color: rgb(103, 58, 183);}.ctEux .MbhUzd {background-image: radial-gradient( circle farthest-side,rgba(103, 58, 183, 0.15),rgba(103, 58, 183, 0.15) 80%,rgba(103, 58, 183, 0) 100% );}.pRZhW {color: rgb(103, 109, 114);}.XTgocd {border-color: rgb(103, 109, 114);}.p6JeP .kaAt2 {color: rgb(103, 109, 114);}.p6JeP .kaAt2.KKjvXb {background-color: rgba(103, 58, 183, 0.15); color: rgb(103, 58, 183);}.p6JeP .kaAt2.KKjvXb.RDPZE {background-color: rgba(189, 189, 189, .38);; color: #9AA0A6;}.p6JeP .k6JGBb {fill: rgb(103, 109, 114);}.p6JeP .KKjvXb .k6JGBb {fill: rgb(103, 58, 183);}.p6JeP .RDPZE .k6JGBb, .p6JeP .KKjvXb.RDPZE.k6JGBb {fill: #9AA0A6;}.mfr8Qd .SKMfG {fill: rgb(103, 58, 183);}.Iq2xPb .s7bIcf {background-color: rgb(103, 58, 183);}@media screen and (forced-colors: active) {.Iq2xPb .s7bIcf {outline: 1px solid Highlight;}}.Iq2xPb .kaAt2 {color: #3C4043;}.Iq2xPb .kaAt2.KKjvXb  {color: rgb(103, 58, 183);}.Iq2xPb .kaAt2.RDPZE  {color: #70757a; cursor: default;}.Iq2xPb .RDPZE + .s7bIcf {background-color: #70757a;}.Iq2xPb .MbhUzd {background-image: radial-gradient( circle farthest-side,rgba(103, 58, 183, 0.15),rgba(103, 58, 183, 0.15) 80%,rgba(103, 58, 183, 0) 100% );}.Iq2xPb .PXrNBb {fill: #5F6368;}.Iq2xPb .KKjvXb .PXrNBb {fill: rgb(103, 58, 183);}.Iq2xPb RDPZE .PXrNBb, .Iq2xPb .KKjvXb.RDPZE.PXrNBb {fill: #9AA0A6;}.LKH0ge .cXrdqd {background-color: rgb(103, 58, 183);}.Yp9mw:focus-within {border-bottom-color: rgb(103, 58, 183);}.LKH0ge .Is7Fhb {color: rgb(103, 58, 183);}.LKH0ge.u3bW4e .snByac {color: rgb(103, 58, 183);}.LKH0ge.IYewr .oJeWuf.mIZh1c, .LKH0ge.IYewr .oJeWuf.cXrdqd {background-color: rgb(225, 216, 241);}.whsOnd:not([disabled]):focus ~ .AxOyFc.snByac, .u3bW4e > .oJeWuf >.fqp6hd.snByac, .u3bW4e.dm7YTc > .oJeWuf >.fqp6hd.snByac {color: rgb(103, 58, 183);}.HNgK9.RDPZE .zHQkBf[disabled] {color: rgba(0, 0, 0, .87);}.FlwNw.u3bW4e .oJeWuf:before {border-color: rgb(103, 58, 183);}.FlwNw .zHQkBf:not([disabled]):focus ~ .snByac {color: rgb(103, 58, 183);}.yqQS1 .cXrdqd {background-color: rgb(103, 58, 183);}.yqQS1 .Is7Fhb {color: rgb(103, 58, 183);}.yqQS1.IYewr .oJeWuf.mIZh1c, .yqQS1.IYewr .oJeWuf.cXrdqd {background-color: rgb(225, 216, 241);}.toT2u.RDPZE .zHQkBf[disabled] {color: rgba(0, 0, 0, .87);}.Y4klN.N2RpBe .espmsb {border-color: rgb(103, 58, 183); color: rgba(255, 255, 255, 1);}.Y4klN.N2RpBe > .MLPG7 {border-color: rgb(225, 216, 241);}.Y4klN.i9xfbb > .MbhUzd, .Y4klN.u3bW4e > .MbhUzd {background-color: rgba(103, 58, 183, 0.15);}.bvhls {border-color: rgb(103, 58, 183);}.bvhls.N2RpBe {background-color: rgb(103, 58, 183); color: rgba(255, 255, 255, 1);}.TCbR9b {display: none;}.IszBRc-Guievd-HLvlvd .TCbR9b {display: block;}.IszBRc-Guievd-HLvlvd .doKKyd {display: none;}.KHCwJ {display: none;}.naGohb {background-color: rgb(103, 58, 183);color: rgba(255, 255, 255, 1);}.b4wEpf {background-color: rgb(103, 58, 183);}.barETd .X1clqd, .barETd .qRUolc, .barETd .pPQgvf {color: #202124; fill: #5F6368;}.IszBRc-Guievd-JaPV2b .barETd {border: 2px solid white;}.IszBRc-Guievd-HLvlvd .barETd {border: 2px solid black;}.IOncP .HvOprf {color: rgb(103, 58, 183);}.IOncP .HvOprf .CeoRYc {background-color: rgb(103, 58, 183);}.IOncP .HvOprf .MbhUzd {background-image: radial-gradient( circle farthest-side,rgba(103, 58, 183, 0.15),rgba(103, 58, 183, 0.15) 80%,rgba(103, 58, 183, 0) 100% );}.IOncP .HvOprf:hover {border-color: rgb(225, 216, 241);}.IOncP .HvOprf.RDPZE {color: rgba(103, 58, 183, 0.5);}.IOncP .HvOprf.RDPZE:hover {box-shadow: none;}.IOncP .HvOprf.qs41qe.qs41qe {box-shadow: 0px 2px 1px -1px rgba(103, 58, 183, 0.2), 0px 1px 1px 0px rgba(103, 58, 183, 0.14), 0px 1px 3px 0px rgba(103, 58, 183, 0.12);}.Pi3FHb {outline-style: solid; outline-color: rgb(103, 58, 183);}.da8bmd .RDPZE .Pi3FHb {outline-color: rgba(0, 0, 0, .54);}.LygNqb.RDPZE .snByac {color: #70757a;}.LygNqb.RDPZE.N2RpBe .snByac, .LygNqb.RDPZE.B6Vhqe .snByac {color: #202124;}.wMUAvd .LygNqb.RDPZE .snByac, .wMUAvd .LygNqb.RDPZE.N2RpBe .snByac, .wMUAvd .LygNqb.RDPZE.B6Vhqe .snByac {color: black;}.LygNqb.RDPZE .PgfOZ svg {fill: rgba(0, 0, 0, .54);}.LygNqb.RDPZE.N2RpBe .PgfOZ, .LygNqb.RDPZE.B6Vhqe .PgfOZ svg {fill: rgba(0, 0, 0, .87);}.mqhyCf {color: rgb(103, 58, 183);}.AQRMP {color: rgb(103, 58, 183);}.RVEQke {background-color: rgb(103, 58, 183); color: rgba(255, 255, 255, 1);}.D8bnZd {background-color: rgb(240, 235, 248);}.xEUmYd {background-color: rgba(103, 58, 183, 0.05);}.cz0Zle {background-color: rgb(174, 121, 255);}.ENxQTe:hover {background-color: rgba(103, 58, 183, 0.1);}.YiC7Id {fill: rgb(103, 58, 183); stroke: rgb(103, 58, 183);}.PgdKqf {fill: rgb(103, 58, 183);}.LAANW {border-color: rgb(103, 58, 183);}.DGR5Ac {fill: rgba(255, 255, 255, 1)}.graCKc {background-color: rgb(103, 109, 114);}.G4EHhc, .G4EHhc .Wic03c .tL9Q4c, .G4EHhc .I9OJHe .KRoqRc, .G4EHhc .PyrB4, .G4EHhc .snByac {font-family: 'docs-Roboto', Helvetica, Arial, sans-serif;}.Jqhdy {font-family: 'docs-Roboto', Helvetica, Arial, sans-serif;}.BuWscd {font-family: 'docs-Parisienne', cursive;}.ULZu6e {font-family: 'docs-Patrick Hand', fantasy;}.kZBGEb {font-family: 'docs-Cormorant Garamond', serif;}.LgNcQe, .LgNcQe .Wic03c .tL9Q4c, .LgNcQe .I9OJHe .KRoqRc, .LgNcQe .PyrB4, .LgNcQe .snByac {font-size: 24pt;font-family: 'docs-Roboto', Helvetica, Arial, sans-serif;letter-spacing: 0;}.M7eMe, .M7eMe .Wic03c .tL9Q4c, .M7eMe .I9OJHe .KRoqRc, .M7eMe .PyrB4, .M7eMe .snByac{font-size: 12pt;font-family: 'docs-Roboto', Helvetica, Arial, sans-serif;letter-spacing: 0;}.OIC90c, .OIC90c.RjsPE, .OIC90c .zHQkBf, .OIC90c .Wic03c .tL9Q4c, .OIC90c .I9OJHe .KRoqRc, .OIC90c .PyrB4, .OIC90c .snByac {font-size: 11pt; line-height: 15pt;letter-spacing: 0;}.OIC90c .oJeWuf .zHQkBf {}.sId0Ce, .sId0Ce a {color: rgba(0, 0, 0, 0.66);}</style><link rel="icon" sizes="192x192" href="//ssl.gstatic.com/docs/forms/device_home/android_192.png"><link rel="apple-touch-icon" sizes="120x120" href="//ssl.gstatic.com/docs/forms/device_home/ios_120.png"><link rel="apple-touch-icon" sizes="152x152" href="//ssl.gstatic.com/docs/forms/device_home/ios_152.png"><meta name="msapplication-TileImage" content="//ssl.gstatic.com/docs/forms/device_home/windows_144.png"><meta name="msapplication-TileColor" content="#673ab7"><script nonce="oCiWSFsOpymY5wSdvokvTg">_docs_flag_initialData={"docs-ails":"docs_warm","docs-fwds":"docs_nf","docs-crs":"docs_crs_tsol","docs-cp-tp":1,"docs-cr-tp":1,"docs-fe-re":2,"docs-fl":1,"docs-l1lc":4,"docs-l1lm":"FRA","docs-l2lc":2,"docs-l2lm":"CHS","docs-l2t":0,"docs-lsd":1,"docs-orl":9,"docs-shdn":0,"docs-tfh":"","docs-eett":true,"info_params":{},"docs-ecdh":true,"docs-elaswm":false,"docs-eadwm":false,"docs-eapdwm":true,"docs-ecddwm":true,"docs-edswm":false,"docs-edatadm":true,"docs-eedswm":false,"docs-elnswm":false,"docs-eeoswm":false,"docs-emaswm":false,"docs-enpdwm":true,"docs-ensdwm":false,"docs-eodpswm":false,"docs-epcswm":false,"docs-wiz-epdwm":true,"docs-epsc":false,"docs-epdwm":true,"docs-erhswm":false,"esdodwmssd":true,"docs-esidm":true,"docs-esdwm":true,"docs-espdwm":true,"docs-etsswm":false,"docs-eoiidwm":true,"docs-erffsncdwm":true,"uls":"","customer_type":"ND","scotty_upload_url":"/upload/forms/resumable","docs-net-udmi":500000,"docs-net-udpt":40000,"docs-net-udur":"/upload/blob/forms","docs-net-usud":false,"docs-enable_feedback_svg":false,"docs-fpid":713678,"docs-fbid":"ExternalUserData","docs-efnpi":false,"docs-fse":"","docs-fsu":"www.google.com/tools/feedback","docs-obsImUrl":"https://ssl.gstatic.com/docs/common/netcheck.gif","docs-text-ewf":true,"docs-wfsl":["ca","da","de","en","es","fi","fr","it","nl","no","pt","sv"],"docs-efrsde":true,"docs-efpsf":true,"docs-edfn":true,"docs-efpsp":true,"docs-eldi":false,"docs-dli":false,"docs-liap":"/naLogImpressions","ilcm":{"eui":"ADFN-cswsocKBUhlAKuJrVxeR0vcrlGgDL_XH5I-5FXURrsLr_4SL1iiE6eu2UehWup188DNKoL5","je":1,"sstu":1733771158089666,"si":"CMPf_--wm4oDFSCCIAEdGnUFWg","gsc":null,"ei":[5701877,5703839,5704621,5705207,5705891,5706270,5707461,5707565,5711226,5713195,5713554,5715055,5718663,5718680,5726679,5726695,5727241,5727257,5729780,5729796,5731454,5731470,5732966,5732982,5734616,5734632,5737784,5737800,5738713,5738729,5739861,5739877,5740798,5740814,5752353,5752369,5764330,5764346,5764470,5764486,5774256,5774272,5774919,5774935,5785965,5785981,48966134,48966142,49375294,49375302,49398701,49398709,49471983,49471991,49622783,49622791,49623213,49623221,49643628,49643636,49644035,49644043,49769457,49769465,49822981,49822989,49823204,49823212,49833442,49833450,49842815,49842823,49924606,49924614,49943179,49943187,49979678,49979686,50266122,50266130,50273508,50273516,50297176,50297184,50297486,50297494,50439260,50439268,50498927,50498935,50503759,50503767,50513194,50513202,50529143,50529151,50561323,50561331,50562844,50562852,50587022,50587030,70971216,70971224,71035477,71035485,71038355,71038363,71079898,71079906,71085311,71085319,71185190,71185198,71197966,71197974,71238986,71238994,71289166,71289174,71387272,71387280,71387789,71387797,71429487,71429495,71478100,71478108,71478469,71478477,71515789,71515797,71528617,71528625,71530063,71530071,71544874,71544882,71545493,71545501,71546345,71546353,71561661,71561669,71574010,71574018,71626340,71626356,71635264,71635280,71639534,71639550,71642083,71642091,71652980,71652988,71657900,71657908,71659973,71659981,71679440,71679448,71689960,71689968,71705157,71705202,71720987,71720995,71727137,71727153,71733193,71733201,71847749,71847765,71882226,71897867,71897875,71960380,71960388,71961166,71961174,94327631,94327639,94353268,94353276,94368276,94368292,94389993,94390001,94413727,94413735,94434397,94434405,94435638,94435646,94502814,94502822,94514085,94514101,94544944,94544952,94597719,94597727,94624825,94624833,94646626,94646642,94661682,94661690,94667405,94667421,94707324,94707332,94727622,94727638,94784691,94784699,94813423,94813431,94874889,94874897,94904249,94904257,94916858,94916874,94929290,94929298,94942430,94942438,95065849,95065857,95078048,95078064,95086241,95086249,95087106,95087114,95087397,95087405,95112005,95112013,95112693,95112701,95131317,95131333,95131477,95131493,95135893,95135901,95163042,95163058,95199718,95199734,95234285,95234791,95234799,95251162,95251170,95254840,95254848,95271025,95271033,95314762,95314770,95317945,99237601,99237609,99247576,99247584,99311059,99311067,99331563,99331579,99338380,99338388,99368832,99368840,99400302,99400310,99401941,99401949,99402431,99402439,99406067,99406083,99452396,99452404,101442875,101442883,101488723,101488731,101489267,101489275,101513354,101513370,101519240,101519248,101561269,101561277,101614162,101614170,101617476,101617484,101630960,101630968,101701449,101701457,101705101,101708483,101708491,101776226,101776234,101801028,101801036,101829238,101829246,101875104,101875112,101922619,101922627,101956900,102144269],"crc":0,"cvi":[]},"docs-ccdil":true,"docs-eil":true,"docs-ecuach":false,"docs-cclt":2035,"docs-ecci":true,"docs-esi":false,"docs-cei":{"i":[95163058,99247584,71546353,101617484,71478108,5707565,71429495,71238994,71561669,95131493,50266130,5732982,50498935,49924614,5713554,101488731,94904257,95078064,50297494,94667421,50529151,94916874,94813431,94929298,71085319,94942438,71659981,71847765,94784699,71289174,101708491,5731470,94514101,94434405,5705207,49622791,71197974,101630968,71478477,71960388,94727638,94502822,5705891,5785981,5752369,5727257,99401949,94327639,49769465,5704621,94390001,49842823,94544952,71961174,99402439,5726695,71635280,94661690,71727153,5729796,71689968,101442883,49823212,50562852,71897875,71679448,5701877,71038363,71544882,49943187,50587030,95135901,71733201,71035485,71657908,5764486,5715055,50297184,94707332,101513370,49398709,94874897,5711226,95234799,71642091,49471991,101801036,101701457,49644043,94597727,5738729,71515797,94368292,71545501,71705202,99368840,95112013,94624833,99452404,49833450,48966142,101956900,71530071,101561277,49822989,101875112,95087114,50561331,5774272,5737800,99400310,71079906,95112701,102144269,71387280,95131333,101829246,5764346,49623221,95086249,50513202,71185198,5707461,5718680,70971224,95271033,5713195,71626356,5734632,49643636,101776234,71652988,95065857,50439268,99311067,5703839,99406083,95251170,94646642,99331579,95314770,49375302,5740814,71387797,101614170,50503767,99338388,101922627,71720995,5774935,5706270,71574018,49979686,99237609,71639550,101489275,50273516,5739877,95087405,95199734,95254848,94413735,71528625,94353276,101519248,101705101,94435646,95163042,99247576,71546345,101617476,71478100,71429487,71238986,71561661,95131477,50266122,5732966,50498927,49924606,101488723,94904249,95078048,50297486,94667405,50529143,94916858,94813423,94929290,71085311,94942430,71659973,71847749,94784691,71289166,101708483,5731454,94514085,94434397,49622783,71197966,101630960,71478469,71960380,94727622,94502814,5785965,5752353,5727241,99401941,94327631,49769457,94389993,49842815,94544944,71961166,99402431,5726679,71635264,94661682,71727137,5729780,71689960,101442875,49823204,50562844,71897867,71679440,71038355,71544874,49943179,50587022,95135893,71733193,71035477,71657900,5764470,50297176,94707324,101513354,49398701,94874889,95234791,71642083,49471983,101801028,101701449,49644035,94597719,5738713,71515789,94368276,71545493,71705157,99368832,95112005,94624825,99452396,49833442,48966134,71882226,71530063,101561269,49822981,101875104,95087106,50561323,5774256,5737784,99400302,71079898,95112693,95234285,71387272,95131317,101829238,5764330,49623213,95086241,50513194,71185190,5718663,70971216,95271025,71626340,5734616,49643628,101776226,71652980,95065849,50439260,99311059,99406067,95251162,94646626,99331563,95314762,49375294,5740798,71387789,101614162,50503759,99338380,101922619,71720987,5774919,71574010,49979678,99237601,71639534,101489267,50273508,5739861,95087397,95199718,95254840,94413727,71528617,94353268,101519240,95317945,94435638],"cf":{"enable_homescreen_priority_docs":[null,0],"enable_homescreen_priority_docs_promo":[null,0],"enable_homescreen_action_items_structured_query":[null,0]}},"docs-exfv":false,"docs-li":"713678","docs-trgthnt":"xwSFpxEiU0mHq3jmV6o0PcnvcKmd","docs-etmhn":false,"docs-thnt":"","docs-hbt":[],"docs-hdet":["nMX17M8pQ0kLUkpsP190WPbQDRJQ","17hED8kG50kLUkpsP190TThQn3DA","BDNZR4PXx0kLUkpsP190SJtNPkYt","Etj5wJCQk0kLUkpsP190NwiL8UMa","xCLbbDUPA0kLUkpsP190XkGJiPUm","2NUkoZehW0kLUkpsP190UUNLiXW9","yuvYtd5590kLUkpsP190Qya5K4UR","ZH4rzt2uk0kLUkpsP190UDkF5Bkq","uQUQhn57A0kLUkpsP190WHoihP41","93w8zoRF70kLUkpsP190TxXbtSeV","fAPatjr1X0kLUkpsP190SaRjNRjw","T4vgqqjK70kLUkpsP190ScPehgAW","JyFR2tYWZ0kLUkpsP190Rn3HzkxT","ufXj7vmeJ0kLUkpsP190QURhvJn2","KFks7UeZ30kLUkpsP190UUMR6cvh","LcTa6EjeC0kLUkpsP190RKgvW5qi","s3UFcjGjt0kLUkpsP190Z45ftWRr","o99ewBQXy0kLUkpsP190Nq2qr6tf","PHVyy5uSS0kLUkpsP190SUsYo8gQ","yZn21akid0iSFTCbiEB0WPiGEST3","h2TtqzmQF0kLUkpsP190YPJiQt7p","MZi9vb5UC0kLUkpsP190ReUhvVjy","dSR6SPjB80kLUkpsP190Y3xHa9qA","Bz6B7VmLu0kLUkpsP190W3FeobP7","AiLoubzsd0kLUkpsP190XtYNPgYT","MLmbZasLS0kLUkpsP190YHf6Zjsf","N5u4VeWhx0iSFTCbiEB0VUTNdX6g","XM16tjwrD0iSFTCbiEB0NfzvTeuU","ybYTJk1eD0iSFTCbiEB0QV4rkzSF","TgXar1TSG0iSFTCbiEB0SsXMaKuP","JYfGDkExa0iSFTCbiEB0TTQnEDtH","2i9JBUZ3w0iSFTCbiEB0RytbUoNq","NsVnd81bW0iSFTCbiEB0RhcXEK9M","rTQirATnb0iSFTCbiEB0W5cPcA7D","wNyww2Syr0iSFTCbiEB0Pzsbemba","DVdpfbqGj0iSFTCbiEB0RP4dMdFg","WKN3dsuG20iSFTCbiEB0NtEYhMK7","S5iPRteXX0iSFTCbiEB0YkMazE6h","6hmou1AcB0iSFTCbiEB0R9rZWXdz","wvo4NcLUj0iSFTCbiEB0Tt7mcVxE","HWuSeN2AB0iSFTCbiEB0PoBwHT2F","rTcCMw3BM0mHq3jmV6o0RHeAExRK","HUYzfGVRa0mHq3jmV6o0Uxe2caXK","1XYMmM1Cu0mHq3jmV6o0Z3pEi8xm","xHhMJiXiV0mHq3jmV6o0WB8WinyM","xwSFpxEiU0mHq3jmV6o0PcnvcKmd","4MBkBg26q0mHq3jmV6o0QeKPRMpY","y5g8iW2T80mHq3jmV6o0Nr8SAj4C","W9YRKy3Lb0iSFTCbiEB0Xfs1EfPr","Ed3nhrN8D0iSFTCbiEB0RN4bJ53y","zxDKY7PC10iSFTCbiEB0UDYPJwDZ","bhEyDmbwi0mHq3jmV6o0TngCF1v2","6rKYZ6uHA0mHq3jmV6o0TeDZjgB8","71Deousgx0mHq3jmV6o0WXBQiyzi","P55v8p4Lk0mHq3jmV6o0VjggjHMV","6nr31z9Wv0mERqSGkGf0VhuvAXWC","RLHeYNm410mERqSGkGf0Y817EUFK","vmx68XtfJ0mERqSGkGf0RCUBfsQr","687J7yD1q0mERqSGkGf0RVmMYHo1","qwhWQy8Zi0mERqSGkGf0W2tdypUF","wF8Sk241e0mERqSGkGf0YNtN6gpV","ijUhdx2QN0mERqSGkGf0TSD26iBJ","3iBLaMnuG0mERqSGkGf0VdY8XuLS","cFR77YEGo0iSFTCbiEB0PcMDWjX2","evUYuNCS80mERqSGkGf0Psi8j3Dw","soWncRV7C0mERqSGkGf0PZheXrWA","TvjoiCaar0mERqSGkGf0S9qS5adj","txL54xWLC0mERqSGkGf0XoEGTvCu","ffZmMGtYT0suK1NZr2K0QUxSzEMN","NagbcZWyB0suK1NZr2K0SJmfmJ3n","KMcLKvubv0suK1NZr2K0PLMUJ7zr","pwLDucJZU0ezFcgqx310NgtmYpbV","TCKDVQ6J0Bn3gbW4AcZC0PQKypCa","Z7vabQzZ0Bn3gbW4AcZC0TfvmSab"],"docs-hunds":false,"docs-hae":"PROD","docs-ehn":false,"docs-api-keys":{"scone_api_key":"AIzaSyAP66yw8QnPe4CgbQmLJ1potsrppninXxs","workspace_ui_api_key":"AIzaSyAGu65yOsDqNkYFlUT96M1i6BsyH4Nl6-s","espresso_api_key":"AIzaSyAYQn7Fb7-MOxi3BLfWHblG97kylSec-ak","cloud_search_api_key":"AIzaSyDsoqkkkgjVPCg2ep86sdbNNMrkGsCMJo0"},"docs-empcqvc":false,"docs-erbtit":false,"docs-etsonc":false,"docs-effnp":false,"docs-effnpf":false,"buildLabel":"apps-forms.freebird_20241119.02_p2","docs-show_debug_info":false,"docs-edmlf":false,"docs-eemc":false,"docs-rmls":"DEFAULT_NO_RETRY","ondlburl":"//docs.google.com","drive_url":"//drive.google.com?usp\u003dforms_web","app_url":"https://docs.google.com/forms/?usp\u003dforms_web","docs-eersl":true,"docs-gsmd":"https://workspace.google.com","docs-icdmt":[],"docs-mip":25000000,"docs-mif":1000,"docs-msid":32767,"docs-emid":false,"docs-mib":52428800,"docs-mid":2048,"docs-rid":1024,"docs-ehcm":false,"docs-eiic":true,"docs-encgm":true,"docs-phe":"https://contacts.google.com","docs-eph":false,"docs-istdr":false,"docs-sup":"/forms","docs-seu":"https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/edit","docs-crp":"/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform","docs-ucd":"","docs-uptc":["ofip","rr","lsrp","noreplica","tam","ntd","ths","app_install_xsrf_token","ouid","ca","sh","fromCopy","ct","cs","sle","dl","hi","hi_ext","usp","urp","utm_source","utm_medium","utm_campaign","utm_term","utm_content","srd"],"docs-doddn":"","docs-uddn":"","docs-ugn":"","docs-epq":false,"docs-tst":"","docs-ilbefsd":false,"docs-lbefm":0,"docs-lbesty":0,"docs-elsic":false,"docs-thtea":false,"docs-tdc":"[{\"id\":\"0:Reports\",\"name\":\"Berichte und Vorschläge\",\"deletedIds\":[]},{\"id\":\"0:Letters\",\"name\":\"Briefe\",\"deletedIds\":[]},{\"id\":\"0:Brochures\",\"name\":\"Broschüren und Newsletter\",\"deletedIds\":[]},{\"id\":\"0:Finance\",\"name\":\"Finanzen und Buchhaltung\",\"deletedIds\":[]},{\"id\":\"0:Basics\",\"name\":\"Grundlagen\",\"deletedIds\":[]},{\"id\":\"0:Calendars\",\"name\":\"Kalender und Zeitpläne\",\"deletedIds\":[]},{\"id\":\"0:Planners\",\"name\":\"Tracker\",\"deletedIds\":[]},{\"id\":\"0:Business\",\"name\":\"Verträge und Formulare\",\"deletedIds\":[]},{\"id\":\"Unparented\",\"name\":\"Keine Kategorie\",\"deletedIds\":[\"0:NoTemplateCategories\"]}]","docs-ttt":0,"docs-tcdtc":"[]","docs-ividtg":false,"docs-tdcp":0,"docs-tdvc":false,"docs-hetsdiaow":true,"docs-edt":true,"docs-tintd":false,"docs-tafl":true,"docs-puvtftv":true,"docs-erdiiv":false,"docs-eqspdc":true,"docs-esehbc":true,"docs-sqcuu":true,"docs-uaid":false,"docs-uaqs":0,"docs-acap":["docs.security.access_capabilities",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],"docs-ci":"","docs-eccfs":false,"docs-reafc":false,"docs-eco":false,"docs-ndt":"Unbenanntes Formular","docs-plwtu":"//ssl.gstatic.com/docs/common/product/forms_app_icon1.png","docs-prn":"Google Formulare","docs-een":false,"docos-enmafo":true,"docs-as":"","docs-etdimo":true,"docs-mdck":"AIzaSyD8OLHtLvDxnjZsBoVq4-_cuwUbKEMa70s","docs-eccbs":false,"docs-mmpt":9000,"docs-erd":false,"docs-uootuns":false,"docs-amawso":false,"docs-ofmpp":false,"docs-anlpfdo":false,"docs-ems":"SHARE_SUBMENU","docs-glu":"","docs-wsu":"","docs-wsup":"","docs-sccfo":"PROD","docs-fecgd":false,"docs-pid":"","docs-ricocpb":false,"docs-rdowr":false,"docs-cttmtbr":0,"docs-edlo":false,"docs-cttmteq":0,"docs-dec":false,"docs-ectt":false,"docs-ecgd":false,"docs-dsps":true,"docs-ececs":false,"server_time_ms":1733771158096,"gaia_session_id":"","docs-usp":"forms_web","docs-isb":false,"docs-agdc":false,"docs-anddc":true,"docs-adndldc":false,"docs-dhnap":"docs.google.com","docs-ds":"https","docs-emmda":false,"docs-clibs":1,"docs-cirts":20000,"docs-cide":true,"docs-cn":"","docs-dprfo":false,"docs-dom":false,"docs-eacr":false,"docs-eacw":false,"docs-ecer":false,"docs-ecir":true,"docs-ecssl":false,"docs-ecssi":false,"docs-ecped":true,"docs-ecprgba":true,"docs-ecccer":false,"docs-copy-ecci":false,"docs-edpq":false,"docs-edamc":false,"docs-edomic":false,"docs-eddm":false,"docos-edii":false,"docs-edsi":false,"docs-fwd":false,"docs-ehtabi":false,"docs-eibs":true,"docs-eiecr":true,"docs-eksdm":false,"docs-elds":false,"docs-emp":false,"docs-emcf":true,"docs-emv2":true,"docs-emmu":false,"docs-enpks":false,"docs-eomp":false,"docs-epmi":false,"docs-epat":true,"docs-ermcf":false,"docs-erpep":false,"docs-rolibilc":false,"docs-ersd":false,"docs-esbws":false,"docs-esml":true,"docs-ete":false,"docs-etpi":false,"docs-euqbp":true,"docs-eusca":false,"docs-ewlip":true,"docs-eztci":false,"docs-ezduole":false,"docs-hcwidu":false,"docs-hmg":false,"docs-ipmmp":true,"docs-ipuv":true,"docs-oesf":false,"docs-oursf":false,"docs-plimif":20.0,"docs-srmoe":0.01,"docs-srmour":0.0,"docs-srmwe":0.0,"docs-sptm":true,"docs-ssi":false,"docs-eslin":true,"docs-uoci":"","docs-wesf":false,"docs-gth":"Google Formulare-Startbildschirm öffnen","docs-ndsom":[],"docs-dm":"application/vnd.google-apps.freebird","docs-sdsom":[],"docs-po":"https://docs.google.com","docs-to":"https://docs.google.com","opmbs":52428800,"opmpd":5000,"opbu":"https://docs.google.com/picker","docs-pe":1,"opru":"https://docs.google.com/relay.html","opdu":false,"ophi":"trix_forms","opst":"","opuci":"","opsmu":"https://docs.google.com/picker","docs-ehipo":false,"projector_base_url":"//drive.google.com","docs-drk":[],"docs-erkpp":false,"docs-erkfsu":true,"maestro_domain":"https://script.google.com","enable_maestro":true,"docs-isctp":false,"docs-emae":false,"mae-cwssw":false,"mae-aoeba":true,"mae-esme":false,"mae-seitd":true,"docs-emgsmw":true,"docs-mhea":false,"docs-cpv":0,"docs-urouih":false,"docs-alu":"https://myaccount.google.com/language","docs-ect":true,"docs-cpks":[],"docs-hasid":"Forms","docs-hdod":"docs.google.com","docs-eflh":false,"docs-ehinbd":false,"docs-cesrid":true,"docs-hdck":"AIzaSyCs1AYpdoC8cECMZEWg89u054wu3GiI0lI","docs-hucs":true,"docs-hufcm":false,"docs-cbrs":50,"docs-caru":"https://clients6.google.com","docs-cdru":"https://drivefrontend-pa.clients6.google.com","docs-cpari":"https://people-pa.clients6.google.com/","docs-cbau":"https://drive.google.com","docs-cfru":"https://lh3.google.com","docs-ctak":"AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ","docs-cgav":0,"docs-cci":2,"docs-gap":"/drive/v2internal","jobset":"prod","docs-eatsd":false,"docs-cdie":false,"docs-nad":"","docs-ccwt":80,"docs-ut":2,"docs-sol":true,"docs-dvs":1,"docs-dac":1,"docs-ilbrc":false,"docs-dlpe":false,"docs-eirj":false,"docs-erre":false,"enable_omnibox":true,"docs-cvmo":-1,"docs-eqam":false,"docs-euaool":false,"docs-eua":false,"docs-uahnt":"","docs-esap":true,"docs-efib":false,"docs-se":false,"docs-bipbw":true,"docs-eaaw":false,"docs-eecs":false,"docs-ehlbap":false,"docs-emtr":false,"docs-euepni":true,"docs-uwzh":false,"docs-dafjera":false,"docs-daflia":false,"docs-dafgfma":false,"docs-fta-fnrhci":false,"docs-era":true,"docs-eraurk":true,"docs-fhnfst":"71Deousgx0mHq3jmV6o0WXBQiyzi","docs-fhnlst":"","docs-fhnprt":"bhEyDmbwi0mHq3jmV6o0TngCF1v2","docs-fhnqwt":"","docs-fhnrqtt":"P55v8p4Lk0mHq3jmV6o0VjggjHMV","docs-fhnst":"","docs-fhntwut":"HUYzfGVRa0mHq3jmV6o0Uxe2caXK","umss":false,"docs-egn":"-1","docs-eulsdo":false,"docs-eopd":"espresso-pa.googleapis.com","docs-gaopd":"appsgenaiserver-pa.clients6.google.com","docs-idephr":false,"docs-eoool":false,"docs-idep":false,"docs-ilc":false,"docs-ilecoo":false,"docs-ilecoi":false,"docs-egafedo":false,"docs-eiis":false,"docs-ebkq":true,"docs-ecscv2":true,"docs-ecps":true,"docs-egpf":false,"docs-egaat":false,"docs-egqe":true,"docs-eisyar":false,"docs-esptc":false,"docs-eupfsi":false,"docs-esa":false,"docs-es":false,"docs-esgap":false,"docs-evdmt":false,"docs-evst":false,"docs-shti":"","docs-rpod":"appsgrowthpromo-pa.clients6.google.com","docs-eucd":false,"zpgp":"ciykkyxlknbhcqhhpxffomvziyyfmrxyhdmtyquyhoeydmltybgigtaufkftktudhrrakfxgivjjxukxbeemnss","vdfrprr_zdvqrea_smtlxqanld":0.3,"dyowj_rkas_krenqtctit":0.5,"dyowj_pmcs_bbgm_smtlxqanld":0.3,"ixqx_kgzvst_dct_inxkpqohnds_qaykwk_oqc":"https://docs.google.com/picker?protocol\u003dgadgets\u0026parent\u003dhttps://docs.google.com/relay.html\u0026hostId\u003dspreadsheet-form-linker\u0026title\u003dW%C3%A4hlen+Sie+eine+Tabelle+aus,+in+die+die+Formularantworten+kopiert+werden+sollen.\u0026hl\u003dde\u0026newDriveView\u003dtrue\u0026origin\u003dhttps://docs.google.com\u0026nav\u003d((%22spreadsheets%22,null,%7B%22mimeTypes%22:%22application/vnd.google-apps.spreadsheet,application/vnd.google-apps.ritz%22%7D))","zna_qnlf_rkiofo_kpr":"https://docs.google.com/picker?protocol\u003dgadgets\u0026parent\u003dhttps://docs.google.com/relay.html\u0026hostId\u003dtrix_forms-fonts\u0026title\u003dSchriftarten\u0026hl\u003dde\u0026newDriveView\u003dtrue\u0026origin\u003dhttps://docs.google.com\u0026navHidden\u003dtrue\u0026multiselectEnabled\u003dtrue\u0026selectButtonLabel\u003dOK\u0026nav\u003d((%22fonts%22))","gahgp_sbrfclh_abepgmt_hiwj":"https://drive.google.com/settings/storage","lb_dszpqo_fzlmm_vmxs":false,"ixqxd-cen":false,"ixqxd-bee":"Unbenannte Umfrage","ixqxd-czfa":true,"ixqxd-cebro":false,"ixqxd-mebse":false,"ixqxd-qmi":"gndmhdcefbhlchkhipcnnbkcmicncehk","ixqxd-cjg":false,"ixqxd-cda":false,"ixqxd-crgd":false,"ixqxd-crs":false,"ixqxd-cfb":false,"ixqxd-cylq":false,"ixqxd-cmpa":true,"ixqxd-cdbhe":false,"ixqxd-eqf":"https://accounts.google.com/","ixqxd-cyq":true,"ixqxd-cpqfpaxo":false,"ixqxd-boqz":true,"ixqxd-stoh":false,"ixqxd-cbc":true,"ixqxd-crd":false,"ixqxd-crntu":false,"ixqxd-ctxq":false,"ixqxd-qrhbg":false,"ixqxd-cfcg":false,"ixqxd-pow":10000,"ixqxd-pxzzu":50000,"ixqxd-pxzgu":100000,"ixqxd-pxzgel":10000,"ixqxd-cdeevk":true,"ixqxd-cttu":false,"ixqxd-cpqsg":false,"ixqxd-coz":false,"ixqxd-cmctgx":false,"ixqxd-ccga":false,"ixqxd-cscvqm":false,"ixqxd-cacdemg":false,"ixqxd-cngsf":false,"ixqxd-codikxuw":true,"ixqxd-cqqwg":true,"ixqxd-cfordt":false,"ixqxd-cmdsj":false,"ixqxd-crffp":true,"ixqxd-crczqav":false,"ixqxd-crczqtv":false,"ixqxd-crczqafu":false,"ixqxd-cgta":false,"googlesystem_blogspot_banlevel":"http://goo.gl/vqaya","docs-idu":false,"docs-spdy":false,"xdbcfAllowHostNamePrefix":true,"xdbcfAllowXpc":true,"docs-dbctc":false,"docs-ebctcio":true,"docs-iror":false,"docs-pse":"PROD","docs-gafdfo":false,"docs-nrfd":false,"docs-nrfdfr":false,"docs-efypr":true,"docs-eyprp":true,"docs-dcr":false,"docs-eytpgcv":0,"docs-iwu":{"initialWorkspaceUdp":true}};</script><base target="_blank"><meta property="og:title" content="Testing Form"><meta property="og:type" content="article"><meta property="og:site_name" content="Google Docs"><meta property="og:url" content="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform?usp=embed_facebook"><meta property="og:image" content="https://lh5.googleusercontent.com/jrjDSS9jabtpPLqy7aWJHJthQHTrO4U0uQOz33SIkdT7rGEojXaTYhWZ_aE-u2i4Ots6UML1nBk=w1200-h630-p"><meta property="og:image:width" content="200"><meta property="og:image:height" content="200"><meta property="og:description" content="Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. "><meta property="og:ttl" content="604800"></head><body dir="ltr" itemscope itemtype="http://schema.org/CreativeWork/FormObject" class="D8bnZd " data-is-prepopulate-mode="false" data-is-response-view="true" jscontroller="OkF2xb" jsaction="rcuQ6b:npT2md; click:KjsqPd;oSngvd:KWFGld;UxRBlf:GrC6Ef;oDrQPd:l9NwTb;dkdJAd:CMTGD;"><meta itemprop="name" content="Testing Form"><meta itemprop="description" content="Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. "><meta itemprop="faviconUrl" content="https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico"><meta itemprop="url" content="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform?usp=embed_googleplus"><meta itemprop="embedURL" content="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform?embedded=true&amp;usp=embed_googleplus"><meta itemprop="thumbnailUrl" content="https://ssl.gstatic.com/docs/forms/social/social-forms-big-2.png"><meta itemprop="image" content="https://ssl.gstatic.com/docs/forms/social/social-forms-big-2.png"><meta itemprop="imageUrl" content="https://ssl.gstatic.com/docs/forms/social/social-forms-big-2.png"><div class="Uc2NEf"><div class="vnFTpb teQAzf ErmvL KHCwJ"></div><div class="teQAzf"><form action="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/formResponse" target="_self" method="POST" id="mG61Hd" jsmodel="TOfxwf Q91hve CEkLOc" data-shuffle-seed="8520499409063391775" data-clean-viewform-url="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform" data-response="%.@.]" data-dlp-data="%.@.null,false]" data-first-entry="0" data-last-entry="11" data-is-first-page="true"><div jscontroller="yUS4Lc" jsaction="rcuQ6b:rcuQ6b;UxRBlf:rcuQ6b;"><div jsname="o6bZLc"></div></div><div class="RH5hzf RLS9Fe"><div class="lrKTG"><div class="Dq4amc"><div class="m7w29c O8VmIc tIvQIf"><noscript><div class="HB1eCd-X3SwIb-haAclf"><div class="HB1eCd-X3SwIb-i8xkGf"><div class="tk3N6e-cXJiPb tk3N6e-cXJiPb-TSZdd tk3N6e-cXJiPb-GMvhG">Die Datei kann in Ihrem Browser nicht geöffnet werden, weil JavaScript nicht aktiviert ist. Aktivieren Sie JavaScript und laden Sie die Seite noch einmal.</div></div><br></div></noscript><div class="JH79cc RVEQke b33AEc"></div><div class="N0gd6"><div class="ahS2Le"><div class="F9yp7e ikZYwf LgNcQe" dir="auto" role="heading" aria-level="1">Testing Form</div></div><div class="cBGGJ OIC90c" dir="auto">Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. </div><div jsname="F0H8Yc" class="liS6Hc"></div></div><div class="zAVwcb"></div><div class="DqBBlb"><div class="Oh1Vtf"><div class="kesdnc" id="SMMuxb"><a jscontroller="A2m8uc" jsaction="rcuQ6b:npT2md; click:mAWTmb;" href="https://accounts.google.com/AccountChooser?continue=https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform&amp;service=wise" aria-describedby="SMMuxb">In Google anmelden</a>, um den Fortschritt zu speichern. <a class="TYUeKb" jscontroller="rmdjlf" jsaction="rcuQ6b:npT2md; click:xdDXgc;" role="button" tabindex="0">Weitere Informationen</a></div></div><div class="zAVwcb"></div><div class="md0UAd" aria-hidden="true" dir="auto">* Gibt eine erforderliche Frage an</div></div></div></div><div class="o3Dpx" role="list"><div role="listitem"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n AgroKb oQYVNd"><div jscontroller="v4y9Mc" jsaction="rcuQ6b:vZc4S;sPvj8e:d3sQLd;O22p3e:zjh6rb;AHmuwe:h06R8;b2trFe:eVidQc;"><div class="z12JJ"><div class="HoXoMd D1wxyf RjsPE" dir="auto" role="heading" aria-level="3"><span class="M7eMe">E-Mail-Adresse</span><span class="vnumgf" id="i4" aria-label="Pflichtfrage"> *</span></div></div><div class="rFrNMe k3kHxc RdH0ib yqQS1 zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="YPqjbf" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="email" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="email" tabindex="0" aria-label="Ihre E-Mail-Adresse" disabled aria-disabled="true" required dir="auto" data-initial-dir="auto" data-initial-value=""/><div jsname="LwH6nd" class="ndJi5d snByac" aria-hidden="true">Ihre E-Mail-Adresse</div></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i3" role="alert"></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1051703980,&quot;Text Antwortvalidierung&quot;,&quot;Text Beschreibung&quot;,0,[[447061612,null,true,null,[[1,2,[&quot;10&quot;],&quot;Benutzerdefinierte Fehlermeldung&quot;]],null,null,null,null,null,[]]],null,null,null,null,[[&quot;1CgjHj9dVReCCg1F0IIm2efz9FXS2SZS-XZZuvqn2rJs9xsk&quot;,null,[740,416,0]]],null,[null,&quot;Text Antwortvalidierung&quot;],[null,&quot;Text Beschreibung&quot;]],&quot;i5&quot;,&quot;i6&quot;,&quot;i7&quot;,false,&quot;i8&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i5" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3" aria-describedby="i9"><span class="M7eMe">Text Antwortvalidierung</span><span class="vnumgf" id="i9" aria-label="Pflichtfrage"> *</span></div><div class="gubaDc OIC90c RjsPE" id="i6">Text Beschreibung</div></div></div><div class="gCouxf"><div class="y6GzNb" style="width: 740px; "><img src="https://lh6.googleusercontent.com/xP4B9DXn0pt5E2h0xEbk7zcOcUGTAfvCXKX-XUFXgrHAJZQoQ76lXIuSjt-UXNaO631vu-MowtWZZpLtagwR9HNb-Cq3hlNpZENOON35ACcqpqkWpRhjfiSxIRXipac3EA=w740" class="HxhGpf" style="width: 740px; " title="" alt="Bild ohne Titel"/><div class="oRJ3ab OIC90c" dir="auto"></div></div></div><div jscontroller="oCiKKc" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:d3sQLd;AHmuwe:h06R8;" class="AgroKb"><div class="rFrNMe k3kHxc RdH0ib yqQS1 ccuQue zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="YPqjbf" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-labelledby="i5 i8" aria-describedby="i6 i7" disabled aria-disabled="true" min="10" required dir="auto" data-initial-dir="auto" data-initial-value=""/><div jsname="LwH6nd" class="ndJi5d snByac" aria-hidden="true">Meine Antwort</div></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i7" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[346828489,&quot;Paragraph Antwortvalidierung&quot;,null,1,[[1107940098,null,true,null,[[4,300,[&quot;test-regex&quot;],&quot;Benutzerdefinierte Fehlermeldung&quot;]],null,null,null,null,null,[]]],null,null,null,null,[[&quot;13qAbSDhex5kMB-siRMYQJ2D3gNTLR23dUb4kGrPZQnnhMZA&quot;,null,[740,416,0]]],null,[null,&quot;Paragraph Antwortvalidierung&quot;]],&quot;i10&quot;,&quot;i11&quot;,&quot;i12&quot;,false,&quot;i13&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i10" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3" aria-describedby="i14"><span class="M7eMe">Paragraph Antwortvalidierung</span><span class="vnumgf" id="i14" aria-label="Pflichtfrage"> *</span></div><div class="gubaDc OIC90c RjsPE" id="i11"></div></div></div><div class="gCouxf"><div class="y6GzNb" style="width: 740px; "><img src="https://lh6.googleusercontent.com/P1wH0MKvSJXwgar2hOzIg6GvL6QE9DlASNfEMOglzhBpdj9l8kubwm5jyboLT4qZvI_Pl53yK0BKB5FTS-pp52QVAdLXhGofnHgdbhoDtLTl1ojb2RAtHztsY6YP1miRig=w740" class="HxhGpf" style="width: 740px; " title="" alt="Bild ohne Titel"/><div class="oRJ3ab OIC90c" dir="auto"></div></div></div><div jscontroller="oCiKKc" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:d3sQLd;AHmuwe:h06R8;" class="AgroKb"><div class="edhGSc zKHdkd kRy7qc RdH0ib yqQS1 RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="YPqjbf" aria-disabled="true"><div class="RpC4Ne oJeWuf"><div class="F1pOBe snByac" aria-hidden="true" jsname="LwH6nd">Meine Antwort</div><div class="Pc9Gce Wic03c"><textarea class="KHxj8b tL9Q4c" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="Meine Antwort" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" disabled required dir="auto" data-initial-dir="auto" data-initial-value="" aria-labelledby="i10 i13" aria-describedby="i11 i12"></textarea></div><div class="z0oSpf mIZh1c"></div><div jsname="XmnwAc" class="Bfurwb cXrdqd"></div></div><div class="jE8NUc"><div jsname="ty6ygf" class="YElZX Is7Fhb"></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i12" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1992333072,&quot;Multiple Choice&quot;,null,2,[[1157076416,[[&quot;Option 1&quot;,null,null,null,false],[&quot;Option 2&quot;,null,null,null,false],[&quot;&quot;,null,null,null,true]],false,null,null,null,null,null,true,null,[]]],null,null,null,null,null,null,[null,&quot;Multiple Choice&quot;]],&quot;i15&quot;,&quot;i16&quot;,&quot;i17&quot;,false,&quot;i18&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i15" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Multiple Choice</span></div><div class="gubaDc OIC90c RjsPE" id="i16"></div></div></div><div jscontroller="UmOCme" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;JIbuQc:RgMCxe(YlCLKb);sPvj8e:d3sQLd;TYy3Ne:RgMCxe;" class="oyXaNc" jsname="GCYh9b"><input type="hidden" name="entry.1157076416_sentinel" jsname="DTMEae"><div jscontroller="eFy6Rc" jsaction="sPvj8e:Gh295d" jsname="cnAzRb"><div class="lLfZXe fnxRtf cNDBpf" jscontroller="wPRNsd" jsshadow jsaction="keydown:I481le;JIbuQc:JIbuQc;rcuQ6b:rcuQ6b" jsname="wCJL8" aria-labelledby="i15 i18" aria-describedby="i16 i17" role="radiogroup"><span jsslot role="presentation" jsname="bN97Pc" class="H2Gmcc tyNBNd"><div class="SG0AAe"><div class="nWQGrd zwllIb"><label for="i20" class="docssharedWizToggleLabeledContainer ajBQVb RDPZE"><div class="bzfPab wFGF8"><div class="d7L4fc bJNwt  FXLARc aomaEc ECvBRb"><div id="i20" class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="Option 1" aria-disabled="true" data-value="Option 1" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac OvPDhc OIC90c">Option 1</span></div></div></div></label></div><div class="nWQGrd zwllIb"><label for="i23" class="docssharedWizToggleLabeledContainer ajBQVb RDPZE"><div class="bzfPab wFGF8"><div class="d7L4fc bJNwt  FXLARc aomaEc ECvBRb"><div id="i23" class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="Option 2" aria-disabled="true" data-value="Option 2" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac OvPDhc OIC90c">Option 2</span></div></div></div></label></div><div class="nWQGrd zwllIb zfdaxb" jsname="MaDKvc"><label for="i26" class="docssharedWizToggleLabeledContainer ajBQVb RDPZE"><div class="bzfPab wFGF8"><div class="d7L4fc bJNwt  FXLARc aomaEc ECvBRb"><div id="i26" class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="__other_option__" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac OvPDhc">Sonstiges:</span></div></div></div></label><div class="pIDwKe" jsaction="keydown:npT2md" jsshadow><span jsslot><div class="RWzxl yqQS1 SjlgO RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="R6ztRd" aria-disabled="true"><div class="KzNPgc oJeWuf"><div class="JGptt"><input type="text" class="Hvn9fb zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Sonstige Antwort" disabled dir="auto" data-initial-dir="auto" data-initial-value=""/></div><div class="SPcBRc mIZh1c"></div><div jsname="XmnwAc" class="kPBwDb cXrdqd"></div></div></div></span></div></div></div></span></div></div><div class="Jwjdfe"><div class="dMALK bQXwDc" jsname="YlCLKb"><div role="button" class="uArJ5e UQuaGc kCyAyd" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac">Auswahl löschen</span></span></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i17" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1440133658,&quot;Kästchen&quot;,null,4,[[850445315,[[&quot;Option 1&quot;,null,null,null,false],[&quot;Option 2&quot;,null,null,null,false],[&quot;&quot;,null,null,null,true]],false,null,[[7,200,[&quot;3&quot;],&quot;Wähle mindestens 3&quot;]],null,null,null,true,null,[]]],null,null,null,null,null,null,[null,&quot;Kästchen&quot;]],&quot;i29&quot;,&quot;i30&quot;,&quot;i31&quot;,false,&quot;i32&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i29" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Kästchen</span></div><div class="gubaDc OIC90c RjsPE" id="i30"></div></div></div><div jscontroller="sW52Ae" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:sEDvJ;JIbuQc:d3sQLd(MPu53c);" class="Y6Myld"><input type="hidden" name="entry.850445315_sentinel" jsname="DTMEae"><div role="list" aria-labelledby="i29 i32" aria-describedby="i30 i31 i34" class=""><div class="eBFwI" role="listitem" jsaction="JIbuQc:aj0Jcf" jscontroller="lWjoT" jsname="MPu53c"><label for="i35" class="docssharedWizToggleLabeledContainer Yri8Nb RDPZE"><div class="bzfPab wFGF8"><div id="i35" class="uVccjd aiSeRd FXLARc wGQFbe BJHAP oLlshd RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="FkQz1b" aria-label="Option 1" aria-disabled="true" data-answer-value="Option 1" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac n5vBHf OIC90c">Option 1</span></div></div></div></label></div><div class="eBFwI" role="listitem" jsaction="JIbuQc:aj0Jcf" jscontroller="lWjoT" jsname="MPu53c"><label for="i38" class="docssharedWizToggleLabeledContainer Yri8Nb RDPZE"><div class="bzfPab wFGF8"><div id="i38" class="uVccjd aiSeRd FXLARc wGQFbe BJHAP oLlshd RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="FkQz1b" aria-label="Option 2" aria-disabled="true" data-answer-value="Option 2" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac n5vBHf OIC90c">Option 2</span></div></div></div></label></div><div class="eBFwI RVLOe" role="listitem" jsaction="JIbuQc:aj0Jcf" jscontroller="lWjoT" jsname="MPu53c"><div class="pzmVo"><label for="i41" class="docssharedWizToggleLabeledContainer Yri8Nb RDPZE"><div class="bzfPab wFGF8"><div id="i41" class="uVccjd aiSeRd FXLARc wGQFbe BJHAP oLlshd RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="FkQz1b" aria-label="Sonstiges:" aria-disabled="true" data-answer-value="__other_option__" data-other-checkbox="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div><div class="YEVVod"><div class="ulDsOb"><span dir="auto" class="aDTYNe snByac n5vBHf">Sonstiges:</span></div></div></div></label><div class="xVfcde"><div class="RWzxl yqQS1 IpuEke RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="R6ztRd" aria-disabled="true"><div class="KzNPgc oJeWuf"><div class="JGptt"><input type="text" class="Hvn9fb zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Sonstige Antwort" disabled dir="auto" data-initial-dir="auto" data-initial-value=""/></div><div class="SPcBRc mIZh1c"></div><div jsname="XmnwAc" class="kPBwDb cXrdqd"></div></div></div></div></div></div></div><div id="i34" class="fKfAyc"></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i31" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[805559250,null,null,3,[[1027775993,[[&quot;Option 3&quot;,null,null,null,false],[&quot;Option 2&quot;,null,null,null,false],[&quot;Option 1&quot;,null,null,null,false]],false,null,null,null,null,null,true,null,[]]]],&quot;i44&quot;,&quot;i45&quot;,&quot;i46&quot;,false,&quot;i47&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i44" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe"></span></div><div class="gubaDc OIC90c RjsPE" id="i45"></div></div></div><div jscontroller="liFoG" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;JIbuQc:d3sQLd;" class="vQES8d"><div role="listbox" aria-expanded="false" class="jgvuAb ybOdnf cGN2le t9kgXb llrsB RDPZE" jscontroller="YwHGTd" jsaction="click:cOuCgd(LgbsSe); keydown:I481le; keypress:Kr2w4b; mousedown:UX7yZ(LgbsSe),npT2md(preventDefault=true); mouseup:lbsD7e(LgbsSe); mouseleave:JywGue; touchstart:p6p2H(LgbsSe); touchmove:FwuNnf; touchend:yfqBxc(LgbsSe|preventDefault=true); touchcancel:JMtRjd(LgbsSe); focus:AHmuwe; blur:O22p3e;b5SvAb:TvD9Pc;" jsshadow jsname="W85ice" aria-disabled="true" aria-describedby="i45 i46" aria-labelledby="i44 i47"><div jsname="LgbsSe" role="presentation"><div class="ry3kXd" jsname="d9BH4c" role="presentation"><div class="MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R" jsname="wQNmvb" jsaction="" data-value="" aria-selected="true" role="option" tabindex="0"><div class="kRoyt MbhUzd" jsname="ksKsZd"></div><span jsslot class="vRMGwf oJeWuf">Auswählen</span></div><div class="mbHMhf" role="presentation"></div><div class="MocG8c HZ3kWc mhLiyf OIC90c LMgvRb" jsname="wQNmvb" jsaction="" data-value="Option 3" aria-selected="false" role="option" tabindex="-1"><div class="kRoyt MbhUzd" jsname="ksKsZd"></div><span jsslot class="vRMGwf oJeWuf">Option 3</span></div><div class="MocG8c HZ3kWc mhLiyf OIC90c LMgvRb" jsname="wQNmvb" jsaction="" data-value="Option 2" aria-selected="false" role="option" tabindex="-1"><div class="kRoyt MbhUzd" jsname="ksKsZd"></div><span jsslot class="vRMGwf oJeWuf">Option 2</span></div><div class="MocG8c HZ3kWc mhLiyf OIC90c LMgvRb" jsname="wQNmvb" jsaction="" data-value="Option 1" aria-selected="false" role="option" tabindex="-1"><div class="kRoyt MbhUzd" jsname="ksKsZd"></div><span jsslot class="vRMGwf oJeWuf">Option 1</span></div></div><div class="e2CuFe eU809d" role="presentation"></div></div><div class="OA0qNb ncFHed QXL7Te" jsaction="click:dPTK6c(wQNmvb); mousedown:uYU8jb(wQNmvb); mouseup:LVEdXd(wQNmvb); mouseover:nfXz1e(wQNmvb); touchstart:Rh2fre(wQNmvb); touchmove:hvFWtf(wQNmvb); touchend:MkF9r(wQNmvb)" role="presentation" jsname="V68bde" style="display:none;" soy-skip ssk='6:Rxil4c'></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i46" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1490264934,null,null,5,[[689975187,[[&quot;1&quot;],[&quot;2&quot;],[&quot;3&quot;],[&quot;4&quot;],[&quot;5&quot;],[&quot;6&quot;],[&quot;7&quot;],[&quot;8&quot;],[&quot;9&quot;],[&quot;10&quot;]],false,[&quot;1&quot;,&quot;10&quot;],null,null,null,null,null,null,[]]]],&quot;i49&quot;,&quot;i50&quot;,&quot;i51&quot;,false,&quot;i52&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i49" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe"></span></div><div class="gubaDc OIC90c RjsPE" id="i50"></div></div></div><div jscontroller="FYWcYb" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;JIbuQc:RgMCxe(YlCLKb);sPvj8e:d3sQLd;TYy3Ne:RgMCxe;" class="PY6Xd" jsname="skjTt"><div class="lLfZXe fnxRtf BpKDyb" jscontroller="wPRNsd" jsshadow jsaction="keydown:I481le;JIbuQc:JIbuQc;rcuQ6b:rcuQ6b" jsname="cnAzRb" aria-labelledby="i49 i52" aria-describedby="i50 i51" role="radiogroup"><span jsslot role="presentation" jsname="bN97Pc" class="H2Gmcc tyNBNd"><input type="hidden" name="entry.689975187_sentinel" jsname="DTMEae"><div class="N9Qcwe"><div class="Bpfcyc"><div class="OdvqYb"></div><div class="XlZoHb"><div jsname="NfjK7" class="g4s2gf OIC90c">1</div></div></div><label class="T5pZmf"><div class="Zki2Ve" dir="auto">1</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="1" aria-disabled="true" data-value="1" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">2</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="2" aria-disabled="true" data-value="2" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">3</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="3" aria-disabled="true" data-value="3" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">4</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="4" aria-disabled="true" data-value="4" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">5</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="5" aria-disabled="true" data-value="5" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">6</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="6" aria-disabled="true" data-value="6" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">7</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="7" aria-disabled="true" data-value="7" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">8</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="8" aria-disabled="true" data-value="8" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">9</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="9" aria-disabled="true" data-value="9" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><label class="T5pZmf"><div class="Zki2Ve" dir="auto">10</div><div class="eRqjfd" dir="auto"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="10" aria-disabled="true" data-value="10" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></label><div class="Bpfcyc"><div class="OdvqYb"></div><div class="XlZoHb"><div jsname="jq1lEb" class="g4s2gf OIC90c">10</div></div></div></div></span></div><div class="zunwHd"><div class="dMALK bQXwDc" jsname="YlCLKb"><div role="button" class="uArJ5e UQuaGc kCyAyd" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac">Auswahl löschen</span></span></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i51" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1404518522,&quot;Multiple Choice Raster&quot;,null,7,[[1998944172,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 1&quot;],null,null,null,null,null,null,[],[false]],[1508955882,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 2&quot;],null,null,null,null,null,null,[],[false]],[1280973730,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 3&quot;],null,null,null,null,null,null,[],[false]]],null,null,null,null,null,null,[null,&quot;Multiple Choice Raster&quot;]],&quot;i54&quot;,&quot;i55&quot;,&quot;i56&quot;,false,&quot;i57&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i54" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Multiple Choice Raster</span></div><div class="gubaDc OIC90c RjsPE" id="i55"></div></div></div><div jscontroller="tjSPQb" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:VAT5gb;JIbuQc:d3sQLd(MPu53c),obOMKe(YlCLKb);TYy3Ne:shOXCb;" class="e12QUd" jsname="ObfsIf"><div class="E2qMtb" jsname="Soz5ie" aria-labelledby="i54 i57"><div class="xOMX8e" jsname="iyUusd"><div class="gTGYUd" jsname="USX4tf"><div class="ssX1Bd KZt9Tc"><div class="V4d7Ke wzWPxe"></div><div class="V4d7Ke OIC90c">Spalte 1</div><div class="V4d7Ke OIC90c">Spalte 2</div><div class="V4d7Ke OIC90c">Spalte 3</div></div><div class="lLfZXe fnxRtf EzyPc" jscontroller="wPRNsd" jsshadow jsaction="keydown:I481le;JIbuQc:JIbuQc;rcuQ6b:rcuQ6b" jsname="cnAzRb" data-field-index="0" aria-describedby="i55 i56" aria-label="Zeile 1" role="radiogroup"><span jsslot role="presentation" jsname="bN97Pc" class="H2Gmcc tyNBNd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 1</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" data-value="Spalte 1" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="0" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" data-value="Spalte 2" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="0" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" data-value="Spalte 3" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="0" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><input type="hidden" name="entry.1998944172_sentinel" jsname="DTMEae"></span></div><div class="hpeATc"></div><div class="lLfZXe fnxRtf EzyPc" jscontroller="wPRNsd" jsshadow jsaction="keydown:I481le;JIbuQc:JIbuQc;rcuQ6b:rcuQ6b" jsname="cnAzRb" data-field-index="1" aria-describedby="i55 i56" aria-label="Zeile 2" role="radiogroup"><span jsslot role="presentation" jsname="bN97Pc" class="H2Gmcc tyNBNd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 2</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" data-value="Spalte 1" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="1" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" data-value="Spalte 2" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="1" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" data-value="Spalte 3" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="1" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><input type="hidden" name="entry.1508955882_sentinel" jsname="DTMEae"></span></div><div class="hpeATc"></div><div class="lLfZXe fnxRtf EzyPc" jscontroller="wPRNsd" jsshadow jsaction="keydown:I481le;JIbuQc:JIbuQc;rcuQ6b:rcuQ6b" jsname="cnAzRb" data-field-index="2" aria-describedby="i55 i56" aria-label="Zeile 3" role="radiogroup"><span jsslot role="presentation" jsname="bN97Pc" class="H2Gmcc tyNBNd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 3</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" data-value="Spalte 1" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="2" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" data-value="Spalte 2" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="2" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="D8e5bc" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" data-value="Spalte 3" aria-describedby=i54&#32;i57&#32;i55&#32;i56 data-field-index="2" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><input type="hidden" name="entry.1280973730_sentinel" jsname="DTMEae"></span></div><div class="hpeATc"></div></div></div><div class="ufh7vf" jsname="IXdifd" jsaction="click:np2IZe" aria-hidden="true"><div class="ssX1Bd KZt9Tc"><div class="V4d7Ke wzWPxe"></div><div class="V4d7Ke OIC90c">Spalte 1</div><div class="V4d7Ke OIC90c">Spalte 2</div><div class="V4d7Ke OIC90c">Spalte 3</div></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 1</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></div><div class="hpeATc"></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 2</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></div><div class="hpeATc"></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 3</div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div><div class="V4d7Ke"><div class="d7L4fc bJNwt  aomaEc ECvBRb"><div class="Od2TWd hYsg7c RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" data-value="" role="radio" aria-checked="false"><div class="x0k1lc MbhUzd"></div><div class="uyywbd"></div><div class="vd3tt"><div class="AB7Lab Id5V1"><div class="rseUEf nQOrEb"></div></div></div></div></div></div></div><div class="hpeATc"></div></div><div class="Ss4uff" jsname="RM5Agf" style="display:none"></div><div class="hyEEO"><div class="dMALK bQXwDc" jsname="YlCLKb"><div role="button" class="uArJ5e UQuaGc kCyAyd" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac">Auswahl löschen</span></span></div></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i56" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[922357430,&quot;Kästchenraster&quot;,null,7,[[1696404232,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 3&quot;],null,null,null,null,null,null,[],[true]],[2002069781,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 1&quot;],null,null,null,null,null,null,[],[true]],[359578026,[[&quot;Spalte 1&quot;],[&quot;Spalte 2&quot;],[&quot;Spalte 3&quot;]],false,[&quot;Zeile 2&quot;],null,null,null,null,null,null,[],[true]]],null,null,true,[[8,205]],null,null,[null,&quot;Kästchenraster&quot;]],&quot;i59&quot;,&quot;i60&quot;,&quot;i61&quot;,false,&quot;i62&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i59" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Kästchenraster</span></div><div class="gubaDc OIC90c RjsPE" id="i60"></div></div></div><div jscontroller="tjSPQb" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:VAT5gb;JIbuQc:d3sQLd(MPu53c),obOMKe(YlCLKb);TYy3Ne:shOXCb;" class="e12QUd" jsname="ObfsIf"><div class="E2qMtb" jsname="Soz5ie" aria-labelledby="i59 i62"><div class="xOMX8e" jsname="iyUusd"><div class="gTGYUd" jsname="USX4tf"><div class="ssX1Bd KZt9Tc"><div class="V4d7Ke wzWPxe"></div><div class="V4d7Ke OIC90c">Spalte 1</div><div class="V4d7Ke OIC90c">Spalte 2</div><div class="V4d7Ke OIC90c">Spalte 3</div></div><div jsname="IfcKPb" role="group" aria-describedby="i60 i61" class="EzyPc mxSrOe"><div class="V4d7Ke wzWPxe OIC90c">Zeile 3</div><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 1" data-field-id="1696404232" data-field-index="0" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 2" data-field-id="1696404232" data-field-index="0" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 3&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 3" data-field-id="1696404232" data-field-index="0" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><input type="hidden" name="entry.1696404232_sentinel" jsname="DTMEae"></div><div class="hpeATc"></div><div jsname="IfcKPb" role="group" aria-describedby="i60 i61" class="EzyPc mxSrOe"><div class="V4d7Ke wzWPxe OIC90c">Zeile 1</div><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 1" data-field-id="2002069781" data-field-index="1" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 2" data-field-id="2002069781" data-field-index="1" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 1&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 3" data-field-id="2002069781" data-field-index="1" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><input type="hidden" name="entry.2002069781_sentinel" jsname="DTMEae"></div><div class="hpeATc"></div><div jsname="IfcKPb" role="group" aria-describedby="i60 i61" class="EzyPc mxSrOe"><div class="V4d7Ke wzWPxe OIC90c">Zeile 2</div><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 1&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 1" data-field-id="359578026" data-field-index="2" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 2&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 2" data-field-id="359578026" data-field-index="2" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><label class="V4d7Ke"><div class="q9ZqCb"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="MPu53c" aria-label="&quot;Spalte 3&quot;, Antwort auf &quot;Zeile 2&quot;" aria-disabled="true" aria-describedby="i59 i60 i61" data-answer-value="Spalte 3" data-field-id="359578026" data-field-index="2" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></label><input type="hidden" name="entry.359578026_sentinel" jsname="DTMEae"></div><div class="hpeATc"></div></div></div><div class="ufh7vf" jsname="IXdifd" jsaction="click:np2IZe" aria-hidden="true"><div class="ssX1Bd KZt9Tc"><div class="V4d7Ke wzWPxe"></div><div class="V4d7Ke OIC90c">Spalte 1</div><div class="V4d7Ke OIC90c">Spalte 2</div><div class="V4d7Ke OIC90c">Spalte 3</div></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 3</div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></div><div class="hpeATc"></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 1</div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></div><div class="hpeATc"></div><div class="ssX1Bd"><div class="V4d7Ke wzWPxe OIC90c">Zeile 2</div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div><div class="V4d7Ke"><div class="uVccjd aiSeRd wGQFbe BJHAP RDPZE" jscontroller="EcW08c" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow aria-disabled="true" role="checkbox" aria-checked="false"><div class="PkgjBf MbhUzd"></div><div class="uHMk6b fsHoPb"></div><div class="rq8Mwb"><div class="TCA6qd"><div class="MbUTNc oyD5Oc"></div><div class="Ii6cVc oyD5Oc"></div></div></div></div></div></div><div class="hpeATc"></div></div><div class="Ss4uff" jsname="RM5Agf" style="display:none"></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i61" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1080413449,&quot;Datum mit Jahr und Zeit&quot;,null,9,[[1457880304,null,false,null,null,null,null,[true,true],null,null,[]]],null,null,null,null,null,null,[null,&quot;Datum mit Jahr und Zeit&quot;]],&quot;i64&quot;,&quot;i65&quot;,&quot;i66&quot;,false,&quot;i67&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i64" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Datum mit Jahr und Zeit</span></div><div class="gubaDc OIC90c RjsPE" id="i65"></div></div></div><div jscontroller="lLliLe" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;wkbFue:d3sQLd;sPvj8e:d3sQLd;JIbuQc:d3sQLd; keyup:d3sQLd;" data-includesyear="true" data-includestime="true"><div class="A6uyJd"><div class="o7cIKf" jsname="q7Lpsb" aria-labelledby="i64 i67" aria-describedby="i65 i66"><div class="a7KROc"><div class="vEXS5c"><div class="UaWVmb" id="">TT</div><div class="rFrNMe genAeb yqQS1 toT2u ESbQy zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="cASped" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Tag des Monats" maxlength="2" disabled aria-disabled="true" min="1" max="31" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div> <div class="lLES4">.</div> <div class="a7KROc"><div class="vEXS5c"><div class="UaWVmb" id="">MM</div><div class="rFrNMe genAeb yqQS1 toT2u ESbQy zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="bhSbLe" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Monat" maxlength="2" disabled aria-disabled="true" min="1" max="12" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div> <div class="lLES4">.</div> <div class="a7KROc uTyfEf"><div class="vEXS5c"><div class="UaWVmb" id="">JJJJ</div><div class="rFrNMe genAeb yqQS1 toT2u ESbQy uTyfEf zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="livHne" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Jahr" maxlength="4" disabled aria-disabled="true" min="1874" max="2074" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div></div><div class="qk62ef"><div class="JUorw" jsname="UgDf2d" jsaction="rcuQ6b:vZc4S;sPvj8e:d3sQLd;JIbuQc:d3sQLd;" jscontroller="OZjhxc" data-savevalueonchange="false"><div class="ocBCTb cvVOhf" role="group" aria-labelledby="i64 i67" aria-describedby="i69"><div class="vEXS5c"><div class="UaWVmb" id="i69">Zeit</div><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="MKaSrf" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Stunde" maxlength="2" disabled aria-disabled="true" min="0" max="23" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div class="IDmXx">:</div><div class="vEXS5c"><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="QbtXXe" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Minute" maxlength="2" disabled aria-disabled="true" min="0" max="59" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i66" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1819657314,&quot;Zeit&quot;,null,10,[[1026699007,null,false,null,null,null,[false],null,null,null,[]]],null,null,null,null,null,null,[null,&quot;Zeit&quot;]],&quot;i70&quot;,&quot;i71&quot;,&quot;i72&quot;,false,&quot;i73&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i70" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Zeit</span></div><div class="gubaDc OIC90c RjsPE" id="i71"></div></div></div><div jscontroller="OZjhxc" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:d3sQLd;JIbuQc:d3sQLd;" class="PfQ8Lb" data-savevalueonchange="true"><div class="ocBCTb" role="group" aria-labelledby="i70 i73" aria-describedby="i75"><div class="vEXS5c"><div class="UaWVmb" id="i75">Zeit</div><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="MKaSrf" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Stunde" maxlength="2" disabled aria-disabled="true" min="0" max="23" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div class="IDmXx">:</div><div class="vEXS5c"><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="QbtXXe" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Minute" maxlength="2" disabled aria-disabled="true" min="0" max="59" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i72" role="alert"></div></div></div></div><div class="Qr7Oae" role="listitem"><div jsmodel="CP1oW" data-params="%.@.[1976068243,&quot;Dauer&quot;,null,10,[[1782551528,null,false,null,null,null,[true],null,null,null,[]]],null,null,null,null,null,null,[null,&quot;Dauer&quot;]],&quot;i76&quot;,&quot;i77&quot;,&quot;i78&quot;,false,&quot;i79&quot;]"><div jscontroller="sWGJ4b" jsaction="EEvAHc:yfX9oc;" jsname="WsjYwc" class="geS5n"><div class="z12JJ"><div class="M4DNQ"><div id="i76" class="HoXoMd D1wxyf RjsPE" role="heading" aria-level="3"><span class="M7eMe">Dauer</span></div><div class="gubaDc OIC90c RjsPE" id="i77"></div></div></div><div jscontroller="OZjhxc" jsaction="rcuQ6b:vZc4S;O22p3e:zjh6rb;b2trFe:eVidQc;sPvj8e:d3sQLd;JIbuQc:d3sQLd;" class="PfQ8Lb" data-savevalueonchange="true"><div class="ocBCTb" role="group" aria-labelledby="i76 i79" aria-describedby="i81"><div class="vEXS5c"><div class="UaWVmb" id="">Std.</div><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="MKaSrf" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Stunden" maxlength="2" disabled aria-disabled="true" min="0" max="72" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div class="IDmXx">:</div><div class="vEXS5c"><div class="UaWVmb" id="">Min.</div><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="QbtXXe" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Minuten" maxlength="2" disabled aria-disabled="true" min="0" max="59" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div><div class="IDmXx">:</div><div class="vEXS5c"><div class="UaWVmb" id="">Sek.</div><div class="rFrNMe genAeb yqQS1 toT2u cRGsOb zKHdkd RDPZE" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="Scoobb" aria-disabled="true"><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class="Xb9hP"><input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Sekunden" maxlength="2" disabled aria-disabled="true" min="0" max="59" role="combobox" data-initial-value=""/></div><div class="i9lrp mIZh1c"></div><div jsname="XmnwAc" class="OabDMe cXrdqd"></div></div></div><div class="LXRPh"><div jsname="ty6ygf" class="ovnfwe Is7Fhb"></div></div></div></div></div></div><div jsname="Rfh2Tc" class="SL4Sz" id="i78" role="alert"></div></div></div></div></div><div class="ThHDze" jscontroller="lSvzH" jsaction="rcuQ6b:npT2md;JIbuQc:qV61Ff(X5DuWc),Gl574d(QR6bsb),V3upec(GeGHKb),HiUbje(M2UYVd),NPBnCf(OCpkoe); keydown:duASZc" data-shuffle-seed="8520499409063391775" data-should-execute-invisible-captcha-challenge="false" data-is-receipt-checked="false"><div class="DE3NNc CekdCb"><div class="lRwqcd"><div role="button" class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow jsname="M2UYVd" aria-label="Submit" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac">Senden</span></span></div></div><div class="nYdzXd"><div role="button" class="uArJ5e UQuaGc kCyAyd l3F1ye TFBnVe" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow jsname="X5DuWc" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac">Alle Eingaben löschen</span></span></div></div></div><div class="T2dutf">Geben Sie niemals Passwörter über Google Formulare weiter.</div></div><input type="hidden" name="fvv" value="1"><input type="hidden" name="partialResponse" value="[null,null,&quot;8520499409063391775&quot;]"><input type="hidden" name="pageHistory" value="0"><input type="hidden" name="fbzx" value="8520499409063391775"><input type="hidden" name="submissionTimestamp" value="-1"></div></div></form><div><div class="v1CNvb sId0Ce">Dieser Inhalt wurde nicht von Google erstellt und wird von Google auch nicht unterstützt.  - <a href="https://policies.google.com/terms" target="_blank">Nutzungsbedingungen</a> - <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung</a><p>Does this form look suspicious? <a href="https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg/viewform" target="_blank">Bericht</a></p></div><div class="I3zNcc yF4pU"><a dir="auto" href="//www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms"><img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg" alt="Google" height="24px" width="74px"/>&nbsp;<span class="sUXvCd">Formulare</span></a></div></div></div><div jscontroller="KFVhZe" jsaction="rcuQ6b:npT2md;JIbuQc:feqbab;" class="ZQKQlb"><div role="button" class="U26fgb mUbCce fKz7Od M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="hlkvRb" aria-label="Problem an Google melden" aria-disabled="false" tabindex="0" data-tooltip="Problem an Google melden" data-tooltip-position="right" data-tooltip-vertical-offset="1" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot class="xjKiLb"><span class="Ce1Y1c" style="top: -12px"><div class="foqfDc"><div class="Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-N7Eqid-BvMwwf" aria-hidden="true">&nbsp;</div><div class="Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-N7Eqid-AhqUyc" aria-hidden="true">&nbsp;</div></div></span></span></div></div></div><script nonce="oCiWSFsOpymY5wSdvokvTg">var FB_PUBLIC_LOAD_DATA_ = [null,["Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. ",[[1051703980,"Text Antwortvalidierung","Text Beschreibung",0,[[447061612,null,1,null,[[1,2,["10"],"Benutzerdefinierte Fehlermeldung"]]]],null,null,null,null,[["1CgjHj9dVReCCg1F0IIm2efz9FXS2SZS-XZZuvqn2rJs9xsk",null,[740,416,0]]],null,[null,"Text Antwortvalidierung"],[null,"Text Beschreibung"]],[346828489,"Paragraph Antwortvalidierung",null,1,[[1107940098,null,1,null,[[4,300,["test-regex"],"Benutzerdefinierte Fehlermeldung"]]]],null,null,null,null,[["13qAbSDhex5kMB-siRMYQJ2D3gNTLR23dUb4kGrPZQnnhMZA",null,[740,416,0]]],null,[null,"Paragraph Antwortvalidierung"]],[1992333072,"Multiple Choice",null,2,[[1157076416,[["Option 2",null,null,null,0],["Option 1",null,null,null,0],["",null,null,null,1]],0,null,null,null,null,null,1]],null,null,null,null,null,null,[null,"Multiple Choice"]],[1440133658,"Kästchen",null,4,[[850445315,[["Option 1",null,null,null,0],["",null,null,null,1],["Option 2",null,null,null,0]],0,null,[[7,200,["3"],"Wähle mindestens 3"]],null,null,null,1]],null,null,null,null,null,null,[null,"Kästchen"]],[805559250,null,null,3,[[1027775993,[["Option 3",null,null,null,0],["Option 2",null,null,null,0],["Option 1",null,null,null,0]],0,null,null,null,null,null,1]]],[1490264934,null,null,5,[[689975187,[["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],["10"]],0,["1","10"]]]],[1404518522,"Multiple Choice Raster",null,7,[[1998944172,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 1"],null,null,null,null,null,null,null,[0]],[1508955882,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 2"],null,null,null,null,null,null,null,[0]],[1280973730,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 3"],null,null,null,null,null,null,null,[0]]],null,null,null,null,null,null,[null,"Multiple Choice Raster"]],[922357430,"Kästchenraster",null,7,[[1696404232,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 3"],null,null,null,null,null,null,null,[1]],[2002069781,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 1"],null,null,null,null,null,null,null,[1]],[359578026,[["Spalte 1"],["Spalte 2"],["Spalte 3"]],0,["Zeile 2"],null,null,null,null,null,null,null,[1]]],null,null,1,[[8,205]],null,null,[null,"Kästchenraster"]],[1080413449,"Datum mit Jahr und Zeit",null,9,[[1457880304,null,0,null,null,null,null,[1,1]]],null,null,null,null,null,null,[null,"Datum mit Jahr und Zeit"]],[1819657314,"Zeit",null,10,[[1026699007,null,0,null,null,null,[0]]],null,null,null,null,null,null,[null,"Zeit"]],[1976068243,"Dauer",null,10,[[1782551528,null,0,null,null,null,[1]]],null,null,null,null,null,null,[null,"Dauer"]]],null,null,null,null,null,null,"Testing Form",70,[null,null,null,2,null,null,3],null,null,null,null,[2],null,null,null,null,null,null,null,null,[null,"Diese Form enthält alle unterstützten Elemente von FormGlowUp. Jedes Element wird maximal benutzt, damit das parsing getestet werden kann. "],[null,"Testing Form"]],"/forms","Testing Form",null,null,null,"",null,0,0,null,"",0,"e/1FAIpQLScHg5w-uWRR42MOVBEBZ31tCPEIdFRnYsWriSY8Nk0QEGQ_dg",0,"[]",0,0];</script><script id="base-js" src="https://www.gstatic.com/_/freebird/_/js/k=freebird.v.de._vZehlTgRQg.O/am=HAw/d=1/rs=AMjVe6jHBViYNNOF-Fnb-Ufz84hLhAHNRg/m=viewer_base" nonce="oCiWSFsOpymY5wSdvokvTg"></script></body></html>
`;
