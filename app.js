var europeanCupSim = function() {

    var teams = {
        a1 : {
            name: "Romania",
            ranking: 45,
            squadValue: 178, // in £ Millions
            teamWonBefore: false, // has won WC before?
            
             // are they Russia?

            xp: 0, 
            pts: 0,
            total: 0
        },  
        a2 : {
            name: "Russia",
            ranking: 70,
            squadValue: 146,
            teamWonBefore: false, 
            
            
           xp: 0,
            pts: 0,
            total: 0
        }, 
        a3 : {
            name: "Moldova",
            ranking: 67,
            squadValue: 17,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        a4 : {
            name: "Malta",
            ranking: 14,
            squadValue: 336,
            teamWonBefore: true, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        b1 : {
            name: "Grecce",
            ranking: 37,
            squadValue: 43,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        b2 : {
            name: "Bulgaria",
            ranking: 41,
            squadValue: 117,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        b3 : {
            name: "Monte Negro",
            ranking: 4,
            squadValue: 445,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        b4 : {
            name: "Spain",
            ranking: 10,
            squadValue: 931,
            teamWonBefore: true, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        c1 : {
            name: "Austria",
            ranking: 36,
            squadValue: 45,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        c2 : {
            name: "Denmark",
            ranking: 12,
            squadValue: 233,
            teamWonBefore: false, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        c3 : {
            name: "France",
            ranking: 7,
            squadValue: 972,
            teamWonBefore: true, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        c4 : {
            name: "Portugal",
            ranking: 11,
            squadValue: 34,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        d1 : {
            name: "Ireland",
            ranking: 5,
            squadValue: 629, 
            teamWonBefore: true, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        d2 : {
            name: "Croatia",
            ranking: 20,
            squadValue: 327,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        d3 : {
            name: "Iceland",
            ranking: 22,
            squadValue: 68,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        d4 : {
            name: "Macedonia",
            ranking: 48,
            squadValue: 121,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        e1 : {
            name: "Hungary",
            ranking: 2,
            squadValue: 883,
            teamWonBefore: true, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        e2 : {
            name: "Ukraine",
            ranking: 23,
            squadValue: 36,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        e3 : {
            name: "Serbia",
            ranking: 34,
            squadValue: 252,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        e4 : {
            name: "Switzerland",
            ranking: 6,
            squadValue: 196,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        f1 : {
            name: "Germany",
            ranking: 1,
            squadValue: 795,
            teamWonBefore: true, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        f2 : {
            name: "Holland",
            ranking: 57,
            squadValue: 79,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        f3 : {
            name: "Slovakia",
            ranking: 15,
            squadValue: 139,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        f4 : {
            name: "Sweden",
            ranking: 24,
            squadValue: 108,
            teamWonBefore: false, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        g1 : {
            name: "Belgium",
            ranking: 3,
            squadValue: 679,
            teamWonBefore: false, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        g2 : {
            name: "England",
            ranking: 12,
            squadValue: 787,
            teamWonBefore: true, 
            
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        g3 : {
            name: "Slovein",
            ranking: 55,
            squadValue: 139,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        g4 : {
            name: "Lithuania",
            ranking: 21,
            squadValue: 53,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        h1 : {
            name: "Estonia",
            ranking: 16,
            squadValue: 679,
            teamWonBefore: false, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        h2 : {
            name: "Liechtenstein",
            ranking: 61,
            squadValue: 68,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        h3 : {
            name: "Poland",
            ranking: 8,
            squadValue: 247,
            teamWonBefore: false, 
            
             

            xp: 0,
            pts: 0,
            total: 0
        },
        h4 : {
            name: "Finland",
            ranking: 27,
            squadValue: 270,
            teamWonBefore: false, 
             
             
 
            xp: 0,
            pts: 0,
            total: 0
        },
        
    };
    

   
    var gameLogic = function() {
        let perf = Math.random() * 30,
            luck = Math.random() * 20;
        return ( luck + perf ).toFixed(2);
    };
    
    var totalNumTeams = Object.keys(teams).length; 
    
    var arr = [ [1,2],[3,4],[1,3],[2,4],[1,4],[2,3] ]; 
    
    var charCode = "a".charCodeAt(0); 
        
    for (let j=charCode; j < (charCode + (totalNumTeams / 4)); j++) {
        
        var group = String.fromCharCode(j);
        
        // HTML creation //
        var groupDiv = document.createElement("div"),
            groupH3 = document.createElement("h3"),
            groupHead = document.createTextNode("Group "+group.toUpperCase());
        
        
        var elGroups = document.getElementById("groups");
        elGroups.appendChild(groupDiv);
        groupDiv.appendChild(groupH3).appendChild(groupHead);
        //
    
        for (let i=0; i < arr.length; i++) {
            
            var t1 = group+arr[i][0],
                t2 = group+arr[i][1];
                
            var team1 = teams[t1],
                team2 = teams[t2];
                
                
            var team1Score = (team1.xp + Number(gameLogic())),
                team2Score = (team2.xp + Number(gameLogic()));
    
                    
            team1.total += team1Score;
            team2.total += team2Score;
    
            var drawMargin = 10;
            
            var scoreDiff = team1Score - team2Score;
            
            // HTML Creation //
            
            var fix = document.createElement("p"),
            
                domString = "<p><span>"+team1.name+"</span><span> vs </span><span>"+team2.name+"</span></p>",
                
                currentGroup = elGroups.children[(j-97)+1];
            
            fix.innerHTML = domString;
            
            currentGroup.appendChild(fix.firstChild);
            
            var res = document.createElement("span"),
            
                resT1Win = "<span class='winner-indicator'> "+team1.name+" win (+3pts)</span>",
                resT2Win = "<span class='winner-indicator'> "+team2.name+" win (+3pts)</span>",
                resDraw = "<span class='winner-indicator'> Draw (+1pt each)</span>";
            
            //
        
            if ( scoreDiff >= drawMargin ) {
                team1.pts += 3;
                console.log("Home Win!!!");
                
                // HTML //
                currentGroup.children[i+1].children[0].classList.add("win");
                currentGroup.children[i+1].children[2].classList.add("lose");
                
                res.innerHTML = resT1Win;
                currentGroup.children[i+1].appendChild(res.firstChild);
                
                //
            }
            else if ( -scoreDiff >= drawMargin ) {
                team2.pts += 3;
                console.log("Away Win!!!");
                
                // HTML //
                currentGroup.children[i+1].children[0].classList.add("lose");
                currentGroup.children[i+1].children[2].classList.add("win");
                
                res.innerHTML = resT2Win;
                currentGroup.children[i+1].appendChild(res.firstChild);
                
                //
            }
            else {
                team1.pts += 1;
                team2.pts += 1;
                console.log("Draw!!!");
                
                // HTML //
                currentGroup.children[i+1].children[0].classList.add("draw");
                currentGroup.children[i+1].children[2].classList.add("draw");
                
                res.innerHTML = resDraw;
                currentGroup.children[i+1].appendChild(res.firstChild);
                //
            }
            
            console.log(team1.name + " vs " + team2.name);
            console.log(team1Score.toFixed(1) + "	" + team2Score.toFixed(1));
            console.log(team1.pts + "	" + team2.pts);
            console.log("");
            
            
        
            console.log();
        
        }
    
    } 
    
    
    var gTable = [];
    var last16 = [];
    
     
    for (let j = charCode; j < (charCode + (totalNumTeams / 4)); j++) { 
        
        var group = String.fromCharCode(j);
        
        for (let i=0; i < 4; i++) {
            
            var t1 = group+(i+1);
            var team = teams[t1];
            
            team.total = Number(String(team.pts)+"0"+team.total); 
            
            gTable.push([team.name, team.total.toFixed(0), team.xp]);
            
        } 
        gTable.sort(function(a, b) {
            return b[1] - a[1]; 
        });
        
        
        last16 = last16.concat(gTable.slice(0,2)); 
        gTable = []; 
        
            
    } 
    
    console.log(last16.toString());
   
    
    var last16Fixt = [[0,3],[4,7],[8,11],[12,15],[2,1],[6,5],[10,9],[14,13]], 
        last8Fixt = [[0,1],[2,3],[4,5],[6,7]], 
        last4Fixt = [[0,1],[2,3]]; 
        last2Fixt = [[0,1]]; 
    
    var last8 = [], 
        last4 = [], 
        last2 = []; 
        last1 = []; 
    
   
    var knockOut = function(stage, arrayTeamsIn, arrayFixt, arrayTeamsQual) {
        
        // HTML creation //
        var stageDiv = document.createElement("div"),
            elSelect = document.getElementById(stage);
        
        elSelect.appendChild(stageDiv);
        
        //
        
        for (i = 0; i < arrayFixt.length; i++) {
            
            let t1 = arrayFixt[i][0],
                t2 = arrayFixt[i][1];
                
            let team1 = arrayTeamsIn[t1],
                team2 = arrayTeamsIn[t2];
                
            let winMargin = 5,
                winETMargin = 2;
                
            console.log(team1[0].toString() + " vs " + team2[0].toString());
            
            let team1Score = (team1[2] + Number(gameLogic())),
                team2Score = (team2[2] + Number(gameLogic()));
            
            var scoreDiff = team1Score - team2Score;
            
            // HTML Creation //
            
            var elP2 = document.createElement("p"),
            
                fixtureString2 = "<p><span>"+team1[0]+"</span><span> vs </span><span>"+team2[0]+"</span></p>",
                
                stageDiv = elSelect.children[1];
            
            elP2.innerHTML = fixtureString2;
            
            stageDiv.appendChild(elP2.firstChild);
            
            var res = document.createElement("span"),
            
                resT1Win = "<span class='winner-indicator'> "+team1[0]+" win</span>",
                resT1AET = "<span class='winner-indicator'> "+team1[0]+" win after extra time</span>",
                resT1Pen = "<span class='winner-indicator'> "+team1[0]+" win on penalties</span>",
                resT2Win = "<span class='winner-indicator'> "+team2[0]+" win</span>",
                resT2AET = "<span class='winner-indicator'> "+team2[0]+" win after extra time</span>",
                resT2Pen = "<span class='winner-indicator'> "+team2[0]+" win on penalties</span>";
              
            //
            
            if ( scoreDiff >= 0 ) {
               
               // HTML //
                    stageDiv.children[i].children[0].classList.add("win");
                    stageDiv.children[i].children[2].classList.add("lose");
                //	
            
                if ( scoreDiff < winETMargin ) {
                    console.log("Home Win on Penalties!!");
                    
                    // HTML //
                    res.innerHTML = resT1Pen;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                }
                else if ( scoreDiff >= winETMargin && scoreDiff < winMargin ) {
                    console.log("Home Win after Extra Time!!");
                    
                     // HTML //
                    res.innerHTML = resT1AET;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                
                }
                else {
                    console.log("Home Win!!");
                    
                     // HTML //
                    res.innerHTML = resT1Win;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                }
                
                arrayTeamsQual[i] = team1;
                
            }	
            else {
                
                // HTML //
                    stageDiv.children[i].children[0].classList.add("lose");
                    stageDiv.children[i].children[2].classList.add("win");
                //	
            
                if ( -scoreDiff < winETMargin ) {
                    console.log("Away Win on Penalties!!");
                    
                    // HTML //
                    res.innerHTML = resT2Pen;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                }
                else if ( -scoreDiff >= winETMargin && -scoreDiff < winMargin ) {
                    console.log("Away Win after Extra Time!!");
                    
                    // HTML //
                    res.innerHTML = resT2AET;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                }
                else {
                    console.log("Away Win!!");
                    
                    // HTML //
                    res.innerHTML = resT2Win;
                    stageDiv.children[i].appendChild(res.firstChild);
                    
                    //
                }
                
                arrayTeamsQual[i] = team2;
                
            }  
             
            console.log(team1Score.toFixed(1) + "	" + team2Score.toFixed(1));
            console.log("");
    
        }
        var qualified = "";
        
        for (let i = 0; i < arrayTeamsQual.length; i++) {
            
            qualified += arrayTeamsQual[i][0].toString() + " ";
    
        }
        console.log(qualified);
    };
    
  
    
    knockOut("last16",last16,last16Fixt,last8); 
    
    knockOut("quarters",last8,last8Fixt,last4); 
    
    knockOut("semis",last4,last4Fixt,last2); 
    
    knockOut("final",last2,last2Fixt,last1); 
    
    // HTML creation //
    
    var elFinal = document.getElementById("final").children[1];
    
    var elP3 = document.createElement("p"),
            
        winnerString = "<p>"+last1[0][0]+" are 2021 European Cup Champions!</p>";
    
    elP3.innerHTML = winnerString;
    
    elFinal.appendChild(elP3.firstChild);
    elFinal.classList.add("winner");
    //
    
    console.log(last1[0][0].toString() + " wins the European Cup 2021!");
    
    }
    europeanCupSim();