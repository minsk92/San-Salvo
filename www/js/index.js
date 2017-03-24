//funzione mostra pagine Chiesa in modo dinamico

    $("#chiesa").on("pageshow", function () {
        $.ajax("https://san-salvo-13976.firebaseio.com/Chiese.json")
                .done(function (data) {
                    var lista = $("#listaChiesa");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idChiesa = 'chiesa-' + indice;
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
                        paginaChiesa += '</div>';
                        paginaChiesa += '<div data-role="footer" data-position="fixed" style="text-align: center;">';
                        paginaChiesa += '<div data-role="controlgroup" data-type="horizontal">';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-comment">Facebook</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-tag">Twitter</a>';
                        paginaChiesa += '<a href="" class="ui-btn ui-btn-icon-left ui-icon-video">YouTube</a>';
                        paginaChiesa += '</div></div>';
                        paginaChiesa += '</div>';
                        $('body').append(paginaChiesa);

                        var puntoLista = '<a href="#' + idChiesa + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + riga.nome + '</a>';
                        lista.append("<li>" + puntoLista + "</li>");
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });