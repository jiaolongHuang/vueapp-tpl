// 时间格式化
Date.prototype.format = function(format){
	format = format || 'yyyy-MM-dd hh:mm:ss';
		
	var d = this;
	var reg = {
		y: d.getFullYear(),
		M: d.getMonth()+1,
		d: d.getDate(),
		h: d.getHours(),
		m: d.getMinutes(),
		s: d.getSeconds()
	};
	Object.keys(reg).forEach(function(key, idx){
		format = format.replace(new RegExp(key+'+'), function(a){
			return ('0000'+reg[key]).slice(0-a.length);
		});
	});
	return format;
};

export const isEmptyObj = (obj) => {
	console.log('test tree sharking1111')
	return Object.keys(obj).length === 0
}

export const deepClone = (data) => {
	console.log('test tree sharking')
	let dType = Object.prototype.toString.call(data)
	let o
	if(dType === '[Object Array]'){
		o = []
	}else if(dType === '[Object Object]'){
		o = {}
	}else {
		return data
	}

	if(dType === '[Object Array]'){
		for(let i = 0, len = data.length; i < len; i++){
			o.push( deepClone(data[i]) )
		}
	}else if(dType === '[Object Object]'){
		for(let i in data){
			o[i] = deepClone( data[i] )
		}
	}
	return o
}

export const getUrlParams = (url, params, part) => {
  let reg = new RegExp("(^|&)"+ params +"=([^&]*)(&|$)"),
    r;
  let search = url.split('?')[1];
  let hash = url.split('#')[1];

	if(part == 'hash'){
		r = hash.match(reg); 
	}else if(part == 'search'){
		r = search.match(reg); 
	}

  return unescape(r[2]) 
}

export const goLogin = (destUrl) => {
  let ref = destUrl || window.location.href
  let _login_url = "gologinUrl"
  window.location.href = `${_login_url}?ref=${ref}`
}
