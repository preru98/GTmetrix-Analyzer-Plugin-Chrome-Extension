document.addEventListener('DOMContentLoaded', function(){
    let analyzeButton = document.getElementById('analyze')
    analyzeButton.addEventListener('click', function(){
        chrome.tabs.query({'active': true, 'currentWindow': true}, function(tab){
            console.log(tab)
            let d=document
            
            let new_form=d.createElement('form')
            new_form.action='http://gtmetrix.com/analyze.html?bm'
            new_form.method='post'

            let new_input=d.createElement('input')
            new_input.type='hidden'
            new_input.name='url'
            console.log(tab[0].url)
            new_input.value=tab[0].url

            new_form.appendChild(new_input)
            d.body.appendChild(new_form)

            new_form.submit()
        })
    })
})