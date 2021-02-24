var students = [];
document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault()
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}
function showlist(){
  var print='';
  for (var i in students) {
    var student=[];
    for(var j in students[i]){
     student.push(j+':'+students[i][j]);
    }
    print+="<li>"+ student.join()+"</li> <br>";
  console.log(print);
  }
  document.getElementById("add").innerHTML="<ul>"+print +"</ul>";
}

// Delete student
function showDel(){
  document.getElementById("del").style.display = 'block';
}
function Delete() {

	let deletstudent  = document.getElementById("dele").value;

	for(var i in students) {
		if(students[i]["id"] == deletestudent){
		 students.splice(i,1);
		 alert("student has deleted");
		 return;
	    }
    }
  alert("student not found");
}


/*function Update() {

let name = document.getElementById('name').value;
let id = document.getElementById('idNumber').value;
let gdpa = document.getElementById('gdpa').value;

var x = -1;
for(var i in students) {
  if(students[i]["id"] == id){
   x = i;
   brack;
  }
  }

if(x == -1)  {
alert("student is not Found");
return;
}
 if(x != -1){

  if(name != '')
students[x]["name"] = name;

if(id != '')
students[x]["idNumber"] = id;

if(gdpa != '')
students[x]["gdpa"] = gdpa;
  alert("student Update");
 }

}*/





// This week task:
// Show list of students
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
