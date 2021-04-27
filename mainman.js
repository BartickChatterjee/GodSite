const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OMG What a beautiful site</title>
    <style>
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: url("hd.jpg");
        background-size: cover;
        background: linear-gradient(45deg,#60a5f3,#e1ff8d);
    }
    
    #bl {
        position: absolute;
        background-color: #0000002f;
        backdrop-filter: blur(8px);
        height: 100%;
        width: 100%;
    }
    
    #login{
        position: absolute;
        top: 10%;
        color: #ffffff;
        font-size: 50px;
        font-family: Gadugi;
        font-weight: bold;
        text-align: center;
        width: 100%;
    }
    
    #ema {
        position: absolute;
        top: 30%;
        left: 30%;
        color: #ffffff;
        font-size: 24px;
        font-family: Gadugi;
        font-weight: bold;
    }
    
    #pas {
        position: absolute;
        top: 50%;
        left: 30%;
        color: #ffffff;
        font-size: 24px;
        font-family: Gadugi;
        font-weight: bold;
    }
    
    input {
        position: absolute;
        top: 40px;
        background-color: whitesmoke;
        border-radius: 23px;
        border-width: 0px;
        padding-left: 20px;
        padding-right: 20px;
        width: 450px;
        height: 40px;
        color: #333333;
        font-size: 20px;
        font-family: Gadugi;
        font-weight: bold;
        outline: 0 !important;
    }
    
    input[type="button"] {
        background-color: rgb(255, 53, 53);
        transition: background-color 0.3s linear;
    
        box-shadow: 0px 3px 7px #5e5e5e;
        transition: box-shadow 0.3s ease-in-out;
        position: absolute;
        top: 80%;
        left: 30%;
        border-radius: 23px;
        border-width: 0px;
        padding-left: 20px;
        padding-right: 20px;
        width: 450px;
        height: 40px;
        color: #dfdfdf;
        font-size: 20px;
        font-family: Gadugi;
        font-weight: bold;
        outline: 0 !important;
    }
    
    input[type="button"]:hover {
        box-shadow: 0px 6px 11px #5e5e5e;
    }
    
    input[type="button"]:active {
        background-color: rgb(150, 8, 8);
    }
    </style>
    <script type="text/javascript">
        function al() {
            alert("E-mail ID: "+document.getElementById("em").value+"\nPassword: "+document.getElementById("pw").value);
        }
    </script>
</head>

<body>
    <div id="bl"></div>
    <div id="login">Login</div>
    <form>
        <div id="ema">E-mail ID
            <div>
                <input type="email" id="em">
            </div>
        </div>
        <div id="pas">Password
            <div>
                <input type="password" id="pw">
            </div>
        </div>
        <!-- <div id="subb"> -->
        <input type="button" value="Submit" name="su" onclick="al()">
        <!-- </div> -->
    </form>
</body>

</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});