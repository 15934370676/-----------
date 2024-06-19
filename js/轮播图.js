// 轮播图函数
			function slideshow(){
				var slideshow = document.getElementsByClassName("focus-item");
				 imgs = slideshow.getElementsByTagName("img");    //得到图片
				 page = slideshow.getElementsByTagName("span"); //得到页码
				current = 0;  //当前活跃的图片编号
				
				function slideOff(){
					imgs[current].className="";  //图片淡出
					page[current].className="";
				}
				
				function slideOn(){
					imgs[current].className="active";  //图片淡入
					page[current].className="active";
				}
				//切换图片的函数
				function changeSlide(){
					slideOff();
					current++;  //自增一
					if(current>=4){
						current = 0;
					}
					slideOn();
				}
				// 每2秒调用一次changeslde函数进行图片轮播
				var slideon = setInterval(changeSlide,2000)
				// 当鼠标移入的时候清楚轮播事件
				slideshow.onmouseover=function(){
					clearInterval(slideon);
				}
				// 当鼠标移出的时候重新开始轮播事件
				slideshow.onmouseout=function(){
					slideon = setInterval(changeSlide,2000)
				}
				for(var i =0;i<page.length;i++){
					page[i].onmouseover=function(){
						slideOff();
						// 得到鼠标停留的页码对应的current
						current=this.innerHTML-1;
						slideOn();
					}
				}
			}
			slideshow();