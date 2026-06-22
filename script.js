// // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// // import { getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// // const display = document.getElementById('display');
// // const btnContainer = document.getElementById('btns');
// // const nameInput = document.getElementById('userName'); // नाम इनपुट को यहाँ पकड़ रहे हैं

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDCyZeIVYSJLIK2hAkwGFqubW55UTXunEY",
// //   authDomain: "fir-console-b2489.firebaseapp.com",
// //   projectId: "fir-console-b2489",
// //   storageBucket: "fir-console-b2489.firebasestorage.app",
// //   messagingSenderId: "266803189292",
// //   appId: "1:266803189292:web:20ddec1bf77d044410e389",
// //   measurementId: "G-JP4H9D245R"
// // };

// // const app = initializeApp(firebaseConfig);
// // const db = getDatabase(app, "https://fir-console-b2489-default-rtdb.asia-southeast1.firebasedatabase.app");

// // const buttonConfig = [
// //     {v:'AC', t:'top'}, {v:'DEL', t:'top'}, {v:'%', t:'top'}, {v:'/', t:'op'},
// //     {v:'7', t:'num'}, {v:'8', t:'num'}, {v:'9', t:'num'}, {v:'*', t:'op'},
// //     {v:'4', t:'num'}, {v:'5', t:'num'}, {v:'6', t:'num'}, {v:'-', t:'op'},
// //     {v:'1', t:'num'}, {v:'2', t:'num'}, {v:'3', t:'num'}, {v:'+', t:'op'},
// //     {v:'0', t:'num'}, {v:'.', t:'num'}, {v:'=', t:'op'}
// // ];

// // buttonConfig.forEach(btn => {
// //     const b = document.createElement('button');
// //     b.innerText = btn.v;
// //     b.className = 'btn ' + (btn.t === 'op' ? 'btn-op' : btn.t === 'top' ? 'btn-top' : '');
// //     b.onclick = () => handleInput(btn.v);
// //     btnContainer.appendChild(b);
// // });

// // function handleInput(val) {
// //     if(val === 'AC') {
// //         display.value = '0';
// //     } 
// //     else if(val === 'DEL') {
// //         display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
// //     } 
// //     else if(val === '=') { 
// //         try {
// //             let calculation = display.value;
// //             let result = eval(display.value);
// //             display.value = result;
            
// //             // यहाँ नाम और कैलकुलेशन कंसोल में दिखा रहे हैं
// //             let user = nameInput.value || "Anonymous";
// //             console.log(user + " has calculate: " + calculation + " = " + result);
// //         } catch { 
// //             display.value = 'Error'; 
// //         } 
// //     }
// //     else {
// //         display.value = display.value === '0' ? val : display.value + val;
// //     }
// // }

// // // Visitor Count Tracker
// // const visitsRef = ref(db, 'visitorCount');
// // get(visitsRef).then((snapshot) => {
// //   let count = snapshot.exists() ? snapshot.val() : 0;
// //   count++;
// //   set(visitsRef, count);
// //   document.getElementById('visitor-count').innerText = "Total Visitors: " + count;
// // });

// // function lockName() {
// //     if(nameInput.value !== "") {
// //         nameInput.disabled = true; // नाम लॉक हो जाएगा
// //         document.getElementById('submitName').disabled = true; // बटन लॉक हो जाएगा
// //         console.log("Welcome, " + nameInput.value + "!");
// //     } else {
// //         alert("कृपया अपना नाम लिखें!");
// //     }
// // }

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// const display = document.getElementById('display');
// const btnContainer = document.getElementById('btns');
// const nameInput = document.getElementById('userName'); 

// const firebaseConfig = {
//   apiKey: "AIzaSyDCyZeIVYSJLIK2hAkwGFqubW55UTXunEY",
//   authDomain: "fir-console-b2489.firebaseapp.com",
//   projectId: "fir-console-b2489",
//   storageBucket: "fir-console-b2489.firebasestorage.app",
//   messagingSenderId: "266803189292",
//   appId: "1:266803189292:web:20ddec1bf77d044410e389",
//   measurementId: "G-JP4H9D245R"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app, "https://fir-console-b2489-default-rtdb.asia-southeast1.firebasedatabase.app");

// const buttonConfig = [
//     {v:'AC', t:'top'}, {v:'DEL', t:'top'}, {v:'%', t:'top'}, {v:'/', t:'op'},
//     {v:'7', t:'num'}, {v:'8', t:'num'}, {v:'9', t:'num'}, {v:'*', t:'op'},
//     {v:'4', t:'num'}, {v:'5', t:'num'}, {v:'6', t:'num'}, {v:'-', t:'op'},
//     {v:'1', t:'num'}, {v:'2', t:'num'}, {v:'3', t:'num'}, {v:'+', t:'op'},
//     {v:'0', t:'num'}, {v:'.', t:'num'}, {v:'=', t:'op'}
// ];

// buttonConfig.forEach(btn => {
//     const b = document.createElement('button');
//     b.innerText = btn.v;
//     b.className = 'btn ' + (btn.t === 'op' ? 'btn-op' : btn.t === 'top' ? 'btn-top' : '');
//     b.onclick = () => handleInput(btn.v);
//     btnContainer.appendChild(b);
// });

// function handleInput(val) {
//    // फंक्शन को 'async' बना दें
// async function handleInput(val) { 
//     // ... (AC और DEL वाला कोड वैसा ही रहेगा) ...
//     else if(val === '=') { 
//         try {
//             let calculation = display.value;
//             let result = eval(display.value);
//             display.value = result;
            
//             // अब जानकारी निकालें
//             let user = nameInput.value || "Anonymous";
//             let info = await getVisitorInfo(); // जानकारी यहाँ मिलेगी
            
//             const historyRef = ref(db, 'history'); 
//             const newHistoryEntry = push(historyRef); 
            
//             set(newHistoryEntry, {
//                 visitorName: user,
//                 calc: calculation,
//                 res: result,
//                 time: new Date().toLocaleString(),
//                 ipAddress: info.ip,      // यहाँ IP सेव होगा
//                 deviceInfo: info.device  // यहाँ फोन/ब्राउज़र की जानकारी सेव होगी
//             });
//             console.log("सब कुछ सेव हो गया!");
//         } catch { display.value = 'Error'; }
//     }
//     else {
//         display.value = display.value === '0' ? val : display.value + val;
//     }
// }

// // Visitor Count
// const visitsRef = ref(db, 'visitorCount');
// get(visitsRef).then((snapshot) => {
//   let count = snapshot.exists() ? snapshot.val() : 0;
//   count++;
//   set(visitsRef, count);
//   document.getElementById('visitor-count').innerText = "Total Visitors: " + count;
// });

// window.lockName = function() {
//     if(nameInput.value !== "") {
//         nameInput.disabled = true;
//         document.getElementById('submitName').disabled = true;
//     } else {
//         alert("Please Enter Your Name");
//     }
// };
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const display = document.getElementById('display');
const btnContainer = document.getElementById('btns');
const nameInput = document.getElementById('userName'); 

const firebaseConfig = {
  apiKey: "AIzaSyDCyZeIVYSJLIK2hAkwGFqubW55UTXunEY",
  authDomain: "fir-console-b2489.firebaseapp.com",
  projectId: "fir-console-b2489",
  storageBucket: "fir-console-b2489.firebasestorage.app",
  messagingSenderId: "266803189292",
  appId: "1:266803189292:web:20ddec1bf77d044410e389",
  measurementId: "G-JP4H9D245R"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app, "https://fir-console-b2489-default-rtdb.asia-southeast1.firebasedatabase.app");

// डिवाइस की जानकारी और IP एड्रेस निकालने का फंक्शन
async function getVisitorInfo() {
    try {
        // IP एड्रेस लेने का तरीका
        let response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        return { 
            ip: data.ip || "IP Not Found", 
            device: navigator.userAgent || "Unknown Device" 
        };
    } catch (error) {
        console.log("IP fetch error: ", error);
        return { ip: "Blocked/Error", device: navigator.userAgent || "Unknown" };
    }
}
const buttonConfig = [
    {v:'AC', t:'top'}, {v:'DEL', t:'top'}, {v:'%', t:'top'}, {v:'/', t:'op'},
    {v:'7', t:'num'}, {v:'8', t:'num'}, {v:'9', t:'num'}, {v:'*', t:'op'},
    {v:'4', t:'num'}, {v:'5', t:'num'}, {v:'6', t:'num'}, {v:'-', t:'op'},
    {v:'1', t:'num'}, {v:'2', t:'num'}, {v:'3', t:'num'}, {v:'+', t:'op'},
    {v:'0', t:'num'}, {v:'.', t:'num'}, {v:'=', t:'op'}
];

buttonConfig.forEach(btn => {
    const b = document.createElement('button');
    b.innerText = btn.v;
    b.className = 'btn ' + (btn.t === 'op' ? 'btn-op' : btn.t === 'top' ? 'btn-top' : '');
    b.onclick = () => handleInput(btn.v);
    btnContainer.appendChild(b);
});

async function handleInput(val) {
    if(val === 'AC') {
        display.value = '0';
    } 
    else if(val === 'DEL') {
        display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
    } 
    else if(val === '=') { 
        try {
            let calculation = display.value;
            let result = eval(display.value);
            display.value = result;
            
            let user = nameInput.value || "Anonymous";
            let info = await getVisitorInfo();
            
            const historyRef = ref(db, 'history'); 
            const newHistoryEntry = push(historyRef); 
            
            set(newHistoryEntry, {
                visitorName: user,
                calc: calculation,
                res: result,
                time: new Date().toLocaleString(),
                ipAddress: info.ip,
                deviceInfo: info.device
            });
            console.log("डेटाबेस में सेव हो गया!");
        } catch { 
            display.value = 'Error'; 
        } 
    }
    else {
        display.value = display.value === '0' ? val : display.value + val;
    }
}

const visitsRef = ref(db, 'visitorCount');
get(visitsRef).then((snapshot) => {
  let count = snapshot.exists() ? snapshot.val() : 0;
  count++;
  set(visitsRef, count);
  document.getElementById('visitor-count').innerText = "Total Visitors: " + count;
});

window.lockName = function() {
    if(nameInput.value !== "") {
        nameInput.disabled = true;
        document.getElementById('submitName').disabled = true;
    } else {
        alert("Please Enter Your Name");
    }
};