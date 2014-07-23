/* create canavs */
var canvas = document.createElement('div')
canvas.id = 'canvas'
with (canvas.style) {
  width = '1px'
  height = '1px'
  overflow = 'hidden'
}
document.getElementsByTagName('body')[0].appendChild(canvas)
window.draw = SVG(canvas)

/* Raw svg with rect */
window.rawSVGWithRect = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="744.09448819" height="1052.3622047" id="svg2"> <g id="layer1"> <rect id="rect3022" width="100" height="100" x="10" y="10" rx="0" ry="0" /> </g></svg>';