//document.querySelector('.tooltip').style
    //document.querySelector('.portfolio').style.backgroundColor = 'black'
    //document.querySelector('.white-div')
    //document.querySelector('.name').style
    //document.querySelector('.title')


document.querySelector('.portfolio').style.backgroundColor = 'white'
document.querySelector('.mode-box').addEventListener('mouseover', function(){
    document.querySelector('.tooltip').style.display = 'block'
    setTimeout(function(){
        document.querySelector('.tooltip').style.display = 'none'
    }, 1500)
})
document.querySelector('.mode').addEventListener('mouseover', function(){
    document.querySelector('.tooltip').style.display = 'block'
    setTimeout(function(){
        document.querySelector('.tooltip').style.display = 'none'
    }, 1500)
})

document.querySelector('.mode-box').addEventListener("click", function(){
    if (document.querySelector('.portfolio').style.backgroundColor == 'white'){
        document.querySelector('.portfolio').style.backgroundColor = 'black'
        document.querySelector('.white-div').style.backgroundColor = 'black'
        document.querySelector('.grey-div').style.backgroundColor = 'rgb(27, 27, 27' 
        document.querySelector('.name').style.color = 'white'
        document.querySelectorAll('.section p').forEach(function(item){
            item.style.color = 'rgb(233, 232, 232)'
        })
        document.querySelectorAll('h1').forEach(function(item){
            item.style.color = 'rgb(246, 243, 243)'
        })
        document.querySelectorAll('.subheading').forEach(function(item){
            item.style.color = 'rgb(233, 232, 232)'
        })
        document.querySelector('.tooltip').textContent = 'Light mode?'
        document.querySelector('.mode').style.color = 'white'
        document.querySelector('.mode').textContent = 'Light'

    }else
    if( document.querySelector('.portfolio').style.backgroundColor == 'black' ){
        document.querySelector('.portfolio').style.backgroundColor = 'white'
        document.querySelector('.white-div').style.backgroundColor = 'white'
        document.querySelector('.grey-div').style.backgroundColor = 'rgb(204, 204, 204)'
        document.querySelector('.name').style.color = 'black' 
        
        document.querySelectorAll('.section p').forEach(function(item){
            item.style.color = 'rgb(27, 27, 27)'
        })
        document.querySelectorAll('h1').forEach(function(item){
            item.style.color = 'rgb(112, 110, 110)'
        })
        document.querySelectorAll('.subheading').forEach(function(item){
            item.style.color = 'rgb(27, 27, 27)'
        })
        document.querySelector('.tooltip').textContent = 'Dark mode?'
        document.querySelector('.mode').style.color = 'black'
        document.querySelector('.mode').textContent = 'Dark'
    }
});