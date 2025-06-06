// img_box configuration
allow_hide_scroll_img_box = 'no';

window.addEventListener('DOMContentLoaded', (event) => {
	// configures lazy load images
	document.querySelectorAll(".zoomable").forEach(function(img) {
		img.setAttribute("loading", "lazy");
		img.addEventListener('click', function(event) {
			img_box(this);
		});
	});

	// configures links
	document.querySelectorAll("a").forEach(function(link) {
		link.setAttribute('target', '_blank');
	});
});

window.addEventListener("load", () => {
	// configure animations
	document.querySelectorAll(".feature").forEach(function(el) {
		el.setAttribute('data-aos', 'zoom-in');
		el.setAttribute('data-aos-delay', '100');
	});

	document.querySelectorAll(".feature-left").forEach(function(el) {
		el.setAttribute('data-aos', 'fade-right');
		el.setAttribute('data-aos-delay', '100');
	});

	document.querySelectorAll(".feature-right").forEach(function(el) {
		el.setAttribute('data-aos', 'fade-left');
		el.setAttribute('data-aos-delay', '100');
	});

	// init animations
	AOS.init({
		// once: true,
		offset: 150, // offset (in px) from the original trigger point
		delay: 100, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
	});

	// configures zoom images
	document.querySelectorAll(".zoomable").forEach(function(img) {
		img.addEventListener('click', function(event) {
			img_box(this);
		});
	});

	// configure hidden features
	const expand_features_button = document.querySelector("#expand-hidden-features");
	expand_features_button.onclick = function(e) {
		// destroys button
		expand_features_button.remove();

		// gets and shows hidden div
		const hidden_features = document.getElementById("hidden-features-container");
		hidden_features.classList.add("visible");

		// refresh AOS offsets after 1 second
		setTimeout(function() { AOS.refresh(); }, 1050);
	}

	if (!is_mobile()) {
		// configures particle js
		particlesJS("hero", {
			"particles":{
			"number":{
				"value":5,
				"density":{
					"enable":true,
					"value_area":800
				}
			},
			"color":{
				"value":"#ffffff"
			},
			"shape":{
				"type":"image",
				"stroke":{
					"width":0,
					"color":"#000000"
				},
				"polygon":{
					"nb_sides":5
				},
				"image":{
					"src":"./img/logos/world.webp",
					"width":100,
					"height":100
				}
			},
			"opacity":{
				"value":0.5,
				"random":true,
				"anim":{
					"enable":false,
					"speed":1,
					"opacity_min":0.1,
					"sync":false
				}
			},
			"size":{
				"value":200,
				"random":true,
				"anim":{
					"enable":true,
					"speed":40,
					"size_min":0.1,
					"sync":false
				}
			},
			"line_linked":{
				"enable":true,
				"distance":150,
				"color":"#ffffff",
				"opacity":0.4,
				"width":1
			},
			"move":{
				"enable":true,
				"speed":6,
				"direction":"none",
				"random":false,
				"straight":false,
				"out_mode":"out",
				"bounce":false,
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
			},
			"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":true,
					"mode":"repulse"
				},
				"onclick":{
					"enable":true,
					"mode":"push"
				},
				"resize":true
			},
			"modes":{
				"grab":{
					"distance":400,
					"line_linked":{
						"opacity":1
					}
				},
				"bubble":{
					"distance":400,
					"size":40,
					"duration":2,
					"opacity":8,
					"speed":3
				},
				"repulse":{
					"distance":200,
					"duration":0.4
				},
				"push":{
					"particles_nb":4
				},
				"remove":{
					"particles_nb":2
				}
			}
			},
			"retina_detect":true
		});
	}
});

is_mobile = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
  };

