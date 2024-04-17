document.getElementById('bold').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.fontWeight);
    if (textField.style.fontWeight == '' || textField.style.fontWeight == 'normal') {
        textField.style.fontWeight = 'bold';
        console.log('if block');
        console.log(textField.getAttribute('cols'));
    }
    else{
        textField.style.fontWeight = 'normal';
        console.log('else block');
        console.log(textField.getAttribute('cols'));
    }
})

document.getElementById('italic').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.fontStyle);
    if (textField.style.fontStyle == '' || textField.style.fontStyle == 'normal') {
        textField.style.fontStyle = 'italic';
        console.log('if block');
        console.log(textField.getAttribute('cols'));
    }
    else{
        textField.style.fontStyle = 'normal';
        console.log('else block');
        console.log(textField.getAttribute('cols'));
    }
})
document.getElementById('underline').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textDecoration == '' || textField.style.textDecoration == 'none') {
        textField.style.textDecoration = 'underline';
        console.log('if block');
    }
    else{
        textField.style.textDecoration = 'none';
        console.log('else block');
    }
})


document.getElementById('AlignLeft').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'right' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'left';
        console.log('if block');
    }
})


document.getElementById('AlignCenter').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'left' || textField.style.textAlign == 'right' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'center';
        console.log('if block');
    }
})


document.getElementById('AlignRight').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'left' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'right';
        console.log('if block');
    }
})


document.getElementById('AlignJustify').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'right' || textField.style.textAlign == 'left') {
        textField.style.textAlign = 'justify';
        console.log('if block');
    }
})