$(document).ready( function(){
    Blog.initialize()
})

Blog = {
    initialize: function(){
        var postView = new PostView
        postView.bindEventListeners()
    }
}

function PostView(){
}

PostView.prototype = {
    bindEventListeners: function(){
        $('.deena').on( 'click', this.displayDeenaPosts )
        $('.jenn').on( 'click', this.displayJennPosts )
        $('.rachel').on( 'click', this.displayRachelPosts )
    },
    displayDeenaPosts: function(){
        event.preventDefault()
        console.log('deena')
    },
    displayJennPosts: function(){
        event.preventDefault()
        console.log('jenn')
    },
    displayRachelPosts: function(){
        event.preventDefault()
        console.log('rachel')
    }
}
