var request = require('request');

sendBooking('Mike Segeren', 'mchsegeren@gmail.com', '12:00:00');
sendBooking('Menno Dekker', 'm.dekker.prive@gmail.com', '12:00:00');

function sendBooking(name, email, time) {
    const date = formatDate(new Date(Date.now()));
    var options = {
      'method': 'POST',
      'url': 'http://mikalob.com/portfolio/b2bgym/agenda/dataMod.php',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'date': `${date} ${time}`,
        'name': name,
        'email': email,
        'saveBooking': ''
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
