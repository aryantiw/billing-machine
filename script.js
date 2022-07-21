const billAmount = document.querySelector("#bill-amout")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")
const noOfnotes = document.querySelectorAll(".no-of-notes")

const notes =[2000, 500, 100, 20, 10, 5, 1]


checkButton.addEventListener("click", function validateBillandCashAmount(){
    message.style.display = "none";

    if(billAmount.value > 0)
    {
        //  do something
        
        if(cashGiven.value >= billAmount.value)
        {
            // btata hu abhi 
            var amountTobeReturned = cashGiven.value - billAmount.value;

            for(let i=0; i<notes.length; i++)
            {
                const numberOfNotes = Math.trunc(amountTobeReturned / notes[i]);

                amountTobeReturned = amountTobeReturned % notes[i];

                noOfnotes[i].innerText = numberOfNotes;

            }
            

        }

        else
        {
            message.style.display = "block";
            message.innerText = "Enter Proper Cash Given";
        }

    }
   else{

   
    message.style.display = "block";
    message.innerText = "Enter Valid Amount";

   }


});