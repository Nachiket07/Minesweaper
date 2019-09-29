<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Mine_sweaper_with_JS.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="PlayScript.js">

    </script>
    <style>
        .line-height{

        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    </form>
        <div id="root">
            <div style="text-align:center;height:60px" id="upper">
                <div id="welcome" style="margin-top:25px">
                    <h2 >Welcome to Minesweaper.</h2>
                </div>
            </div>
            <div id="lower">
                <div id="change" style="margin-top:100px;margin-left:39%">
                    <input type="radio" name="choice" value="0"/><label>Size : 10x10 with 10 Mines</label><br />
                    <input type="radio" name="choice" value="1"/><label>Size : 14x14 with 40 Mines</label><br />
                    <input type="radio" name="choice" value="2"/><label>Size : 20x20 with 99 Mines</label><br />
                    <div id="buttonS" style="margin-left:15%;margin-top:5%">
                        <button onclick="creation()">Play !</button>
                    </div>
                </div>                 
            </div>
        </div>
    
</body>
</html>
