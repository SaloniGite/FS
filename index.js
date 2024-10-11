// const fs = require('fs')


// READ
// fs.readFile('huihui.txt','utf8' , (err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

// WRITE
// const data =` howw jii ky kre apppp hiihihi`
// fs.writeFile('hello.txt',data,(err)=>{
//     if (err) throw err
//     console.log("done")
// })

// APPEND DATA (data is added in the end )

// fs.appendFile('huihui.txt' , 'yoyoyoyyo',(err)=>{

//     if (err ) throw err 
//     console.log("append done ")
// })

// DELETE FILE

// fs.unlink('huihui.txt',(err)=>{
//     if (err) throw err 
//     console.log('done')
// }

// )

// RENAME
// fs.rename('hello.txt','huihui.txt',(err)=>{
//     if (err) throw err 
//     console.log("done")
// })

// DIRECTORY 
// fs.mkdir('path' , options , callback )
// recursive used as if given folder or file not there it will create it 

// fs.mkdir('newdirectory',{recursive:true},(err)=>{

//     if (err) throw err
//     console.log("done")
// })

// CREATE FILE IN THE DIRECTORY

// fs.mkdir('newdirectory',{recursive:true},(err)=>{
//     if (err) throw err
//     fs.writeFile('newdirectory/yoyo.txt','yeeeeyeyyyeeee',(err)=>{
//         if (err) throw err 
//         console.log("done")
//     })
// })

// READ DIRECTORY

// fs.readdir('newdirectory',(err,files)=>{
//     if (err) throw err 
//     console.log("the files in directory are :",files)
// })

// RENAMING A DIRECTORY

// fs.rename('newdirectory','lastdir',(err)=>{
//     if (err) throw err
//     console.log("renamed")
// })

// DELETING A DIRECTORY
// fs.rmdir('lastdir',{recursive:true},(err)=>{
//     if (err) throw err
//     console.log("deleted")
// })

// CHECK IF A DIRECTORY EXSIST
// fs.access('newdirectory',fs.constants.F_OK,(err)=>{
//     if (err) throw err
//     else{
//         console.log("the directory esist")
//     }
// })

// fs.constants.F_OK it checks whether the dir is present or not but it doesnt check whether it is readble or writable or not


// if any changes are made :
// fs.watch('newDirectory', (eventType, filename) => {
//     console.log(`Event: ${eventType}`);
//     if (filename) {
//       console.log(`Filename: ${filename}`);
//     }
//   });
  