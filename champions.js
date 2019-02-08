
function champtable(){
let obj = {table: "champions", limit: 30};

let xmlHttp = new XMLHttpRequest();
	 xmlHttp.open("GET", "http://localhost:8080/api/champions/allchampions", false);
	 xmlHttp.send(null);
	 let jsonString = xmlHttp.responseText;
	 JSONParsed = JSON.parse(jsonString);
     console.log(JSONParsed);
     
    let txt = "";
    txt += "<table class='style1' width='60%' align='center' border='5px' bordercolor='black' cellspacing='0' bgcolor='black' font color='white'>";
    txt += "<th align='center'><font color = 'red'>Boxer</font></th>";
    txt += "<th align='center'><font color = 'red'>Weight Class</font></th>"; 
    txt += "<th align='center'><font color = 'red'>Title</font></th>";
    for (x in JSONParsed){
        txt += "<tr align='center'><td><a style= 'color: red' href='"+JSONParsed[x].boxer+"'/>" + JSONParsed[x].boxer + "</a></td>";
        txt += "<td style='color: red;'>" + JSONParsed[x].weightclass + "</td>";
        txt += "<td style='color: red;'>"+  JSONParsed[x].title + "</td></tr>";
    }
    txt += "</table>"
    document.getElementById("ChampionTable").innerHTML = txt;
}

