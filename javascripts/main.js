var headUrl = 'http://bi0morph.github.io/ajax2/';
var htmlList = ['box1.html', 'box2.html', 'box3.html'];

$.when($.ajax('box1.html'), $.ajax('box2.html')).done(function(args1, args2) { 
	$('.wrapper').append(args1); 
	$('.wrapper').append(args2); 
	$(".box1").animate({
        left: "200px",
      }, 1500 );
	$(".box2").animate({
        right: "200px",
      }, 1500 );
});
// var someDeffered = $.ajax(headUrl + htmlList[0]);
// 	someDeffered.then(function(result){

	   
// 	    $('.wrapper').append(result);
// 	    return $.ajax(headUrl + htmlList[1])

// 	}).then(function(result){

	   
// 	    $('.wrapper').append(result);
// 	    return $.ajax(headUrl + htmlList[2])

// 	}).then(function(result) {
// 		$('.wrapper').append(result);
		
//     });
// 	});

// var jsonList = ['some1.json', 'some2.json', 'some3.json'];

// function loadJSONFiles(element) {
// 	$.ajax({
// 		dataType: 'json',
// 		method: 'GET',
// 		url: headUrl + element,
// 		success: function(data) {
// 			var wrapDiv = $('<div>');
// 			wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.desc + '</p>');		
// 			$('section').append(wrapDiv);
// 		},
// 		error: function(data) {
// 		  console.error(data);
// 		}
// 	});
// }
// jsonList.forEach( loadJSONFiles );

// var imgArray = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

// function loadImages (element) {
// 	var img = new Image();
// 	img.src = element;
// 	img.onload = function() {
// 		$('section').append(img);
// 	};	
// }
// imgArray.forEach(loadImages);
