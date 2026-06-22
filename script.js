const display = document.getElementById('display');
const btnContainer = document.getElementById('btns');

// Defined buttons with types for styling
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