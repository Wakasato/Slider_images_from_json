//Main Visual
//成功コールバック内でslickの関数を呼び出し
  $.ajax({
    url: 'asset/data/main_visual.json',
    dataType: 'json',
    type : 'GET',
    success: function(data){
			var setString = '';
			for (var i = 0; i < data.length - 1; i++){
				setString += '<li>\n';
				setString += '<a href="' + data[i].url + '"><img src="./asset/img/main_visual/' + data[i].src + '" alt="'+ data[i].title +'"></a>\n';
				setString += '</li>\n';
			}
			$('#main_visual').append(setString);
			delete data;
		},
    error : function(data){
			alert('Main Visualデータの読込に失敗しました。');
		},
			complete : function(){
				// スライダーの設定
				$('#main_visual').slick({
          dots: true,
          lazyLoad: 'ondemand', // ondemand progressive anticipated
          infinite: true,
          autoplay: true,
          autoplaySpeed:4000,
          arrows:false,
				});
		}
  })

    //slider
    $.ajax({
      url: 'asset/data/slider.json',
      dataType: 'json',
      type : 'GET',
      success: function(data){
        var setString = '';
        for (var i = 0; i < data.length - 1; i++){
          setString += '<li>\n';
          setString += '<a href="' + data[i].url + '"><img src="./asset/img/slider/' + data[i].src + '" alt="'+ data[i].title +'"></a>\n';
          setString += '</li>\n';
        }
        $('#slider').append(setString);
        delete data;
      },
      error : function(data){
        alert('slider データの読込に失敗しました。');
      },
        complete : function(){
          // スライダーの設定
          $('#slider').slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            swipe:true
          });
          $('#slider').slick("slickSetOption", "slidesToScroll", 4, true);
      }
    })
  


    // slider slick setting
    $(".slick_center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipe:true
    });

    $('.slick_center').slick("slickSetOption", "slidesToScroll", 4, true);
  
