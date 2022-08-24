let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchHandler);

function fetchHandler() {
    console.log('You have clicked the fetch handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


    // What to do when response is ready
    xhr.onload = function () 
    {
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);
            //console.log(obj);
            let list = document.getElementById('list');
            let id1 = document.getElementById("empid").value;
            str = "";
            obj.forEach(function(obj1) 
            {
                // if object id equals 1, get its text
                if(obj1.id == id1)
                {
                   str+= `<li>${obj1.title} </li>`;
                   str+= `<li>${obj1.body} </li>`;
                   str+= `<li>${obj1.userId} </li>`;
               }
              });
            list.innerHTML = " "+str+" ";
            
        }
        else
        {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
