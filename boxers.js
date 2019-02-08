function boxertable(){
    let obj = {table: "champions", limit: 30};
    
    let xmlHttp = new XMLHttpRequest();
         xmlHttp.open("GET", "http://localhost:8080/api/boxers/allboxers", false);
         xmlHttp.send(null);
         let jsonString = xmlHttp.responseText;
         JSONParsed = JSON.parse(jsonString);
         console.log(JSONParsed);
         
        let txt = "";
        txt += "<table id='myTable' class='style1' width='60%' align='center' border='5px' bordercolor='black' cellspacing='0' bgcolor='black' font color='white'>";
        txt += "<th align='center'><font color = 'red'>Boxer ID</font></th>";
        txt += "<th align='center'><font color = 'red'>Name</font></th>"; 
        txt += "<th align='center'><font color = 'red'>Status</font></th>";
        txt += "<th align='center'><font color = 'red'>Age</font></th>"; 
        txt += "<th align='center'><font color = 'red'>DOB</font></th>";
        txt += "<th align='center'><font color = 'red'>Nationality</font></th>";
        txt += "<th align='center'><font color = 'red'>Weight Class</font></th>"; 
        txt += "<th align='center'><font color = 'red'>Stance</font></th>";
        txt += "<th align='center'><font color = 'red'>Location</font></th>";
        txt += "<th align='center'><font color = 'red'>Birthplace</font></th>"; 

        for (x in JSONParsed){
            txt += "<tr align='center'><td style='color: red;'>" + JSONParsed[x].id + "</td>";
            txt += "<td><a style= 'color: red' href='"+JSONParsed[x].name+".html'/>" + JSONParsed[x].name + "</a></td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].status + "</td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].age + "</td>";
            txt += "<td style='color: red;'>"+  JSONParsed[x].dob + "</td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].nationality + "</td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].weight + "</td>";
            txt += "<td style='color: red;'>"+  JSONParsed[x].stance + "</td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].location + "</td>";
            txt += "<td style='color: red;'>" + JSONParsed[x].birthplace + "</td></tr>";
        }
        txt += "</table>"
        document.getElementById("BoxerTable").innerHTML = txt;
    }

    function NameSearch() {
        // Declare variables 
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("BoxerInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
      }