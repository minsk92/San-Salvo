  $(function (){
  $("#chiesa").on("pagecreate", function () {
        $.ajax("https://san-salvo-13976.firebaseio.com/Chiese.json")
                .done(function(data) {
                    console.log(data)
                    var lista = $("#listaChiesa");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idChiesa = indice;
                        var paginaChiesa = '<div data-role="page"  id="' + idChiesa + '"   style="text-align:center;">';
                        
                        paginaChiesa += '<div data-role="header" data-position="fixed" style="background-color:#2ad" >';
                        paginaChiesa += "<h1>Dettaglio</h1>";
                        paginaChiesa += "<a href='#' data-rel='back' data-icon='back' style='height:5px;'></a>";
                        paginaChiesa += '</div>';
                        paginaChiesa += '<div data-role="main" class="ui-content"  >';
                        paginaChiesa += '<div>';
                        paginaChiesa += '<h1>' + riga.nome + '</h1>';
                        paginaChiesa += '</div>';
                        paginaChiesa += '<img src="' + riga.foto + '" alt="" style="width:300px;">';
                        paginaChiesa += '<div style="text-align:center;">' + riga.descr + ' </div>';
                        //paginaChiesa += riga.nome + " ";                     
                        //paginaChiesa += riga.descr + " ";
                        // paginaChiesa += riga.foto + " ";
                        paginaChiesa += '</div>';
                        paginaChiesa += '<div data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaChiesa += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaChiesa += '</div></div>';
                        paginaChiesa += '</div>';
                        $("body").append(paginaChiesa);

                        var puntoLista = '<a href="#' + idChiesa + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });
    
   });


    //funzione mostra pagine museo in modo dinamico
$(function (){
    $("#museo").on("pageshow", function () {
        $.ajax("https://san-salvo-13976.firebaseio.com/Musei.json")
                .done(function (data) {
                    
                    var lista = $("#listaMusei");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idMuseo = 'museo-' + indice;
                        var paginaMuseo = '<div data-role="page"   id="' + idMuseo + '"   style="text-align:center;">';

                        paginaMuseo += '<div data-role="header"  data-position="fixed" style="text-align:center;background-color:#2ad";>';
                        paginaMuseo += '<h1>Dettaglio</h1>';
                        paginaMuseo += '<a href="#"data-rel="back" id="bottone" data-icon="carat-l" style="height:5px;margin-top:5px;border-color:#2ad"></a>';
                        paginaMuseo += '</div>';
                        paginaMuseo += '<h1>' + riga.nome + '</h1>';
                        
                        paginaMuseo += '<div data-role="main" class="ui-content">';
                        paginaMuseo += '<img src="' + riga.foto + '" alt="" style="width:100%;">';
                        
                        paginaMuseo += '<a href="" data-id="' + indice + '" class="ui-btn ui-btn-icon-left ui-icon-star">Preferiti</a>';
                        paginaMuseo += '<div style="text-align:center;">' + riga.descr + '>';
                        paginaMuseo += '</div>';
                        paginaMuseo += '<div data-role="footer" data-theme="b" data-position="fixed" style="text-align: center;">';
                        
                        paginaMuseo += '<a href="https://www.facebook.com/Comune-di-Pescara-803719146335447/" class="fa fa-facebook fa-2x ui-link ui-btn ui-corner-all" data-role="button" role="button"></a>';
                        paginaMuseo += '<a href="https://www.instagram.com/explore/locations/237210044/comune-di-pescara/"  class="fa fa-instagram fa-2x ui-link ui-btn ui-corner-all" data-role="button" role="button"></a>';
                        paginaMuseo += '<a href="https://twitter.com/pescaranews?lang=it" class="fa fa-twitter fa-2x ui-link ui-btn ui-corner-all" data-role="button" role="button"></a>';
                        paginaMuseo += '</div></div>';
                        paginaMuseo += '</div>';
                        $('body').append(paginaMuseo);
                        $("a[data-id='" + indice + "']").click(function () {
                            window.preferito = db + indice + ".json";
                            console.log("porca eva " + window.preferito)
                            preferiti();
                        });

                        var puntoLista = '<a href="#' + idMuseo + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                        
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });  });

$(function (){
    $("#galleria").on("pageshow", function () {
        $.ajax("https://san-salvo-13976.firebaseio.com/galleria.json")
                .done(function (data) {
                    
                    var lista = $("#listaGalleria");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idGalleria = 'galleria-'+ indice;
                        var 
                        paginaGalleria = '<div data-role="main" class="ui-content">';
                        paginaGalleria += '<img src="'+ riga.test +'" alt="" style="width:100%;">';
                        paginaGalleria += '<img src="'+ riga.sansalvo +'" alt="" style="width:100%;">';
                        paginaGalleria += '<img src="'+ riga.piazza +'" alt="" style="width:100%;">';
                        paginaGalleria += '<img src="'+ riga.mare +'" alt="" style="width:100%;">';
                        paginaGalleria += '</div>';
                        $('#listaGalleria').append(paginaGalleria);
                        
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });  });


function salvaImpostazioni() {
    var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
    console.log("array", arrayPref);
    if (arrayPref === null) {
        arrayPref = [];
    }
    var idPreferito = window.like;
    var posPreferito = $.inArray(idPreferito, arrayPref);
    if (posPreferito !== -1) {   // Se l'elemento non c'è, la funzione restituisce -1
        arrayPref.splice(posPreferito, 1);
        $(".icona-preferito").css("border-radius", 30);
        $(".icona-preferito").css("background-color", "white");
    } else {
        $(".icona-preferito").css("background-color", "#ff5954");
        $(".icona-preferito").css("border-radius", 30);
        arrayPref.push(idPreferito);
    }
    console.log("id", idPreferito);
    window.localStorage.setItem("preferiti", JSON.stringify(arrayPref));
    if (idPreferito === arrayPref[0]) {
        $(".icona-preferito").css("background-color", "white");
    }
}
function cancellaPreferiti() {
    var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
    console.log(arrayPref);
    if (arrayPref === null) {
        arrayPref = [];
    }
    var idPreferito = window.like;

    var posPreferito = $.inArray(idPreferito, arrayPref);
    if (posPreferito != -1) {   // Se l'elemento non c'è, la funzione restituisce -1
        arrayPref.splice(posPreferito, 1);
        $(".icona-preferito").css("border-radius", 30);
        $(".icona-preferito").css("background-color", "#fff");
    } else {
        $(".icona-preferito").css("background-color", "white");
        $(".icona-preferito").css("border-radius", 30);
        arrayPref.push(idPreferito);
    }
    window.localStorage.setItem("preferiti", JSON.stringify(arrayPref));

}