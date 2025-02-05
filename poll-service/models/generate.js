function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
    // aprox nr of days since 1970 untill 2000: 30years * 365 days
    var nr_days1 = 30 * 365;
    // aprox nr of days since 1950 untill 1970: 20years * 365 days
    var nr_days2 = -20 * 365;

    // milliseconds in one day
    var one_day = 1000 * 60 * 60 * 24

    // get a random number of days passed between 1950 and 2000
    var days = getRandomInt(nr_days2, nr_days1);

    return new Date(days * one_day)
}

for (var i = 1; i <= 10000; i++) {
    db.test.insert(
        {
            name: "name" + i,
            birthday: getRandomDate()
        }
    )
}