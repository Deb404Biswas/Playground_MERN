function subscribe()
        {
            let btnele= document.querySelector('.js-btn').innerHTML;
            console.log('At the moment of being clicked the button is ',btnele)
            if(btnele==='Subscribe')
            {
                document.querySelector('.js-btn').innerHTML='Subscribed'
                btnele=document.querySelector('.js-btn').innerHTML;
                document.querySelector('.js-btn').classList.add('is-sub');
            }
            else
            {
                document.querySelector('.js-btn').innerHTML='Subscribe';
                btnele=document.querySelector('.js-btn').innerHTML
                document.querySelector('.js-btn').classList.remove('is-sub');
            }
            console.log('Now the button shows',btnele);
        }


        function calculate()
        {
            const cost= document.querySelector('.cost-input').value;
            let tcost=0;
            console.log('The cost of order is', cost);
            if (cost < 40)
            {
                tcost=Number(cost)+10;
            }
            else
            tcost=cost;
        console.log('The total cost is',tcost);
        document.querySelector('.js-tcost').innerHTML=`$${tcost}`;
        }

        function keydown(event)
        {
            if(event.key === 'Enter')
            calculate();
        }