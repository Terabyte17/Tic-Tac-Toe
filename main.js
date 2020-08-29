var single_player = 0;
var character = 0;
var characters = ['X','O'];
var characterSecond = 1;
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {  
     
        // Generate random number  
        var j = Math.floor(Math.random() * (i + 1)); 
                     
        var temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
         
    return array; 
 } 
function game_type(x)
{   
    var options = document.getElementsByClassName("buttons");
    single_player = x;
    for(var i=0;i<2;i++)
    {
        options[i].style.display = "none";
    }
    var new_options = document.getElementsByClassName("buttons_2");
    if(x===0)
    {
        document.getElementsByClassName("heading")[0].innerText = "Choose your shape";
    }
    else
    {
        document.getElementsByClassName("heading")[0].innerText = "Choose your shape(1st Player)";
    }
    for(var j=0;j<2;j++)
    {
        new_options[j].style.display = "block";
    }
}
function shape_type(x)
{
    var options = document.getElementsByClassName("buttons_2");
    character = x;
    if(x===1)
        {
            characterSecond = 0;
        }
    else
    {
        characterSecond = 1;
    }
    for(var i=0;i<2;i++)
    {
        options[i].style.display = "none";
    }
    document.getElementsByClassName("heading")[0].innerText = "Who should play first?";
    var new_options = document.getElementsByClassName("buttons_3");
    for(var j=0;j<2;j++)
    {
        new_options[j].style.display="block";
    }
    
}
var first=0;
function whoGoesFirst(x)
{   
    var options = document.getElementsByClassName("buttons_3");
    for(var j=0;j<2;j++)
    {
        options[j].style.display="block";
    }
    document.getElementsByClassName("heading")[0].innerText = "Let's Play!";
    if(x===1)
    {
        computer_first();
    }
    var new_options = document.getElementsByClassName("buttons_3");
    for(var j=0;j<2;j++)
    {
        new_options[j].style.display="none";
    }
    first = x;
    return;
}
function game(x)
{
    if(tictac[x]!=='#')
    {
        alert("That cell has already been taken! Chose another!")
        return;
    }
    if(single_player)
    {
        multi_player_game(x);
    }
    else
    {
        single_player_game(x);
    }
}
var count = 0;
var tictac = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
function multi_player_game(x)
{
    if(count%2==0)
    {
        document.getElementsByClassName("play-area-boxes")[x].innerText = characters[character]
        tictac[x] = characters[character];
        document.getElementsByClassName("heading")[0].innerText = "Player 2's Turn";
        count+=1;
    }
    else
    {   
        document.getElementsByClassName("play-area-boxes")[x].innerText = characters[characterSecond];
        tictac[x] = characters[characterSecond];
        document.getElementsByClassName("heading")[0].innerText = "Player 1's Turn";
        count+=1;
    }
    check_win();
}

function check_win()
{   
    var check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[check]===tictac[check+1] && tictac[check+1]===tictac[check+2] && tictac[check]!=='#')
        {
            if(count%2===0)
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 2 Won";
                alert("Congratulations! Player 2 Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            
        }
        check+=3;
    }
    check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[i]===tictac[i+3] && tictac[i+3]===tictac[i+6] && tictac[i]!=='#')
        {
            if(count%2===0)
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 2 Won";
                alert("Congratulations! Player 2 Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
           
        }
        check+=3;
    }
    if(tictac[0]===tictac[4] && tictac[4]===tictac[8] && tictac[0]!=='#')
    {
        if(count%2===0)
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 2 Won";
                alert("Congratulations! Player 2 Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            return;
    }
    if(tictac[2]===tictac[4] && tictac[4]===tictac[6] && tictac[2]!=='#')
    {
        if(count%2===0)
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 2 Won";
                alert("Congratulations! Player 2 Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            
    }
    var draw=0;
    for(var x=0;x<9;x++)
    {
        if(tictac[x]==='#')
        {
            draw=2;
        }
    }
    if(draw===0)
    {
        document.getElementsByClassName("heading")[0].innerText = "Draw!";
        alert("Draw!");
    }
    return draw;
}
function check_win_single()
{   
    var check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[check]===tictac[check+1] && tictac[check+1]===tictac[check+2] && tictac[check]!=='#')
        {
            if((count%2===0 && first===0) || (count%2===1 && first===1))
            {
                document.getElementsByClassName("heading")[0].innerText = "Sorry! The Computer Won";
                alert("Sorry! The Computer Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            
        }
        check+=3;
    }
    check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[i]===tictac[i+3] && tictac[i+3]===tictac[i+6] && tictac[i]!=='#')
        {
            if((count%2===0 && first===0) || (count%2===1 && first===1))
            {
                document.getElementsByClassName("heading")[0].innerText = "Sorry! The Computer Won";
                alert("Sorry! The Computer Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
           
        }
        check+=3;
    }
    if(tictac[0]===tictac[4] && tictac[4]===tictac[8] && tictac[0]!=='#')
    {
        if((count%2===0 && first===0) || (count%2===1 && first===1))
            {
                document.getElementsByClassName("heading")[0].innerText = "Sorry! The Computer Won";
                alert("Sorry! The Computer Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            return;
    }
    if(tictac[2]===tictac[4] && tictac[4]===tictac[6] && tictac[2]!=='#')
    {
        if((count%2===0 && first===0) || (count%2===1 && first===1))
            {
                document.getElementsByClassName("heading")[0].innerText = "Sorry! The Computer Won";
                alert("Sorry! The Computer Won");
                return 1;
            }
            else
            {
                document.getElementsByClassName("heading")[0].innerText = "Congratulations! Player 1 Won";
                alert("Congratulations! Player 1 Won");
                return -1;
            }
            
    }
    var draw=0;
    for(var x=0;x<9;x++)
    {
        if(tictac[x]==='#')
        {
            draw=2;
        }
    }
    if(draw===0)
    {
        document.getElementsByClassName("heading")[0].innerText = "Draw!";
        alert("Draw!");
    }
    return draw;
}

function check_winNoprint(turn)
{   
    var check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[check]===tictac[check+1] && tictac[check+1]===tictac[check+2] && tictac[check]!=='#')
        {
            if(turn%2==1)
            {
                return 1;
            }
            else
            {
                return -1;
            }
            
        }
        check+=3;
    }
    check = 0;
    for(var i=0;i<3;i++)
    {
        if(tictac[i]===tictac[i+3] && tictac[i+3]===tictac[i+6] && tictac[i]!=='#')
        {
            if(turn%2==1)
            {
                return 1;
            }
            else
            {
                return -1;
            }
           
        }
        check+=3;
    }
    if(tictac[0]===tictac[4] && tictac[4]===tictac[8] && tictac[0]!=='#')
    {
        if(turn%2==1)
            {
                return 1;
            }
            else
            {
                return -1;
            }
            return;
    }
    if(tictac[2]===tictac[4] && tictac[4]===tictac[6] && tictac[2]!=='#')
    {
        if(turn%2==1)
            {
                return 1;
            }
            else
            {
                return -1;
            }
            
    }
    var draw=0;
    for(var x=0;x<9;x++)
    {
        if(tictac[x]==='#')
        {
            draw=2;
            break;
        }
    }
    return draw;
}


function single_player_game(x)
{
    if((count%2===0 && first===0) || (count%2===1 && first===1))
    {   
        $(document).ready(function(){
            $($(".play-area-boxes")[x]).css("background-color","blue");
        });
        document.getElementsByClassName("play-area-boxes")[x].innerText = characters[character];
        tictac[x] = characters[character];
        console.log(tictac);
        document.getElementsByClassName("heading")[0].innerText = "Computer's Turn";
        count+=1;
    }
    check_win_single();
    tictac_AI();
    count+=1;  
    check_win_single();
    document.getElementsByClassName("heading")[0].innerText = "Player 1's Turn";

}

function computer_first()
{
    tictac_AI();
    count+=1;  
    check_win_single();
    document.getElementsByClassName("heading")[0].innerText = "Player 1's Turn";
    return;
}

function tictac_AI()
{
    var idealMove = minimax(1,tictac);
    var idealPos = idealMove.position;
    document.getElementsByClassName("play-area-boxes")[idealPos].innerText = characters[characterSecond];
    tictac[idealPos] = characters[characterSecond];
}

function minimax(computerTurn,tictac)
{   
    var emptyAreas = [];
    for(var a=0;a<9;a++)
    {
        if(tictac[a]==='#')
        {
            emptyAreas.push(a);
        }
    }
    if(check_winNoprint(computerTurn)===0)
    {
        return { score : 0 };
    }
    else if(check_winNoprint(computerTurn)===1 || check_winNoprint(computerTurn)===-1)
    {
        if(check_winNoprint(computerTurn)===1)
        {
            return { score : -1 };
        }
        else
        {
            return { score : 1};
        }
    }
    var moves = [];
    for(var i=0;i<emptyAreas.length;i++)
    {   var move = {};
        move.position = emptyAreas[i];
        if(computerTurn)
        {
            tictac[emptyAreas[i]]=characters[characterSecond];
        }
        else
        {
            tictac[emptyAreas[i]]=characters[character];
        }
            var res=minimax(!computerTurn,tictac);
            move.score = res.score;    
            tictac[emptyAreas[i]]="#";
            moves.push(move);
        }
    shuffleArray(moves);
    if(computerTurn)
    {
        var bestScore=-10000;
        var bestMove=null;
        for(var i=0;i<moves.length;i++)
        {
            if(moves[i].score>bestScore)
            {   
                bestScore = moves[i].score;
                bestMove=i;           
            }
        }
        return moves[bestMove];
    }
    else
    {
        var bestScore=10000;
        var bestMove=null;
        for(var i=0;i<moves.length;i++)
        {
            if(bestScore>moves[i].score)
            {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }   
        return moves[bestMove];
    }
}
