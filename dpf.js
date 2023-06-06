function mostrarResultados() {
    var K = document.getElementById("K").valueAsNumber;
    var TDPF = document.getElementById("TDPF").valueAsNumber;
    var i = (document.getElementById("i").valueAsNumber)/100;
    var resultados = [];
    var c = 0;

    while (c < TDPF) {
        var I = K * i;
        K += I;
        c += 1;
        resultados.push({ c: c, I: I, K: K });
    }

    var ventanaEmergente = window.open("", "Resultados", "width=600,height=400");
    ventanaEmergente.document.write("<html><head><link rel='stylesheet' href='style.css'><title>Resultados</title><style>table, th, td { border: 1px solid white; border-collapse: collapse; padding: 5px; color:white;} h1{ color:white}</style></head><body><center><h1>Resultados</h1><table><tr><th>Año</th><th>Interés</th><th>Capital</th></tr>");

    resultados.forEach(function (resultado) {
        ventanaEmergente.document.write("<tr><td>" + resultado.c + "</td><td>" + resultado.I.toFixed(2) + "</td><td>" + resultado.K.toFixed(2) + "</td></tr>");
    });

    ventanaEmergente.document.write("</table></body></center></html>");
}

function mp(){
    var Tmax = document.getElementById("Tmax").valueAsNumber;
    var TNAC = (document.getElementById("TNAC").valueAsNumber)/100;
    var TMUE = (document.getElementById("TMUE").valueAsNumber)/100;
    var PBOL = (document.getElementById("PBOL").valueAsNumber);
    var c = 0;
    var NAC;
    var MUE;
    var resultados = [];

    while(c < Tmax){
        NAC = PBOL * TNAC;
        MUE = PBOL * TMUE;
        PBOL = PBOL + NAC - MUE;
        c += 1;
        resultados.push({c: c, NAC: NAC, MUE: MUE, PBOL: Math.floor(PBOL)});
    }
    var ventanaEmergente = window.open("", "Resultados", "width=1000,height=900");
    ventanaEmergente.document.write("<html><head><link rel='stylesheet' href='style.css'><title>Resultados</title><style>table, th, td { border: 1px solid white; border-collapse: collapse; padding: 5px; color:white;} h1{ color:white}</style></head><body><center><div class='title'><h1>Resultados</h1></div><table><tr><th>Tiempo</th><th>Nacimientos</th><th>Muertes</th><th>Población Boliviana</th></tr>");

    resultados.forEach(function (resultado) {
        ventanaEmergente.document.write("<tr><td>" + resultado.c + "</td><td>" + resultado.NAC.toFixed(2) + "</td><td>" + resultado.MUE.toFixed(2) + "</td><td>" + resultado.PBOL + "</td></tr>");
    });

    ventanaEmergente.document.write("</table></center></body></html>");
}

function dados(){
    var NJM = document.getElementById("NJM").valueAsNumber;
    var CUJ = document.getElementById("CUJ").valueAsNumber;
    var SIM = document.getElementById("SIM").valueAsNumber;
    var GJ = document.getElementById("GJ").valueAsNumber;
    var CJUE = 0;
    var GNETA = 0;
    var NJC = 0;
    var i=0;
    var PUJ = GJ - CUJ;
    var ventanaEmergente = window.open("", "Resultados", "width=1000,height=900");
    ventanaEmergente.document.write("<html><head><link rel='stylesheet' href='style.css'><title>Resultados Simulaciones</title><style>table, th, td { border: 1px solid white; border-collapse: collapse; padding: 5px; color:white;} h1{ color:white}</style></head><body><center><div class='title'><h1>Resultados</h1></div><table>");
    ventanaEmergente.document.write("<tr><th>Simulación</th><th>Ganancia Promedio Neta Casa</th><th>Numero de Veces Ganadas Casa</th><th>Probabilidad de Ganar Casa</th></tr>");
    var SUMGPROM = 0;
    var SUMGCASA = 0;
    var SUMPCASA = 0;
    while(i < SIM){
        i+=1;
        var GNETA_SIM = 0;
        var NJC_SIM = 0;
        while (CJUE<NJM){            
            var Rdado1 = Math.random();
            var Rdado2 = Math.random();
            var dado1 = 1 + Math.floor(6 * Rdado1);
            var dado2 = 1 + Math.floor(6 * Rdado2);
            var SDADOS = dado1 + dado2;
            if(SDADOS == 7){
                GNETA_SIM = GNETA_SIM + CUJ - PUJ;
            }
            else{
                GNETA_SIM = GNETA_SIM + CUJ;
                NJC_SIM += 1;
            }
            CJUE+=1;
        }
        SUMGPROM += GNETA_SIM;
        SUMGCASA += NJC_SIM;
        var PJC = (NJC_SIM/NJM)*100;
        SUMPCASA += PJC;
        ventanaEmergente.document.write("<tr><td>" + i + "</td><td>" + (GNETA_SIM/NJM).toFixed(2) + "</td><td>" + NJC_SIM + "</td><td>" + PJC.toFixed(2) + "</td></tr>");
        CJUE = 0;
    }
    ventanaEmergente.document.write("</table>");
    var GPROBGANA = SUMPCASA/SIM;
    var GPROM = SUMGPROM/SIM;
    var GCASA = (SUMGCASA/SIM);
    ventanaEmergente.document.write("<h2 style='color:white'>GANANCIA PROMEDIO NETA TOTAL: " + GPROM.toFixed(2) + "</h2>");
    ventanaEmergente.document.write("<h2 style='color:white'>VECES GANADAS PROMEDIO TOTAL: " + GCASA.toFixed(2) + "</h2>");
    ventanaEmergente.document.write("<h1 style='color:white'>PROBABILIDAD TOTAL DE GANAR: " +  GPROBGANA.toFixed(2) + "%</h1>");
    ventanaEmergente.document.write("</center></body></html>");
}

function clientes(){
    var NHR = document.getElementById("NHR").valueAsNumber;
    var CFIJO = document.getElementById("CFIJO").valueAsNumber;
    var SIM = document.getElementById("SIM").valueAsNumber;
    var PVU = document.getElementById("PVU").valueAsNumber;
    var CUA = document.getElementById("CUA").valueAsNumber;
    var CHR=0;
    var TCART=0;
    var CCLIE=0;
    var LLCLIE=0;
    var cart=0;
    var i=1;
    var sumg;
    var sumt;
    var ventanaEmergente = window.open("", "Resultados", "width=1000,height=900");
    ventanaEmergente.document.write("<html><head><link rel='stylesheet' href='style.css'><title>Resultados Simulaciones</title><style>table, th, td { border: 1px solid white; border-collapse: collapse; padding: 5px; color:white;} h1{ color:white}</style></head><body><center><div class='title'><h1>Resultados</h1></div><table>");
    ventanaEmergente.document.write("<tr><th>Simulación</th><th>Ganancia Promedio Neta diaria</th><th>Cantidad promedio ventas diaria</th></tr>");
    while (i<=SIM){
        CHR = 0;
        TCART = 0;
        while(CHR < NHR){
            CHR+=1;
            var Rllclie = Math.random();
            LLCLIE=Math.floor(0+(4*Rllclie));
            if(CCLIE!=LLCLIE){
                CCLIE = LLCLIE;
                cart = 0;
                while(LLCLIE > 0){
                    LLCLIE--;
                    var rcart=Math.random();
                    if(rcart>=0 && rcart<0.20){
                        cart = 0;
                    }
                    else if(rcart>=0.20 && rcart<0.50){
                        cart = 1;
                    }
                    else if(rcart>=0.50 && rcart<0.90){
                        cart = 2;
                    }
                    else if(rcart>=0.90 && rcart<=1){
                        cart = 3;
                    }
                    TCART += cart;
                }
            } else{
                cart = 0;
                CCLIE = 0;
            }
        }
        var GNETA = (TCART * (PVU-CUA))-CFIJO;
        sumg = sumg+GNETA;
        var TTCART = TCART/CCLIE;
        var TTCART = CCLIE ? TCART/CCLIE : 0;
        sumt = sumt + TTCART;
        ventanaEmergente.document.write("<tr><td>" + i + "</td><td>" + (GNETA/SIM).toFixed(2) + "</td><td>" + TTCART.toFixed(2) + "</td></tr>");
        i++;
    }
    var GNETAT = sumg/10;
    var TTCARTT = sumt/10;
    ventanaEmergente.document.write("<h2 style='color:white'>GANANCIA PROMEDIO NETA DIA: " + GNETAT.toFixed(2) + "</h2>");
    ventanaEmergente.document.write("<h2 style='color:white'>CANTIDAD PROMEDIO DIA: " + TTCART.toFixed(2) + "</h2>");
    ventanaEmergente.document.write("</table>");
    ventanaEmergente.document.write("</center></body></html>");
}


function gallina(){
    var ndia = document.getElementById("ndia").valueAsNumber;
    var pvh = document.getElementById("pvh").valueAsNumber;
    var pvp = document.getElementById("pvp").valueAsNumber;
    var cdia=0;
    var thue=0;
    var tpo=0;
    var thuer=0;
    var cthpg=0;
    var ctpo=0;
    var tpm=0;
    var rnhue;
    while(cdia!=ndia){
        cdia+=1;
        var rchuep=Math.random();
        while((rnhue = Math.random())>=0 && rnhue<=0.135){
            var chuep=1;
        }
    }
}