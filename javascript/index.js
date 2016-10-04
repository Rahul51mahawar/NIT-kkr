	$(document).ready(function(e) {
		$(".form2").hide();
		$(".S").css({
				"background-color":"#008585"
			});
		$(".nev1").css({
				"background-color":"#008585"
			});
		$(".S").click(function() {
			$(".form2").hide();
			$(".form1").show();
		})
		$(".O").click(function() {
			$(".form1").hide();
			$(".form2").show();
		})
		$(".S").click(function(){
  		 	$(".S").css({
				"background-color":"#008585"
			});
			$(".O").css({
				"background-color":"#005353"
			});
 		});
		$(".O").click(function(){
  		 	$(".O").css({
				"background-color":"#008585"
			});
			$(".S").css({
				"background-color":"#005353"
			});
 		});
	})// JavaScript Document