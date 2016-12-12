
$(() => $('.door')
    .each((index, elem) => {
      elem = $(elem)
      let day = elem.attr('date')
      let unlockDate = new Date(2016, 12, day, 0, 0, 0, 0)
      if (unlockDate <= Date.now()) {
        elem.click(doorHandlers[day]);
      } else {
        elem.addClass('disabled')
      }
    }))

doorHandlers = {
  // Racklett
  '16': () => console.log('16'),
  // markt
  '17': () => console.log('17'),
  // Star Wars
  '18': () => window.location.href = 'https://www.youtube.com/watch?v=yHfLyMAHrQE&t=214',
  // Kinder
  '19': () => console.log('19'),
  // Lindor
  '20': () => console.log('20'),
  // Schnaps
  '21': () => console.log('21'),
  // Skyrim
  '22': () => console.log('22'),
  // Ody-c
  '23': () => console.log('23'),
  // Irie
  '24': () => console.log('24')
}