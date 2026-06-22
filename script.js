const display = document.getElementById('display');
const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'];
const btnContainer = document.getElementById('btns');

// Create Buttons
buttons.forEach(btn => {
    const b = document.createElement('button');
    b.className = 'ant-btn ant-btn-default';
    b.innerText = btn;
    b.style.height = '40px';
    b.onclick = () => handleInput(btn);
    btnContainer.appendChild(b);
});

// Logic Function
function handleInput(val) {
    if(val === 'C') {
        display.value = '0';
    } else if(val === '=' || val === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else {
        display.value = display.value === '0' ? val : display.value + val;
    }
}

// Keyboard Support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    // Check if key is a number, operator, Enter, or C
    if (/[0-9]/.test(key) || ['+', '-', '*', '/', 'Enter', 'Escape', 'Backspace'].includes(key)) {
        if (key === 'Enter') handleInput('=');
        else if (key === 'Escape' || key === 'Backspace') handleInput('C');
        else handleInput(key);
    }
});