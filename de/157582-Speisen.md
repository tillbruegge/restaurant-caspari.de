<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="de" xmlns="http://www.w3.org/1999/xhtml">
      
<!-- Mirrored from restaurant-caspari.de/de/157582-Speisen by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 05 May 2025 17:07:32 GMT -->
<head>
        <title>Speisen - Restaurant Caspari</title>
		<script src="../2.1.1/jquery.min.js"></script>
        <script type="text/javascript" src="../files/1902298/style/js/nw.js"></script>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  	<link rel="stylesheet" type="text/css" href="../files/1902298/style/css/content.css" media="screen,print" />
  	<link rel="stylesheet" type="text/css" href="../files/1902298/style/css/layout.css" media="screen" />
	<script type="text/javascript" src="../js/lib/prototype.js"></script>
	<script type="text/javascript" src="../js/src/scriptaculous.js"></script>
	<script type="text/javascript" src="../js/frontend.js"></script>
	<script type="text/javascript" src="../files/1902298/style/js/layout.js"></script>
	<script type="text/javascript" src="../files/1902298/style/js/responsiveslides.min.js"></script>

  	<meta name="language" content="de"/>
  	<meta name="robots" content="index,follow,noodp"/>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
<link rel="stylesheet" type="text/css" href="../files/1902298/style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="../files/1902298/style/css/imagelightbox.css">

<link rel="stylesheet" type="text/css" href="../aaaa-cookie-neu/build/cookieconsent.min.css" />
<script src="../aaaa-cookie/cookieconsent.min.js" data-cfasync="false"></script>


    <script>
        /**
        * Functions for Google Analytics Opt-IN
        * with Osano Cookie Consent (https://www.osano.com/cookieconsent/download/)
        * v2.1 – 30.01.2021
        * vektorkneter.de
        *
        *
        * Changelog:
        * v2.1 – 30.01.2021
        * – some changes in clearCookie() wich might improve the reliability of
        * cookie clearing in Google Chrome (based on a single issue report)
        *
        * v2.0 – 16.01.2021
        * – added support for new tracking IDs with format G-XXXXXXXXXX
        */
         
        // Google Analytics tracking ID
        // You may use the old format UA-XXXXXXXX-X or the newer one G-XXXXXXXXXX
        var $tracking_id = "#";
         
        // OPTIONAL (set if you have trouble deleting cookies):
        // Set Google Analytics Cookie domain & path (needed for clearing cookies – have look in the inspector to get the values needed)
        // If set to false, values from window.location.hostname and window.location.pathname will be used
        var $tracking_cookie_domain = false; // eg. ".restaurant-caspari.de"
        var $tracking_cookie_path = false;   // eg. "/"
         
         
        // Insites Cookie Consent with Opt-IN for MATOMO tracking Cookie
        // Source: https://cookieconsent.insites.com/documentation/disabling-cookies/
        window.addEventListener("load", function () {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#000"
                    },
                    "button": {
                        "background": "#f1d600",
                        "text":"#fff"
                    }
                },
                "cookie": {
                    "expiryDays": 1
                 },
        "position": "bottom-left",
                "type": "opt-in",
                "content": {
                    "message": "Wir nutzen Cookies, um diese Website für Sie so interessant wie möglich zu gestalten. Sind Sie damit einverstanden?",
                    "allow": "Alle Cookies",
                    "deny": "Nur notwendige Cookies",
                    "link": "Datenschutzerklärung",
                    "href": "/de/157554-Datenschutz",
                    "policy": 'Cookie Einstellungen'
                },
                onPopupOpen: function () {
                    document.body.classList.add("cookieconsent-banner-opened");
                },
                onPopupClose: function () {
                    document.body.classList.remove("cookieconsent-banner-opened");
                },
                onInitialise: function (status) {
                    var type = this.options.type;
                    var didConsent = this.hasConsented();
                    if (type == 'opt-in' && didConsent) {
                        // enable cookies
                        embedTrackingCode();
                    }
                    if (type == 'opt-out' && !didConsent) {
                        // disable cookies
                        deleteGACookies();
                    }
                    if (type == 'opt-in' && !didConsent) {
                        // disable cookies
                        deleteGACookies();
                    }
                },
                onStatusChange: function (status, chosenBefore) {
                    var type = this.options.type;
                    var didConsent = this.hasConsented();
                    if (type == 'opt-in' && didConsent) {
                        // enable cookies
                        embedTrackingCode();
                    }
                    if (type == 'opt-in' && !didConsent) {
                        // disable cookies
                        deleteGACookies();
                        location.reload();
                    }
                    if (type == 'opt-out' && !didConsent) {
                        // disable cookies
                        deleteGACookies();
                        location.reload();
                    }
                },
                onRevokeChoice: function () {
                    var type = this.options.type;
                    if (type == 'opt-in') {
                        // disable cookies
                         
                    }
                    if (type == 'opt-out') {
                        // enable cookies
                        embedTrackingCode();
                    }
                },
         
            })
        });
         
         
        /* –  – NO FUTHER SETTINGS NEEDED BELOW THIS LINE –  – */
         
        function embedTrackingCode(){
            // add <script> to head
            var gascript = document.createElement("script");
            gascript.async = true;
            gascript.src = "https://www.googletagmanager.com/gtag/js?id="+$tracking_id;
            document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);
         
            // track pageview
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', $tracking_id, { 'anonymize_ip': true });
             
            //console.log('Google Analytics Tracking enabled')
        }
         
         
        function deleteGACookies(){
            // build cookie name from $tracking_id
            // taking into account legacy format (UA-XXXXXXXX-X) and newer format (G-XXXXXXXXXX)
            var $gtag_cookie;
            if ($tracking_id.substring(0, 2) == "G-") {
                // new format: Remove "G-", prefix with "_ga_"
                //console.log('new tracking id');
                $gtag_cookie = "_ga_"+$tracking_id.replace(/G-/g, "");
            } else if ($tracking_id.substring(0, 3) == "UA-") {
                // old format: Replace "-" with "_", prefix "_gat_gtag_"
                //console.log('legacy tracking id');
                $gtag_cookie = "_gat_gtag_"+$tracking_id.replace(/-/g, "_");
            } else {
                // none of the booth formats detected
                console.warn('No valid tracking ID (UA-XXXXXXXX-X or G-XXXXXXXXXX) detected. Cookie deletion will not work!')
            }
             
            // clear cookies
            clearCookie('_ga',$tracking_cookie_domain,$tracking_cookie_path);
            clearCookie('_gid',$tracking_cookie_domain,$tracking_cookie_path);
            clearCookie('_gat',$tracking_cookie_domain,$tracking_cookie_path);
            clearCookie($gtag_cookie,$tracking_cookie_domain,$tracking_cookie_path);
         
            //console.log('Google Analytics Tracking disabled')
        }
         
         
         
         
        // function for deleting Cookies (such as that ones from Google Analytics)
        function clearCookie(name,domain,path){
            if(!domain || domain==""){
                domain = "." + window.location.hostname;
            }
            if(!path || path==""){
                path = "../index.html";
            }
            document.cookie = name + '=; domain=' + domain +'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + path;
        }
         
         
        // function for triggering a click on the cc-revoke button
        // wich will show the consent banner again.
        // You may use it in a link, such as this example:
        // <a href="#" onclick="openCCbanner(); return false;">Cookie Consent</a>
        function openCCbanner(){
            var el = document.querySelector('.cc-revoke');
            el.click();
        }
         
         
        // –  – OPTIONAL – -----------------
        // Google Analytics Opt-Out Cookie
        var $tracking_disable_cookie = 'ga-disable-' + $tracking_id;
        if (document.cookie.indexOf($tracking_disable_cookie + '=true') > -1) {
        window[$tracking_disable_cookie] = true;
        }
        function gaOptout() {
            document.cookie = $tracking_disable_cookie + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[$tracking_disable_cookie] = true;
            alert("Der Opt-Out-Cookie für das Deaktivieren von Google Analytics wurde abgelegt.")
        }
         
         
        
        </script>
        <meta name="google-site-verification" content="VNfpjlebP2KziIIYCU5psWcHqY8o0z0cRkjB7BVCZoY" />
  	<script type="text/javascript">
//<![CDATA[
var siteId = 1902298;
//]]>
</script>
  	<meta name="keywords" content="Speisen"/>
	<meta name="description" content=""/>
  
  	<link href="../files/1902298/style/img/favicon.ico" type="image/x-icon" rel="icon"/><link href="../files/1902298/style/img/favicon.ico" type="image/x-icon" rel="shortcut icon"/>
  </head>
  <body class="frontend page_157582 parent_page_157549 lang_de">
  
  <div class="site_body page_157582 parent_page_157549 lang_de">
  <div class="site">
  <div class="site_inner">
  
  <div class="content" id="content">
  <div class="content_inner" id="content_inner">
  <div class="modul_extra" id="modul_extra">
  <div class="module_textblock"><!-- code bearbeitet  -->
<div class="row content-box">
<div class="small-12 columns text-center column-block">
<h1>Speisen</h1>
</div>
<div class="small-12 columns text-center">
<h2>Kleinigkeiten</h2>
<p><strong>Tagessuppe</strong><br />T&auml;gliche Variation &ndash; sprechen Sie hierf&uuml;r gerne unser Personal an<br /><span class="preis">5,90 &euro;</span></p>
<p><strong>Gegrillte Zucchini</strong><br />mit Paprika und Joghurt-Knoblauchsauce, dazu unser hausgemachtes Brot <br /><span class="preis">10,50 &euro;</span></p>
<p><strong>Mini-Fr&uuml;hlingsrollen</strong><br />8 Gem&uuml;se-Fr&uuml;hlingsrollen mit s&uuml;&szlig;-saurer Chilisauce und Salatbeilage<br /><span class="preis">8,90 &euro;</span></p>
<p><strong>Mexican Tortilla-Chips</strong><br />Mit Salsa-, Avocado- oder Cheddar-Cheese-Dip<br /><span class="preis">6,90 &euro;</span></p>
<p><strong>Wedges mit Sour-Cream</strong><br /><span class="preis">7,90 &euro;</span></p>
<p><strong>Pommes Frites</strong><br /><span class="preis">5,90 &euro;</span></p>
<p><strong>S&uuml;&szlig;kartoffeln</strong><br /><span class="preis">6,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Tapas</h2>
<p><strong>Frisches Gem&uuml;se</strong> (gegrillt)<br />Auberginen, Zucchini, Paprika, Champignons und Tomaten werden auf einem Lavastein gegrillt und in einer pikanten Tomaten-Kr&auml;utersauce serviert<br /><span class="preis">9,90 &euro;</span></p>
<p><strong>Frikadellen</strong><br />Hackb&auml;llchen mit frischem Knoblauch in Tomatensauce<br /><span class="preis">9,90 &euro;</span></p>
<p><strong>Gef&uuml;llte Champignons</strong><br />Angerichtet als H&auml;ppchen und mit verschiedenen K&auml;sesorten gef&uuml;llt<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Eingelegte Oliven &amp; Peperoni</strong><br />Feurig und gesund mit frischem Parmesank&auml;se<br /><span class="preis">10,50 &euro;</span></p>
<p><strong>Huhn in Knoblauch und Sherry</strong><br />Panierte und gebratene H&uuml;hnchen-St&uuml;cke, mit Sherry abgel&ouml;scht<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Datteln</strong><br />Gef&uuml;llt mit Fetak&auml;se und im Bacon-Mantel mit Butter und frischer Minze gebraten<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Chorizo</strong> &bdquo;mallorquinische Art&ldquo;<br />Pikante, spanische Paprikawürstchen, serviert in einer Honig-Rotwein-Sauce<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Gefüllte Weinblätter</strong><br />Mit gebackenem Fetakäse, in pikantem Knoblauch- Olivenöl<br /><span class="preis">9,90 &euro;</span></p>
<p class="preis"><strong>Tapas gemischt</strong><br />Von allem etwas - lassen Sie sich überraschen!<br /><span class="preis">16,90 &euro;</span></p>
<p class="preis"><strong>Tapas gemischt</strong> &ndash; für 2 Personen<br />Von allem etwas - lassen Sie sich überraschen!<br /><span class="preis">26,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Burger</h2>
<p><strong>Caspari Burger</strong><br />Unser hausgemachter Burger. mit saftigem, selbstgemachtem Rinderpattie, frischem Salat, Tomaten und roten Zwiebeln, zudem abgerundet mit unserer hausgemachten Burger Sauce.<br /><span class="preis">12,90 &euro;</span></p>
<p><strong>Spinat Veggi-Burger</strong><br />Hausgemachte und saftig gebraten servieren wir unser Spinat-Gemüse-Patty in einem frisch gebackenen Brötchen Ihrer Wahl mit Mozzarella, Salat, Tomaten und roten Zwiebel.<br /><span class="preis">12,90 &euro;</span></p>
<p><strong>Chicken Burger</strong><br />Unser Burger mit Hähnchenbrustfilet, Salat und Tomaten.<br /><span class="preis">12,90 &euro;</span></p>
<p>&nbsp;</p>
<p>Dazu servieren wir zwei Dips</p>
<p>&nbsp;</p>
<p class="preis"><strong>Cheese-Pool Burger</strong><br />Erleben Sie unseren saftigen hausgemachten Burger, der in einem verlockenden Pool aus geschmolzenem K&auml;se schwimmt. Mit frischem Salat, Tomaten, roten Zwiebeln und hausgemachter Burgersauce veredelt. Dazu knusprige Pommes, gebratene Champignons und noch mehr K&auml;se. Ein Traum f&uuml;r K&auml;seliebhaber! <br /><span class="preis">18,90 &euro;</span></p>
<p>&nbsp;</p>
<p class="preis">Bestellungen solange der Tagesvorrat reicht</p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Beilagen Burger</h2>
<p><span class="preis">Wahlweise mit:</span></p>
</div>
<div class="small-10 columns line">
<p>Pommes Frites</p>
</div>
<div class="small-2 columns text-right">
<p>3,50</p>
</div>
<div class="small-10 columns line">
<p>Sü&szlig;kartoffeln</p>
</div>
<div class="small-2 columns text-right">
<p>4,50</p>
</div>
<div class="small-10 columns line">
<p>Jalape&ntilde;os</p>
</div>
<div class="small-2 columns text-right">
<p>1,00</p>
</div>
<div class="small-10 columns line">
<p>Cheese</p>
</div>
<div class="small-2 columns text-right">
<p>1,50</p>
</div>
<div class="small-10 columns line">
<p>Bacon</p>
</div>
<div class="small-2 columns text-right">
<p>1,50</p>
</div>
<div class="small-10 columns line">
<p>gebr. Champignons u. Käse</p>
</div>
<div class="small-2 columns text-right">
<p>3,50</p>
</div>
<div class="small-10 columns line">
<p>Extra Fleischpatty</p>
</div>
<div class="small-2 columns text-right">
<p>4,50</p>
</div>
<div class="small-10 columns line">
<p>Extra Spinat-Veggie-Patty</p>
</div>
<div class="small-2 columns text-right">
<p>4,00</p>
</div>
<div class="small-12 columns">
<p>&nbsp;</p>
</div>
<p>&nbsp;</p>
<div class="small-12 columns text-center">
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Falafel</h2>
<p><span class="preis">mit hausgemachtem Hummus Dip </span></p>
<p>Falafel mit klassischem Hummus, dazu Oliven und ein orientalischer Petersilien Salat.<br /><span class="preis">16,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Ofenkartoffel</h2>
<p><strong>Sour Cream</strong><br /><span class="preis">9,90 &euro;</span></p>
<p><strong>Sour Cream &amp; Mais</strong><br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Sour Cream, Zwiebeln &amp; Champignons</strong><br /><span class="preis">11,90 &euro;</span></p>
<p><strong>Sour Cream &amp; Putenstreifen</strong><br /><span class="preis">14,90 &euro;</span></p>
<p><span class="preis">Zu allen Ofenkartoffeln reichen wir eine Salatbeilage.</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Salate</h2>
<p><strong>Mittelmeer-Salat</strong><br />Salat der Saison mit Tomaten, Gurken, Peperoni, Oliven, Zwiebeln, Fetakäse und gefüllten Weinblätter<br /><span class="preis">15,90 &euro;</span></p>
<p><strong>Salat Americano</strong><br />Salat der Saison mit Putenbruststreifen, gebratenen Champignons, Paprika, Mais, Tomaten und Gurken<br /><span class="preis">16,90 &euro;</span></p>
<p><strong>Ceasar Salat</strong><br />Römersalat mit gegrillten Hähnchenbruststreifen, Croutons, Cherrytomaten, Kürbiskernen, Parmesan und Ceasar Dressing<br /><span class="preis">16,90 &euro;</span></p>
<p><strong>Rucola Salat</strong><br />Rucola und Lollo Rosso, Cherrytomaten, K&uuml;rbiskerne, Parmesan und Balsamico Dressing mit gegrillten <strong> Rumpsteak</strong> 22.90 &euro; <br /><span class="preis">15,90 &euro;</span></p>
<p><strong>Falafel-Salat</strong><br />Salat der Saison mit Petersilien und Sesam hausgemachtes Dressing <br /><span class="preis">16,90 &euro;</span></p>
<p class="preis"><strong>Orient-Salat</strong><br />Salat der Saison mit gebratenen Datteln, Hähnchenbrustfilet, Berberitzen, gerösteten Nüssen und hausgemachtes Dressing<br /><span class="preis">18,90 &euro;</span></p>
<p><strong>Dressing nach Wahl:</strong><br />Hausgemachtes Dressing,<br />American Dressing,<br />Ceasar Dressing, Essig und Öl</p>
<p>Zu allen Salaten servieren wir unser hausgemachtes Fladenbrot.</p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Vegetarisches</h2>
<p><strong>Kartoffeltaschen</strong><br />Gefüllt mit Frischkäse. Dazu gibt es Sour Cream und eine Salatbeilage.<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Kartoffel-Spinat-Auflauf</strong><br />Kartoffeln, Spinat und Fetakäse in Sahne-Sauce und mit Käse überbacken<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Pilzpfanne</strong><br />Frische Champignons mit Kartoffeln und Zwiebeln in Wei&szlig;wein-Sauce und mit Käse überbacken, dazu Fladenbrot<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Korsische Pfanne</strong><br />Kartoffeln, Fetakäse, Zwiebeln, Oliven, Rosmarin und Knoblauchsauce<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Feta Pfanne</strong><br />Frische Zwiebeln, Kartoffeln, Paprika, Oliven, Peperoni und Knoblauch in Tomatensauce, mit Käse überbacken, dazu Fladenbrot<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Veggie-Pfanne</strong><br />Zucchini, Auberginen, Champignons, Paprika, und Knoblauch gebraten in einer Tomatensauce und mit K&auml;se &uuml;berbacken, dazu Fladenbrot <br /><span class="preis">16,50 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Vegetarische Pizzen</h2>
<p class="preis"><strong>aus dem Steinholzbackofen</strong></p>
<p><strong>Margherita</strong><br />der Klassiker &ndash; mit Tomatensauce und Käse<br /><span class="preis">10,90 &euro;</span></p>
<p><strong>Picante</strong><br />mit Zwiebeln, Paprika, Peperoni und Oliven<br /><span class="preis">12,90 &euro;</span></p>
<p><strong>Funghi</strong><br />Mit frischen Champignons <br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Mozzarella</strong><br />Mit Mozzarella, Tomaten, Oliven und frischem Basilikum<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Spinatia</strong><br />Mit Spinat, Tomaten, Zwiebeln und Fetakäse<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Vegetaria</strong><br />Mit Brokkoli, Zucchini und frischen Champignons<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Rucola</strong><br />mit Mozzarella, Cherrytomaten und Parmesan<br /><span class="preis">14,50 &euro;</span></p>
<p><strong>Grandiose</strong><br />Mit Artischocken, Paprika, Zucchini, Zwiebeln, Oliven, Peperoni und Fetakäse<br /><span class="preis">15,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Pizza</h2>
<p class="preis"><strong>aus dem Steinholzbackofen</strong></p>
<p><strong>Salami</strong><br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Prosciutto</strong><br />Mit gekochtem Schinken<br /> <span class="preis">12,90 &euro;</span></p>
<p><strong>Prosciutto-Salami</strong><br />Mit gekochtem Schinken und Salami<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Funghi-Salami</strong><br />Mit frischen Champignons und Salami<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Funghi-Prosciutto</strong><br />Mit frischen Champignons und gekochtem Schinken<br /> <span class="preis">13,90 &euro;</span></p>
<p><strong>Hawaii</strong><br />Mit gekochtem Schinken und Ananas<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Paradiso</strong><br />Mit Schinken, Fetakäse und Peperoni<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Al Tono</strong><br />Mit Thunfisch und Zwiebeln<br /> <span class="preis">14,90 &euro;</span></p>
<p><strong>Diavolo</strong><br />Mit Peperoni-Wurst, Zwiebeln, Knoblauch und Peperoni (scharf)<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Scampi </strong><br />mit frischem Knoblauch, Tomatenscheiben und frischem Parmesan <br /><span class="preis">17,90 &euro;</span></p>
<p class="preis"><strong>Caspari</strong><br />Mit Kochschinken, Salami, Hackfleisch, Zwiebeln, frischen Champignons, Oliven, Artischocken, Paprika und Peperoni<br /><span class="preis">16,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Pasta</h2>
<p><span class="preis">Stellen Sie sich Ihre Pasta selbst zusammen.<br />Wählen Sie Ihre liebste Nudelsorte</span></p>
<p><span class="preis">Spaghetti - Penne-Rigate</span></p>
<p><strong>Bolognese</strong><br />Hackfleisch und Tomatensauce <br /><span class="preis">13,50 &euro;</span></p>
<p><strong>Curry</strong><br />Mit Putenstreifen und Ananas in Currysauce<br /><span class="preis">14,90 &euro;</span></p>
<p><strong>Pesto</strong><br />Basilikum-Pesto, Olivenöl und Parmesankäse<br />Mit H&auml;hnchenbrust 17,90 &euro;<span class="preis">13,90 &euro;</span></p>
<p><strong>Rucola</strong><br />Tomatensauce, Rucola und Parmesan <br /> mit gegrillten <strong>Rumpsteak</strong> 22,90 &euro; <br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Gorgonzola</strong><br />Gorgonzolasauce mit Spinat<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Funghi-Prosciutto</strong><br />Frische Champignons, Kochschinken und Sahnesauce<br /><span class="preis">13,90 &euro;</span></p>
<p><strong>Garnelen</strong><br />Scampi, Cherrytomaten, Peperoni. Oliven, Knoblauch, in Oliven&ouml;l gebraten <br /><span class="preis">18,90 &euro;</span></p>
<p><strong>Cava</strong><br />Hähnchenbrustfilet, Blattspinat und Parmesan in Sahnesauce und mit Käse überbacken<br /><span class="preis">15,90 &euro;</span></p>
<p><strong>Nudelpfanne</strong><br />Spaghetti, Penne und Lasagne-Blätter in Tomaten-Hackfleisch-Sahnesauce, mit Käse überbacken<br /><span class="preis">16,90 &euro;</span></p>
<p class="preis"><strong>Gerollte Nudelbl&auml;tter</strong><br />mit Spinat, sowie mit Putenstreifen gef&uuml;llt in Oliven&ouml;l gebraten, dazu Salatbeilage <br /><span class="preis">16,90 &euro;</span></p>
<p><strong>Hausgemachte Lasagne</strong> Bolognese<br />Mit Champignons, Hackfleisch-Tomaten-Sahnesauce, mit Käse überbacken<br /><span class="preis">13,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Fisch</h2>
<p><strong>Lachsfilet</strong><br />Das Filet wird zart in Butter gebraten und auf Blattspinat mit Bratkartoffeln serviert<br /><span class="preis">21,90 &euro;</span></p>
<p><strong>Fish &amp; Chips</strong><br />Rotbarschfilet mit Wedges und Sour Cream<br /><span class="preis">19,90 &euro;</span></p>
<p><span class="preis">Zu allen Fischgerichten reichen wir einen Salatteller</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Fleischgerichte</h2>
<p><strong>Currywurst Deluxe</strong><br />Mit fein gewürzter Currysauce und knusprigen Pommes Frites<br /><span class="preis">11,50 &euro;</span></p>
<p class="preis"><strong>Rumpsteak Caspari</strong><br />Das Gericht wird mit gebratenen Champignons und Zwiebeln serviert. Als Beilage reichen wir Wedges und einen Salatteller<br /><span class="preis">25,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Geflügel</h2>
<p><strong>Curry-Huhn</strong><br />Zwei Hähnchenbrustfilets werden in einer fruchtigen Curry-Sahnesauce und Basmatireis serviert<br /><span class="preis">16,90 &euro;</span></p>
<p><strong>Putensteak</strong><br />Auf Blattspinat angerichtet, dazu servieren wir eine Ofenkartoffel mit Sour Cream<br /><span class="preis">17,90 &euro;</span></p>
<p class="preis"><strong>Orientpfanne</strong><br />(Spezialität des Hauses)<br /> Reis, Hähnchenbrust, Zwiebeln, Paprika, Bananen, Ananas, Datteln, Rosinen und Nüsse werden in der Pfanne zubereitet und mit Zimt und Kurkuma abgeschmeckt, zudem im Steinbackofen mit Feta überbacken<br /><span class="preis">17,90 &euro;</span></p>
<p><strong>Hähnchen Kebab</strong><br />Auf Lavastein gegrillte Hähnchenbrustfilets mit Knoblauchsauce. dazu gibt es Pommes<br /><span class="preis">16,90 &euro;</span></p>
<p><strong>Hähnchen-Teller</strong><br />Auf Lavastein gegrillte H&auml;hnchenbrustfilets mit gebratenem Gem&uuml;se, und Knoblauchsauce serviert<br /><span class="preis">17,90 &euro;</span></p>
<p><strong>Hähnchen Crossies</strong><br />Zartes Hähnchen wird in &bdquo;Knusperpanade&ldquo; krossgebraten und mit Pommes Frites und Knoblauchsauce serviert<br /><span class="preis">13,90 &euro;</span></p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Dessert</h2>
<p><strong>Gebackene Apfelringe</strong> mit Zimt<br />In einer Amaretto-Vanillesauce<br /><span class="preis">8,90 &euro;</span></p>
<p><strong>Apfelstrudel</strong><br />Mit Vanille-Sauce oder Vanilleeis<br /><span class="preis">7,90 &euro;</span></p>
<p>&nbsp;</p>
<p><span class="preis">Pfannkuchen</span></p>
<p><strong>mit Zimt und Zucker</strong><br /><span class="preis">6,50 &euro;</span></p>
<p><strong>mit Apfelmus</strong><br /><span class="preis">6,50 &euro;</span></p>
<p><strong>mit Nutella</strong><br /><span class="preis">6,50 &euro;</span></p>
<p><strong>mit hei&szlig;en Himbeeren und Vanilleeis</strong><br /><span class="preis">8,90 &euro;</span></p>
<p><strong>mit Banane und Vanillesauce</strong><br /><span class="preis">8,90 &euro;</span></p>
<p>&nbsp;</p>
<p><span class="preis">Eis</span></p>
<p><strong>Gemischtes Eis mit Sahne</strong><br />3 Kugeln (Erdbeere, Schokolade, Vanille)<br /><span class="preis">5,20 &euro;</span></p>
<p><strong>Banana-Split</strong><br />Vanilleeis mit Banane, Sahne und Schokoladensauce<br /><span class="preis">7,90 &euro;</span></p>
<p><strong>Eis &amp; Hei&szlig;</strong><br />Vanilleeis mit hei&szlig;en Himbeeren<br /><span class="preis">6,90 &euro;</span></p>
</div>
<div class="small-12 columns">
<p>&nbsp;</p>
</div>
<div class="small-12 columns text-center"><a class="button" href="../files/1902298/upload/Allergene_Abendkarte.pdf" target="_blank">Allergene Abendkarte</a></div>
</div></div>
  </div>
  </div>
  </div>
  		
  <div class="menu">	
  <div class="menu_inner">
  
<ul class="main_menu " id="idPageList">
<li class="page_157539" id="pageListElement_157539"><a class="main_menu" href="../index.html">Home</a></li>
<li class="page_157549 active " id="pageListElement_157549"><a class="main_menu active " href="157549-Speisekarte.html">Speisekarte</a></li>
<li class="page_157551" id="pageListElement_157551"><a class="main_menu" href="157551-Events.html">Events</a></li>
<li class="page_157552" id="pageListElement_157552"><a class="main_menu" href="157552-Virtueller-Rundgang.html">Virtueller Rundgang</a></li>
<li class="page_157542" id="pageListElement_157542"><a class="main_menu" href="157542-Anfahrt.html">Anfahrt</a></li>
<li class="page_157544" id="pageListElement_157544"><a class="main_menu" href="157544-Reservierung.html">Reservierung</a></li>
</ul>

  </div>
  </div>
  <br style="clear:both" /><!-- PRELOADER -->
<div id="preloader">
  <div id="status">&nbsp;</div>
</div>

<!-- SCROLL UP -->
<a href="#" class="scrollup" style="display: none;"> </a>

<!-- HEADER & LOGO & MENU -->
<header class="header">
      <div class="top-bar">
        <div class="logo-container small-12 columns text-center">
          <a href="../index.html"><img src="../files/1902298/style/img/logo.jpg" alt="Restaurant Caspari GmbH"></a>
        </div>
        <div class="navi small-12 columns">
            <div class="nav"></div>
        </div>
      </div>
</header>

<!-- SLIDESHOW -->
<div class="slideshow_container hide-for-small-only">
  <div class="slider_content">
     <span class="glf-button takeaway" data-glf-cuid="ce4c58c5-6f70-4b1f-a379-807c289d00f6" data-glf-ruid="aff18db6-0739-4bfb-ad11-a47979d73d44" >MENÜ ansehen & bestellen</span>
  </div>
  <div class="social-media">
    <a href="https://www.facebook.com/Restaurant-Caspari-111147576258839/" target="_blank"><img class="icon" src="../files/1902298/style/img/icon_facebook.png" alt="Facebook Icon"></a>
    <a href="https://www.instagram.com/restaurant_caspari/" target="_blank"><img class="icon" src="../files/1902298/style/img/icon_instagram.png" alt="Instagram Icon"></a>
  </div>
</div>

<!-- STARTBILD FÜR SMARTPHONE - wird per css eingebunden -->
<div class="mobilstart_img">
    <div class="mobilstart_img_inner">
    </div>
    <div class="slider_content">
      <span class="glf-button takeaway" data-glf-cuid="ce4c58c5-6f70-4b1f-a379-807c289d00f6" data-glf-ruid="aff18db6-0739-4bfb-ad11-a47979d73d44" > TAKE-AWAY-MENÜ ansehen & bestellen</span>
    </div>
    <div class="social-media">
        <a href="https://www.facebook.com/Restaurant-Caspari-111147576258839/" target="_blank"><img class="icon" src="../files/1902298/style/img/icon_facebook.png" alt="Facebook Icon"></a>
        <a href="https://www.instagram.com/restaurant_caspari/" target="_blank"><img class="icon" src="../files/1902298/style/img/icon_instagram.png" alt="Instagram Icon"></a>
  </div>
</div>

<!-- CONTENT INNER FOOTER -->
<div class="content_inner_footer" id="destroy">
  <div class="row">
    <div class="small-12 medium-12 large-5 columns column-block">
        <p class="title-foot">Öffnungszeiten</p>
        <div class="row">
            <div class="small-6 columns">
                <p>Mo-Do</p>
            </div>
            <div class="small-6 columns">
                <p>12:00 - 23:00 Uhr</p>
            </div>
        </div>
        <div class="row">
            <div class="small-6 columns">
                <p>Fr-Sa</p>
            </div>
            <div class="small-6 columns">
                <p>12:00 - 00:00 Uhr</p>
            </div>
        </div>
        <div class="row">
            <div class="small-6 columns">
                <p>So & Feiertage</p>
            </div>
            <div class="small-6 columns">
                <p>12:00 - 22:00 Uhr</p>
            </div>
        </div>
        <div class="row">
            <div class="small-6 columns">
                <p>&nbsp;</p>
            </div>
            <div class="small-6 columns">
                <p>Warme Küche bis 21:00 Uhr</p>
            </div>
        </div>
    </div>
    <div class="small-12 medium-6 large-4 columns">
      <p class="title-foot">Anfahrt & Kontakt</p>
      <div class="row">
          <div class="small-12 medium-6 columns">
                <p>Kirchenstrasse 6<br>21244 Buchholz</p>
          </div>
          <div class="small-12 medium-6 columns">
                <p><a href="tel:0418197374">04181 97374</a><br><a href="mailto:info@restaurant-caspari.de">info@restaurant-caspari.de</a></p>
          </div>
      </div>
    </div>
    <div class="small-12 medium-4 large-2 columns">
      <p class="title-foot">Links</p>
      <a href="157549-Speisekarte.html">Speisekarte</a><br>
      <a href="157544-Reservierung.html">Kontakt</a><br>
      <a href="157545-Impressum.html">Impressum</a><br>
      <a href="157554-Datenschutz.html">Datenschutz</a><br>
    </div>
    <div class="small-12 medium-2 large-1 columns text-right">
      <a href="https://www.facebook.com/Restaurant-Caspari-111147576258839/" target="_blank"><img class="social" src="../files/1902298/style/img/icon_facebook.png" alt="Facebook Icon"></a>
      <a href="https://www.instagram.com/restaurant_caspari/" target="_blank"><img class="social" src="../files/1902298/style/img/icon_instagram.png" alt="Instagram Icon"></a>
    </div>
  </div>
  <div class="fullWidth">
    <div class="row">
      <div class="small-12 columns siteCreated text-center">
        site created and hosted by <a href="http://www.nordicweb.com/" target="_blank" title="webdesign">nordicweb</a>
      </div>
    </div>
  </div>
</div>
  <div class="site_foot"></div><div id="slideshow">
  <div class="picture" id="slideshow_0"><img src="../files/1902298/slideshow/60987.jpg" alt="" /></div>
</div>

<script type="text/javascript" src="../files/1902298/style/js/slideshow.js"></script>
<script type="text/javascript" src="../files/1902298/slideshow/config.js"></script>	
  </div>
  </div>
  </div>
  
  <div class="foot">
  <div class="foot_inner">
  <script src="../2.2.4/jquery.min.js"></script>
<script src="../files/1902298/style/js/nw.js"></script>
<script src="../files/1902298/style/js/imagelightbox.min.js"></script>
<script src="../files/1902298/style/js/modernizr.js"></script>
<script src="../files/1902298/style/js/foundation.js"></script>
<script src="../files/1902298/style/js/jquery.plusanchor.js"></script>
<script src="../aaa-cookie/jquery.cookie.js"></script>
<script src="https://www.fbgcdn.com/embedder/js/ewm2.js"defer async ></script>

<script>
    var jq = $.noConflict(true);
    jq(document).ready(function(){
    jq.removeCookie('CAKEPHP', { path: '/' });

        var siteInner = jq(".site_inner");
        var header = jq(".header");
        var logoContainer = jq(".logo_container");
        var menu = jq(".menu");
        var nav = jq(".nav");
        var topBar = jq(".top-bar");
        var slideshowContainer = jq(".slideshow_container");
        var slideshow = jq("#slideshow");
        var contSec = jq("#content_sec");
        var cont = jq(".content");
        var contInner = jq(".content_inner");        
        var contentInnerFooter = jq(".content_inner_footer");
        var mobilstartImg = jq(".mobilstart_img");

        siteInner.prepend(slideshowContainer);
        siteInner.prepend(logoContainer);
        siteInner.prepend(menu);
        siteInner.prepend(header);
        cont.prepend(mobilstartImg);

        slideshowContainer.append(slideshow);

        siteInner.append(contentInnerFooter);

        nav.append(menu);

        // funktion zum hinzufügen (umschliessen) von "FullWidth backgrounds" an das gewuenschte element
        var addFullwidthBg = function(divElement, backgroundType){
            jq(divElement).wrap('<div class="'+ backgroundType +'"></div>');
        };

        addFullwidthBg(".slideshow_container", 'full-width-slideshow-bg');

        //offcanvas function
        siteInner.wrap("<div class='off-canvas-wrapper'><div class='off-canvas-wrapper-inner' data-off-canvas-wrapper><div class='off-canvas-content' data-off-canvas-content>");
        jq(".off-canvas-wrapper-inner").prepend("<div class='off-canvas position-right' id='offCanvas' data-position='right' data-off-canvas></div>");
        // Function für das Wort 'Menü'
        // nav.prepend("<a class='menu-toggle' data-toggle='offCanvas' href='#'>Menü</a>");
        // Function für das Hamburger Menü
        nav.prepend("<a class='menu-toggle menu-icon' data-toggle='offCanvas' href='#'><span></span></a>");
        siteInner.append('<a class="exit-off-canvas"></a>');
        
        //offcanvas clone für die Menüfunktionalität
        var rightCanvasMenu = jq("#offCanvas");
        jq(".menu_inner").clone().prependTo(rightCanvasMenu);

        // Offcanvas SubNavi
        // hide sub nav
        if(true) {
            // allow expandable sub nav(s)
            if(true){
                jq('#offCanvas ul.sub_menu').each(function() {
                    if(jq(this).children().length){
                        jq(this,'li:first').parent().prepend('<a href="#" class="tog"> + </a>');
                    }
                });
                jq('#offCanvas ul.subsub_menu').each(function() {
                    if(jq(this).children().length){
                        jq(this,'li:first').parent().prepend('<a href="#" class="sub-tog"> + </a>');
                    }
                });
                jq('#offCanvas .tog, #offCanvas .sub-tog').on("click",function(e){
                    e.preventDefault();
                    if (jq(this).hasClass("tog-clicked")) {
                        jq(this).text('+');
                        jq(this).next().next('ul').slideUp(300, function(){});
                    } 
                    else {
                        jq(this).text('-');
                        jq(this).next().next('ul').slideDown(300, function(){});
                    }
                    jq(this).toggleClass("tog-clicked");
                });
            } 
            else {
                jq('ul.sub_menu, ul.subsub_menu').show();
            }
        } 
        else {
            jq('ul.sub_menu, ul.subsub_menu').hide();
        }

        // Fade in and out Menu
        jq('.menu li').hover(function() {
            jq(this).children('ul').stop(true, false, true).slideToggle(300);
        });


        // Nav Arrow
        jq('.menu ul.subsub_menu').each(function() {
            if(jq(this).children().length){
                jq(this,'li:first').parent().addClass('nav-arrow');
            }
        });


        // Lightbox

        jq('.pictures').addClass('row small-up-2 medium-up-3 large-up-4');
        jq('.pictures li').addClass('column effect');
        jq('.pictures li a').wrap('<div class="back-wrap"><div class="img-wrapper">');

        jq('.pictures li a').each(function() {
            jq(this).attr('class', 'lightbox').attr('id', 'lightbox');
            var img = jq(this).css('background-image');
            var desc = jq(this).attr('title');
            img = img.replace('url(','').replace(')','').replace(/\"/gi, '');

            jq(this).html('<img src=' + img + ' alt=' + desc + ' />');
            img = jq(this).attr('style', '');
        });

        // Disable old Lightbox
        jq("LINK[href*='lightbox_gallery.css']").remove();
        jq("SCRIPT[src*='lightbox_gallery.js']").remove();

        // Remove the distance between content and footer
        jq("br[style*='clear:both']").remove();


        // Scroll Top
        jq(window).scroll(function(){
            if (jq(this).scrollTop() > 300) {
                jq('.scrollup').fadeIn();
            } 
            else {
                jq('.scrollup').fadeOut();
            }
        });
 
        jq('.scrollup').click(function(){
            jq("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });
        

        // Smooth Scrolling
        jq(document).ready(function(){
            jq('body').plusAnchor({
                offsetTop: -50,
                speed:  700
            });
        });

        // jQuery PreLoad
	    jq(window).on('load', function() { // makes sure the whole site is loaded 
	      jq('#status').fadeOut(); // will first fade out the loading animation 
	      jq('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	      jq('body').delay(350).css({'overflow':'visible'});
	    }) 
            
        jq(document).foundation();

    });
</script>
  <br style="clear:both" />
  
  <div class="siteCreated">site created and hosted by <a href="http://www.nordicweb.com/" target="_blank" title="webdesign">nordicweb</a></div>
  
  </div>
  <script type="text/javascript">
//<![CDATA[
if(typeof(LightboxOptions)!="undefined"){LightboxOptions.labelOf = "von";LightboxOptions.labelImage = "Bild";}
//]]>
</script>
  </div>
  	
  </body>
  
<!-- Mirrored from restaurant-caspari.de/de/157582-Speisen by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 05 May 2025 17:07:32 GMT -->
</html>
