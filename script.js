
$(() => $('.door')
    .each((index, elem) => {
      elem = $(elem)
      let day = elem.attr('date')
      let unlockDate = new Date(2016, 11, day, 0, 0, 0, 0)
      if (unlockDate <= Date.now()) {
        elem.click(doorHandlers[day]);
      } else {
        elem.addClass('disabled')
      }
    }))

doorHandlers = {
  // Racklett
  '16': () => $('#modal16').modal('show'),
  // markt
  '17': () => $('#modal17').modal('show'),
  // Star Wars
  '18': () => window.location.href = 'https://www.youtube.com/watch?v=yHfLyMAHrQE&t=214',
  // Kinder
  '19': () => console.log('19'),
  // Schnaps
  '20': () => $('#modal20').modal('show'),
  // Lindor
  '21': () => console.log('21'),
  // Skyrim
  '22': () => $('#modal22').modal('show'),
  // Ody-c
  '23': () => $('#modal23').modal('show'),
  // Irie
  '24': () => window.location.href = 'https://www.youtube.com/watch?v=9iKTOKidwEE'
}

$(() => $('*[showSpoiler]')
  .click((evt) => $(`spoiler#${$(evt.target).attr('showSpoiler')}`).toggleClass('show')))
