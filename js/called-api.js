    // START API CALLED
   // BEGIN: configuration zone
   var CRUD_CURD_ID = "0a222e6d96a440da83e619d2c2e44de0";
   var CRUD_CURD_RESOURCE_NAME = "macth-list";
   var CURD_CURD_API_ENDPOINT =
       "https://crudcrud.com/api/" + CRUD_CURD_ID + "/" + CRUD_CURD_RESOURCE_NAME;
   // END:configuration zone

   // BEGIN: application variables zone
   var APPLICATION_STATE = {
       todoList: []
   }
   // END: application variables zone

   // BEGIN: utility function zone
   function htmlToElem(html) {
       let temp = document.createElement("template");
       html = html.trim(); // Never return a space text node as a result
       temp.innerHTML = html;
       return temp.content.firstChild;
   }
   // END: utility function zone

   // BEGIN: API fetching zone
   async function loadTodoList(afterLoadFunction) {
     var headers = new Headers();
     headers.append("Content-Type", "application/json");
   
     var requestOptions = {
       method: "GET",
       headers: headers,
     };
   
     await fetch(CURD_CURD_API_ENDPOINT, requestOptions)
       .then(function (response) {
         if (response.ok) {
           response.json().then(function (data) {
             afterLoadFunction(data);
           });
         } else {
           console.log("Error loading match history:", response.status);
         }
       })
       .catch(function (error) {
         console.log("Error loading match history:", error);
       });
   }
   

   function addNewTodoItem(value, afterAddFunction) {
     var headers = new Headers();
     headers.append("Content-Type", "application/json");
   
     var currentTime = new Date().toLocaleString(); // Get the current local time
   
     var requestOptions = {
       method: "POST",
       body: JSON.stringify({
         name: value,
         winplayer: winplayer, // Add winplayer data to the request body
         time: currentTime, // Add local time data to the request body
       }),
       headers: headers,
     };
   
     fetch(CURD_CURD_API_ENDPOINT, requestOptions)
       .then(function (response) {
         if (response.ok) {
           response.json().then(function (data) {
             afterAddFunction(data);
           });
         } else {
           console.log("Error adding match:", response.status);
         }
       })
       .catch(function (error) {
         console.log("Error adding match:", error);
       });
   }
   
   
   function deleteTodoItem(event) {
     var todoItemElm = event.target.parentNode;
     var itemId = todoItemElm.getAttribute("data-id");
   
     var headers = new Headers();
     headers.append("Content-Type", "application/json");
   
     var requestOptions = {
       method: "DELETE",
       headers: headers,
     };
   
     fetch(CURD_CURD_API_ENDPOINT + "/" + itemId, requestOptions)
       .then(function (response) {
         if (response.ok) {
           todoItemElm.remove();
           console.log("Match deleted:", itemId);
         } else {
           console.log("Error deleting match:", itemId);
         }
       })
       .catch(function (error) {
         console.log("Error deleting match:", error);
       });
   }
   
   
   
   // END: API fetching zone

   

   // END: UI Control and logic zone