jQuery( document ).ready( function( $ ) {
	var bb = null
	var has_remove = function() {
		$( '.highlight-and-share-wrapper:visible' ).remove();
	};
	var cc = '<script type="text/javascript">console.log("5")</script>'+
	'<div class="has-content-area" data-url="http://192.168.3.88/bit/?p=1314" data-title="<div class=&quot;erm-title-wrapper&quot;>接近央行人士：比特币挖矿没存在价值 但不可能关停</div>"><p id="inline-popup" data-incom="P0"><a data-effect="mfp-move-from-top" class="erm-btn erm-popup-btn" href="#erm-popup-link"><button class="erm-btn-final"><span>Reading Mode</span></button></a></p><div class="erm-content-wrapper"><p data-incom="P1">接近央行人士表示，用规范一词形容矿场的未来并不准确，规范有让其发展的意思。但是从比特币矿场现在的现状来看，一是风险较大，二是挤压实体经济，所以，这个东西（<u>比特币挖矿</u>）没有存在的价值。</p>'
+'<p data-incom="P2"><img src="http://192.168.3.88/bit/wp-content/uploads/20180105/1-1P105110932361.jpg" data-tag="bdshare" data-action="zoom"></p>'+'<p data-incom="P3"><u>比特币价格</u>在过山车似的涨跌循环中，监管当局对比特币的关注已经从提示风险、关闭交易平台再到比特币的源头矿场。</p>'
+'<p data-incom="P4">针对近日有关央行就比特币矿场召开闭门会议的报导，记者获悉，该会议子虚乌有，而关于挖矿的会议召开的准确时间点是去年四季度。接近央行人士向记者表示，在2017年10月份之后，央行召集互联网金融专项整治小组以及相关的部门，就比特币矿场进行沟通。</p>'
+'<p data-incom="P5">据了解，目前国内<u>比特币挖矿</u>主要是以组织进行，随着矿越来越少，挖矿的成本越来越高，而在成本不断抬升的同时，有些挖矿公司还是未经注册的黑作坊。特别是在西北部地区，由于水电、风力等发电优势，使得一些黑作坊借助未并入电网的小电站的低电价从事挖矿生意，而选择西北部还有一个重要的原因凉爽的天气优势。</p>'
+'<p data-incom="P6">闪电智能CEO 廖翔告诉记者，中国目前生产了全球70%-80%的矿机。主要分布在新疆、内蒙、四川、贵州和云南。</p>'
+'<p data-incom="P7">根据火币旗下区块浏览器数据显示，目前中国比特币算力占比约64%。一位矿机生产商向记者表示，他们矿机生产订单已经排到今年下半年去了</p>'
+'<p data-incom="P8">上述接近央行人士向记者表示，用规范一词形容矿场的未来并不准确，规范有让其发展的意思。但是从比特币矿场现在的现状来看，一是风险较大，二是挤压实体经济，所以，这个东西（<u>比特币挖矿</u>）没有存在的价值。</p>'
+'<p data-incom="P9">“监管的态度肯定是否定态度，最终的想法是希望其消失，而不是规范，因为其没有存在的必要性，并不是一个有用的业态。”上述接近央行认识坦言。但是，央行不可能关停，一是不太符合行政习惯，挖矿本身是计算机在计算，关它也是没有依据，限期关停的说法也不严谨。</p>'
+'<p data-incom="P10">从目前的分析来看，挖矿的企业主要存在以下问题：从宏观来讲对实体经济作用有限；耗电很多；有安全生产隐患；有的都没有工商注册，存在偷税漏税情况；利润暴涨，挖矿成本越来越高。</p>'
+'<p data-incom="P11">能源<u>区块链实验室</u>首席战略官曹寅表示，<u>比特币挖矿</u>成本没有人们想象中的低，取决于电费、矿机价格、矿场规模，基本上在6000-10000美元之间。也就是说，按目前比特币的价格来看，挖矿的利润率在40%-66%之间。</p>'
+'<p data-incom="P12">在此问题上，比特币矿企是否属于金融范畴也引起一系列探讨，某互联网金融研究者向记者表示，<u>比特币挖矿</u>是以一种身份切入金融当中，当下，比特币已经成为商品期货，具备一级市场的功能身份嵌入到交易环节。那么，从金融角度出发，观察到了潜在的，用金融和非金融协调的方式监管，并扼杀在萌芽中，这是互联网金融协调机制和其他不一样的地方，从这个角度出发，协调所有资源，没有空白。</p>'
+'<p data-incom="P13">从金融的角度来看，虽然挖矿理论不像交易所涉及到集资，涨跌都会给投资者带来风险，但是挖的东西本身就是一个交易标的，而且，成本逐渐提高，也助长了二级市场<u>比特币价格</u>的推升，同时价格严重偏离了公允价格，价格畸形，对二级市场的暴涨暴跌有推动作用，一定程度上助推二级市场风险。</p>'
+'<p data-incom="P14">曹寅表示，比特币本<ins id="1519911260521" comment="评论" class="postil">身已经是一种金融资产，正如石油一样，定价权取决于生产地和交易所。“比特币矿场是中国未来争取全球数字资产定价权的一个重要砝码”。电费、矿机折旧成本。矿机处于军备竞赛阶段，算力一直在增加，主要是专用集权电力芯片ASIC。比特</ins>币矿机这个产业现在越来越专业了。规模也越来越大。</p>'
+'<p data-incom="P15">能源<u>区块链实验室</u>首席<ins id="1519911261884" comment="评论" class="postil">战略官曹寅表示，对矿业没有根本性的影响，还是成本上的影响。包括电费、税、土地等。这个消息利好大矿主，地方上会限制新的进入</ins>者。建立了一个政策壁垒。</p>'
+'<p data-incom="P16">闪电智能CEO 廖翔表示，目前监管的态度会导致整个产业成本提升。“外部干扰会加强，包括地方政府和配套企业，比如供应商可能会加价。地方政府可能出现权力寻租。”应对的措施是全球化。（财经杂志）</p>'
+'</div></div>'

+'<input type="button" value="加载批注"">'
	function getRightClick(e) {
		var rightclick;
		if (!e) var e = window.event;
		if (e.which) rightclick = (e.which == 3);
		else if (e.button) rightclick = (e.button == 2);
			return rightclick; // true or false
	}
	var has_selected_text = '';
	
	var has_load_html = function() {
		if ( highlight_and_share.icons == true ) {
			var html = '<div class="highlight-and-share-wrapper" style="display: none">';
		} else {
			var html = '<div class="highlight-and-share-wrapper has-icons" style="display: none">';
		}
		var html = '<div class="highlight-and-share-wrapper">';
			html += '<button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu u-accentColor--highlightStrong js-highlightMenuQuoteButton is-touched" data-action="quote" data-action-source="quote_menu--------------------------highlight_text"><span class="svgIcon svgIcon--highlighter svgIcon--25px"><svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M13.7 15.964l5.204-9.387-4.726-2.62-5.204 9.387 4.726 2.62zm-.493.885l-1.313 2.37-1.252.54-.702 1.263-3.796-.865 1.228-2.213-.202-1.35 1.314-2.37 4.722 2.616z" fill-rule="evenodd"></path></svg></span></button>'
		// if ( highlight_and_share.show_twitter && '' != highlight_and_share.twitter_username ) {
		// 	if ( highlight_and_share.icons == true ) {
		// 		html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="https://twitter.com/intent/tweet?via=%username%&url=%url%&text=%text%" target="_blank"><i class="fa fa-twitter"></i>&nbsp;' + highlight_and_share.tweet_text + '</a></div>';
		// 	} else {
		// 		html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="https://twitter.com/intent/tweet?via=%username%&url=%url%&text=%text%" target="_blank"><i class="fa fa-twitter"></i></a></div>';

		// 	}
		if ( highlight_and_share.show_twitter && '' != highlight_and_share.twitter_username ) {
			if ( highlight_and_share.icons == true ) {
				html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="http://v.t.sina.com.cn/share/share.php?via=%username%&url=%url%&title=%text%" target="_blank"><i class="fa fa-weibo"></i>&nbsp;' + highlight_and_share.tweet_text + '</a></div>';
			} else {
				html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="http://v.t.sina.com.cn/share/share.php?via=%username%&url=%url%&title=%text%" target="_blank"><i class="fa fa-weibo"></i></a></div>';

			}
			
		} else if( highlight_and_share.show_twitter && '' == highlight_and_share.twitter_username ) {
			if ( highlight_and_share.icons == true ) {
				   html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="http://v.t.sina.com.cn/share/share.php?url=%url%&title=%text%" target="_blank"><i class="fa fa-weibo"></i>&nbsp;' + highlight_and_share.tweet_text + '</a></div>';
			 } else {
				html += '<div class="has_twitter" style="display: none;" data-type="twitter"><a href="http://v.t.sina.com.cn/share/share.php?url=%url%&title=%text%" target="_blank"><i class="fa fa-weibo"></i></a></div>'; 
			 }
		}
		if ( highlight_and_share.show_facebook ) {
			if ( highlight_and_share.icons == true ) {
				//Note, you must be on a publicly accesible URL to use this button
				if ( '0' === highlight_and_share.facebook_app_id ) {
		 			html += '<div class="has_facebook" style="display: none;" data-type="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=%url%&t=%title%" target="_blank"><i class="fa fa-facebook"></i>&nbsp;' + highlight_and_share.facebook_text + '</a></div>';
				} else {
		 			html += '<div class="has_facebook" style="display: none;" data-type="facebook"><a href="https://www.facebook.com/dialog/share?app_id=' + highlight_and_share.facebook_app_id + '&display=popup&amp;quote=%text%&href=%url%" target="_blank"><i class="fa fa-facebook"></i>&nbsp;' + highlight_and_share.facebook_text + '</a></div>';
				}
				
			} else {
				 if ( '0' === highlight_and_share.facebook_app_id ) {
					html += '<div class="has_facebook" style="display: none;" data-type="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=%url%&t=%title%" target="_blank"><i class="fa fa-facebook"></i></a></div>';
				  } else {
				  	html += '<div class="has_facebook" style="display: none;" data-type="facebook"><a href="https://www.facebook.com/dialog/share?app_id=' + highlight_and_share.facebook_app_id + '&display=popup&amp;quote=%text%&href=%url%" target="_blank"><i class="fa fa-facebook"></i></a></div>';
				  }
				
			}
		}
		if ( highlight_and_share.show_linkedin ) {
			if ( highlight_and_share.icons == true ) {
				//Note, you must be on a publicly accesible URL to use this button
				html += '<div class="has_linkedin" style="display: none;" data-type="linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%" target="_blank"><i class="fa fa-linkedin"></i>&nbsp;' + highlight_and_share.linkedin_text + '</a></div>';
			} else {
				html += '<div class="has_linkedin" style="display: none;" data-type="linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%" target="_blank"><i class="fa fa-linkedin"></i></a></div>';
			}
		}
		
		//={URI-encoded URL of the page to pin}&media={URI-encoded URL of the image to pin}&description={optional URI-encoded description}"
		if ( highlight_and_share.show_pinterest ) {
			if ( highlight_and_share.icons == true ) {
				//Note, you must be on a publicly accesible URL to use this button
				html += '<div class="has_pinterest" style="display: none;" data-type="pinterest"><a href="http://pinterest.com/pin/create/button/?url=%url%&description=%title%" target="_blank"><i class="fa fa-pinterest"></i>&nbsp;' + highlight_and_share.pinterest_text + '</a></div>';
			} else {
				html += '<div class="has_pinterest" style="display: none;" data-type="pinterest"><a href="http://pinterest.com/pin/create/button/?url=%url%&description=%title%" target="_blank"><i class="fa fa-pinterest"></i></a></div>';
			}
		}
		
		//={URI-encoded URL of the page to pin}&media={URI-encoded URL of the image to pin}&description={optional URI-encoded description}"
		// if ( highlight_and_share.show_xing ) {
		// 	if ( highlight_and_share.icons == true ) {
		// 		//Note, you must be on a publicly accesible URL to use this button
		// 		html += '<div class="has_xing" style="display: none;" data-type="xing"><a href="https://www.xing.com/spi/shares/new?url=%url%" target="_blank"><i class="fa fa-xing"></i>&nbsp;' + highlight_and_share.xing_text + '</a></div>';
		// 	} else {
		// 		html += '<div class="has_xing" style="display: none;" data-type="xing"><a href="https://www.xing.com/spi/shares/new?url=%url%" target="_blank"><i class="fa fa-xing"></i></a></div>';
		// 	}
		// }
		if ( highlight_and_share.show_xing ) {
			if ( highlight_and_share.icons == true ) {
				//Note, you must be on a publicly accesible URL to use this button
				html += '<div class="has_xing" style="display: none;" data-type="xing"><a href="" class="incom-bubble-link">+<i class="fa fa-xing"></i>&nbsp;' + highlight_and_share.xing_text + '</a></div>';
			} else {
				html += '<div class="has_xing" style="display: none;" data-type="xing"><a href="" class="incom-bubble-link">+<i class="fa fa-xing"></i></i></div>';
			}
		}

		
		if ( highlight_and_share.show_email ) {
			if ( highlight_and_share.icons == true ) {
				//Note, you must be on a publicly accesible URL to use this button
				html += '<div class="has_email" style="display: none;" data-type="email"><a href="' + highlight_and_share.email_url + '" target="_blank"><i class="fa fa-envelope"></i>&nbsp;' + highlight_and_share.email_text + '</a></div>';
			} else {
				html += '<div class="has_email" style="display: none;" data-type="email"><a href="' + highlight_and_share.email_url + '" target="_blank"><i class="fa fa-envelope"></i></a></div>';
			}
		}
		// html += '<a class="highlightMenu-arrowClip"><b class="highlightMenu-arrow"></b></a>';
	
		html += '</div><!-- #highlight-and-share-wrapper -->';
		$( 'body' ).append( html );
	};
	var obj= {}
	
	//Initialize events
	var mt = 0;
	var js_content = highlight_and_share.content;
	if ( '' == js_content ) return;
	$( 'body' ).on( 'mouseup vmouseup', js_content, function( e ) {
		e.stopPropagation();
		textObj = e.target;
		has_remove();
		var selection = window.getSelection();
		var text = selection.toString();
		var title = '';
		console.log(selection);
		var t = $(event.target);
		var st = selection.toString();
		if ( '' == text ) {
			return;
		}
		// selectedText = "<span style='background:linear-gradient(to bottom,rgba(12,242,150,.5),rgba(12,242,150,.5));'>" + text + "</span>";

		// var start = window.getSelection().anchorOffset;
		// var end = window.getSelection().focusOffset;

		// var tempStr1 = textObj.innerHTML.substring(0, start);
		// var tempStr2 = textObj.innerHTML.substring(end);
		// textObj.innerHTML = ""
		// textObj.innerHTML = tempStr1 + selectedText + tempStr2;

		addPostil();
			// get the mouse top position when the selection ends
			mts = $('body').attr('mouse-top');
			// console.log(mts);
			mte = event.clientY+window.pageYOffset;
			if(parseInt(mts) < parseInt(mte)) mt = mts;
				else mt = mte;

			// get left mouse position when the selection ends
			mlp = $('body').attr('mouse-left');
			mrp = event.clientX;
			ml = parseInt(mlp)+(parseInt(mrp)-parseInt(mlp))/2;
	
		//Get URL
		var href = $( this ).attr( 'data-url' );
		if (typeof href == typeof undefined || href == false) {
			href = $( location ).attr( 'href' );
		}
		
		//Get Title
		var title = $( this ).attr( 'data-title' );
		if (typeof title == typeof undefined || title == false) {
			title = $( document ).attr( 'title' );
		}
		 
		has_display( text,ml,mt,title, href, e  );
	} );

	//添加批注
function addPostil() {
	//IE支持的range对象
	var ie_range ;
	//其他浏览器的range对象
	var other_range ;
	if(window.getSelection) {
		other_range = window.getSelection().getRangeAt(0);
		console.log(other_range);
	}
	else if(document.selection && document.selection.createRange) {
		ie_range = document.selection.createRange();
	}
	
	// art.dialog({
	// 	id:'inputDialog', 
	// 	title:'添加批注', 
	// 	content:'<textarea id="postil" rows="10" cols="30"></textarea>',
	// 	lock:true
	
	// }, 
	// function(){
	// 	var value = document.getElementById("postil").value;
	// 	if(!value){
	// 		art.dialog({
	// 			content:'批注内容不能为空！', time: 1
	// 		});
	// 		return false;
	// 	}
	var value = '评论';
		if(other_range) {
			/*
			//IE之外的浏览器，如果在选择内容包含其他标签的一部分的时候会报异常
			var mark = document.createElement("ins");
			mark.setAttribute("comment", value);
			mark.className = "postil";
			mark.id=new Date().getTime();
			other_range.surroundContents(mark);
			*/
			var selected = other_range.extractContents().textContent;
			console.log(selected)
			
			var text = "[ins id='"+(new Date().getTime())+"' comment='"+value+"']"+selected+"[/ins]";
			var textNode = document.createTextNode(text);
			other_range.insertNode(textNode);
			var content = $(".article-content").html();
			var reg = /\[ins id='(\d*)' comment='([\w\W]*)']([\w\W]*)\[\/ins]/gi;
			reg.test(content);
			var id = RegExp.$1,
			comment = RegExp.$2,
			c = RegExp.$3;
			var reHtml = "<ins id='"+id+"' comment='"+comment+"' class='postil' >"+c+"</ins>";
			content = content.replace(reg, reHtml);
			$(".article-content").html(content);
		}
		else if(ie_range) {
			ie_range.pasteHTML("<span comment='"+value+"' class='postil' id='"+new Date().getTime()+"'>"+ie_range.htmlText+"</span>");
			ie_range=null;
		}
		console.log($(".article-content").html())
		var loader=loader;
	// });
}

$('#btn').click(function(){
	$(".article-content").html(cc);
})
//解析批注
function loader(){
	$(".article-content").html()
	// var $list = $(".list");
	// $list.children().remove();
	// $.each($(".content ins"), function(a, b){
	// 	var content = $(b).attr("comment");
	// 	var $postil = $("<div forid='"+$(b).get(0).id+"'>"+content+"<span onClick='removePostil(this)'>　　x</span></div>");
	// 	$postil.hover(function(){
	// 		$(this).css("border-color", "red");
	// 		$("#"+$(this).attr("forid")+"").removeClass().addClass("postilFocus");
	// 	}
	// 	,
	// 	function(){
	// 		$(this).css("border-color", "#ddd");
	// 		$("#"+$(this).attr("forid")+"").removeClass().addClass("postil");
	// 	});
	// 	$(b).hover(function(){
	// 		$(this).removeClass().addClass("postilFocus");
	// 		$("div[forid='"+$(this).get(0).id+"']").css("border-color", "red");
	// 	}
	// 	,
	// 	function(){
	// 		$(this).removeClass().addClass("postil");
	// 		$("div[forid='"+$(this).get(0).id+"']").css("border-color", "#ddd");
	// 	});
	// 	$list.append($postil);
	// });
}
	
	$( 'body' ).on( 'mousedown vmousedown', function( e ) {
		$('body').attr('mouse-top',event.clientY+window.pageYOffset); //-> sets up the top value as attribute on body tag.
		$('body').attr('mouse-left',event.clientX); //-> sets up the left value as attribute on body tag.
		// console.log(event.clientX)
		// var dd =String(e.target.getAttribute('data-incom'));
		// console.log(e.target.getAttribute('data-incom'))
		// console.log(typeof dd);
		// if(dd != "null"){
		// 	cc = dd;
		// }
		
		// bb = $('.incom-bubble[data-incom-bubble="'+e.target.getAttribute('data-incom')+'"]')
		
		has_get_selection();
	} );
	document.addEventListener("selectionchange", function() {
		has_get_selection();
	}, false);

	$( 'body' ).on( 'click', '.has_twitter a', function( e ) {
		e.preventDefault();
		this.href = this.href.replace( '%text%', encodeURIComponent( has_selected_text ) );
		window.open( this.href,"tweethighlight","width=575,height=430,toolbar=false,menubar=false,location=false,status=false");
		has_remove();
		return false;
	} );
	$( 'body' ).on( 'click', '.has_facebook a', function( e ) {
		e.preventDefault();
		this.href = this.href.replace( '%text%', encodeURIComponent( has_selected_text ) );
		window.open( this.href,"sharer","width=575,height=430,toolbar=false,menubar=false,location=false,status=false");
		has_remove();
	} );
	$( 'body' ).on( 'click', '.has_linkedin a', function( e ) {
		e.preventDefault();
	window.open( this.href,"linkedin","width=575,height=430,toolbar=false,menubar=false,location=false,status=false");
		has_remove();
	} );
	$( 'body' ).on( 'click', '.has_pinterest a', function( e ) {
		e.preventDefault();
	window.open( this.href,"pinterest","width=575,height=430,toolbar=false,menubar=false,location=false,status=false");
		has_remove();
	} );
	$( 'body' ).on( 'click', '.has_xing a', function( e ) {
		e.preventDefault();
	
		// console.log(bb);
		// bb.click();
		// console.log(e.target)
	// window.open( this.href,"xing","width=575,height=430,toolbar=false,menubar=false,location=false,status=false");
		
	} );
	$( 'body' ).on( 'click', '.has_email a', function( e ) {
		e.preventDefault();
	window.open( this.href,"email","width=350,height=300,toolbar=false,menubar=false,location=false,status=false");
		has_remove();
	} );
	
	var has_get_selection = function() {
		var selection = window.getSelection();
		var text = selection.toString();
		if ( '' == text ) {
			return;
		} else {
			has_selected_text = text;
		}
	};
	
	var has_display = function( text,ml,mt, title, link, e ) {
		if ( false == highlight_and_share.show_twitter && false == highlight_and_share.show_facebook && false == highlight_and_share.show_linkedin && false == highlight_and_share.show_pinterest && false == highlight_and_share.show_email ) {
			return;
		}
		
		wrapper_clone = $( '.highlight-and-share-wrapper:last' ).clone();
		var wrapper_x = e.pageX - 190;
		var wrapper_y = e.pageY - 70;
		if ( highlight_and_share.mobile ) {
			wrapper_x = e.pageX;	
			wrapper_y = e.pageY + 20;
		}
		
		wrapper_clone.css( { position: 'absolute', display: 'block', left: parseInt(ml)-50, top: parseInt(mt)-54, width: 'auto', height: 'auto', 'z-index': 10000 } );
		wrapper_clone.prepend(bb);
		
		$children = wrapper_clone.find( 'div' );
		$.each( $children, function( index, item ) {
			var div = $( this );
			var url = div.find( 'a' ).attr( 'href' );
			url = url.replace( '%url%', encodeURIComponent( link ) );
			url = url.replace( '%username%', encodeURIComponent( highlight_and_share.twitter_username ) );
			url = url.replace( '%title%', encodeURIComponent( title ) );
			div.find( 'a' ).attr( 'href', url );
			var css_class = div.attr( 'class' );
			wrapper_clone.find( '.' + css_class ).attr( 'style', 'display: inline-block' ).html( div.html() );
			
		} );
				
		//Add to document
		$( 'body' ).append( wrapper_clone );
		// $('.has_xing').click(function(e){
		// 	e.preventDefault();
		// 	console.log(e.target.parentNode);
		// 	console.log(cc);
		// 	ll = $('.incom-bubble[data-incom-bubble="'+cc+'"]').eq(0);
		// 	ll.bind('click',function(){

		// 	})
		// 	console.log($('.incom-bubble[data-incom-bubble="'+cc+'"]')[0]);
		// 	$('.incom-bubble[data-incom-bubble="'+cc+'"]')[0].style.display='block';
		// 	ll.click();
			
		
		// 	has_remove();
		// 	ll = null;
		// })	

	};
	if ( highlight_and_share.show_twitter == true || highlight_and_share.show_facebook == true || highlight_and_share.show_linkedin == true || highlight_and_share.show_pinterest == true || highlight_and_share.show_email == true) {
		has_load_html();
	}

} );
