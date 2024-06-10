const textField = document.getElementById('text-field');

document.getElementById('boldBtn').addEventListener('click',function(){
    const boldBtn = document.getElementById('boldBtn');
    boldBtn.classList.toggle('btn');
    boldBtn.classList.toggle('btn-square');
    boldBtn.classList.toggle('btn-error');
    boldBtn.classList.toggle('btn-sm');

    const textField = document.getElementById('text-field');
    textField.classList.toggle('font-bold');
});

/* document.getElementById('bold').addEventListener('click', function () {
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
}) */

document.getElementById('italicBtn').addEventListener('click', function () {

    const italicBtn = document.getElementById('italicBtn');
    italicBtn.classList.toggle('btn');
    italicBtn.classList.toggle('btn-square');
    italicBtn.classList.toggle('btn-error');
    italicBtn.classList.toggle('btn-sm');

    const textField = document.getElementById('text-field');
    textField.classList.toggle('italic');
    /* const textField = document.getElementById('text-field');
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
    } */
})
document.getElementById('underlineBtn').addEventListener('click', function () {
    const underlineBtn = document.getElementById('underlineBtn');
    underlineBtn.classList.toggle('btn');
    underlineBtn.classList.toggle('btn-square');
    underlineBtn.classList.toggle('btn-error');
    underlineBtn.classList.toggle('btn-sm');

    const textField = document.getElementById('text-field');
    textField.classList.toggle('underline');


    /* const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textDecoration == '' || textField.style.textDecoration == 'none') {
        textField.style.textDecoration = 'underline';
        console.log('if block');
    }
    else{
        textField.style.textDecoration = 'none';
        console.log('else block');
    } */
})


document.getElementById('AlignLeft').addEventListener('click', function () {
    const AlignLeft = document.getElementById('AlignLeft');
    AlignLeft.classList.toggle('btn');
    AlignLeft.classList.toggle('btn-square');
    AlignLeft.classList.toggle('btn-error');
    AlignLeft.classList.toggle('btn-sm');

    document.getElementById('AlignCenter').setAttribute('class', 'fa-solid fa-align-center p-2');
    document.getElementById('AlignRight').setAttribute('class', 'fa-solid fa-align-right p-2');
    document.getElementById('AlignJustify').setAttribute('class', 'fa-solid fa-align-justify hidden lg:block p-2');


    textField.classList.remove('text-center');
    textField.classList.remove('text-right');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-left');
    /* const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'right' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'left';
        console.log('if block');
    } */
})


document.getElementById('AlignCenter').addEventListener('click', function () {
    const AlignCenter = document.getElementById('AlignCenter');
    AlignCenter.classList.toggle('btn');
    AlignCenter.classList.toggle('btn-square');
    AlignCenter.classList.toggle('btn-error');
    AlignCenter.classList.toggle('btn-sm');

    document.getElementById('AlignLeft').setAttribute('class', 'fa-solid fa-align-left p-2');
    document.getElementById('AlignRight').setAttribute('class', 'fa-solid fa-align-right p-2');
    document.getElementById('AlignJustify').setAttribute('class', 'fa-solid fa-align-justify hidden lg:block p-2');

    textField.classList.remove('text-left');
    textField.classList.remove('text-right');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-center');
    
    /* const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'left' || textField.style.textAlign == 'right' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'center';
        console.log('if block');
    } */
})


document.getElementById('AlignRight').addEventListener('click', function () {
    const AlignRight = document.getElementById('AlignRight');
    AlignRight.classList.toggle('btn');
    AlignRight.classList.toggle('btn-square');
    AlignRight.classList.toggle('btn-error');
    AlignRight.classList.toggle('btn-sm');

    document.getElementById('AlignLeft').setAttribute('class', 'fa-solid fa-align-left p-2');
    document.getElementById('AlignCenter').setAttribute('class', 'fa-solid fa-align-center p-2');
    document.getElementById('AlignJustify').setAttribute('class', 'fa-solid fa-align-justify hidden lg:block p-2');

    textField.classList.remove('text-left');
    textField.classList.remove('text-center');
    textField.classList.remove('text-justify');
    textField.classList.toggle('text-right');


    /* const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'left' || textField.style.textAlign == 'justify') {
        textField.style.textAlign = 'right';
        console.log('if block');
    } */
})


document.getElementById('AlignJustify').addEventListener('click', function () {
    const AlignJustify = document.getElementById('AlignJustify');
    AlignJustify.classList.toggle('btn');
    AlignJustify.classList.toggle('btn-square');
    AlignJustify.classList.toggle('btn-error');
    AlignJustify.classList.toggle('btn-sm');

    document.getElementById('AlignLeft').setAttribute('class', 'fa-solid fa-align-left p-2');
    document.getElementById('AlignCenter').setAttribute('class', 'fa-solid fa-align-center p-2');
    document.getElementById('AlignRight').setAttribute('class', 'fa-solid fa-align-right p-2');
    textField.classList.remove('text-left');
    textField.classList.remove('text-center');
    textField.classList.remove('text-right');
    textField.classList.toggle('text-justify');
    
    
    /* const textField = document.getElementById('text-field');
    console.log('global block');
    console.log(textField.style.textAlign);
    if (textField.style.textAlign == '' || textField.style.textAlign == 'center' || textField.style.textAlign == 'right' || textField.style.textAlign == 'left') {
        textField.style.textAlign = 'justify';
        console.log('if block');
    } */
})

document.getElementById('fontSizeInput').classList.add('font-bold');

document.getElementById('fontSizeInput').addEventListener('change',function(){
    document.getElementById('text-field').style.fontSize = document.getElementById('fontSizeInput').value + 'px';
})

document.getElementById('caseFormat').addEventListener('click', function(){
    const caseFormatBtn = document.getElementById('caseFormat');
    caseFormatBtn.classList.toggle('btn');
    caseFormatBtn.classList.toggle('btn-square');
    caseFormatBtn.classList.toggle('btn-error');
    caseFormatBtn.classList.toggle('btn-sm');

    textField.classList.toggle('uppercase');
})

document.getElementById('text-color').addEventListener('change', function(){
    document.getElementById('text-field').style.color = document.getElementById('text-color').value;
})

