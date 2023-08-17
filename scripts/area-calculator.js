function takeInput(id){
    return parseFloat(document.getElementById(id).value);
}
function setValue(id, value){
    document.getElementById(id).innerText = value;
}
function validate(a,b){
    if(isNaN(a) || isNaN(b)){
        return alert('enter number dumbass');
    }
}

function calculateTriangleArea(){
    const base = takeInput('triangle-base');
    const height = takeInput('triangle-height');
    validate(base,height);
    const area = 0.5*base*height;
    setValue('area-field', area);
}

function calculateRectangleArea(){
    const width = takeInput('rectangle-width');
    const length = takeInput('rectangle-length');
    validate(width,length);
    const area = width*length;
    setValue('areaRect-field',area);
}

function calculateParallelArea(){
    const base = takeInput('parallel-base');
    const height = takeInput('parallel-height');
    validate(base,height);
    const area = base*height;
    setValue('areaPara-field',area);
}

function calculateRhombusArea(){
    const d1 = takeInput('rhombus-diagonal1');
    const d2 = takeInput('rhombus-diagonal2');
    validate(d1,d2);
    const area = d1 * d2 * 0.5;
    setValue('rhombus-field',area);
}

function calculatePentagonArea(){
    const p = takeInput('pentagon-p');
    const b = takeInput('pentagon-b');
    validate(p,b);
    const area = p * b * 0.5;
    setValue('penta-field',area);
}

function calculateEllipseArea(){
    const a = takeInput('ellipse-a');
    const b = takeInput('ellipse-b');
    validate(a,b);
    const area = 3.14 * a * b;
    setValue('ellipse-field',area);
}