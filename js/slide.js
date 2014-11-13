var translideshow1=new translideshow({
	wrapperid: "myslideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [250, 320], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
		["css/xb1.gif"], //["image_path", "optional_link", "optional_target"]
		["css/xb2.jpg"],
		["css/xb3.gif"],
		["css/xb4.jpg"],
		["css/xb5.jpg"],
		["css/pc1.png"],
		["css/pc2.jpg"],
		["css/pc3.jpg"],
		["css/pc4.png"],
		["css/ps1.jpg"],
		["css/ps2.jpg"],
		["css/.jpg"],//<--no trailing comma after very last image element!
	],
	displaymode: {type:'auto', pause:3000, cycles:100, pauseonmouseover:true},
	orientation: "h", //Valid values: "h" or "v"
	persist: true, //remember last viewed slide and recall within same session?
	slideduration: 1000 //transition duration (milliseconds)
})