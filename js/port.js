// JUMP TO SECTION
$(document).ready(function() {
	$("nav a,#home a").on("click touchend", function(e) {
		var el = $(this);
		var link = el.attr("href");
		window.location = link;
	});
});
$("nav a[href^=\\#],#home a[href^=\\#]").on("click", function(event) {
	var target = $(this.getAttribute("href"));
	if (target.length) {
		event.preventDefault();
		$("html, body").stop().animate({
			scrollTop: target.offset().top
		}, 800);
	}
});

// MOBILE NAV
$("#nav-mobile-button").click(function() {
	$("ul").toggle();
	$("#nav-mobile-button, .nav-wrap").toggleClass("nav-open");
	if($("#nav-mobile-button.nav-open").is(":visible")) {
		$("#nav-mobile-button").html("<i class='far fa-times'></i>");
	} else {
		$("#nav-mobile-button").html("<i class='far fa-bars'></i>");
	}
});

// HIGHLIGHT ACTIVE LINK
var $sections = $(".active-link");
$(window).scroll(function() {
	var currentScroll = $(this).scrollTop();
	var $currentSection
	$sections.each(function() {
		var divPosition = $(this).offset().top;
		if (divPosition - 1 < currentScroll) {
			$currentSection = $(this);
		}
		var id = $currentSection.attr("id");
		$("a").removeClass("active");
		$("[href=\\#" + id + "]").addClass("active");
	})
});

// NEW NAV

$(window).scroll(function(){
	var newNav = $('#about').offset().top;
	if ($(window).scrollTop() >= newNav) {
		$("nav").addClass("new-nav");
	}
	if ($(window).scrollTop() < newNav) {
		$("nav").removeClass("new-nav");
	}
});

// BTT
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $(".btt").fadeIn();
  } else {
    $(".btt").fadeOut();
  }
});
$(".btt").click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

// MODALS
$(".open-modal").on("click", function() {
	var modal = $(this).data("modal");
	$(modal).show();
  $("html").css("overflow","hidden");
});
$(".project").on("click", function(e) {
	var className = e.target.className;
	if (className === "project" || className === "modal-close") {
		$(this).closest(".project").hide();
    $("html").css("overflow","auto");
	}
});
