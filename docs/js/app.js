/**
 * app.js
 */
"use strict";

window.addEventListener("DOMContentLoaded", () => {

     

          const registration = document.querySelector("#registration");

          registration.addEventListener("submit", (event) => {
               
                event.preventDefault();
                
                const txtPatientId = document.querySelector("#patientIdNumber") ;

                const txtFirstName = document.querySelector("#firstName") ;

                const txtMiddleName = document.querySelector("#middleInitials") ;

                const txtLastName = document.querySelector("#lastName") ;

                const txtDateOfBirth = document.querySelector("#dateOfBirth") ;

                const txtDepartment = document.querySelector("#ddlDepartment") ;

                const txtOutPatient = document.querySelector("input[name='radioIsOutPatient']:checked") ;



                const strPatientId  = txtPatientId.value ;

                const strFirstName = txtFirstName.value ;

                const strMiddleName = txtMiddleName.value ;

                const strLastName = txtLastName.value ;

                const strDateOfBirth = txtDateOfBirth.value ;

                const strDepartment = txtDepartment.value ;

                const strOutPatient = txtOutPatient.value ;






        addNewAccountDataRow(strPatientId, strFirstName, strMiddleName ,strLastName ,strDateOfBirth ,strDepartment ,strOutPatient)
        txtPatientId.value = "";
        txtFirstName.value = "";
       
       txtMiddleName.value ="" ;

       txtLastName.value ="" ;

       txtDateOfBirth.value ="" ;

       txtDepartment["selectedIndex"] =0;

       txtOutPatient.checked = false ;
       
     txtPatientId.focus() ;



                


                 


               


          });



          const addNewAccountDataRow = function(patientId, firstName, middleName ,lastName ,datOfBirth ,department ,outPatient) {
                const tblAccounts = document.querySelector("#tbodyPatientsList");
                const newRow = tblAccounts.insertRow(-1);
               
                const newCellRowNo = newRow.insertCell(0);
                const strPatientId = document.createTextNode(`${patientId}.`);
                newCellRowNo.appendChild(strPatientId);
                
                
                // const newCellPatientId = newRow.insertCell(1);
                // const strPatientId = document.createTextNode(`${patientId}`);
                // newCellPatientId.appendChild(strPatientId);
                
                
                const newCellFirstName = newRow.insertCell(1);
                const strFirstName = document.createTextNode(`${firstName}`);
                newCellFirstName.appendChild(strFirstName);
                
                
                
                const newCellMiddleName = newRow.insertCell(2);
                const strMiddleName = document.createTextNode(`${middleName}`);
                newCellMiddleName.appendChild(strMiddleName);



                const newCelLastName = newRow.insertCell(3);
                const strLastName = document.createTextNode(`${lastName}`);
                newCelLastName.appendChild(strLastName);




                const newCellDateOfBirth = newRow.insertCell(4);
                const strDateOfBirth = document.createTextNode(`${datOfBirth}`);
                newCellDateOfBirth.appendChild(strDateOfBirth);





                const newCellDepartment = newRow.insertCell(5);
                const strDepartment = document.createTextNode(`${department}`);
                newCellDepartment.appendChild(strDepartment);




                const newCellOutPatient = newRow.insertCell(6);
                const strOutPatient = document.createTextNode(`${outPatient}`);
                newCellOutPatient.appendChild(strOutPatient);




            }




});