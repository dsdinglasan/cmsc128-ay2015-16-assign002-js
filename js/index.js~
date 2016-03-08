/**
	Author: Dinglasan, Danika Mae S.
	Section: CMSC 128 AB-2L
**/

/*
Given two strings str1 and str2 of same length (length must never be 0 or negative!), the Hamming Distance of those two strings are the number of inversions per character need to transform str1 to str2 or vise-versa. Simply put, the Hamming Distance of two strings is the number of characters that differ in ith position from position 1 to strlen(str1).
*/
function getHammingDistance(str1, str2){
	if(str1.length!=str2.length){//compares the length of the two strings
		alert("Error! Strings are not equal!");
		return null;
	}
	else if(str1===str2){//checks if the strings are equal
		alert("0");
		return 0;
	}
	else{
		var hamming_distance = 0;
		for(var i=0; i < str1.length;i++) {
		    if (str1.charAt(i) !== str2.charAt(i)) {//compares each letter of each strings
		        hamming_distance++;
		    }
		}
		alert(hamming_distance);
		return hamming_distance;
	}
}
/*
Given a string original and pattern, we will count the number of occurrence of pattern in original.
*/
function countSubstrPattern(str, pattern){
	str += "";
    pattern += "";
    if (pattern.length <= 0 || str.length <= 0){//check if the string/pattern entered is valid
    	alert("INVALID!");
    	return null;
    }
	else if(pattern.length<=str.length){//counts the occurences of the pattern
		var count = 0, pos = 0, step=1;//step is needed for the overlapping of patterns
		while (pos>=0) {//while pos is not negative, negative values means that a certain character is not found on the string
		    pos = str.indexOf(pattern, pos);
		    if (pos >= 0) {//increments count if the pattern is found on the string
		        ++count;
		        pos += step;
		    }
		}
		alert(count);
		return count;
    }
    else if(pattern.length>str.length){//check if the string/pattern entered is valid
    	alert("INVALID! Pattern length is greater than the string length");
    	return null;
    }
}
/*
Given an alphabet string where all letters are assumed to be unique, this function returns true if the string str is a valid string based on the letters of alphabet.
*/
function isValidString(str, alphabet){
	var reg = new RegExp("^[" + alphabet + "]+$", "g");//for the regex of the alphabet
	console.log(reg);
	alert(reg.test(str));//tests if the string is valid according to the regex
	return reg.test(str);
}
/*
Given a genome str of some length q (where q>0), it returns the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The value can be zero, negative or positive. The first position is one (1) not zero(0) as we typically associate with string implementations.
*/
function getSkew(str, n){
	var no_g=0;
	var no_c=0;
	if(n>str.length || n < 1){//checks if the inputs are valid
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){//count the number of G
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){//count the number of G
				no_c+=1;
			}
		}
		alert(no_g-no_c);//subtracts the number of Gs to number of Cs
		return (no_g-no_c);
	}
}
/*
Given a genome str of some length q (where q>0), it returns the maximum value of the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The
value can be zero, negative or positive. The first position is one (1) not zero(0) as we typically associate with string implementations.
*/
function getMaxSkewN(str, n){
	var no_g=0;
	var no_c=0;
	var arr = [];
	if(n>str.length || n < 1){//checks if the inputs are valid
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){//count the number of G
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){//count the number of G
				no_c+=1;
			}
			arr.push(no_g-no_c);//subtracts the number of Gs to number of Cs and add it to array arr
		}
		var maximum = Math.max.apply(Math, arr);//get the maximum value in the array
		console.log(maximum);
		alert(maximum);
		return maximum;
	}
}
/*
Given a genome str of some length q (where q>0), it returns the minimum value of the number of Gs minus the number of Cs in the first n nucleotides (q>=n). The
value can be zero, negative or positive. The first position is one (1) not zero(0) as we typically associate with string implementations.
*/
function getMinSkewN(str, n){
	var no_g=0;
	var no_c=0;
	var arr = [];
	if(n>str.length || n < 1){//checks if the inputs are valid
		alert("INVALID value of N!");
		return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){//count the number of G
				no_g+=1;
			}
			else if(str[i].toUpperCase()=='C'){//count the number of G
				no_c+=1;
			}
			arr.push(no_g-no_c);//subtracts the number of Gs to number of Cs and add it to array arr
		}
		var minimum = Math.min.apply(Math, arr);//get the minimum value in the array arr
		console.log(minimum);
		alert(minimum);
		return minimum;
	}
}
