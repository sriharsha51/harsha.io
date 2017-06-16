var app=angular.module("ToDoApp",[]);
app.controller("TodoCtrl",TodoCtrl);
function TodoCtrl(){
  this.listItems=["learn Angular","learn JQuery","learn nodeJS"];
  this.boolean=false;
  this.addItem= function(){
    this.listItems.push(this.inputItem);
    this.inputItem="";
  };
  this.editItems= function(){
   this.boolean=!this.boolean;
  };
  this.deleteItem= function(index){
    this.listItems.splice(index,1);
  }
}
