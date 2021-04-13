var RamdanData = [
    {
        "DATE": "2021-04-12",
        "SEHR": "04:22",
        "IFTAR": "18:19"
    },
    {
        "DATE": "2021-04-13",
        "SEHR": "04:21",
        "IFTAR": "18:20"
    },
    {
        "DATE": "2021-04-14",
        "SEHR": "04:20",
        "IFTAR": "18:20"
    },
    {
        "DATE": "2021-04-15",
        "SEHR": "04:19",
        "IFTAR": "18:20"
    },
    {
        "DATE": "2021-04-16",
        "SEHR": "04:18",
        "IFTAR": "18:21"
    },
    {
        "DATE": "2021-04-17",
        "SEHR": "04:17",
        "IFTAR": "18:21"
    },
    {
        "DATE": "2021-04-18",
        "SEHR": "04:16",
        "IFTAR": "18:22"
    },
    {
        "DATE": "2021-04-19",
        "SEHR": "04:15",
        "IFTAR": "18:22"
    },
    {
        "DATE": "2021-04-20",
        "SEHR": "04:14",
        "IFTAR": "18:23"
    },
    {
        "DATE": "2021-04-21",
        "SEHR": "04:13",
        "IFTAR": "18:23"
    },
    {
        "DATE": "2021-04-22",
        "SEHR": "04:12",
        "IFTAR": "18:23"
    },
    {
        "DATE": "2021-04-23",
        "SEHR": "04:11",
        "IFTAR": "18:24"
    },
    {
        "DATE": "2021-04-24",
        "SEHR": "04:10",
        "IFTAR": "18:24"
    },
    {
        "DATE": "2021-04-25",
        "SEHR": "04:09",
        "IFTAR": "18:25"
    },
    {
        "DATE": "2021-04-26",
        "SEHR": "04:08",
        "IFTAR": "18:25"
    },
    {
        "DATE": "2021-04-27",
        "SEHR": "04:07",
        "IFTAR": "18:26"
    },
    {
        "DATE": "2021-04-28",
        "SEHR": "04:06",
        "IFTAR": "18:26"
    },
    {
        "DATE": "2021-04-29",
        "SEHR": "04:05",
        "IFTAR": "18:27"
    },
    {
        "DATE": "2021-04-30",
        "SEHR": "04:04",
        "IFTAR": "18:27"
    },
    {
        "DATE": "2021-05-01",
        "SEHR": "04:03",
        "IFTAR": "18:27"
    },
    {
        "DATE": "2021-05-02",
        "SEHR": "04:02",
        "IFTAR": "18:28"
    },
    {
        "DATE": "2021-05-03",
        "SEHR": "04:01",
        "IFTAR": "18:28"
    },
    {
        "DATE": "2021-05-04",
        "SEHR": "04:01",
        "IFTAR": "18:29"
    },
    {
        "DATE": "2021-05-05",
        "SEHR": "04:00",
        "IFTAR": "18:29"
    },
    {
        "DATE": "2021-05-06",
        "SEHR": "03:59",
        "IFTAR": "18:30"
    },
    {
        "DATE": "2021-05-07",
        "SEHR": "03:58",
        "IFTAR": "18:30"
    },
    {
        "DATE": "2021-05-08",
        "SEHR": "03:57",
        "IFTAR": "18:31"
    },
    {
        "DATE": "2021-05-09",
        "SEHR": "03:57",
        "IFTAR": "18:31"
    },
    {
        "DATE": "2021-05-10",
        "SEHR": "03:56",
        "IFTAR": "18:32"
    },
    {
        "DATE": "2021-05-11",
        "SEHR": "03:55",
        "IFTAR": "18:32"
    },
    {
        "DATE": "2021-05-11",
        "SEHR": "03:54",
        "IFTAR": "18:33"
    }
];


var bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];



var timeType = [
    "আজকের ইফতার",
    "আজকের সেহেরী"
];
function init() {
    // 2011-10-05T14:48:00.000Z

    let typeShowTypelist = ["todays_seheri", "todays_iftar", "next_days_seheri"];

    // let CurrentdhakaTimeDate = moment().tz("Asia/Dhaka");
    let CurrentdhakaTimeDate = moment("2021-04-13T19:33:00.000Z");
    let CurrentdhakaTimeDateString = moment().format("YYYY-MM-DD");
    console.log('CurrentdhakaTimeDateString:', CurrentdhakaTimeDateString)


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



    function replaceEnglishToBanglaDigit(string) {
        let stringArray = string.split("");
        stringArray[0] = bengaliNumbers[parseInt(stringArray[0])];
        stringArray[1] = bengaliNumbers[parseInt(stringArray[1])];
        // stringArray[2] = `<span class="colon">ঃ</span>`;
        stringArray[2] = `<span class="colon">:</span></span>`;
        stringArray[3] = bengaliNumbers[parseInt(stringArray[3])];
        stringArray[4] = bengaliNumbers[parseInt(stringArray[4])];

        return stringArray.join('')

    }


    function injectDateToDom() {
        let nextDataType = getNextTimeType();
        console.log('nextDataType:', nextDataType)

        if (nextDataType === "todays_seheri") {
            document.getElementById("event-type").innerHTML = "আজকের সেহেরী";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigit(moment.utc(TodaySehriTime).format("hh:mm"));
        } else if (nextDataType === "todays_iftar") {
            document.getElementById("event-type").innerHTML = "আজকের ইফতার";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigit(moment.utc(TodayIftarTime).format("hh:mm"));
        } else if (nextDataType === "next_days_seheri") {
            document.getElementById("event-type").innerHTML = "আগামীকালের সেহেরী";
            document.getElementById("event-time").innerHTML = replaceEnglishToBanglaDigit(moment.utc(NextdaySehriTime).format("hh:mm"));

        }
    }

    injectDateToDom();

    setInterval(() => {
        injectDateToDom();
    }, 10000);


}



window.onload = init;