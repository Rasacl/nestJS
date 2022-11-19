$(function () {
	app.init()
})

var app = {
	init: function () {
		this.slideToggle()

	},
	resizeIframe() {
		// 获取浏览器高度
		let sreenHeight = $(window).height()
		// 设置iframe的高度
		$("#rightMain").height(sreenHeight -80)

	},

	slideToggle() {
		$('.aside h4').click(function () {
			$(this).siblings('ul').slideToggle();
		})
	}
}

window.onresize = function () {
	app.resizeIframe()
}
