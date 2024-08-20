function numberchkyear(input,kbevent){
	var sel=input.value;
	if(sel.length<4){
		var keyCode,keyChar;
		keyCode=kbevent.keyCode;
		if(window.event)
			keyCode=kbevent.keyCode;
		else
			keyCode=kbevent.which;
		if(keyCode==null)return true;
		keyChar=String.fromCharCode(keyCode);
		var charSet="0123456789";
		if(charSet.indexOf(keyChar)!=-1){
			if(input.value=="" && charSet.indexOf(keyChar)==0)
			return false;
			return true;
		}
		if(keyCode==null || keyCode==0 || keyCode==8 || keyCode==9 || keyCode==13 || keyCode==27) return true;
	}
	if(keyCode==null || keyCode==0 || keyCode==8 || keyCode==9 || keyCode==13 || keyCode==27) return true;
	
	return false;
}
function numberchk(input,kbevent){
	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	keyChar=String.fromCharCode(keyCode);
	var charSet="0123456789";
	if(charSet.indexOf(keyChar)!=-1){
		if(input.value=="" && charSet.indexOf(keyChar)==0)
		return false;
		return true;
	}
	if(keyCode==null || keyCode==0 || keyCode==8 || keyCode==9 || keyCode==13 || keyCode==27) return true;
	return false;
}
function numberchkAmount(input,kbevent){
	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	keyChar=String.fromCharCode(keyCode);
	var charSet="0123456789.";
	if(charSet.indexOf(keyChar)!=-1){
		return true;
	}
	if(keyCode==null || keyCode==0 || keyCode==8 || keyCode==9 || keyCode==13 || keyCode==27) return true;
	return false;
}
function checkMalAlpha(input,kbevent){
	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=3330 && keyCode<=3405)||(keyCode==3415) || (keyCode==8205) || keyCode==32 || keyCode==46 || keyCode==8 ||keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46){
		if((input.value=="") && (keyCode==32))return false;
		return true;			
	}
	return false;
}
function checkEngAlpha(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=65 && keyCode<=90) || (keyCode>=97 && keyCode<=122) || keyCode==32 || keyCode==46 || keyCode==8 || keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46){
		if(input.value=="" && (keyCode==32))return false;
		return true;			
	}
	return false;
}

function checkGoogleEngOnly(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z. ]/g, '')) }); 
}
function checkGoogleNumOnly(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^0-9.]/g, '')) }); 
   return true;
}
function checkGoogleEngnumericOnly(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z0-9(-)/. -]/g, '')) }); 
}
function checkGoogleEngnumericcharOnly(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z0-9(-)/., ]/g, '')) }); 
}
function checkEngAlphawithnumber(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=48 && keyCode<=57)|| (keyCode>=65 && keyCode<=90) || 
	(keyCode>=97 && keyCode<=122) || keyCode==32 || keyCode==46 ||
	 keyCode==8 || keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46){
		if(input.value=="" && (keyCode==32))return false;
		return true;			
	}
	return false;
}

function checkMalAlphawithNO(input,kbevent){
	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=3330 && keyCode<=3405)||(keyCode==3415) || (keyCode==8205) || keyCode==32 || keyCode==46 || keyCode==8 ||keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46 || (keyCode>47 && keyCode<58)){
		if((input.value=="") && (keyCode==32))return false;
		return true;			
	}
	return false;
}

function checkMalAlphawithNOspcial(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=3330 && keyCode<=3405)||(keyCode==3415) || (keyCode==8205)
	 || keyCode==32 || keyCode==46 || keyCode==8 ||keyCode==37 || 
	 keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46 || (keyCode>=47 && keyCode<58) ||  keyCode==40
	 ||  keyCode==41  ||  keyCode==47 || keyCode==44 ){
		if((input.value=="") && (keyCode==32))return false;
		return true;			
	}
	return false;
}

function checkEngAlphawithnumberspcial(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=48 && keyCode<=57)|| (keyCode>=65 && keyCode<=90) || 
	(keyCode>=97 && keyCode<=122) || keyCode==32 || keyCode==46 ||
	 keyCode==8 || keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46 || keyCode==47
	 || keyCode==40 ||  keyCode==41  || keyCode==44 || keyCode==45 || keyCode==109 || keyCode==220 || keyCode==191){
		if(input.value=="" && (keyCode==32))return false;
		return true;			
	}
	return false;
}
function disable(input,kbevent){
return false;
}
function checkGoogleEngNumOnly(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z0-9(-)/.]/g, '')) }); 
}
function checkEngAlphawithnumberspecial(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=48 && keyCode<=57)|| (keyCode>=65 && keyCode<=90) || 
	(keyCode>=97 && keyCode<=122) || keyCode==46 ||
	 keyCode==8 || keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==46 || keyCode==47
	 || keyCode==40 ||  keyCode==41  || keyCode==44 || keyCode==45){
		if(input.value=="" && (keyCode==32))return false;
		return true;			
	}
	return false;
}
function znumberchk(input,kbevent){
	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	keyChar=String.fromCharCode(keyCode);
	var charSet="0123456789";
	if(charSet.indexOf(keyChar)!=-1){
		return true;
	}
	if(keyCode==null || keyCode==0 || keyCode==8 || keyCode==9 || keyCode==13 || keyCode==27) return true;
	return false;
}
function checkEngAlphawithnumberspcialfordoor(input,kbevent){

	var keyCode,keyChar;
	keyCode=kbevent.keyCode;
	if(window.event)
		keyCode=kbevent.keyCode;
	else
		keyCode=kbevent.which;
	if(keyCode==null)return true;
	if((keyCode>=48 && keyCode<=57)|| (keyCode>=65 && keyCode<=90) || 
	(keyCode>=97 && keyCode<=122) || 
	 keyCode==8 || keyCode==37 || keyCode==39 || keyCode==9 || keyCode==0 || keyCode==47
	 || keyCode==40 ||  keyCode==41  || keyCode==44 || keyCode==45){
		if(input.value=="" && (keyCode==32))return false;
		return true;			
	}
	return false;
}
function checkGoogleEngnumericOnlyfordoor(input)
{
   $(input).bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z0-9(-)/]/g, '')) }); 
}
