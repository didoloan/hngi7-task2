const output = () =>{
    const info ={
        fullName : "Adewusi Bob Adedayo",
        hngId: "HNG-01900",
        email: "addeybob@gmail.com",
        language: "javascript",
    }

    return 'Hello World, this is '  + info.fullName  + ' with HNG ID ' + info.hngId  + ' using ' + info.language + ' for stage 2 task.';
}

console.log(output());