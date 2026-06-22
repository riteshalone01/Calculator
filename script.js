import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const display = document.getElementById('display');
const btnContainer = document.getElementById('btns');

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
// पुराना कोड: const db = getDatabase(app);
// नया कोड: इसे ऐसे लिखें
// यह वाला URL कॉपी करें:
const db = getDatabase(app, "https://fir-console-b2489-default-rtdb.asia-southeast1.firebasedatabase.app");
// बटन्स रेंडर करने का कोड
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

function handleInput(val) {
    if(val === 'AC') display.value = '0';
    else if(val === 'DEL') display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
    else if(val === '=') { try { display.value = eval(display.value); } catch { display.value = 'Error'; } }
    else display.value = display.value === '0' ? val : display.value + val;
}

// Firebase Visitor Logic
const visitsRef = ref(db, 'visitorCount');
get(visitsRef).then((snapshot) => {
  let count = snapshot.exists() ? snapshot.val() : 0;
  count++;
  set(visitsRef, count);
  // यह लाइन संख्या को आपकी वेबसाइट पर दिखा देगी
document.getElementById('visitor-count').innerText = "Total Visitors: " + count;
  console.log("Visitor number is: " + count);
});