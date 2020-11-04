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

let timeSlot = document.getElementById("timeslot");
let modalWindow = document.getElementById("modalWindow");

let timeSlotTaken = document.getElementById("appt")
let modalWindowPreview = document.getElementById("modalWindowPreview");

timeSlot.addEventListener("click", openForm);
window.addEventListener("click", outsideClickCloseForm);

function openForm(){
  openScheduleForm();
}

function openScheduleForm(){
 modalWindow.style.display = "block";
 document.getElementById("dailyPreviewContainer").style.opacity = 1;
};

function outsideClickCloseForm(event){
  if(event.target == modalWindow){
    modalWindow.style.display = "none";
    document.getElementById("dailyPreviewContainer").style.opacity = 1;
  }
}

