
$(() => $('.door')
    .each((index, elem) => {
      elem = $(elem)
      let unlockDate = new Date(2016, 12, elem.attr('date'), 0, 0, 0, 0)
      if (unlockDate <= Date.now()) {
        elem.click(doorHandlers[elem.attr('date')]);
      } else {
        elem.addClass('disabled')
      }
    }))

const doorHandlers = {
  "16": () => console.log(16),
  "17": () => console.log(17),
  "18": () => console.log(18),
  "19": () => {
    
  },
  "20": () => console.log(20),
  "21": () => console.log(21),
  "22": () => console.log(22),
  "23": () => console.log(23),
  "24": () => console.log(24)
}