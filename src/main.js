// 
// minion viewer (learn ui prototyping)
// xac@ucla.edu
// 
var MV = MV || {}

//
//  on page ready
//
$(document).ready(() => {
    // load data
    YAML.load("data/minions.yml", function(data){
        MV.initUI(data)
    })
})

//
//  initialize ui
//
MV.initUI = (data) => {
    // load minion data as thumbnails into sidebar
    for(m of data.minions) {
        let imgMinion = $('<img>')
        imgMinion.attr('src', m.url)
        imgMinion.attr('alt', m.name)
        imgMinion.addClass('thumbnail')

        // add a click event handler to each thumbnail
        imgMinion.click(function(e){
            $('#imgView').attr('src', $(e.target).attr('src'))
            $('#imgView').attr('alt', $(e.target).attr('alt'))
            $('#divInfo').html("This is " + $(e.target).attr('alt'))
        })

        let liMinion = $('<li>')
        liMinion.addClass('thumbnail')
        liMinion.append(imgMinion)
        $('#ulSidebar').append(liMinion)

        // by default show the first minion
        if($('#imgView').attr('src') == "") {
            imgMinion.click()
        }
    }
}   