$(document).ready(function() {

    var wesScore = 0;
    var sydScore = 0;
    var karlyScore = 0;
    var addWesChosen = false;
    var addSydChosen = false;
    var addKarlyChosen = false;

    function scoreUpdate(num) {
        if (num === 1) {
            $(".playerOne").html("<h1> WES: $" + wesScore + "</h1>");
        } else if (num === 2) {
            $(".playerTwo").html("<h1> SYD: $" + sydScore + "</h2>");
        } else {
            $(".playerThree").html("<h1> KARLY: $" + karlyScore + "</h2>");
        }
    }

    scoreUpdate(1);
    scoreUpdate(2);
    scoreUpdate(3);


        $(".playerOne").on("click", function() {
            addWesChosen = true;
            $(".scoreVal").on("click", function() {
                if (addWesChosen === true) {
                wesScore += parseInt($(this).val());
                scoreUpdate(1);
                $(this).detach();
                addWesChosen = false;
                } 
            })
        })

        $(".playerTwo").on("click", function() {
            addSydChosen = true;
            $(".scoreVal").on("click", function() {
                if (addSydChosen === true) {
                    sydScore += parseInt($(this).val());
                    scoreUpdate(2);
                    $(this).detach();
                    addSydChosen = false;
                }
            })
        })

        $(".playerThree").on("click", function() {
            addKarlyChosen = true;
            $(".scoreVal").on("click", function() {
                if (addKarlyChosen === true) {
                    karlyScore += parseInt($(this).val());
                    scoreUpdate(3);
                    $(this).detach();
                    addKarlyChosen = false;
                }
            })
        })

       


        $(".switch").on("click", function() {
            $("button[data-dbl = '200']").attr("value", "200");
            $("button[data-dbl = '200']").text("$200");
            $("button[data-dbl = '400']").attr("value", "400");
            $("button[data-dbl = '400']").text("$400");
            $("button[data-dbl = '800']").attr("value", "800");
            $("button[data-dbl = '800']").text("$800");
            $("button[data-dbl = '1000']").attr("value", "1000");
            $("button[data-dbl = '1000']").text("$1000");
            $("button[data-dbl = '1200']").attr("value", "1200");
            $("button[data-dbl = '1200']").text("$1200");
            $("button[data-dbl = '1600']").attr("value", "1600");
            $("button[data-dbl = '1600']").text("$1600");
            $("button[data-dbl = '2000']").attr("value", "2000");
            $("button[data-dbl = '2000']").text("$2000");
            $(".switch").detach();
        })




    










})



