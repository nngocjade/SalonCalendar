// DAILY TIME SLOT - ON CLICK - POP UP MODAL

// Attach click listener to time slot

// Attach modal add appt (if time slot is empty)
   // if time slot taken 
     // (else, have client first name and first initial of last name as placeholder) 
     // attach click-listener
      // on-click- preview appointment details
        // (appointment detail pop up includes:
             // Client First and Last Name
             // DD/MM/YYYY
             // Service
             // Time
             // *Note, with some details
             // cancel and edit button)

let slotWrapper = document.getElementById("timeslot");
let openTimeSlot = document.getElementById("timeslot");

openTimeSlot.addEventListener("click", openForm);

function openForm(){
  slotWrapper.innerHTML = "";
 openScheduleForm();
 console.log("green");
}

function openScheduleForm(){
 let apptModalWrapper = document.createElement("div");
  apptModalWrapper.classList.add("modal_wrapper");
  apptModalWrapper.setAttribute("id", "modal_wrapper");

  slotWrapper.appendChild(apptModalWrapper);
};

