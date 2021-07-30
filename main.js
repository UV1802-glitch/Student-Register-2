var name_of_the_student= []

function submit()
{
    for   (var j=1;j<=4;j++)
    {
        var all_names = document.getElementById("name_of_the_student_" + j).value
        name_of_the_student.push(all_names);
    }

    document.getElementById("display_name_with_commas").innerHTML = name_of_the_student;
    var remove= name_of_the_student.join("*");

    document.getElementById("display_name_without_commas").innerHTML = remove;

}

function sorting()
{
    name_of_the_student.sort();
    document.getElementById("display_name_with_commas").innerHTML = name_of_the_student;

    var remove2= name_of_the_student.join("/")
    document.getElementById("display_name_without_commas").innerHTML = remove2;
}
