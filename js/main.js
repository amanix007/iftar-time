"use strict";
var RamdanData = [

    {
        "DATE": "2021-04-13",
        "SEHR": "04:16",
        "IFTAR": "18:22"
    },
    {
        "DATE": "2021-04-14",
        "SEHR": "04:15",
        "IFTAR": "18:23"
    },
    {
        "DATE": "2021-04-15",
        "SEHR": "04:14",
        "IFTAR": "18:24"
    },
    {
        "DATE": "2021-04-16",
        "SEHR": "04:13",
        "IFTAR": "18:24"
    },
    {
        "DATE": "2021-04-17",
        "SEHR": "04:12",
        "IFTAR": "18:24"
    },
    {
        "DATE": "2021-04-18",
        "SEHR": "04:11",
        "IFTAR": "18:25"
    },
    {
        "DATE": "2021-04-19",
        "SEHR": "04:10",
        "IFTAR": "18:25"
    },
    {
        "DATE": "2021-04-20",
        "SEHR": "04:09",
        "IFTAR": "18:26"
    },
    {
        "DATE": "2021-04-21",
        "SEHR": "04:08",
        "IFTAR": "18:26"
    },
    {
        "DATE": "2021-04-22",
        "SEHR": "04:07",
        "IFTAR": "18:27"
    },
    {
        "DATE": "2021-04-23",
        "SEHR": "04:06",
        "IFTAR": "18:27"
    },
    {
        "DATE": "2021-04-24",
        "SEHR": "04:05",
        "IFTAR": "18:28"
    },
    {
        "DATE": "2021-04-25",
        "SEHR": "04:05",
        "IFTAR": "18:28"
    },
    {
        "DATE": "2021-04-26",
        "SEHR": "04:04",
        "IFTAR": "18:29"
    },
    {
        "DATE": "2021-04-27",
        "SEHR": "04:03",
        "IFTAR": "18:29"
    },
    {
        "DATE": "2021-04-28",
        "SEHR": "04:02",
        "IFTAR": "18:29"
    },
    {
        "DATE": "2021-04-29",
        "SEHR": "04:01",
        "IFTAR": "18:30"
    },
    {
        "DATE": "2021-04-30",
        "SEHR": "04:00",
        "IFTAR": "18:30"
    },
    {
        "DATE": "2021-05-01",
        "SEHR": "03:59",
        "IFTAR": "18:31"
    },
    {
        "DATE": "2021-05-02",
        "SEHR": "03:58",
        "IFTAR": "18:31"
    },
    {
        "DATE": "2021-05-03",
        "SEHR": "03:57",
        "IFTAR": "18:32"
    },
    {
        "DATE": "2021-05-04",
        "SEHR": "03:55",
        "IFTAR": "18:32"
    },
    {
        "DATE": "2021-05-05",
        "SEHR": "03:54",
        "IFTAR": "18:33"
    },
    {
        "DATE": "2021-05-06",
        "SEHR": "03:53",
        "IFTAR": "18:33"
    },
    {
        "DATE": "2021-05-07",
        "SEHR": "03:52",
        "IFTAR": "18:34"
    },
    {
        "DATE": "2021-05-08",
        "SEHR": "03:51",
        "IFTAR": "18:34"
    },
    {
        "DATE": "2021-05-09",
        "SEHR": "03:50",
        "IFTAR": "18:35"
    },
    {
        "DATE": "2021-05-10",
        "SEHR": "03:50",
        "IFTAR": "18:35"
    },
    {
        "DATE": "2021-05-11",
        "SEHR": "03:49",
        "IFTAR": "18:36"
    },
    {
        "DATE": "2021-05-12",
        "SEHR": "03:49",
        "IFTAR": "18:36"
    },
    {
        "DATE": "2021-05-13",
        "SEHR": "03:48",
        "IFTAR": "18:36"
    }
];


var bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];


let dummyTime = moment.utc("2021-04-13T01:00:00.000Z");

function init() {

    let CurrentdhakaTimeDate = moment().tz("Asia/Dhaka");
    // let CurrentdhakaTimeDate = dummyTime;



    let CurrentdhakaTimeDateString = CurrentdhakaTimeDate.format("YYYY-MM-DD");



    let TodaySehriTime = "";
    let TodayIftarTime = "";

    let NextdaySehriTime = "";
    let NextdayIftarTime = "";


    let RamadanNumber = 0;



    for (let i = 0; i < RamdanData.length; i++) {
        let data = RamdanData[i];
        let nextDaydata = RamdanData[i + 1];
        if (data.DATE === CurrentdhakaTimeDateString) {

            TodaySehriTime = `${data.DATE}T${data.SEHR}:00.000Z`;
            TodayIftarTime = `${data.DATE}T${data.IFTAR}:00.000Z`;

            NextdaySehriTime = `${nextDaydata.DATE}T${nextDaydata.SEHR}:00.000Z`;
            NextdayIftarTime = `${nextDaydata.DATE}T${nextDaydata.IFTAR}:00.000Z`;
            RamadanNumber = i;
        }
    }




    function getNextTimeType() {
        let nextDataType = "todays_seheri";

        if (moment(CurrentdhakaTimeDate).isBefore(TodaySehriTime, 'second') && moment(CurrentdhakaTimeDate).isBefore(TodayIftarTime, 'second')) {
            nextDataType = "todays_seheri";
        } else if (moment(CurrentdhakaTimeDate).isAfter(TodaySehriTime, 'second') && moment(CurrentdhakaTimeDate).isBefore(TodayIftarTime, 'second')) {
            nextDataType = "todays_iftar";
        } else if (moment(CurrentdhakaTimeDate).isBefore(NextdaySehriTime, 'second')) {
            nextDataType = "next_days_seheri";
        }

        return nextDataType;
    }



    function replaceEnglishToBanglaDigitTime(string) {
        let stringArray = string.split("");
        stringArray[0] = bengaliNumbers[parseInt(stringArray[0])];
        stringArray[1] = bengaliNumbers[parseInt(stringArray[1])];
        // stringArray[2] = `<span class="colon">ঃ</span>`;
        stringArray[2] = `<span class="colon">:</span></span>`;
        stringArray[3] = bengaliNumbers[parseInt(stringArray[3])];
        stringArray[4] = bengaliNumbers[parseInt(stringArray[4])];

        return stringArray.join('')

    }
    function replaceEnglishToBanglaDigitTimeWithSeconds(string) {
        let stringArray = string.split("");
        stringArray[0] = bengaliNumbers[parseInt(stringArray[0])];
        stringArray[1] = bengaliNumbers[parseInt(stringArray[1])];

        stringArray[2] = `<span class="colond">:</span></span>`;

        stringArray[3] = bengaliNumbers[parseInt(stringArray[3])];
        stringArray[4] = bengaliNumbers[parseInt(stringArray[4])];

        stringArray[5] = `<span class="colond">:</span></span>`;

        stringArray[6] = bengaliNumbers[parseInt(stringArray[6])];
        stringArray[7] = bengaliNumbers[parseInt(stringArray[7])];


        return stringArray.join('')

    }

    var interval = 1000;

    function injectDateToDom() {

        let nextDataType = getNextTimeType();
        console.log('nextDataType:', nextDataType)

        let CurrentdhakaTimeDate = moment().tz("Asia/Dhaka");
        // let CurrentdhakaTimeDate = dummyTime;


        let dhakaTimeIso = moment(CurrentdhakaTimeDate).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")




        if (nextDataType === "todays_seheri") {
            document.getElementById("event-type").innerHTML = "আজকের সেহেরী";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigitTime(moment.utc(TodaySehriTime).format("hh:mm"));
            document.getElementById("event-count-down-time").innerHTML = replaceEnglishToBanglaDigitTimeWithSeconds(getFullString(nextDataType, dhakaTimeIso, TodaySehriTime));
        } else if (nextDataType === "todays_iftar") {
            document.getElementById("event-type").innerHTML = "আজকের ইফতার";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigitTime(moment.utc(TodayIftarTime).format("hh:mm"));
            document.getElementById("event-count-down-time").innerHTML = replaceEnglishToBanglaDigitTimeWithSeconds(getFullString(nextDataType, dhakaTimeIso, TodayIftarTime));

        } else if (nextDataType === "next_days_seheri") {
            document.getElementById("event-type").innerHTML = "আগামীকালের সেহেরী";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigitTime(moment.utc(NextdaySehriTime).format("hh:mm"));
            document.getElementById("event-count-down-time").innerHTML = replaceEnglishToBanglaDigitTimeWithSeconds(getFullString(nextDataType, dhakaTimeIso, NextdaySehriTime));

        }
    }

    function getFullString(nextDataType, dhakaTimeIso, eventTime) {
        let fullString = "";


        let ISOstring = moment.utc(eventTime).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        let remainingTime = moment(ISOstring).diff(moment(dhakaTimeIso), 'seconds');
        remainingTime = Math.abs(remainingTime);
        let duration = 0;

        if (nextDataType === "todays_seheri") {
            duration = moment.duration(remainingTime, 'seconds');
        } else {

            duration = moment.duration(remainingTime, 'seconds');
        }



        let hours = duration.hours();
        let minutes = duration.minutes();
        let seconds = duration.seconds();

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        fullString = `${hours}:${minutes}:${seconds}`;
        console.log('fullString:', fullString)

        return fullString;
    }

    injectDateToDom();


    setInterval(() => {
        injectDateToDom();
    }, 1000);


}



window.onload = init;