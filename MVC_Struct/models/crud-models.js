module.exports = {
     createCrud: function(){
          data = "Form data was inserted";
          return data;
     },
     fetchCrud: function(){
          data = "Data was fetched";
          return data;
     }, 
     editCrud: function(editData){
          data = "Data is edited by Id : " + editData;
          return data;
     },
     updateCrud: function(updateId){
          data = "Data was updated ny Id :" + updateId;
          return data;
     },
     deleteCrud: function(deleteId){
          data = "Data was deleted by Id : " + deleteId;
          return data;
     }
}