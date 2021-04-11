var RamdanData = [
    {
        "DATE": "2021-04-08",
        "SEHR": "5:30AM",
        "IFTAR": "6:30PM"
    },
    // {
    //     "DATE": "09/04/2021",
    //     "SEHR": "04:25 AM",
    //     "IFTAR": "06:18 PM"
    // },
    // {
    //     "DATE": "10/04/2021",
    //     "SEHR": "04:24 AM",
    //     "IFTAR": "06:19 PM"
    // },
    // {
    //     "DATE": "11/04/2021",
    //     "SEHR": "04:23 AM",
    //     "IFTAR": "06:19 PM"
    // },
    // {
    //     "DATE": "12/04/2021",
    //     "SEHR": "04:22 AM",
    //     "IFTAR": "06:20 PM"
    // },
    // {
    //     "DATE": "13/04/2021",
    //     "SEHR": "04:21 AM",
    //     "IFTAR": "06:20 PM"
    // },
    // {
    //     "DATE": "14/04/2021",
    //     "SEHR": "04:20 AM",
    //     "IFTAR": "06:20 PM"
    // },
    // {
    //     "DATE": "15/04/2021",
    //     "SEHR": "04:19 AM",
    //     "IFTAR": "06:21 PM"
    // },
    // {
    //     "DATE": "16/04/2021",
    //     "SEHR": "04:18 AM",
    //     "IFTAR": "06:21 PM"
    // },
    // {
    //     "DATE": "17/04/2021",
    //     "SEHR": "04:17 AM",
    //     "IFTAR": "06:22 PM"
    // },
    // {
    //     "DATE": "18/04/2021",
    //     "SEHR": "04:16 AM",
    //     "IFTAR": "06:22 PM"
    // },
    // {
    //     "DATE": "19/04/2021",
    //     "SEHR": "04:15 AM",
    //     "IFTAR": "06:22 PM"
    // },
    // {
    //     "DATE": "20/04/2021",
    //     "SEHR": "04:13 AM",
    //     "IFTAR": "06:23 PM"
    // },
    // {
    //     "DATE": "21/04/2021",
    //     "SEHR": "04:12 AM",
    //     "IFTAR": "06:23 PM"
    // },
    // {
    //     "DATE": "22/04/2021",
    //     "SEHR": "04:11 AM",
    //     "IFTAR": "06:24 PM"
    // },
    // {
    //     "DATE": "23/04/2021",
    //     "SEHR": "04:10 AM",
    //     "IFTAR": "06:24 PM"
    // },
    // {
    //     "DATE": "24/04/2021",
    //     "SEHR": "04:10 AM",
    //     "IFTAR": "06:25 PM"
    // },
    // {
    //     "DATE": "25/04/2021",
    //     "SEHR": "04:09 AM",
    //     "IFTAR": "06:25 PM"
    // },
    // {
    //     "DATE": "26/04/2021",
    //     "SEHR": "04:08 AM",
    //     "IFTAR": "06:25 PM"
    // },
    // {
    //     "DATE": "27/04/2021",
    //     "SEHR": "04:07 AM",
    //     "IFTAR": "06:26 PM"
    // },
    // {
    //     "DATE": "28/04/2021",
    //     "SEHR": "04:06 AM",
    //     "IFTAR": "06:26 PM"
    // },
    // {
    //     "DATE": "29/04/2021",
    //     "SEHR": "04:05 AM",
    //     "IFTAR": "06:27 PM"
    // },
    // {
    //     "DATE": "30/04/2021",
    //     "SEHR": "04:04 AM",
    //     "IFTAR": "06:27 PM"
    // },
    // {
    //     "DATE": "01/05/2021",
    //     "SEHR": "04:03 AM",
    //     "IFTAR": "06:28 PM"
    // },
    // {
    //     "DATE": "02/05/2021",
    //     "SEHR": "04:02 AM",
    //     "IFTAR": "06:28 PM"
    // },
    // {
    //     "DATE": "03/05/2021",
    //     "SEHR": "04:01 AM",
    //     "IFTAR": "06:29 PM"
    // },
    // {
    //     "DATE": "04/05/2021",
    //     "SEHR": "04:00 AM",
    //     "IFTAR": "06:29 PM"
    // },
    // {
    //     "DATE": "05/05/2021",
    //     "SEHR": "03:59 AM",
    //     "IFTAR": "06:30 PM"
    // },
    // {
    //     "DATE": "06/05/2021",
    //     "SEHR": "03:59 AM",
    //     "IFTAR": "06:30 PM"
    // },
    // {
    //     "DATE": "07/05/2021",
    //     "SEHR": "03:58 AM",
    //     "IFTAR": "06:31 PM"
    // }
];


var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];



//    var dm =  {
//     "DATE": "08 April 2021",
//     "SEHR": "04:26 AM",
//     "IFTAR": "06:18 PM"
//   }

// $("#getting-started")
//     .countdown("2022/01/01", function (event) {
//         console.log('event:', event)
//         $(this).text(
//             event.strftime('%D days %H:%M:%S')
//         );
//     });

// YYYY-MM-DDTHH:mm:ss.sssZ
var timeType = [
    "আজকের ইফতার",
    "আজকের সেহেরী"
];
function init() {

    let dhakaTimeDate = moment().tz("Asia/Dhaka");
    let RamadanNumber = 0;
    var CurrentTimeType = "SEHR";
    var SelectedTimeType = timeType[0];
    var SelectedTime = moment().format('YYYY-MM-DD')
    var TodaySehriTime = "";
    var TodayIftarTime = "";
    var TodayDate = moment().format("YYYY-MM-DD")
    // console.log('TodayDate:', TodayDate)
    for (var i = 0; i < RamdanData.length; i++) {
        var data = RamdanData[i];
        if (data.DATE === TodayDate) {
            // TodaySehriTime = `${data.DATE}T${data.SEHR}.000Z`;
            // TodayIftarDateTime = `${data.DATE}T${data.IFTAR}.000Z`;
            TodaySehriTime = `${data.SEHR}.000Z`;
            TodayIftarTime = `${data.IFTAR}.000Z`;

            RamadanNumber = i;
        }
    }

    
    //   console.log('dhakaTimeDate:', dhakaTimeDate.format("h:mma"))
    
    console.log('TodayIftarTime:', TodayIftarTime)
    
    
    // if (dhakaTimeDate.isAfter(moment("06:20PM", "h:mma"), "minute")) {
    if (dhakaTimeDate.isAfter(moment(TodaySehriTime, "HH:mm:ss.sssZ"), "minute") && dhakaTimeDate.isBefore(moment(TodayIftarTime, "HH:mm:ss.sssZ"), "minute")) {

        console.log("its iftar Time next")
    }else if(dhakaTimeDate.isAfter(moment(TodayIftarTime, "HH:mm:ss.sssZ"), "minute") &&  dhakaTimeDate.isBefore(moment(TodaySehriTime, "HH:mm:ss.sssZ"), "minute")){
        console.log("its sehr Time next")
        
    }

    

    setInterval(function () {
        // console.log("Hello");
        document.getElementById("event-type").innerText = SelectedTimeType;
        document.getElementById("event-time").innerText = SelectedTime;

    }, 1000);
}


// const imageScript = (request, ad, date) =>{
//     document.addEventListener('DOMContentLoaded', function (event) {


//         // var imageSrc = 'https://dev-panel.green-red.com/uploads/5fc4eca4173f8.jpg';
//         var apiEndPoint = '${process.env.CLICK_EVENT_URL}';
//         var payload = {
//             placeId: '${request.placeId}',
//             propertyId:'${request.propertyId}',
//             cookie: '${request.cookie}',
//             requestId: '${ad.campaignId}|${ad.adGroupId}|${ad.id}',
//             date:'${date}',
//             actionType:''
//         };

//         var iframeNode = document.createElement('iframe');
//         iframeNode.src = ad.htmlsrc;
//         iframeNode.alt = title;
//         iframeNode.style.width = '100%';
//         iframeNode.style.height = '100%';

//         var wrapper = document.createElement('div');
//         wrapper.className = 'adv-area-wrapper';  
//         wrapper.appendChild(iframeNode);
//         var x = document.getElementsByTagName('BODY')[0];
//         x.appendChild(wrapper);
//         x.onclick = function () {
//             var xhr = new XMLHttpRequest();
//             xhr.withCredentials = true;
//             xhr.open('POST', apiEndPoint);

//             xhr.setRequestHeader('Content-Type', 'application/json');
//             xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//             payload.actionType = "click";
//             xhr.send(JSON.stringify(payload));

//             xhr.addEventListener('readystatechange', function () {
//                 if (this.readyState === 4) {
//                     const { response, status } = this;
//                     console.log({ response, status });
//                     if (status === 201) {
//                         return response;
//                     }
//                     return false;
//                 }
//             });
//         };
//     })
//     return(``)};


// imageScript();

window.onload = init;