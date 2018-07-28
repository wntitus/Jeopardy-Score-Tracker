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
            $(".scoreValDbl").on("click", function() {
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
            $(".scoreValDbl").on("click", function() {
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
            $(".scoreValDbl").on("click", function() {
                if (addKarlyChosen === true) {
                    karlyScore += parseInt($(this).val());
                    scoreUpdate(3);
                    $(this).detach();
                    addKarlyChosen = false;
                }
            })
        })

       


        $(".switch").on("click", function() {
            $("button[class = 'scoreVal']").css("display", "none");
            $("button[class = 'scoreValDbl']").css("display", "inline-block");
            $(".switch").detach();
            $(".final").css("display","inline-block");
        })

        $(".final").on("click", function() {
            var wesWager = prompt("Wes wagers:");
            var sydWager = prompt("Syd wagers:");
            var karlyWager = prompt("Karly wagers:");

            var wesCorrect = confirm("Did Wes get it?");
            var sydCorrect = confirm("Did Syd get it?");
            var karlyCorrect = confirm("Did Karly get it?");

            if (wesCorrect === true ) {
                wesScore += parseInt(wesWager);
                scoreUpdate(1);
            } else if (sydCorrect === true) {
                sydScore += parseInt(sydWager);
                scoreUpdate(2);
            } else if (karlyCorrect === true) {
                karlyScore += parseInt(karlyWager);
                scoreUpdate(3);
            }
        })




    










})



