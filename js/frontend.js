function flashMessage(msg) {
  $("body").insert({top:'<div id="flashMessage" class="message">' + msg + '</div>'});
  $("flashMessage").fade({duration:1.5, delay:1.5});
}

function jsdebug(msg) {
    if (!$('jsDebug')) {
      $('body').insert({top:'<div style="position:fixed; right:5px; top:5px; width:150px; z-index:9999; border:solid 1px #333333; background:#cccccc; overflow:scroll; height:350px; padding:5px" id="jsDebug">JS Debug:</div>'});
    }
    $('jsDebug').insert({bottom:'<p style="margin:0;padding:0; font-size:10px">' + msg + '</p>'});
}

function debugjs(msg) {
  jsdebug(msg);
}

function loadScript(src) {
    script = new Element("script", { type: "text/javascript", src: "/js/" + src + ".js" });
    $("head").appendChild(script);
}

function setActive(active) {
	$$('.menu a').each(function(e) {
		e.removeClassName('active');
	});

	active.addClassName('active');

	while(active.up(2)) {
		active = active.up(2).firstDescendant();
		active.addClassName('active');
	}
}



Event.observe(window, 'load', function() {

	// blur links
	$$('a').each(function(e) {
		Event.observe(e, 'click', function() {
      e.blur();
		});
	});

	// click active
	$$('.menu a').each(function(e) {
		Event.observe(e, 'click', function() {
			setActive(e);
		});
	});

	// flash message
  if ($('flashMessage')) {
  	$('flashMessage').fade({duration:2, delay:2.5});
	}

});














/*cart and checkout pages*/
function updatePrices(request, json){
	var flag = true;
	var response = (request.responseText).evalJSON();
	/*update total price, total netto, total tax*/
	$('totalPrice').innerHTML = response.total[0].totalPrice;
	$('totalTax').innerHTML   = response.total[0].totalTax;
	$('totalNetto').innerHTML = response.total[0].totalNetto;
	$('cart_count_top').innerHTML = response.total[0].cartCount;
	$('cart_count_top_msg').innerHTML = response.total[0].cartCountMsg;
	var l = response.variation.length;
	/*update price, netto, tax for a row in shopping cart*/
	for (var i=0; i<l; i++) {
		varId = response.variation[i].varId;
		$('variationTotal_'+varId).innerHTML = response.variation[i].variationTotal;
		$('tax_'+varId).innerHTML = response.variation[i].tax;
		$('netto_'+varId).innerHTML = response.variation[i].netto;

		$('Shop'+varId).removeClassName('quantityerror');
		$('morequantity_'+varId).style.display='none';
	}

	var length = response.notUpdated.length;
	for(var j=0; j<length; j++){
		$('Shop'+response.notUpdated[j].cartid).className = 'quantityerror';
		$('availablestock_'+response.notUpdated[j].cartid).innerHTML = response.notUpdated[j].stock;
		$('morequantity_'+response.notUpdated[j].cartid).style.display ='';
		$('morequantity_'+response.notUpdated[j].cartid).pulsate({from:0.5,pulses:100,duration:100});
	}

	if(typeof(response.notUpdated[j-1])!='undefined'){
		$('Shop'+response.notUpdated[j-1].cartid).focus();
		flag = false;
	}

	if(l!=length){
		$('cartmessage').style.display = '';
		$('cartmessage').style.opacity = '1';
		Effect.Fade($('cartmessage'), {duration: 4});
	}
	return flag;
}
function removeCart(request, json, id){
	Effect.BlindUp(id, {duration: 0.9,afterFinish:removeNode});/*BlindUp the cart row*/
	Effect.Fade(id, {duration: 0.9});/*BlindUp the cart row*/
	var response = (request.responseText).evalJSON();

	if ($('totalPriceWithShipping')) {	/*checkout page, show grand total, shipping charge/name*/
		$('totalPriceWithShipping').innerHTML = response.total[0].totalPriceWithShipping;
		$('totalShipping').innerHTML = response.total[0].shippingCharge;
		$('shippingName').innerHTML = response.total[0].shippingName;
	}
	$('totalPrice').innerHTML = response.total[0].totalPrice;
	$('totalTax').innerHTML   = response.total[0].totalTax;
	$('totalNetto').innerHTML = response.total[0].totalNetto;
	$('cart_count_top_msg').innerHTML = response.total[0].cartCountMsg;
	var cartCount = response.total[0].cartCount;
	if (cartCount==0) {
		$('cart_count_top').innerHTML = 0;
		Effect.Fade('cartBasket',{duration:0.9,afterFinish:function(){$('cartBasket').className = 'cartEmpty';$('cart_count_top_div').style.display='none';Effect.Appear('cartBasket',{duration:0.9});}});
		/*if checkout page*/
		if ($('checkoutMethodsAndButtons')!=null) {
			$('checkoutMethodsAndButtons').style.display='none';
			$("checkoutForm").payment_type.value = '';
		}
		/*if cart page*/
		if ($('cartButttons')!=null) {
			$('cartButttons').style.display='none';
		}
	}
	if(cartCount>0 && cartCount!=''){
		$('cart_count_top').innerHTML = cartCount;
	}
}
function removeNode(e){
	$(e.element.id).remove();//after fadeout, remove the DOM node
	var childs = $('shoppingcart').childNodes;
	var l = childs.length;
	for(var i =0;i<l;i++){
		childs[i].className = (i%2 == 0) ? 'cart_odd_row' : 'cart_even_row';
	}
}

clearSearch = function(text) {
	if ($('liveSearch').value == text) {
		$('liveSearch').value = '';
	}
}

liveSearch = function(text){
	var val = $('liveSearch').value;
	if (val == text || val == '') {
		return;
	}
	$('searchform').submit();
}

/*previously used to chk the html code in the string for guestbook entry. now this is not used.*/
function sample() {
	var tat = $('gbTA').value;
	if($('gbTA').value.match(/<(.|\n)*?>/))
	{
		/*$('tacont_err').appear();
		return false;*/
		$('gbne').submit();
	}
	else {
		$('gbne').submit();
	}
}