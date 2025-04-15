let studentGPA = 3.8;
let creditsCompleted = 85;
let hasPrerequisites = true; 
let isRegistrationOpen = true;

if (studentGPA >= 3.7 && creditsCompleted >= 80) {
   if (hasPrerequisites) {
       if (isRegistrationOpen) {
           console.log("Eligible for Honors Program!");
           if (studentGPA >= 3.8) {
               console.log("Scholarship Available");
           } else {
               console.log("No Scholarship Available");
           }
       } else {
           console.log("Registration Closed - Contact Honors Department");
       }
   } else {
       console.log("Missing Prerequisites for Honors Track");
   }  
} else if (studentGPA >= 3.0 && creditsCompleted >= 60) {
   if (hasPrerequisites) {
       if (isRegistrationOpen) {
           console.log("Regular Track Registration Approved");
           if (creditsCompleted >= 85) {
               console.log("Senior Status Priority");
           } else {
               console.log("Junior Status");
           }
       } else {
           console.log("Regular Track Registration Closed");
       }
   } else {
       console.log("Missing Prerequisites for Regular Track");
   }
}else if (studentGPA >= 2.0 && creditsCompleted >= 30) {
   if (hasPrerequisites) {
       if (isRegistrationOpen) {
           console.log("Probation Registration Permitted");
           if (studentGPA >= 2.5) {
               console.log("Academic Counseling Optional");
           } else {
               console.log("Academic Counseling Required");
           }
       } else {
           console.log("Probation Registration Closed");
       }
   } else {
       console.log("Missing Prerequisites - See Advisor");
   }
}else {
   if (creditsCompleted < 30) {
       if (studentGPA < 2.0) {
           console.log("Academic Review Required");
           if (hasPrerequisites) {
               console.log("Prerequisites met - See Academic Advisor");
           } else {
               console.log("Full Academic Review Required");
           }
       } else {
           console.log("First Year Student Review");
       }
   } else {
       console.log("See Department Head for Registration");
   }
}