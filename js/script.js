let turn='O'
let arry=['','','','','X','','','','']

let placement=(arr)=>{
    let=template=''
    

    arr.map((my,len)=>{
        template=template+`
            <button class="col-4 btn btn-light py-3" id="btn-${len}" style="font-size: xx-large;">${my}</button>
            `
    })
    


    document.querySelector('#playground').innerHTML=template
    
}

document.addEventListener('click', (e)=>{
    
    let cell=e.target.id.split('-')
    if(cell[0]=='btn'){
        console.log(cell[1])
        if(turn==='O'){
            if(e.target.textContent==''){   
                arry[cell[1]]=turn          
                placement(arry)
                turn='X'
                
                // if(cell[1]==0){
                //     if(arry[2] === ''){
                //         arry[2]=turn  
                //         placement(arry)
                //         turn='X'                      
                //     }                                   
                // }
                
            }

        }
        else if(turn==='X'){
            if(e.target.textContent==''){   
                arry[cell[1]]=turn          
                placement(arry)
                turn='O'
                
                // if(cell[1]==0){
                //     if(arry[2] === ''){
                //         arry[2]=turn  
                //         placement(arry)
                //         turn='X'                      
                //     }                                   
                // }
                
            }
        }
    }
})

placement(arry)





