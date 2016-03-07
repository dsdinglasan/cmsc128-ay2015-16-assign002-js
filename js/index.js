function getHammingDistance(str1, str2){
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	if(str1.length!=str2.length){
		alert("Error! Strings are not equal!");
		return null;
	}
	else if(str1===str2){
		alert("0");
		return 0;
	}
	else{
		var hamming_distance = 0;
		for(var i=0; i < str1.length;i++) {
		    if (str1.charAt(i) !== str2.charAt(i)) {
		        hamming_distance++;
		    }
		}
		alert(hamming_distance);
		return hamming_distance;
	}
}

function countSubstrPattern(str, pattern){
	str = str.toUpperCase();
	pattern = pattern.toUpperCase();
	str += "";
    pattern += "";
    if (pattern.length <= 0 || str.length <= 0){
    	alert("INVALID!");
    	return null;
    }
	else if(pattern.length<=str.length){
		var n = 0, pos = 0, step=1;
		while (pos>=0) {
		    pos = str.indexOf(pattern, pos);
		    if (pos >= 0) {
		        ++n;
		        pos += step;
		    }
		}
		alert(n);
		return n;
    }
    else if(pattern.length>str.length){
    	alert("INVALID! Pattern length is greater than the string length");
    	return null;
    }
}

function isValidString(str, alphabet){
	var small_regex = /[a-z]+/g;
	var capital_regex = /[A-Z]+/g;
	var number_regex = /[0-9]+/g;
	var special_regex = /[^A-Za-z0-9]+/g;
	var final_regex = "^[";
	var count=0;
	if(small_regex.test(alphabet)==true){
		final_regex+="a-z";
		console.log("small");
	}
	else if(capital_regex.test(alphabet)==true){
		final_regex+="A-Z";
		console.log("capital");
	}
	else if(number_regex.test(alphabet)==true){
		final_regex+="0-9";
		console.log("number");
	}
	else if(special_regex.test(alphabet)==true){
		final_regex+="^A-Za-z0-9";
		console.log("special");
	}
	final_regex+="]*$";
	var re = new RegExp(final_regex);
	alert(re.test(str));
	return re.test(str);
}

function getSkew(str, n){
	var no_g=0;
	var no_c=0;
	if(n>str.length || n < 1){
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){
				no_c+=1;
			}
		}
		alert(no_g-no_c);
		return (no_g-no_c);
	}
}

function getMaxSkewN(str, n){
	var no_g=0;
	var no_c=0;
	var arr = [];
	if(n>str.length || n < 1){
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){
				no_c+=1;
			}
			arr.push(no_g-no_c);
		}
		var maximum = Math.max.apply(Math, arr);
		console.log(maximum);
		alert(maximum);
		return maximum;
	}
}

function getMinSkewN(str, n){
	var no_g=0;
	var no_c=0;
	var arr = [];
	if(n>str.length || n < 1){
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){
				no_c+=1;
			}
			arr.push(no_g-no_c);
		}
		var minimum = Math.min.apply(Math, arr);
		console.log(minimum);
		alert(minimum);
		return minimum;
	}
}
