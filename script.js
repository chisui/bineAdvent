
$(() => $('.door')
    .each((index, elem) => {
      elem = $(elem)
      let day = elem.attr('date')
      let unlockDate = new Date(2016, 11, day, 0, 0, 0, 0)
      console.log(unlockDate)
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
  '19': () => $('#modal19').modal('show'),
  // Lindor
  '20': () => console.log('20'),
  // Schnaps
  '21': () => console.log('21'),
  // Skyrim
  '22': () => $('#modal22').modal('show'),
  // Ody-c
  '23': () => console.log('23'),
  // Irie
  '24': () => console.log('24')
}