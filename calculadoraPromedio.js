/*function calcularPromedio(){
    var studentName = document.getElementById("Estudiante").value;
    var subjectName = document.getElementById("Asignatura").value;
    var v1 = parseFloat(document.getElementById("n1").value);
    var v2 = parseFloat(document.getElementById("n2").value);
    var v3 = parseFloat(document.getElementById("n3").value);            
    if (studentName === '' || subjectName === '' || isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        alert("Por favor, verifique que todos los campos se encuentran llenos");
        return; }   
    if (v1 < 0 || v1 > 10 || v2 < 0 || v2 > 10 || v3 < 0 || v3 > 10) {
        alert("Por favor, ingrese notas entre 0 a 10.");
        return;        
    }
    var pro= ((v1+v2+v3)/3);
    document.getElementById("promedio").innerHTML= pro;  
    
    if (pro >= 7) {
        alert(studentName + ", ¡Felicidades! Has aprobado con un promedio de " + pro);
    } else {
        alert (studentName + ", ¡Gracias por tu esfuerzo! Nos vemos pronto en clase. El promedio obtenido es " + pro)
    }*/