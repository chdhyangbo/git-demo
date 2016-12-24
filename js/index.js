//基础选择框架
	var kuan = function(){
	}
	kuan.prototype = {
		//杨振了extend拷贝json
		extend:function(tar,sou){
			for(i in sou){
				tar[i]=sou[i];
			}
			return tar;
		}
	}
	//在框架内部实例化对象,外面的使用就不用实例化了.工厂模式
	kuan = new kuan();
	kuan.extend(kuan,{
		//添加方法到此处
		id:function(id){return document.getElementById(id);},
		tag:function(tag){
			return document.getElementsByTagName(tag);
		},
	});
	// kuan.on();
