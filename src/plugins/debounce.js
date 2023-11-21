export function debounce(callback){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(function(){
            callback.apply(this)
            console.log('debounce')
        },2000)
    }
}