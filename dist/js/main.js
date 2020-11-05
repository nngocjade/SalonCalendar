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


// MAIN MODAL FORM FUNCTION
function openModalForm(){
  createForm();
  openModalWindow();
}

let timeSlot = document.getElementById("timeslot");
let modalWindow = document.getElementById("modalWindow");

let timeSlotTaken = document.getElementById("appt")
let modalWindowPreview = document.getElementById("modalWindowPreview");

timeSlot.addEventListener("click", openModalForm);
window.addEventListener("click", outsideClickCloseModalWindow);

function openModalWindow(){
 modalWindow.style.display = "flex";
 modalWindow.style.alignItems = "center";
 modalWindow.style.justifyContent = "center"; 
};

function outsideClickCloseModalWindow(event){
  if(event.target == modalWindow){
    modalWindow.style.display = "none";
    document.getElementById("dailyPreviewContainer").style.opacity = 1;
  }
}

// APPOINTMENT FORM 
function createForm(){

  console.log(createForm);

  let formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = "";
  let form = document.createElement("form");
  form.setAttribute("action", '" "');

  formContainer.appendChild(form);

  let dateTimeWrapper = document.createElement("div");
  dateTimeWrapper.classList.add("dateTime_wrapper");
  
  form.appendChild(dateTimeWrapper);

  let iconDateWrapper = document.createElement("div");
  iconDateWrapper.classList.add("icon_date_wrapper");

  dateTimeWrapper.appendChild(iconDateWrapper);

  let icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-clock-o");

  let input = document.createElement("input");
  input.classList.add("date_input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "date");
  input.setAttribute("id", "date");

  iconDateWrapper.appendChild(icon);
  iconDateWrapper.appendChild(input);

  // let apptWrapper = document.creat






}

