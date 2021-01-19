/* global $ */
var grid = require('hex-grid')

$.getJSON('assets/data.json', function (data) {
  var shuffled = shuffle(data)
  $.each(shuffled, function (key, val) {
    var img = $('<img />', {
      'class': 'overlay',
      'src': val.raster,
      'alt': val.description,
      'title': val.description
    })

    var text = $('<div />', {
      'class': 'centered'
    })

    var name = $('<div />', {
      'class': 'sticker-name'
    }).append(val.name)


    var desc = $('<div />', {
      'class': 'sticker-desc'
    }).append(val.description)

    var links = $('<div />', {
      'class': 'sticker-links'
    })


    var vector = $('<i title="vector" class="pad fas fa-shapes"></i>')
    var raster = $('<i title="raster" class="pad fas fa-images"></i>')
    if (val.raster) {
      links.append($('<a />', {
        'href': val.raster
      }).append(raster))
    }
    if (val.vector) {
      links.append($('<a />', {
        'href': val.vector
      }).append(vector))
    }
    
    text.append(name)
    text.append(desc)
    text.append(links)
  

    var container = $('<div />', {
      'class': 'hex',
      'width': '181px',
      'height': '209px',
    })
    container.append(img);
    container.append(text);

    container.appendTo('#grid')
  })

  var hexes = document.querySelectorAll('.hex')
  var root = document.querySelector('#grid')

  function scan () {
    grid({ element: root, spacing: 4}, hexes)
  }

  scan()
  window.addEventListener('resize', scan)
  window.addEventListener('load', scan)
})

function shuffle (array) {
  var currentIndex = array.length
  var temporaryValue
  var randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
