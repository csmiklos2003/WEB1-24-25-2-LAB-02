


const btnGroup = document.querySelector('.btn-group');

const prevBtn = btnGroup.querySelector('button.btn:nth-child(1)');
if(prevBtn)
{
    prevBtn.classList.add('btn-info');
}

const nextBtn = btnGroup.querySelector('button.btn:nth-child(3)');
if(nextBtn)
{
    nextBtn.classList.add('btn-info');
}

const numBtn = btnGroup.querySelector('button.btn:nth-child(2)');
if(numBtn)
{
    numBtn.classList.add('btn-primary');
}

nextBtn.addEventListener('click', (e) => {
    counter++;
    setNumBtn(counter);
});

prevBtn.addEventListener('click', (e) => {
    if(counter < 2)
    {
        return;
    }
    else
    {
        counter--;
        setNumBtn(counter);
    }
});

let counter = 1;

const setNumBtn = (num = 1) => 
    {
        numBtn.innerHTML = num;
    };
