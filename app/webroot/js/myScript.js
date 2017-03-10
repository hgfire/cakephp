/**
 * Created by godwin on 13/07/2015.
 */
$(document).ready(function() {

    $('.form_datetime').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        linkField: "mirror_field1",
        linkFormat: "yyyy-mm-dd hh:ii"
    });

    $('.form_datetime1').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        linkField: "mirror_field2",
        linkFormat: "yyyy-mm-dd hh:ii"
    });


    $( "#dialogModal" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 500
        },
        modal: true
    });

    $(".overlay").click(function(event){
        event.preventDefault();
        $('#contentWrap').load($(this).attr("href"));  //load content from href of link
        $('#dialogModal').dialog('option', 'title', $(this).attr("title"));  //make dialog title that of link
        $('#dialogModal').dialog('open');  //open the dialog
    });

    $(".searchfield").change(function(event){
        event.preventDefault();
        $('#contentWrap').load($(this).attr("href"));  //load content from href of link
        $('#dialogModal').dialog('option', 'title', $(this).attr("title"));  //make dialog title that of link
        $('#dialogModal').dialog('open');  //open the dialog
    });

    $(".alert-success").fadeOut(7000);

    $(".alert-danger").fadeOut(7000);

    $(".menuL").click(function() {

        $('.content').html(' <h2 class="sub-header text-center"><img src="../app/webroot/img/ajax-loader.gif" class="text-center col-lg-pull-5" /> En cours...</h2>');
//requête ajax, appel du fichier recherche.php
        $.ajax({
            type: "GET",
            url: $(this).attr("href"),
            dataType: "html",
            timeout:90000,
//affichage de l'erreur en cas de problème
            error: function(msg, string) {
                alert("Error !: " + string);
            },
            success: function(data) {
//alert(data);
//on met à jour le div centre avec les données reçus
//on vide la div et on le cache
                $(".content").empty().hide();
//on affecte les resultats au div
                $(".content").append(data);
//on affiche les resultats avec la transition
                $('.content').fadeIn(3000);
            }
        });
        return false;
    });

    $("#searchSubmit").click(function() {
        var mot = $("#searchInput").val();
        $('.result').html('<img src="../../app/webroot/img/ajax-loader.gif" /> '); // loader image apprears in the <div id="newComment"></div>

        $.ajax({
            type: "GET",
            url: "/workflow/Documents/searchresult/"+mot, // call the php file ajax/tuto_blogcommentajax.php to insert new datas in the database
            //affichage de l'erreur en cas de problème
            error: function(msg, string) {
                alert("Error !: " + string);
            },
            success: function(data) {
            //alert(data);
            //on met à jour le div centre avec les données reçus
            //on vide la div et on le cache
                $(".result").empty().hide();
            //on affecte les resultats au div
                $(".result").append(data);
            //on affiche les resultats avec la transition
                $('.result').fadeIn(1000);
            }
        });
        return false;
        });

    $("#postMessage").click(function() {
        var mess = $("#tinymce-13").val();
        //$('.result').html('<img src="../../app/webroot/img/ajax-loader.gif" /> '); // loader image apprears in the <div id="newComment"></div>

        $.ajax({
            type: "GET",
            url: "/workflow/Messages/add/"+mess, // call the php file ajax/tuto_blogcommentajax.php to insert new datas in the database
            //affichage de l'erreur en cas de problème
            error: function(msg, string) {
                alert("Error !: " + string);
            },
            success: function(data) {
                //alert(data);
                //on met à jour le div centre avec les données reçus
                //on vide la div et on le cache

                $(".disc").empty().hide();
                //on affecte les resultats au div
                $(".disc").append(data);
                //on affiche les resultats avec la transition
                $('.disc').fadeIn(1000);
            }
        });
        return false;
    });

   function getMyMessage() {

        //$('.result').html('<img src="../../app/webroot/img/ajax-loader.gif" /> '); // loader image apprears in the <div id="newComment"></div>

        $.ajax({
            type: "GET",
            url: "/workflow/Messages/runningdiscussion", // call the php file ajax/tuto_blogcommentajax.php to insert new datas in the database
            //affichage de l'erreur en cas de problème
            error: function(msg, string) {
                alert("Error !: " + string);
            },
            success: function(data) {
                //alert(data);
                //on met à jour le div centre avec les données reçus
                //on vide la div et on le cache

                $(".disc").empty().hide();
                //on affecte les resultats au div
                $(".disc").html(data);
                //on affiche les resultats avec la transition
                //$('.disc').fadeIn(1000);
            }
        });
        return false;
    };


var reloadTime = 1000;
var scrollBar = false;

function getMessages() {
    // On lance la requête ajax
    $.getJSON('phpscripts/get-message.php?dateConnexion='+$("#dateConnexion").val(), function(data) {
        /* On vérifie que error vaut 0, ce
         qui signifie qu'il n'y aucune erreur */
        if(data['error'] == '0') {
            // On intialise les variables pour le scroll jusqu'en bas
            // Pour voir les derniers messages
            var container = $('#text');
            var content = $('#messages_content');
            var height = content.height()-500;
            var toBottom;

            // Si avant l'affichage des messages, on se trouve en bas,
            // alors on met toBottom a true afin de rester en bas
            // Il faut tester avant affichage car après, le message a déjà été
            // affiché et c'est aps facile de se remettre en bas :D
            if(container[0].scrollTop == height)
                toBottom = true;
            else
                toBottom = false;


            $("#annonce").html('<span class="info"><b>'+data['annonce']+'</b></span><br /><br />');
            $("#text").html(data['messages']);

            // On met à jour les variables de scroll
            // Après avoir affiché les messages
            content = $('#messages_content');
            height = content.height()-500;

            // Si toBottom vaut true, alors on reste en bas
            if(toBottom == true)
                container[0].scrollTop = content.height();

            // Lors de la première actualisation, on descend
            if(scrollBar != true) {
                container[0].scrollTop = content.height();
                scrollBar = true;
            }
        } else if(data['error'] == 'unlog') {
            /* Si error vaut unlog, alors l'utilisateur connecté n'a pas
             de compte. Il faut le rediriger vers la page de connexion */
            $("#annonce").html('');
            $("#text").html('');
            $(location).attr('href',"chat.php");
        }
    });
}

function postMessage() {
    // On lance la requête ajax
    // type: POST > nous envoyons le message

    // On encode le message pour faire passer les caractères spéciaux comme +
    var message = encodeURIComponent($("#message").val());
    $.ajax({
        type: "POST",
        url: "phpscripts/post-message.php",
        data: "message="+message,
        success: function(msg){
            // Si la réponse est true, tout s'est bien passé,
            // Si non, on a une erreur et on l'affiche
            if(msg == true) {
                // On vide la zone de texte
                $("#message").val('');
                $("#responsePost").slideUp("slow").html('');
            } else
                $("#responsePost").html(msg).slideDown("slow");
            // on resélectionne la zone de texte, en cas d'utilisation du bouton "Envoyer"
            $("#message").focus();
        },
        error: function(msg){
            // On alerte d'une erreur
            alert('Erreur');
        }
    });
}

    // On vérifie que la zone de texte existe
    // Servira pour la redirection en cas de suppression de compte
    // Pour ne pas rediriger quand on est sur la page de connexion
    //if(document.getElementById('#tinymce-13')) {
        // actualisation des messages
        //window.setInterval(getMyMessages, reloadTime);
        //window.setInterval(getOnlineUsers, reloadTime);
        // on sélectionne la zone de texte
        $("#message").focus();
    //}


function getOnlineUsers() {
    // On lance la requête ajax
    $.getJSON('phpscripts/get-online.php', function(data) {
        // Si data['error'] renvoi 0, alors ça veut dire que personne n'est en ligne
        // ce qui n'est pas normal d'ailleurs
        if(data['error'] == '0') {
            var online = '', i = 1, image, text;
            // On parcours le tableau inscrit dans
            // la colonne [list] du tableau JSON
            for (var id in data['list']) {

                // On met dans la variable text le statut en toute lettre
                // Et dans la variable image le lien de l'image
                if(data["list"][id]["status"] == 'busy') {
                    text = 'Occup&eacute;';
                    image = 'busy';
                } else if(data["list"][id]["status"] == 'inactive') {
                    text = 'Absent';
                    image = 'inactive';
                } else {
                    text = 'En ligne';
                    image = 'active';
                }
                // On affiche d'abord le lien pour insérer le pseudo dans la zone de texte
                online += '<a href="#post" onclick="insertLogin(\''+data['list'][id]["login"]+'\')" title="'+text+'">';
                // Ensuite on affiche l'image
                online += '<img src="status-'+image+'.png" /> ';
                // Enfin on affiche le pseudo
                online += data['list'][id]["login"]+'</a>';

                // Si i vaut 1, ça veut dire qu'on a affiché un membre
                // et qu'on doit aller à la ligne
                if(i == 1) {
                    i = 0;
                    online += '<br>';
                }
                i++;
            }
            $("#users").html(online);
        } else if(data['error'] == '1')
            $("#users").html('<span style="color:gray;">Aucun utilisateur connect&eacute;.</span>');
    });
}

function setStatus(status) {
    // On lance la requête ajax
    // type: POST > nous envoyons le nouveau statut
    $.ajax({
        type: "POST",
        url: "phpscripts/set-status.php",
        data: "status="+status.value,
        success: function(msg){
            // On affiche la réponse
            $("#statusResponse").html('<span style="color:green">Le statut a &eacute;t&eacute; mis &agrave; jour</span>');
            setTimeout(rmResponse, 3000);
        },
        error: function(msg){
            // On affiche l'erreur dans la zone de réponse
            $("#statusResponse").html('<span style="color:orange">Erreur</span>');
            setTimeout(rmResponse, 3000);
        }
    });
}

function rmResponse() {
    $("#statusResponse").html('');
}

});