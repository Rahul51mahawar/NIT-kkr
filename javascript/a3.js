
	$(document).ready(function(e) {
		$(".form2").hide();
		$(".S").css({
				"background-color":"#008585"
			});
		$(".nev3").css({
				"background-color":"#eee"			
			});
		$(".a3").css({
					"color":"#006c6c"
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
	})
