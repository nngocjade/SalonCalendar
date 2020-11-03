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

let openTimeSlot = document.getElementById("timeSlot");

openTimeSlot.addEventListener("click", openScheduleForm);

// function openForm(){
//  openScheduleForm();
// }

function openScheduleForm(){
 console.log("green");
 let apptModalWrapper = document.createElement("div");
  apptModalWrapper.classList.add("modal_wrapper");
  apptModalWrapper.setAttribute("id", "modal_wrapper");

let slotWrapper = document.getElementById("timeSlot");
 slotWrapper.appendChild(apptModalWrapper);


};
