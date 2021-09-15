var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6cYQM0/grand-father.png",
"https://i.postimg.cc/wjMnFtMX/father.jpg" ,
"https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://i.postimg.cc/Jnl6wtrd/sister.jpg",
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names = ["Family Book","Ranbir Singh","Diljeet Singh", "Rocky Singh","Alia Singh", "soni singh"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_memeber_in_array 
    if (i >numbers_of_family_member_in_array)
    {
            i = 0;        
    }
        var updatedImage = images[i];
        var updtedName = names[i];
        document.getElementById("family_member__image").src = updatedImage;
        document.getElementById("family_member_name").innerHTML = updatedName;
}