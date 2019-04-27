
module.exports = () => `
<!DOCTYPE html>
<html>
  <head>
    <title>favicon.draw()</title>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link rel="stylesheet" href="/style.css" >
  </head>
  <body>
    <h1>favicon.draw()</h1>
    <div class="toolbox">
      <button id='generateCanvas' >Generate blank ICO</button>
      <select id='resolutionSelector' >
        <option value = "16">16x16</option>
        <option value = "32">32x32</option>
        <option value = "64">64x64</option>
      </select>
    </div>
    <div class="toolbox">
      <button id='save'>Save ICO</button>
      <button id='icoLib'>ICO Library</button>

    </div>
    <div class="toolbox">
      <input id='colorSelector' class="colorInput" type="text" maxlength="7" placeholder="#000000">
      <select id ='tools'>
        <option value="paint">Paint</option>
        <option value="fill">Fill</option>
      </select>
      <button id='floodCanvas'>Flood</button>

    </div>
    <table id='canvas' style='padding-top: 20px;'>
    </table>
  </body>
  <script type="text/javascript" src="/script.js"></script>
</html>`
